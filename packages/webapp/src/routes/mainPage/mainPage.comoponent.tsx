import { useState, useEffect } from 'react';
import { Plug, BarChart2Icon, RocketIcon, BarChart2, Rocket, UsersIcon, SproutIcon, FireExtinguisherIcon, FireExtinguisher, FlameIcon, Menu } from 'lucide-react'
import './mainPage.css';
import Signup from '../auth/signup';
import { Button } from '@sb/webapp-core/components/buttons';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { PageHeadline } from '@sb/webapp-core/components/pageHeadline';
import { Card, CardContent, CardHeader, CardTitle } from '@sb/webapp-core/components/cards';
import { H2, H4, Paragraph } from '@sb/webapp-core/components/typography';
import { Hero } from '../../shared/components/layout/hero/hero.component';

export const MainPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeFaq, setActiveFaq] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleFaq = (index: any) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    return (
        <div className="main-page-div -mt-10">
            {/* Header */}
            {/* <header className={`header-main-page ${isScrolled ? 'scrolled' : ''}`}>
                <div className="container-main-page header-children">
                    <Link to="/main-page" className="logo">Discourse<span>Analytics</span></Link>

                    <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
                        <a href="#how-it-works" onClick={() => setIsMenuOpen(false)}>How It Works</a>
                        <a href="#metrics" onClick={() => setIsMenuOpen(false)}>Metrics</a>
                        <a href="#faq" onClick={() => setIsMenuOpen(false)}>FAQ</a>
                        <a href="#form-signup">
                            <Button className="btn btn-outline mobile-nav-btn" onClick={() => setIsMenuOpen(false)}>Get Started</Button>
                        </a>
                    </nav>

                    <Button
                        className="mobile-menu-btn"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                        }
                    </Button>
                </div>
            </header> */}

            {/* Hero Section */}
            <Hero />

            {/* How It Works */}
            <section className="py-16 bg-gray-50" id="how-it-works">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <PageHeadline
                            header={
                                <FormattedMessage
                                    defaultMessage="How It Works"
                                    id='Auth / Profile details / Personal data header'
                                />
                            }
                            subheader={
                                <FormattedMessage
                                    defaultMessage="Get actionable insights for your community in just 3 simple steps"
                                    id='Auth / Profile details / Personal data label'
                                />
                            }
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {/* Step 1 */}
                        <Card className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-0">
                            <CardHeader className="flex items-start mb-4">
                                <div className="flex-shrink-0 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full w-8 h-8 text-sm font-medium mr-3">
                                    1
                                </div>
                                <CardTitle className="text-lg font-semibold text-gray-400">
                                    <FormattedMessage
                                        defaultMessage='Integrate your community seamlessly'
                                        id='integration.header'
                                    />
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Paragraph className="text-gray-600 mb-4">
                                    Integrate your community with one-click to start tracking performance.
                                </Paragraph>
                                <div className="text-blue-500 mt-4">
                                    <Plug className="w-6 h-6" />
                                </div>

                            </CardContent>
                        </Card>

                        {/* Step 2 */}
                        <Card className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-0">
                            <CardHeader className="flex items-start mb-4">
                                <div className="flex-shrink-0 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full w-8 h-8 text-sm font-medium mr-3">
                                    2
                                </div>
                                <CardTitle className="text-lg font-semibold text-gray-400">
                                    <FormattedMessage
                                        defaultMessage='Receive Automated Monthly Analytics Reports'
                                        id='integration.header'
                                    />
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Paragraph className="text-gray-600 mb-4">
                                    Get customized, data-driven reports each month with insights on engagement and performance.
                                </Paragraph>
                                <div className="text-blue-500 mt-4">
                                    <BarChart2 className="w-6 h-6" />
                                </div>
                            </CardContent>
                        </Card>

                        {/* Step 3 */}
                        <Card className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-0">
                            <CardHeader className="flex items-start mb-4">
                                <div className="flex-shrink-0 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full w-8 h-8 text-sm font-medium mr-3">
                                    3
                                </div>
                                <CardTitle className="text-lg font-semibold text-gray-400">
                                    <FormattedMessage
                                        defaultMessage='Actionable Insights for Growth'
                                        id='integration.header'
                                    />
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Paragraph className="text-gray-600 mb-4">
                                    Leverage the data to make informed decisions and achieve sustainable growth.
                                </Paragraph>
                                <div className="text-blue-500 mt-4">
                                    <Rocket className="w-6 h-6" />
                                </div>
                            </CardContent>

                        </Card>
                    </div>

                    <div className="text-center">
                        <a href="#form-signup">
                            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors">
                                <FormattedMessage
                                    defaultMessage="Start Analyzing Your Community"
                                    id="howItWorks.cta"
                                />
                            </Button>
                        </a>
                    </div>
                </div>
            </section>


            {/* Metrics Section */}
            <section className="section section-gray" id="metrics">
                <div className="container">
                    <div className="section-title">
                        <PageHeadline
                            header={
                                <FormattedMessage
                                    defaultMessage="Improve Your Community With Comprehensive Metrics"
                                    id='Auth / Profile details / Personal data header'
                                />
                            }
                            subheader={
                                <FormattedMessage
                                    defaultMessage="Track what matters most with metrics that cover all aspects of your community's health and performance."
                                    id='Auth / Profile details / Personal data label'
                                />
                            }
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 hover:border-blue-100">
                            <CardHeader className="flex flex-col items-center text-center p-6 pb-0">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-blue-600 mb-4">
                                    <UsersIcon />
                                </div>
                                <CardTitle className="text-lg font-semibold text-gray-900">
                                    <FormattedMessage
                                        defaultMessage='Engagement Rate'
                                        id='integration.header'
                                    />
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-6 pt-0 text-center text-gray-600">
                                <FormattedMessage
                                    defaultMessage='Measure how actively your members participate in discussions.'
                                    id='integration.header'
                                />
                            </CardContent>
                        </Card>

                        <Card className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 hover:border-blue-100">
                            <CardHeader className="flex flex-col items-center text-center p-6 pb-0">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-blue-600 mb-4">
                                    <BarChart2Icon />
                                </div>
                                <CardTitle className="text-lg font-semibold text-gray-900">
                                    <FormattedMessage
                                        defaultMessage='User Retention'
                                        id='integration.header'
                                    />
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-6 pt-0 text-center text-gray-600">
                                <FormattedMessage
                                    defaultMessage='Track how many members return to your community over time.'
                                    id='integration.header'
                                />
                            </CardContent>
                        </Card>

                        <Card className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 hover:border-blue-100">
                            <CardHeader className="flex flex-col items-center text-center p-6 pb-0">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-blue-600 mb-4">
                                    <SproutIcon />
                                </div>
                                <CardTitle className="text-lg font-semibold text-gray-900">
                                    <FormattedMessage
                                        defaultMessage='Growth Rate'
                                        id='integration.header'
                                    />
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-6 pt-0 text-center text-gray-600">
                                <FormattedMessage
                                    defaultMessage='Monitor how quickly your community is expanding.'
                                    id='integration.header'
                                />
                            </CardContent>
                        </Card>

                        <Card className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 hover:border-blue-100">
                            <CardHeader className="flex flex-col items-center text-center p-6 pb-0">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-blue-600 mb-4">
                                    <FlameIcon />
                                </div>
                                <CardTitle className="text-lg font-semibold text-gray-900">
                                    <FormattedMessage
                                        defaultMessage='Activity Level'
                                        id='integration.header'
                                    />
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-6 pt-0 text-center text-gray-600">
                                <FormattedMessage
                                    defaultMessage='See the overall participation trends in your community.'
                                    id='integration.header'
                                />
                            </CardContent>
                        </Card>
                    </div>

                    <div className="section-cta">
                        <a href="#form-signup">
                            <Button className="btn btn-primary">Start Measuring Your Community</Button>
                        </a>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section" id="faq">
                <div className="container">
                    <div className="section-title">
                        <H2>Frequently Asked Questions</H2>
                    </div>

                    <div className="faq-grid">
                        <div className={`faq-item ${activeFaq === 0 ? 'active' : ''}`}>
                            <Button className="faq-question" onClick={() => toggleFaq(0)}>
                                How do I integrate my Discourse community?
                            </Button>
                            <div className="faq-answer">
                                <Paragraph>It's easy! Simply connect your community to our platform by providing the url of your discourse website. If your community is not public, you will need to provide an API key also.</Paragraph>
                            </div>
                        </div>

                        <div className={`faq-item ${activeFaq === 1 ? 'active' : ''}`}>
                            <Button className="faq-question" onClick={() => toggleFaq(1)}>
                                What type of metrics do you track?
                            </Button>
                            <div className="faq-answer">
                                <Paragraph>We provide insights into 50+ metrics. Everything you need to manage your community effectively. Each metric also has a benchmark value so you can compare your effort.</Paragraph>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* form */}
            <section className="py-16 bg-gray-50" id="form-signup">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto bg-black rounded-xl shadow-sm p-8 md:p-12 border border-gray-100">
                        <Signup />
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-logo">
                            <a href="#" className="logo">Discourse<span>Analytics</span></a>
                            <Paragraph>Data-driven insights for your community</Paragraph>
                        </div>

                        <div className="footer-links">
                            <div className="links-column">
                                <H4>Product</H4>
                                <a href="#how-it-works">Features</a>
                                <a href="#metrics">Metrics</a>
                            </div>

                            <div className="links-column">
                                <H4>Resources</H4>
                                <a href="#faq">FAQ</a>
                                <a href="#">Documentation</a>
                                <a href="#">Blog</a>
                            </div>

                            <div className="links-column">
                                <H4>Company</H4>
                                <a href="#">About Us</a>
                                <a href="#">Contact</a>
                                <a href="#">Privacy Policy</a>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <Paragraph>&copy; 2023 Discourse Analytics. All rights reserved.</Paragraph>
                        <Paragraph>Contact: nicolas.chabanovsky@gmail.com</Paragraph>
                    </div>
                </div>
            </footer>
        </div>
    );
};