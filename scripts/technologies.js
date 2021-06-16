import { getTechnologies, setTechnologies } from "./database.js"

const carTechnologies = getTechnologies();

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "technologies")
            setTechnologies(parseInt(event.target.value))
    }
)

export const technologies = () => {
    let html = "<ul>"

    const listItemsArray = carTechnologies.map(
        (carTechnologies) => {
            return `<li>
                <input type="radio" name="technologies" value="${carTechnologies.id}" /> ${carTechnologies.technology}
            <li>`
        }
    )
    html += listItemsArray.join("")

    html += "<ul>"
    return html;
}