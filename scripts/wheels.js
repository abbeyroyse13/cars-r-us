import { getWheels, setWheels } from "./database.js"

const carWheels = getWheels();

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "wheels")
            setWheels(parseInt(event.target.value))
    }
)

export const wheels = () => {
    let html = "<ul>"

    const listItemsArray = carWheels.map(
        (carWheels) => {
            return `<li>
                <input type="radio" name="wheels" value="${carWheels.id}" /> ${carWheels.wheel}
            <li>`
        }
    )
    html += listItemsArray.join("")

    html += "<ul>"
    return html;
}