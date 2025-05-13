import { Button } from "@sb/webapp-core/components/buttons";
import { H2, Paragraph } from "@sb/webapp-core/components/typography";
import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";

export const FaqSection = () => {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const faqs = [
        {
            question: "How do I integrate my Discourse community?",
            answer: "It’s easy! Simply connect your community to our platform by providing the url of your discourse website. If your community is not public, you will need to provide an API key also."
        },
        {
            question: "What type of metrics do you track?",
            answer: "We provide insights into {__NUMBER__FROM_DB__} metrics. Everything you need to manage your community effectively. Each metric also has a benchmark value so you can compare your effort. If you need some other metrics, we are happy to add them for you."
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-background" id="faq">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
                    <H2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Frequently Asked Questions
                    </H2>
                </div>

                {/* FAQ Items */}
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`border border-gray-200 dark:border-gray-700 rounded-none overflow-hidden transition-all duration-300`}
                        >
                            <Button
                                className="w-full flex justify-between items-center p-10 text-left bg-background hover:bg-background/90 dark:hover:bg-background/90"
                                onClick={() => toggleFaq(index)}
                                aria-expanded={activeFaq === index}
                                aria-controls={`faq-answer-${index}`}
                            >
                                <span className="text-lg font-medium text-foreground">
                                    {faq.question}
                                </span>
                                <ChevronDownIcon
                                    className={`-5 h-5 text-gray-500 dark:text-gray-400 transform transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''
                                        }`}
                                />
                            </Button>

                            <div
                                id={`faq-answer-${index}`}
                                className={`px-6 overflow-hidden transition-all duration-300 ${activeFaq === index
                                    ? 'max-h-96 pb-6 opacity-100'
                                    : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <Paragraph className="text-foreground">
                                    {faq.answer}
                                </Paragraph>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// hover