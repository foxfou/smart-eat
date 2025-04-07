
// pages/index.tsx
export default function Home() {

    return (
        <main className="p-6">
            <h1 className="text-2xl font-bold mb-4">LifeMenu</h1>
            <ul className="list-disc list-inside">
                <li><a href={`${process.env.BASE_PATH}/menu`}>Меню на неделю</a></li>
                <li><a href={`${process.env.BASE_PATH}/shopping-list`}>Список покупок</a></li>
            </ul>
        </main>
    )
}
