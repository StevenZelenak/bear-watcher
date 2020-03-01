import bearForm from "../../components/bearForm.js";

const bearDen = [];

const bearDenSetter = (bearName, ImageUrl) => {
    bearDen.push({
        name: bearName,
        imageUrl: ImageUrl
    })
}

const bearDenGetter = () => {
    return bearDen;
}

export default {
    bearDenSetter,
    bearDenGetter,
}