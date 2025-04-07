'use client'
import { useEffect, useState } from 'react'

export default function MenuPage() {
    const [menu, setMenu] = useState<any | MealPlan>(null)

    useEffect(() => {
        fetch('/menu.json')
            .then((res) => res.json())
            .then(setMenu)
    }, [])

    if (!menu) return <div className="p-6">Загрузка...</div>

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Меню на неделю</h1>
            {menu.days.map((day: Day) => (
                <div key={day.day} className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">{day.day} день</h2>
                    {day.meals.map((meal: Meal, i: number) => (
                        <div key={i} className="ml-4 mb-6">
                            <div className="font-bold mb-2">🍽️ {meal.name} – {meal.kcal} ккал</div>
                            {meal.products?.map((product: Product, i) => (
                                <div className="ml-10 mb-1" key={i}>
                                    {product.name} - {product.amount} {product.note}
                                </div>
                            ))}
                        </div>
                        
                    ))}
                </div>
            ))}
        </div>
    )
}