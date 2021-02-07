function printSquare(size) {
    for (i = 0; i < size; i++) {
        let row = "";
        for (countColumn = 0; countColumn < size; countColumn++) {
            row = row + "*";
        }
        console.log(row);
    }
}

printSquare(5);