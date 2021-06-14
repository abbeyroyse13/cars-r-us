import { getInteriors } from "./database.js"

const interiors = getInteriors();

document.addEventListener(
    "change",
    (event) => {}
)

export const interiors = () => {
    let html = "<ul>"

    const listItemsArray = interiors.map(
        (interiors) => {
            return `<li>
                <input type="radio" name="interiors" value="${interiors.id}" /> ${interiors.interiors}
            <li>`
        }
    )
    html += listItemsArray.join("")


    html += "<ul>"
    return html;
}