/*
Thanks to http://stackoverflow.com/questions/13911536/auto-complete-textfield-in-titanium-ios-android
for pointing me in the right direction
 */
/* @author: FCM  
 * @date: 2014-09-20
 * add new way to retrieve data for the widget
 *  dataSourceType: 'remote' - standard mode via http request defined in dataSource
 *                  'local'  - sqlite mode. Retrieve data from database alias defined in dbName (new param) and SQL in dataSource
 */
/* @author: FCM  
 * @date: 2014-10-20
 *  autoclose on blur
 *  autoclose on blur
 *  add event managment. You can add event and manage it in this way:
 *  Into yourView.xml add on widget tag this property
 *    onBlur="myWidgetBlur"
 *  Into yourView.js add simply 
 *    function myWidgetBlur() {....} 
 */

var animation = require('alloy/animation');
var args = arguments[0] || {};
var tbclass = args.tbclass || '';
var hintText = args.hintText || '';
var dataSource = args.dataSource || undefined;
var dataSourceType = args.dataSourceType || 'remote';
var dbName = args.dbName || '';
var tableHeight = args.tableHeight || '200dp';
var suggestionData = [];
var suggestAfter = args.suggestAfter || 0;

if (tbclass !== '') {
  $.resetClass($.autoCompleteTF, tbclass);
}

if (hintText !== '') {
  $.autoCompleteTF.hintText = hintText;
}

if (dataSource !== undefined) {
    
  switch (dataSourceType) {
    case 'remote':
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
      break;
      
    case 'local': 
      suggestionData = retrieveSuggestions(dbName, dataSource);
      break;

    case 'localid': 
      suggestionData = retrieveSuggestionsId(dbName, dataSource);
      break;
  }
}


/* ************************************************************* *
 * *  FUNCTION
 */
function showSuggestions(e) {
  if ($.autoCompleteTF.value.length >= suggestAfter && $.suggestions.opacity == 0) {
    $.suggestions.height = tableHeight;
    animation.fadeIn($.suggestions, 500, function() {
      $.suggestions.opacity = 1;
    });
  } else if ($.autoCompleteTF.value.length <= suggestAfter && $.suggestions.opacity == 1) {
    animation.fadeOut($.suggestions, 500, function() {
      $.suggestions.height = '0';
      $.suggestions.opacity = 0;
    });
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
    Ti.API.info('selectSuggestions');
    Ti.API.info(e.row.suggestion);
    $.autoCompleteTF.value = e.row.suggestion;
    $.autoCompleteTF.blur();
}


function closeSuggestions(e) {
  animation.fadeOut($.suggestions, 500, function() {
    $.suggestions.height = '0';
    $.suggestions.opacity = 0;
  });
}


exports.value = function getValue() {
  return $.autoCompleteTF.value;
};

exports.value = function setValue(val) {
  $.autoCompleteTF.value= val;
};

exports.data = function setData(data) {
  suggestionData = data;
};

exports.hintText = function setHintText(ht) {
  $.autoCompleteTF.hintText= ht;
};

//Returns the array which contains a match with the pattern
function patternMatch(arrayToSearch, pattern) {
  // multiple search
  var eles = pattern.split(' ');  
  
  arrayToSearch.sort();
  var tempArray = [];
  
  if (eles.length >1) {
    var searchLen = pattern.length;
    arrayToSearch.sort();
    var tempArray = [];
    for (var index = 0, len = arrayToSearch.length; index < len; index++) {
        if (arrayToSearch[index].substring(0, searchLen).toUpperCase() === pattern.toUpperCase()) {
            tempArray.push(arrayToSearch[index]);
        }
    }
  } else {
    var searchLen = pattern.length;
    arrayToSearch.sort();
    var tempArray = [];
    for (var index = 0, len = arrayToSearch.length; index < len; index++) {
        if (arrayToSearch[index].substring(0, searchLen).toUpperCase() === pattern.toUpperCase()) {
            tempArray.push(arrayToSearch[index]);
        }
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

// retrieve suggestions from sqlite db table
function retrieveSuggestions(dbName, dataSource) {
  var dbSuggestions= new Array(); 
  var db = Titanium.Database.open(dbName);
  var result = db.execute(dataSource);

  while (result.isValidRow()) {
    dbSuggestions.push(result.field(1));
    result.next();
  }
  result.close();
  db.close();

  Ti.API.info('dbName:'+dbName);
  Ti.API.info('dataSource:'+dataSource);

  return dbSuggestions;    
}

function retrieveSuggestionsId(dbName, dataSource) {
  var dbSuggestions= new Array(); 
  var db = Titanium.Database.open(dbName);
  var result = db.execute(dataSource);

  while (result.isValidRow()) {
    dbSuggestions.push({
      id: result.filed(0),
      desc: result.field(1)
    });
    result.next();
  }
  result.close();
  db.close();

  return dbSuggestions;    
}

// Overwrite Backbone methods, as used in the generated code by Alloy:
// doClick ? $.__views.myWidget.on("click", doClick) : __defers["$.__views.myWidget!click!doClick"] = !0;
exports.on = $.autoCompleteTF.addEventListener;
exports.off = $.autoCompleteTF.removeEventListener;
 
// Overwrite backbone aliases:
exports.bind = $.autoCompleteTF.addEventListener;
exports.unbind = $.autoCompleteTF.removeEventListener;
 
// Support Titanium methods
exports.addEventListener = $.autoCompleteTF.addEventListener; 
exports.removeEventListener = $.autoCompleteTF.removeEventListener;
 
// Overwrite Backbone trigger and Titanium fireEvent methods for convenience
exports.trigger = $.autoCompleteTF.fireEvent;
exports.fireEvent = $.autoCompleteTF.fireEvent;

