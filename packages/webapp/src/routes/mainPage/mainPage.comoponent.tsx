import { useState, useEffect } from 'react';
// import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './mainPage.css';
import Signup from '../auth/signup';
import { Button } from '@sb/webapp-core/components/buttons';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { PageHeadline } from '@sb/webapp-core/components/pageHeadline';
import { Card, CardContent, CardHeader, CardTitle } from '@sb/webapp-core/components/cards';

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
        <div className="main-page-div">
            {/* Header */}
            <header className={`header-main-page ${isScrolled ? 'scrolled' : ''}`}>
                <div className="container-main-page header-children">
                    <Link to="/main-page" className="logo">Discourse<span>Analytics</span></Link>

                    <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
                        <a href="#how-it-works" onClick={() => setIsMenuOpen(false)}>How It Works</a>
                        <a href="#metrics" onClick={() => setIsMenuOpen(false)}>Metrics</a>
                        <a href="#reports" onClick={() => setIsMenuOpen(false)}>Reports</a>
                        <a href="#faq" onClick={() => setIsMenuOpen(false)}>FAQ</a>
                        <Button className="btn btn-outline mobile-nav-btn" onClick={() => setIsMenuOpen(false)}>Get Started</Button>
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
            </header>

            {/* Hero Section */}
            <section className="hero section-gray">
                <div className="container">
                    <div className="hero-content">
                        <PageHeadline
                            header={
                                <FormattedMessage defaultMessage="Measure, Improve, and Grow Your Discourse Community" id="Auth / Profile details / Personal data header" />
                            }
                            subheader={
                                <FormattedMessage
                                    defaultMessage="Leverage the power of data to increase engagement, boost retention, and drive sustainable growth for your Discourse community."
                                    id="Auth / Profile details / Personal data label"
                                />
                            }
                        />
                        <div className="hero-buttons">
                            <Button className="btn btn-primary">Start Your Free Trial</Button>
                            <Button className="btn btn-outline">See Demo</Button>
                        </div>
                    </div>
                    <img
                        src="https://via.placeholder.com/800x400?text=Metric+Segmented+Distribution"
                        alt="Community Analytics Dashboard"
                        className="hero-image"
                    />
                </div>
            </section>

            {/* How It Works */}
            <section className="section" id="how-it-works">
                <div className="container">
                    <div className="section-title">
                        {/* <h2>How It Works</h2>
                        <p>Get actionable insights for your community in just 3 simple steps</p> */}
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


                    <div className="steps-grid">
                        <Card className='step-card'>
                            <CardHeader>
                                <div className="step-number">1</div>
                                <CardTitle>
                                    <FormattedMessage
                                        defaultMessage='Integrate your community seamlessly'
                                        id='integration.header'
                                    />
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <FormattedMessage
                                    defaultMessage="Integrate your community with one-click to start tracking performance."
                                    id="integration.subheader"
                                />
                                <div className="step-icon">🔌</div>
                            </CardContent>
                        </Card>

                        <Card className='step-card'>
                            <CardHeader>
                                <div className="step-number">2</div>
                                <CardTitle>
                                    <FormattedMessage
                                        defaultMessage='Receive Automated Monthly Analytics Reports'
                                        id='integration.header'
                                    />
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <FormattedMessage
                                    defaultMessage="Get customized, data-driven reports each month with insights on engagement and performance."
                                    id="integration.subheader"
                                />
                                <div className="step-icon">📊</div>
                            </CardContent>
                        </Card>

                        <Card className='step-card'>
                            <CardHeader>
                                <div className="step-number">3</div>
                                <CardTitle>
                                    <FormattedMessage
                                        defaultMessage='Actionable Insights for Growth'
                                        id='integration.header'
                                    />
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <FormattedMessage
                                    defaultMessage="Leverage the data to make informed decisions and achieve sustainable growth."
                                    id="integration.subheader"
                                />
                                <div className="step-icon">🚀</div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="section-cta">
                        <Button className="btn btn-primary">Start Analyzing Your Community</Button>
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

                    <div className="metrics-grid">
                        <a href="/onboard/metrics?type=engagement" className="metric-card">
                            <div className="metric-icon">👥</div>
                            <PageHeadline
                                header={
                                    <FormattedMessage
                                        defaultMessage="Engagement Rate"
                                        id='Auth / Profile details / Personal data header'
                                    />
                                }
                                subheader={
                                    <FormattedMessage
                                        defaultMessage="Measure how actively your members participate in discussions."
                                        id='Auth / Profile details / Personal data label'
                                    />
                                }
                            />
                            <span className="metric-link">Learn more →</span>
                        </a>

                        <a href="/onboard/metrics?type=retention" className="metric-card">
                            <div className="metric-icon">📈</div>
                            <PageHeadline
                                header={
                                    <FormattedMessage
                                        defaultMessage="User Retention"
                                        id='Auth / Profile details / Personal data header'
                                    />
                                }
                                subheader={
                                    <FormattedMessage
                                        defaultMessage="Track how many members return to your community over time."
                                        id='Auth / Profile details / Personal data label'
                                    />
                                }
                            />
                            <span className="metric-link">Learn more →</span>
                        </a>

                        <a href="/onboard/metrics?type=growth" className="metric-card">
                            <div className="metric-icon">🌱</div>
                            <PageHeadline
                                header={
                                    <FormattedMessage
                                        defaultMessage="Growth Rate"
                                        id='Auth / Profile details / Personal data header'
                                    />
                                }
                                subheader={
                                    <FormattedMessage
                                        defaultMessage="Monitor how quickly your community is expanding."
                                        id='Auth / Profile details / Personal data label'
                                    />
                                }
                            />
                            <span className="metric-link">Learn more →</span>
                        </a>

                        <a href="/onboard/metrics?type=activity" className="metric-card">
                            <div className="metric-icon">🔥</div>
                            <PageHeadline
                                header={
                                    <FormattedMessage
                                        defaultMessage="Activity Level"
                                        id='Auth / Profile details / Personal data header'
                                    />
                                }
                                subheader={
                                    <FormattedMessage
                                        defaultMessage="See the overall participation trends in your community."
                                        id='Auth / Profile details / Personal data label'
                                    />
                                }
                            />
                            <span className="metric-link">Learn more →</span>
                        </a>
                    </div>

                    <div className="section-cta">
                        <Button className="btn btn-primary">Start Measuring Your Community</Button>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section" id="faq">
                <div className="container">
                    <div className="section-title">
                        <h2>Frequently Asked Questions</h2>
                    </div>

                    <div className="faq-grid">
                        <div className={`faq-item ${activeFaq === 0 ? 'active' : ''}`}>
                            <button className="faq-question" onClick={() => toggleFaq(0)}>
                                How do I integrate my Discourse community?
                            </button>
                            <div className="faq-answer">
                                <p>It's easy! Simply connect your community to our platform by providing the url of your discourse website. If your community is not public, you will need to provide an API key also.</p>
                            </div>
                        </div>

                        <div className={`faq-item ${activeFaq === 1 ? 'active' : ''}`}>
                            <button className="faq-question" onClick={() => toggleFaq(1)}>
                                What type of metrics do you track?
                            </button>
                            <div className="faq-answer">
                                <p>We provide insights into 50+ metrics. Everything you need to manage your community effectively. Each metric also has a benchmark value so you can compare your effort.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* form */}
            <section className='section section-form'>

                <Signup />
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-logo">
                            <a href="#" className="logo">Discourse<span>Analytics</span></a>
                            <p>Data-driven insights for your community</p>
                        </div>

                        <div className="footer-links">
                            <div className="links-column">
                                <h4>Product</h4>
                                <a href="#how-it-works">Features</a>
                                <a href="#metrics">Metrics</a>
                                <a href="#reports">Reports</a>
                            </div>

                            <div className="links-column">
                                <h4>Resources</h4>
                                <a href="#faq">FAQ</a>
                                <a href="#">Documentation</a>
                                <a href="#">Blog</a>
                            </div>

                            <div className="links-column">
                                <h4>Company</h4>
                                <a href="#">About Us</a>
                                <a href="#">Contact</a>
                                <a href="#">Privacy Policy</a>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p>&copy; 2023 Discourse Analytics. All rights reserved.</p>
                        <p>Contact: nicolas.chabanovsky@gmail.com</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};