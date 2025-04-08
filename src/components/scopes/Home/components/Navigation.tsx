'use client'
import Link from "next/link"

export const Navigation = () => {

    return (
        <nav className="sticky bottom-0 z-10 grid grid-cols-2 w-dvw h-14 bg-gray-50/80 dark:bg-gray-950 backdrop-blur">

            <Link
				className="grid grid-rows-[1fr_auto] items-center justify-items-center leading-4 py-1"
				href="./menu"
			>
				<span className="block truncate">Меню</span>
			</Link>

			<Link
				className="grid grid-rows-[1fr_auto] items-center justify-items-center leading-4 py-1"
				href="./shopping-list"
			>
				<span className="block truncate">Список покупок</span>
			</Link>

        </nav>
    )
}