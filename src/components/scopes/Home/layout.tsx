'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Menu } from '@/components/scopes/Menu/Menu'
import { ShoppingList } from '@/components/scopes/ShoppingList/ShoppingList'
import { useEffect, useState } from 'react'

export function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    const [theme, setTheme] = useState<"dark" | "light" | null>(null)

    useEffect(() => {
        const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches
        console.log(`тема темная: ${isDark}`)
        setTheme(isDark ? "dark" : "light")
        document.documentElement.classList.toggle("dark", isDark)
    }, [theme])

    return (
        <main className="">

            {/*<Navigation/>*/}

            <Tabs defaultValue="menu" className="">

                <TabsContent className="min-h-dvh" value="menu">
                    <Menu/>
                </TabsContent>

                <TabsContent className="min-h-dvh" value="soppingList">
                    <ShoppingList/>
                </TabsContent>

                <TabsList className="w-full sticky bottom-0 mt-2">
                    <TabsTrigger value="menu">Меню</TabsTrigger>
                    <TabsTrigger value="soppingList">Закупка</TabsTrigger>
                </TabsList>

            </Tabs>
        </main>
    )
}