import { getCustomCars } from "./database.js"

const buildOrderListItem = (customCar) => {
    return `<li>
        Order #${customCar.id} was placed on ${customCar.timestamp}
    </li>`
}

export const customCars = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const customCars = getCustomCars()

    let html = "<ul>"

    const listItems = customCars.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}