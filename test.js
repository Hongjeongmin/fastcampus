function create2DArray(rows, columns) {
    var arr = new Array(rows);
    for (var i = 0; i < rows; i++) {
        arr[i] = new Array(columns);
        for(var j =0; j<columns; j++){
            arr[i][j] = [];
        }
    }
    return arr;
}

// arr[5][2]
var arr = create2DArray(10, 10);

