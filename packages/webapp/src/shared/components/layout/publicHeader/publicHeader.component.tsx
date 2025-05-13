import { Button, Link } from "@sb/webapp-core/components/buttons";
import { NavigationHeader } from "@sb/webapp-core/components/navigation"
import { useGenerateLocalePath } from "@sb/webapp-core/hooks";
import { RoutesConfig } from "../../../../app/config/routes";
import { useEffect, useState } from "react";
import { useTheme } from '@sb/webapp-core/hooks/useTheme/useTheme';
import { Sun } from 'lucide-react';

export const PublicHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { toggleTheme } = useTheme();
    const generateLocalePath = useGenerateLocalePath()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed w-full z-50 bg-background`}>
            <div className="container mx-auto h-[65px] px-4 flex justify-between items-center">
                <Link to={generateLocalePath(RoutesConfig.mainPage)} className="text-2xl font-bold text-foreground">
                    DiscourseAnalytics
                </Link>

                <NavigationHeader />
                <Button variant="ghost" onClick={() => toggleTheme()} className="h-10 w-10 rounded-full px-0">
                    <Sun />
                </Button>

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

                <div className={`md:hidden fixed inset-0 bg-background z-40 transition-all duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
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
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <span className="text-foreground">How It Works</span>
                        </a>
                        <a
                            href="#metrics"
                            className="text-foreground"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Metrics
                        </a>
                        <a
                            href="#faq"
                            className="text-foreground"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            FAQ
                        </a>
                        <a
                            href="#form-signup"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <button className="px-4 py-2 rounded-none border transition-colors bg-white text-black border-black hover:bg-black hover:text-white dark:bg-black dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black">
                                Get Started
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};