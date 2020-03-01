import utils from "../helpers/utils.js";
import bearData from "../helpers/data/bearData.js";


//print the bear cards in the river
const printRiverBears = () => {

    const bearArr = bearData.bearDenGetter();;
    let domString = '';

    bearArr.forEach(bear => {
        domString += '<div class="col-sm-12 col-md-6 col-lg-4 my-3">'
        domString += '<div class="card-body border rounded background bg-dark">'
        domString += `<img src=${bear.imageUrl} class="card-img-top" alt="...">`
        domString += `<h5 class="card-title text-center text-light mt-4">${bear.name}</h5>`
        domString += '</div>'
        domString += '</div>'
    });

    utils.printToDom('river', domString);

}

export default {
    printRiverBears,
}