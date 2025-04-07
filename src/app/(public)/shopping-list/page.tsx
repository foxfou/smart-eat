'use client'
import { useEffect, useState } from 'react'

export default function ShoppingListPage() {
    const [list, setList] = useState<ShoppingList | null>(null)

    useEffect(() => {
        fetch('/shopping-list.json')
            .then((res) => res.json())
            .then(setList)
    }, [])

    if (!list) return <div className="p-6">Загрузка...</div>

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Список покупок</h1>
            <ul className="list-disc list-inside">
                {list.items.map((item: ShoppingListItem, i: number) => (
                    <li key={i}>{item.product} – {item.amount} ({item.total} {list.currency.symbol})</li>
                ))}
            </ul>
            <div className="mt-4 text-sm text-gray-500">
                Локация: {list.location}<br />
                Валюта: {list.currency.name} ({list.currency.symbol})<br />
                Всего: {list.total_cost} {list.currency.symbol}
            </div>
        </div>
    )
}