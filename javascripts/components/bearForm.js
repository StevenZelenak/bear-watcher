import utils from "../helpers/utils.js";

//prints the form 
const buildBearForm = () => {

    let domString = '';

    domString += '<form id="formBackground">'
    domString += '<div class="form-group">'
    domString += '<label for="bearName">Bear Name:</label>'
    domString += '<input type="text" class="form-control" id="bearName"  placeholder="Yogi">'
    domString += '</div>'
    domString += '<div class="form-group">'
    domString += '<label for="exampleInputPassword1">Image Url:</label>'
    domString += '<input type="text" class="form-control" id="imageUrl" placeholder="Url">'
    domString += '</div>'
    domString += '<button type="text" id="bearButton" class="btn btn-primary">Add Bear</button>'
    domString += '</form>'

    utils.printToDom('addBearForm', domString);

    document.getElementById("bearButton").addEventListener('click', outPutBearInfo)
}

//when the add bear button is clicked it pulls info from the form inputs then reprints the form
const outPutBearInfo = (e) => {
    e.preventDefault();
    let bearName = document.getElementById("bearName").value;
    let ImageUrl = document.getElementById("imageUrl").value;

    console.log(bearName, ImageUrl);
}

export default {
    buildBearForm,
}