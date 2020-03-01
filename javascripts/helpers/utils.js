const printToDom = (divId, printToText) => {
    let selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}

export default {
    printToDom,
}