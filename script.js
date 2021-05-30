const error = document.querySelector('.error');
const menu = document.querySelector('.wrapper');
const instruction = document.querySelector('.instruction-container');
const shadow1 = document.querySelector('.shadow1');
const shadow2 = document.querySelector('.shadow2');
// mav buttons 
const info = document.querySelector('.info');
const addBtn = document.querySelector('.add-button');
const deleteBtn = document.querySelector('.delete-button');
// menu buttons 
const cleanBtn = document.querySelector('.button-clean');
const saveBtn = document.querySelector('.button-save');
const closeBtn = document.querySelector('.button-close');
// inputs 
const category = document.querySelector('#choice-input');
const noteText = document.querySelector('.inputText');
//notes
let noteList = document.querySelector('.note-container');
const note = document.querySelector('.note');
let textNote = document.querySelector('.text-area');

// function for showing menu and instruction
const show = (button, shadow) => {

    !(button.style.visibility === 'visible') ? button.style.visibility = 'visible' : button.style.visibility = 'hidden';

    !(shadow.style.visibility === 'visible') ? shadow.style.visibility = 'visible' : shadow.style.visibility = 'hidden';

    shadow.classList.toggle('show-menu-animation')
}

// events for show menu and instruction
window.addEventListener('click', e => {
    if(e.target === shadow2) {
        show(instruction, shadow2);
    }
    else if(e.target === shadow1) {
        clearMenu();
        show(menu, shadow1);
    }
});
info.addEventListener('click', () => {
    show(instruction, shadow2);
});
addBtn.addEventListener('click', () => {
    show(menu, shadow1); 
});

// conditions for menu 
const checkingErr = (in1, in2) => {
    const inTable = [category, noteText];
        if(in1.value == 'category' && in2.value == '') {
            showError(in1, '');
            showError(in2, 'Fill in all fields !');
        }
        else if(in1.value == 'category') {
            removeErrors(error, inTable);
            showError(in1, 'Choice category !');
        }
        else if(in2.value == '') {
            removeErrors(error, inTable);
            showError(in2, 'Fill in text field !');
        }
        else {
            addNote();
            removeErrors(error, inTable);
            clearMenu();
            show(menu, shadow1); 
        }
}

// clear menu 
const clearMenu = () => {
    const inTable = [category, noteText];
    inTable[0].value = 'category';
    inTable[1].value = '';
    removeErrors(error, inTable);
}

// function for error
const removeErrors = (err, inputArr) => {
    inputArr.forEach(element => {
        element.style.border = '';
        element.style.background = '';
    });
    err.classList.remove('show-error');
}

const showError = (input, errorText) => {
    input.style.border = '1px solid red';
    input.style.background = 'rgba(255, 0, 0, .1)';
    error.classList.add('show-error');
    error.textContent = errorText;
}

// adding Notes
const addNote = () => {
    let listElem = document.createElement("LI");

    let h2 = document.createElement("H2");
    let btn = document.createElement("BUTTON");
    let textArea = document.createElement('textarea');
    let h2Text = document.createTextNode(category.value);
    let btnText = document.createTextNode('x');
    let textAreaText = document.createTextNode(noteText.value);

    h2.appendChild(h2Text);
    btn.appendChild(btnText);
    textArea.appendChild(textAreaText);

    listElem.appendChild(h2);
    listElem.appendChild(btn);
    listElem.appendChild(textArea);

    typeNote(listElem);
    
    noteList.appendChild(listElem);

    btn.classList.add('button-x');
    listElem.classList.add('note');

    // delete Notes by x 
    const btnX = document.querySelectorAll('.button-x');
    function deleteNote() {
        const parent = this.parentElement;
        parent.remove();
    }
    btnX.forEach(element => {
        element.addEventListener('click', deleteNote);
    });
}

// background colors for notes
const typeNote = (element) => {
    if(category.value === 'work') {
        element.classList.add('color1');
    }
    else if(category.value === 'shopping') {
        element.classList.add('color2');
    }
    else {
        element.classList.add('color3');
    }
}

// events for add note
saveBtn.addEventListener('click', () => {
    checkingErr(category, noteText);
});

// close menu
closeBtn.addEventListener('click', () => {
    clearMenu();
    show(menu, shadow1);
});

// clear textarea
cleanBtn.addEventListener('click', () => {
    noteText.value = '';
});

// delete notes
const deleteAll = () => {
    const elistElements = document.querySelectorAll('.note');
    elistElements.forEach(el => {
        el.remove();
    });
}
deleteBtn.addEventListener('click', deleteAll)

// przesuwanie elementów 

