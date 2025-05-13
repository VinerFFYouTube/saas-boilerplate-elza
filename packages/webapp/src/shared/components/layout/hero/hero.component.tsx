import { Button } from "@sb/webapp-core/components/buttons"
import { PageHeadline } from "@sb/webapp-core/components/pageHeadline"
import { FormattedMessage } from "react-intl"


export const Hero = () => {
    return (
        <section className="bg-background py-[100px] mt-[65px] md:py-20">
            <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-8">
                <div className="flex flex-col items-center text-center max-w-2xl">
                    <PageHeadline
                        header={
                            <FormattedMessage
                                defaultMessage="Measure, Improve, and Grow Your Discourse Community"
                                id="Auth / Profile details / Personal data header"
                            />
                        }
                        subheader={
                            <FormattedMessage
                                defaultMessage="Leverage the power of data to increase engagement, boost retention, and drive sustainable growth for your Discourse community."
                                id="Auth / Profile details / Personal data label"
                            />
                        }
                    />
                    <div className="mt-6 flex flex-col sm:flex-row gap-4">
                        <a href="#form-signup">
                            <Button className="px-4 py-2 rounded-none border transition-colors bg-white text-black border-black hover:bg-black hover:text-white dark:bg-black dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black">
                                Start Your Free Trial
                            </Button>
                        </a>
                    </div>
                </div>
                <div className="flex justify-center max-w-xl w-full">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcA5h3CaalR-OLgFQFrpO90jY56fdnsMqUSg&s"
                        alt="Community Analytics Dashboard"
                        className="w-full h-auto rounded-lg shadow-md"
                    />
                </div>
            </div>
        </section>
    )
}