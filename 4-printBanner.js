function printBanner(string) {
    let border = ""
    let newString = "* " + string + " *"
    for (let col = 1; col <= newString.length; col++) {
        border += "*"
    }
    console.log(border)
    console.log(newString)
    console.log(border)
}

printBanner("Welcome to DigitalCrafts");