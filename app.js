import { copyValueTo } from "./utils.js";

const input1 = document.getElementById('input-1');
const input2 = document.getElementById('input-2');
const input3 = document.getElementById('input-3');
const input4 = document.getElementById('input-4');
const input5 = document.getElementById('input-5');
const input6 = document.getElementById('input-6');
const input7 = document.getElementById('input-7');
const input8 = document.getElementById('input-8');
const input9 = document.getElementById('input-9');
const input10 = document.getElementById('input-10');
const input11 = document.getElementById('input-11');
const submitButton = document.getElementById('submit-button');

const span1 = document.getElementById('adjective-1')
const span2 = document.getElementById('body-part-1');
const span3 = document.getElementById('adjective-2');
const span4 = document.getElementById('adjective-3');
const span5 = document.getElementById('place-1');
const span6 = document.getElementById('body-part-2');
const span7 = document.getElementById('verb-1');
const span8 = document.getElementById('verb-2');
const span9 = document.getElementById('verb-3');
const span10 = document.getElementById('body-part-3');
const span11 = document.getElementById('adjective-4');

submitButton.addEventListener('click', () => {
    copyValueTo(input1, span1)
    copyValueTo(input2, span2)
    copyValueTo(input3, span3)
    copyValueTo(input4, span4)
    copyValueTo(input5, span5)
    copyValueTo(input6, span6)
    copyValueTo(input7, span7)
    copyValueTo(input8, span8)
    copyValueTo(input9, span9)
    copyValueTo(input10, span10)
    copyValueTo(input11, span11)
    document.getElementById('mad-lib-section').style.display = 'block';
    document.getElementById('input-section').style.display = 'none';
    document.getElementById('instructions').style.display = 'none';
    document.getElementById('image-section').style.visibility = 'visible';
})