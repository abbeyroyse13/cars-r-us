import { getWheels } from "./database.js"

const wheels = getWheels();

document.addEventListener(
    "change",
    (event) => {}
)

export const wheels = () => {
    let html = "<ul>"

    const listItemsArray = wheels.map(
        (wheels) => {
            return `<li>
                <input type="radio" name="wheels" value="${wheels.id}" /> ${wheels.wheels}
            <li>`
        }
    )
    html += listItemsArray.join("")

    html += "<ul>"
    return html;
}