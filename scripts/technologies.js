import { getTechnologies } from "./database.js"

const technologies = getTechnologies();

document.addEventListener(
    "change",
    (event) => {}
)

export const technologies = () => {
    let html = "<ul>"

    const listItemsArray = technologies.map(
        (technologies) => {
            return `<li>
                <input type="radio" name="technologies" value="${technologies.id}" /> ${technologies.technologies}
            <li>`
        }
    )
    html += listItemsArray.join("")

    html += "<ul>"
    return html;
}