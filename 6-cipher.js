function cipher(text, offset) {
    const alphabet = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let result = ""
    for (let char = 0; char < text.length; char++) {
        currentLetter = text[char].toLowerCase();
        const currentIndex = alphabet.indexOf(currentLetter)
        const newIndex = (currentIndex + offset) % 26;
        const newLetter = alphabet[newIndex];
        console.log(newLetter);
        if (currentIndex === -1) {
            result += currentLetter;
        
        } else {
            result += newLetter;
        }
    }
    console.log(result);
}

cipher('Genius without education is like silver in the mine', 13);