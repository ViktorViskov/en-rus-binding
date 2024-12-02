const inputText = document.querySelector('#inputText');
const message = document.querySelector('#message');
const keyBindings = {
    "A": "Ф",
    "B": "И",
    "C": "С",
    "D": "В",
    "E": "У",
    "F": "А",
    "G": "П",
    "H": "Р",
    "I": "Ш",
    "J": "О",
    "K": "Л",
    "L": "Д",
    "M": "Ь",
    "N": "Т",
    "O": "Щ",
    "P": "З",
    "Q": "Й",
    "R": "К",
    "S": "Ы",
    "T": "Е",
    "U": "Г",
    "V": "М",
    "W": "Ц",
    "X": "Ч",
    "Y": "Н",
    "Z": "Я",
    "<": "Б",
    ">": "Ю",
    '"': "Э",
    "a": "ф",
    "b": "и",
    "c": "с",
    "d": "в",
    "e": "у",
    "f": "а",
    "g": "п",
    "h": "р",
    "i": "ш",
    "j": "о",
    "k": "л",
    "l": "д",
    "m": "ь",
    "n": "т",
    "o": "щ",
    "p": "з",
    "q": "й",
    "r": "к",
    "s": "ы",
    "t": "е",
    "u": "г",
    "v": "м",
    "w": "ц",
    "x": "ч",
    "y": "н",
    "z": "я",
    ",": "б",
    ".": "ю",
    "'": "э",
    " ": " ",
    "1": "1",
    "2": "2",
    "3": "3",
    "4": "4",
    "5": "5",
    "6": "6",
    "7": "7",
    "8": "8",
    "9": "9",
    "0": "0"
}

async function showMessage(text) {
    message.textContent = text;
    await new Promise(resolve => setTimeout(resolve, 700));
    message.textContent = '';
}

document.addEventListener('keydown', function (event) {
    const key = event.key;

    if (event.ctrlKey == true) {
        return
    }
    
    if (key === 'Escape') {
        inputText.textContent = '';
        showMessage('cleared ');
        return
    }
    
    if (key === 'Backspace') {
        inputText.textContent = inputText.textContent.slice(0, -1);
        return
    }
    
    if (key === 'Enter') {
        navigator.clipboard.writeText(inputText.textContent);
        showMessage(`'${inputText.textContent}' copied to clipboard`);
        return
    }
    
    const keyBinding = keyBindings[key];
    if (!keyBinding) {
        return
    }

    inputText.textContent += keyBinding;
});