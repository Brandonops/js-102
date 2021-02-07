function printBox(width, height) {
    for (let row = 1; row <= height; row++) { // loop rows
      let rowText = ''; // set up placeholder row string
      for (let col = 1; col <= width; col++) { // loop column inside row
        if (row === 1 || row === height) {
          // first and last rows
          rowText = rowText + '🦠';
        } else {
          //inside rows
          if (col === 1 || col === width) {
            rowText = rowText + '🦠';
          } else {
            rowText = rowText + '  '
          }
        }
      }
      console.log(rowText); // print the current row
    } // then start the next row
  }
  printBox(6, 4)