// some common shared function
// get value an html element
function getValueForElement(id) {
    const getElement = document.getElementById(id).innerText;
    const convertedValue=parseInt(getElement);
    return convertedValue;
}
// set inner text
function setInnerText(id,value) {
    const getElement=document.getElementById(id).innerText=value;
}
// add class list
function addClassList(id,value) {
    const getElement=document.getElementById(id);
    getElement.classList.add(value);
}
// remove class list
function removeClassList(id,value) {
    const getElement=document.getElementById(id);
    getElement.classList.remove(value);
}
