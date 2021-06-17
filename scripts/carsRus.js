import { colors } from "./colors.js"
import { interiors } from "./interiors.js"
import { technologies } from "./technologies.js"
import { wheels } from "./wheels.js"
import { addOrder } from "./database.js"
import { customCars } from "./customCars.js"

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addOrder()
        }
    }
)

export const carsRus = () => {
    return `
    <h1> Cars R Us! </h2>

    <article class="choices">
        <section class="choices__colors options">
            <h2>Colors</h2>
            ${colors()}
        </section>
        <section class="choices__interiors options">
            <h2>Interiors</h2>
            ${interiors()}
        </section>
        <section class="choices__technologies options">
            <h2>Technologies</h2>
            ${technologies()}
        </section>
        <section class="choices__wheels options">
            <h2>Wheels</h2>
            ${wheels()}
        </section>
    </article>

        <article>
            <button id="orderButton">Create Custom Car</button>
        </article>

        <article class="customCars">
            <h2>Custom Car Orders</h2>
            ${customCars()}
        </article>
    `
}