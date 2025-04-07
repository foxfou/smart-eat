type ShoppingList = {
    location: string
    currency: {
        name: string
        symbol: string
    }
    items: ShoppingListItem[]
    total_cost: number
}

type ShoppingListItem = {
    product: string
    amount: string
    pricePerKg?: number
    pricePerItem?: number
    total: number
}
