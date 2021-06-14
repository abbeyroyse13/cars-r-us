import { getColors } from "./database.js"

const colors = getColors();

document.addEventListener(
    "change",
    (event) => {}
)

export const colors = () => {
    let html = "<ul>"

    const listItemsArray = colors.map(
        (colors) => {
            return `<li>
                <input type="radio" name="colors" value="${colors.id}" /> ${colors.colors}
            <li>`
        }
    )
    html += listItemsArray.join("")

    html += "<ul>"
    return html;
}