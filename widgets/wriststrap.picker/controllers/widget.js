var args = arguments[0] || {};

// Required
var data = args.data || [];
var onDone = args.onDone;

var row, rowData, column, columns = [],
    changeData;

// Build picker columns and rows
for (var i = 0; i < data.length; i++) {
    rowData = data[i];
    column = Ti.UI.createPickerColumn();

    for (var j = 0; j < rowData.length; j++) {
        column.addRow(Ti.UI.createPickerRow(rowData[j]));
    }

    columns.push(column);
}

$.picker.add(columns);

function showPicker() {
    $.widget.animate(Ti.UI.createAnimation({
        bottom: 0,
        duration: 300
    }));
}
$.widget.showPicker = showPicker;

// Done button onClick function
function done() {
    $.widget.animate(Ti.UI.createAnimation({
        bottom: '-265dp',
        duration: 300
    }));

    onDone(selectedValues());
}

// Get the current picker values
function selectedValues() {
    var columns, row, data = [];
    columns = $.picker.getColumns();

    for (var i = 0; i < columns.length; i++) {
        row = $.picker.getSelectedRow(i);

        // Return the row id else if not exist return the title
        data.push(row.id ? row.id : row.title);
    }

    return data;
}