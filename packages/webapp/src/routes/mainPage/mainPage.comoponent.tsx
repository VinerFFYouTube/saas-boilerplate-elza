import './mainPage.css';
import Signup from '../auth/signup';
import { Hero } from '../../shared/components/layout/hero/hero.component';
import { PublicHeader } from '../../shared/components/layout/publicHeader/publicHeader.component';
import { HowItWorksSection } from '../../shared/components/layout/howItWorksSection/howItWorksSection.component';
import { MetricsSection } from '../../shared/components/layout/metricsSection/metricsSection.component';
import { FaqSection } from '../../shared/components/layout/faqSection/faqSection.component';
import { PublicForm } from '../../shared/components/layout/publicForm/publicForm.component';
import { PublicFooter } from '../../shared/components/layout/publicFooter/publicFooter.component';

export const MainPage = () => {
    return (
        <div className="main-page-div -mt-[105px]">
            <PublicHeader />
            <Hero />
            <HowItWorksSection />
            <MetricsSection />
            <FaqSection />
            <PublicForm signupComponent={<Signup/>}/>
            <PublicFooter />
        </div>
    );
};