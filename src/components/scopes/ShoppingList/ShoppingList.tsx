import { useEffect, useState } from 'react'

export function ShoppingList() {
    const [list, setList] = useState<ShoppingList | null>(null)
    const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>(() => {
        try {
            const saved = localStorage.getItem('checkedShoppingItems')
            return saved && saved !== 'undefined' ? JSON.parse(saved) : {}
        } catch (e) {
            console.error('Ошибка при чтении localStorage:', e)
            return {}
        }
    })

    // Загружаем список покупок
    useEffect(() => {
        fetch(`./shopping-list.json`)
            .then((res) => res.json())
            .then((data) => {
                setList(data)
            })
    }, [])

    // Загружаем отмеченные элементы из localStorage
    useEffect(() => {
        const saved = localStorage.getItem('checkedShoppingItems')
        console.log('💾 Загружаем из localStorage:', saved)
        if (saved && saved !== 'undefined') {
            const parsed = JSON.parse(saved)
            setCheckedItems(parsed)
        }
    }, [])

    // Обновляем localStorage при изменении checkedItems
    useEffect(() => {
        localStorage.setItem('checkedShoppingItems', JSON.stringify(checkedItems))
    }, [checkedItems])

    const toggleChecked = (product: string) => {
        setCheckedItems(prev => ({
            ...prev,
            [product]: !prev[product],
        }))
    }

    if (!list) return <div className="">Загрузка...</div>

    return (
        <div className="px-4 py-2">
            <h1 className="text-2xl font-bold mb-4">Список покупок</h1>
            <ul className="list-inside space-y-2">
                {list.items.map((item: ShoppingListItem, i: number) => {
                    const isChecked = checkedItems[item.product] || false
                    return (
                        <label className="p-2 pl-0 flex items-baseline gap-x-2 relative" key={i}>

                            <input
                                className="h-4 w-4 accent-stone-600 absolute top-3 left-0 hidden"
                                type="checkbox"
                                checked={isChecked}
                                onChange={() => toggleChecked(item.product)}
                            />

                            <span className={isChecked ? 'line-through text-stone-600' : ''}>
                                <span className="font-medium">{item.product}</span> – {item.amount} ({item.total} {list.currency.symbol})
                            </span>

                        </label>
                    )
                })}
            </ul>

            <div className="mt-4 text-sm text-stone-500">
                Локация: {list.location}<br/>
                Валюта: {list.currency.name} ({list.currency.symbol})<br/>
                Всего: {list.total_cost} {list.currency.symbol}
            </div>
        </div>
    )
}
