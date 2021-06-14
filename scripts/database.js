const database = {
    colors: [
        { id: 1, color: "Silver", price: 207.00 },
        { id: 2, color: "Midnight Blue", price: 100.00 },
        { id: 3, color: "Firebrick Red", price: 315.00 },
        { id: 4, color: "Spring Green", price: 113.00 }
    ],
    interiors: [
        { id: 1, interior: "Beige Fabric", price: 800.00 },
        { id: 2, interior: "Charcoal Fabric", price: 1000.00 },
        { id: 3, interior: "White Leather", price: 3800.00 },
        { id: 4, interior: "Black Leather", price: 2781.00 }
    ],
    technologies: [
        { id: 1, technology: "Basic Package", price: 10000.00},
        { id: 2, technology: "Navigation Package", price: 30000.00},
        { id: 3, technology: "Visibility Package", price: 50000.00},
        { id: 4, technology: "Ultra Package", price: 70000.00}
    ],
    wheels: [
        { id: 1, wheel: "17-inch Pair Radial", price: 108.00 },
        { id: 2, wheel: "17-inch Pair Radial Black", price: 130.00 },
        { id: 3, wheel: "18-inch Pair Radial Spoke Silver", price: 208.00 },
        { id: 4, wheel: "18-inch Pair Radial Spoke Black", price: 230.00 }
    ],
    customCars: [
        {
            id: 1,
            colorId: 2,
            interiorId: 3,
            technologyId: 4,
            wheelId: 3,
            timestamp: 0 //changing this later
        }
    ]
}

export const getColors = () => {
    return database.colors.map(color => ({...color}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getCustomCars = () => {
    return database.customCars.map(customCar => ({...customCar}))
}