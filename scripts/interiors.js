import { getInteriors, setInteriors } from "./database.js"

const carInteriors = getInteriors();

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "interiors")
            setInteriors(parseInt(event.target.value))
    }
)

export const interiors = () => {
    let html = "<ul>"

    const listItemsArray = carInteriors.map(
        (carInteriors) => {
            return `<li>
                <input type="radio" name="interiors" value="${carInteriors.id}" /> ${carInteriors.interior}
            <li>`
        }
    )
    html += listItemsArray.join("")


    html += "<ul>"
    return html;
}