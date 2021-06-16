import { getColors, setColors } from "./database.js"

const carColors = getColors();

document.addEventListener(
    "change",
    (event) => {
        // this will be the custom event creation 
        if (event.target.name === "colors") {
            setColors(parseInt(event.target.value))
        }
    }
)

export const colors = () => {
    let html = "<ul>"

    const listItemsArray = carColors.map(
        (carColors) => {
            return `<li>
                <input type="radio" name="colors" value="${carColors.id}" /> ${carColors.color}
            <li>`
        }
    )
    html += listItemsArray.join("")

    html += "<ul>"
    return html;
}