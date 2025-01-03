'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function Navbar() {
    const [darkMode, setDarkMode] = useState(true)

    return (
        <nav className="sticky top-0 z-50 bg-gradient-to-r from-purple-900 to-black text-white shadow-lg">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        Craftable
                    </Link>
                    <div className="hidden md:flex space-x-4">
                        <Link href="/templates" className="hover:text-purple-300 transition-colors">Templates</Link>
                        <Link href="/pricing" className="hover:text-purple-300 transition-colors">Pricing</Link>
                        <Link href="/features" className="hover:text-purple-300 transition-colors">Features</Link>
                        <Link href="/about" className="hover:text-purple-300 transition-colors">About Us</Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="p-2 rounded-full hover:bg-purple-800 transition-colors"
                        >
                            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <button className="px-4 py-2 rounded-md bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-colors">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

