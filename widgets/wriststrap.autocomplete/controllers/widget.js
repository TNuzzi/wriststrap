/*
Thanks to http://stackoverflow.com/questions/13911536/auto-complete-textfield-in-titanium-ios-android
for pointing me in the right direction
 */

var animation = require('alloy/animation');
var args = arguments[0] || {};

// Required for widget (specify either dataSource or set 'data' in the parent controller)
var dataSource = args.dataSource || undefined;

// Data array
var suggestionData = [];
exports.data = function(data) {
    suggestionData = data;
};

// Optional
var tfclass = args.tfclass || '';
var hintText = args.hintText || '';
var tableHeight = args.tableHeight || '200dp';
var suggestAfter = args.suggestAfter || 0;

if (tfclass !== '') {
    $.resetClass($.autoCompleteTF, tfclass);
}

if (hintText !== '') {
    $.autoCompleteTF.hintText = hintText;
}

if (dataSource !== undefined) {
    // prefetch the JSON array
    setTimeout(function() {
        var url = dataSource;
        var client = Ti.Network.createHTTPClient({
            onload: function(e) {
                suggestionData = JSON.parse(this.responseText);
            },
            timeout: 5000 // in milliseconds
        });
        // Prepare the connection.
        client.open("GET", url);

        // Send the request.
        client.send();
    }, 50);
}

function showSuggestions(e) {
    if ($.autoCompleteTF.value.length >= suggestAfter && $.suggestions.opacity == 0) {
        $.suggestions.height = tableHeight;
        animation.fadeIn($.suggestions, 500, function() {
            $.suggestions.opacity = 1;
        });
    } else if ($.autoCompleteTF.value.length <= suggestAfter && $.suggestions.opacity == 1) {
        hideSuggestions();
    }

    if ($.autoCompleteTF.value.length !== 0) {
        var suggestions = patternMatch(suggestionData, $.autoCompleteTF.value);
        createAutoCompleteSuggestions(suggestions);
    }

}

function selectSuggestions(e) {
    animation.fadeOut($.suggestions, 500, function() {
        $.suggestions.height = '0';
        $.suggestions.opacity = 0;
    });
    $.autoCompleteTF.value = e.row.suggestion;
    $.autoCompleteTF.blur();
}

//Returns the array which contains a match with the pattern
function patternMatch(arrayToSearch, pattern) {
    var searchLen = pattern.length;
    arrayToSearch.sort();
    var tempArray = [];
    for (var index = 0, len = arrayToSearch.length; index < len; index++) {
        if (arrayToSearch[index].substring(0, searchLen).toUpperCase() === pattern.toUpperCase()) {
            tempArray.push(arrayToSearch[index]);
        }
    }
    return tempArray;
}

//setting the tableview values
function createAutoCompleteSuggestions(searchResults) {
    $.suggestionHeader.text = searchResults.length + ' results';
    var tableData = [];
    for (var index = 0, len = searchResults.length; index < len; index++) {
        var row = Widget.createController('suggestionsRow', {
            title: searchResults[index]
        });
        tableData.push(row.getView());
    }
    $.suggestionsTable.setData(tableData);
}

function hideSuggestions() {
    animation.fadeOut($.suggestions, 500, function() {
            $.suggestions.height = '0';
            $.suggestions.opacity = 0;
        });
}