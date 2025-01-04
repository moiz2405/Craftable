import Link from 'next/link';
import { Button } from "@/components/ui/button"

export default function CustomBuild() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-white bg-gradient-to-b from-purple-900 to-black px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-center">
                Custom Website Builder
            </h1>
            <p className="text-2xl text-center mb-8 text-purple-300">
                Here you can build your website from scratch.
            </p>
            <Link href="/">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                    Back to Home
                </Button>
            </Link>
        </div>
    );
}

