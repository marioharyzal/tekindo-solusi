const triangle = (input) => {
    let alphabets = ''

    for (let i = 0; i < input; i++) {
        let charStart = '@'
        for (let k = 0; k < input - i; k++) {
            let charIncrease = String.fromCharCode(charStart.charCodeAt(0) + 1)
            alphabets += charIncrease
            if (charIncrease == 'Z') {
                charStart = '@'
            } else {
                charStart = charIncrease
            }

        }
        alphabets += '\n'
    }
    console.log(alphabets)
}

triangle(26)