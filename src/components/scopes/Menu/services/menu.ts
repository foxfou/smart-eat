type MealPlan = {
    days: Day[]
}

type Day = {
    day: number
    meals: Meal[]
}

type Meal = {
    name: string
    kcal: number
    products: Product[] | []
}

type Product = {
    name: string
    amount?: string
    note?: string
}