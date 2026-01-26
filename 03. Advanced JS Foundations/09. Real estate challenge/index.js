import { placeholderPropertyObj } from "./properties/placeholderPropertyObj.js"
import { propertyForSaleArr } from "./properties/propertyForSaleArr.js"

function getPropertyHtml(properties = [placeholderPropertyObj]) {
    return properties.map(element => {
        const {propertyLocation, priceGBP, comment, roomsM2, image} = element
        return `
            <section class="card">
                <img src="./images/${image}">
                <div class="card-right">
                    <h2>${propertyLocation}</h2>
                    <h3>${priceGBP}</h3>
                    <p>${comment}</p>
                    <h3>${roomsM2.reduce((acc, actual) => acc + actual, 0)} m&sup2;</h3>
                </div>
            </section> 
        `}).join(' ')
}


document.getElementById('container').innerHTML = getPropertyHtml(propertyForSaleArr)