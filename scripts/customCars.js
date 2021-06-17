import { getCustomCars } from "./database.js"
import { getColors } from "./database.js"
import { getInteriors } from "./database.js"
import { getTechnologies } from "./database.js"
import { getWheels } from "./database.js"

const buildOrderListItem = (customCar) => {
    const customColors = getColors()

    const foundColors = customColors.find(
        (color) => {
            if (color.id === customCar.colorId) {
                return true
            }
        }
    )

    const customInteriors = getInteriors()

    const foundInteriors = customInteriors.find(
        (interior) => {
            if (interior.id === customCar.interiorId) {
                return true
            }
        }
    )

    const customTechnologies = getTechnologies()

    const foundTechnologies = customTechnologies.find(
        (technology) => {
            if (technology.id === customCar.technologyId) {
                return true
            }
        }
    )

    const customWheels = getWheels()

    const foundWheels = customWheels.find(
        (wheel) => {
            if (wheel.id === customCar.wheelId) {
                return true
            }
        }
    )
    const totalCost = foundColors.price + foundInteriors.price + foundTechnologies.price + foundWheels.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<li>
        Order #${customCar.id} costs ${costString} and was placed on ${customCar.timestamp}
    </li>`
}

export const customCars = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const carOrder = getCustomCars()

    let html = "<ul>"

    const listItems = carOrder.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}