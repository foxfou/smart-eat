import { useEffect, useRef, useState } from 'react'
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"

export function Menu() {
    const [menu, setMenu] = useState<any | MealPlan>(null)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [embla, setEmbla] = useState<CarouselApi | null>(null)

    const carouselRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        fetch(`./menu.json`)
            .then((res) => res.json())
            .then(setMenu)
    }, [])

    useEffect(() => {
        if (!embla) return

        const onSelect = () => {
            setCurrentIndex(embla.selectedScrollSnap())
        }

        embla.on('select', onSelect)
        onSelect()

        return () => {
            embla.off('select', onSelect)
        }
    }, [embla])

    if (!menu) return <div className="p-6">Загрузка...</div>

    return (
        <div className="px-4 py-2">

            <h1 className="text-2xl font-bold mb-6">Меню на {currentIndex + 1} день</h1>

            <div className="mb-4 flex justify-center gap-2">
                {menu.days.map((_, i) => (
                    <div
                        key={i}
                        className={`h-2 w-full rounded-full transition-all duration-300 ${
                            i === currentIndex ? 'bg-stone-600 dark:bg-stone-300 w-10' : 'bg-stone-300 dark:bg-stone-600'
                        }`}
                    />
                ))}
            </div>

            <Carousel setApi={setEmbla} ref={carouselRef} className="w-full">

                <CarouselContent>
                    {menu.days.map((day: Day, i: number) => (
                        <CarouselItem key={i}>
                            <div className="p-1 flex flex-col justify-between ">

                                {day.meals.map((meal: Meal, j: number) => (
                                    <div key={j} className="mb-4">
                                        <div className="font-bold mb-2">
                                            {meal.name} – {meal.kcal} ккал
                                        </div>
                                        {meal.products?.map((product: Product, k: number) => (
                                            <div className="mb-1" key={k}>
                                                {product.name} - {product.amount} {product.note}
                                            </div>
                                        ))}
                                    </div>
                                ))}

                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

            </Carousel>


        </div>
    )
}
