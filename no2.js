const startEnd = (start, end) => {
    const startConstan = start
    let startTempt = start
    let output = ''
    for (let i = start; i <= end; i++) {
        for (let l = start; l <= end; l++) {
            output += l
            output += ' '
        }

        for (let k = 0; k < i - startConstan; k++) {
            output += startTempt
            output += ' '
            startTempt += 1
        }
        startTempt = startConstan
        start += 1
        output += '\n'
    }

    console.log(output)
}

startEnd(2, 8)