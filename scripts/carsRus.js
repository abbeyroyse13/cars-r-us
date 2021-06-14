import { getColors } from "colors.js"
import { getInteriors } from "interiors.js"
import { getTechnologies } from "technologies.js"
import { getWheels } from "wheels.js"
import { getCustomCars } from "customCars.js"

document.addEventListener(
    "click",
    (event) => {
    }
)

export const carsRus = () => {
    return `
    <h1> Cars R Us! </h2>

    <article class="choices">
        <section class="choices__colors options">
            <h2>Colors</h2>
            ${getColors()}
        </section>
        <section class="choices__interiors options">
            <h2>Interiors</h2>
            ${getInteriors()}
        </section>
        <section class="choices__technologies options">
            <h2>Technologies</h2>
            ${getTechnologies()}
        </section>
        <section class="choices__wheels options">
            <h2>Wheels</h2>
            ${getWheels()}
        </section>
    </article>

        <article>
            <button id="orderButton">Create Custom Car</button>
        </article>

        <article class="customCars">
            <h2>Custom Car Orders</h2>
            ${getCustomCars()}
        </article>
    `
}