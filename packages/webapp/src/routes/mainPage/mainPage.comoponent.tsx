import './mainPage.css';
import Signup from '../auth/signup';
import { Hero } from '../../shared/components/layout/hero/hero.component';
import { PublicHeader } from '../../shared/components/layout/publicHeader/publicHeader.component';
import { HowItWorksSection } from '../../shared/components/layout/howItWorksSection/howItWorksSection.component';
import { MetricsSection } from '../../shared/components/layout/metricsSection/metricsSection.component';
import { FaqSection } from '../../shared/components/layout/faqSection/faqSection.component';
import { PublicForm } from '../../shared/components/layout/publicForm/publicForm.component';
import { PublicFooter } from '../../shared/components/layout/publicFooter/publicFooter.component';
import { ReportsSection } from '../../shared/components/layout/reportsSection/reportsSection.component';
import { TestimonialsSection } from '../../shared/components/layout/testimonialsSection/testimonialsSection.component';

export const MainPage = () => {
    return (
        <div className="main-page-div -mt-[105px]">
            <PublicHeader />
            <Hero />
            <HowItWorksSection />
            <MetricsSection />
            <ReportsSection/>
            <TestimonialsSection/>
            <FaqSection />
            <PublicForm signupComponent={<Signup/>}/>
            <PublicFooter />
        </div>
    );
};