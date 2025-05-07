import { Button } from "@sb/webapp-core/components/buttons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const PublicHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed w-full z-50 bg-white`}>
            <div className="container mx-auto h-[65px] px-4 flex justify-between items-center">
                <Link to="/main-page" className="text-2xl font-bold text-blue-600">
                    Discourse<span className="text-gray-800">Analytics</span>
                </Link>

                <nav className="hidden md:flex space-x-8 items-center">
                    <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition">How It Works</a>
                    <a href="#metrics" className="text-gray-700 hover:text-blue-600 transition">Metrics</a>
                    <a href="#faq" className="text-gray-700 hover:text-blue-600 transition">FAQ</a>
                    <a href="#form-signup">
                        <Button className="ml-4 px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition">
                            Get Started
                        </Button>
                    </a>
                </nav>

                <Button
                    className="md:hidden focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </Button>

                <div className={`md:hidden fixed inset-0 bg-white z-40 transition-all duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <Button
                        className="absolute top-4 right-4 p-2 focus:outline-none"
                        onClick={() => setIsMenuOpen(false)}
                        aria-label="Close menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </Button>

                    <div className="flex flex-col h-full justify-center items-center space-y-8">
                        <a
                            href="#how-it-works"
                            className="text-2xl text-gray-700 hover:text-blue-600"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            How It Works
                        </a>
                        <a
                            href="#metrics"
                            className="text-2xl text-gray-700 hover:text-blue-600"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Metrics
                        </a>
                        <a
                            href="#faq"
                            className="text-2xl text-gray-700 hover:text-blue-600"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            FAQ
                        </a>
                        <a
                            href="#form-signup"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition text-xl">
                                Get Started
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};