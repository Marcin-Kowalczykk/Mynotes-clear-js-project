const error = document.querySelector('.error');
const menu = document.querySelector('.wrapper');
// mav buttons
const addBtn = document.querySelector('.add-button');
const deleteBtn = document.querySelector('.delete-button');
// menu buttons
const saveBtn = document.querySelector('.button-save');
const closeBtn = document.querySelector('.button-close');
// inputs 
const category = document.querySelector('#choice-input');
const noteText = document.querySelector('.inputText');

// function for showing menu 
const showMenu = () => {
    !(menu.style.visibility === 'visible') ? menu.style.visibility = 'visible' : menu.style.visibility = 'hidden';

    menu.classList.toggle('show-menu-animation')
}
// events for show menu
addBtn.addEventListener('click', showMenu);
closeBtn.addEventListener('click', showMenu);

// conditions for menu (showing error)
const checkingErr = (in1, in2) => {
        if(in1.value == 'choice category') {
            showError('choice category');
            showBorder(in1);
            removeBorder(in2);
        }
        else if(in2.value == '') {
            
            showError('fill in text field');
            showBorder(in2);
            removeBorder(in1);
        }
        else {
            removeBorder(in1);
            removeBorder(in2);
            addNote(noteText);
        }
}
// error
const removeBorder = input => {
    input.style.border = '';
}
const showBorder = input => {
    input.style.border = '1px solid red';
}
const showError = errorText => {
        error.classList.add('show-error');
        error.textContent = errorText;
}


// add note 
const addNote = text => {
    console.log(text.value);
}
// events for menu buttons
saveBtn.addEventListener('click', () => {

    const inTable = [category, noteText];
    checkingErr(category, noteText);
});
