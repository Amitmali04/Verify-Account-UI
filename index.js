

const inputElement = [...document.querySelectorAll("input.code-input")];

inputElement.forEach((ele, index) => {
    ele.addEventListener('keydown', (e) => {
        if (e.keyCode === 8 && e.target.value === '')
            inputElement[Math.max(0, index - 1)].focus()
    })

    ele.addEventListener('input', (e) => {
        const [first, ...rest] = e.target.value
        e.target.value = first ?? ''


        const lastInputBox = index === inputElement.length - 1;


        const didInserContant = first != undefined
        if (didInserContant && !lastInputBox) {
            inputElement[index + 1].focus()
            inputElement[index + 1].value = rest.join('')
            inputElement[index + 1].dispatchEvent(new Event('input'))
        }
    })
})