import { Button } from "@sb/webapp-core/components/buttons"
import { PageHeadline } from "@sb/webapp-core/components/pageHeadline"
import { FormattedMessage } from "react-intl"
import { Avatar, AvatarFallback, AvatarImage } from "@sb/webapp-core/components/avatar"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { useState } from "react"

export const TestimonialsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const testimonials = [
        {
            id: 1,
            name: "John Doe",
            position: "John Doe, Head of Community at [Company Name]",
            text: "This tool helped us uncover insights about our engagement metrics that we were missing before. It’s a must-have for any serious community manager",
            avatar: "/avatars/avatar1.jpg"
        },
        {
            id: 2,
            name: "John Doe",
            position: "John Doe, Head of Community at [Company Name]",
            text: "This tool helped us uncover insights about our engagement metrics that we were missing before. It’s a must-have for any serious community manager",
            avatar: "/avatars/avatar2.jpg"
        },
        {
            id: 3,
            name: "John Doe",
            position: "John Doe, Head of Community at [Company Name]",
            text: "This tool helped us uncover insights about our engagement metrics that we were missing before. It’s a must-have for any serious community manager",
            avatar: "/avatars/avatar3.jpg"
        },
        {
            id: 4,
            name: "John Doe",
            position: "John Doe, Head of Community at [Company Name]",
            text: "This tool helped us uncover insights about our engagement metrics that we were missing before. It’s a must-have for any serious community manager",
            avatar: "/avatars/avatar4.jpg"
        },
        {
            id: 5,
            name: "John Doe",
            position: "John Doe, Head of Community at [Company Name]",
            text: "This tool helped us uncover insights about our engagement metrics that we were missing before. It’s a must-have for any serious community manager",
            avatar: "/avatars/avatar5.jpg"
        },
        {
            id: 6,
            name: "John Doe",
            position: "John Doe, Head of Community at [Company Name]",
            text: "This tool helped us uncover insights about our engagement metrics that we were missing before. It’s a must-have for any serious community manager",
            avatar: "/avatars/avatar6.jpg"
        },
        {
            id: 7,
            name: "John Doe",
            position: "John Doe, Head of Community at [Company Name]",
            text: "This tool helped us uncover insights about our engagement metrics that we were missing before. It’s a must-have for any serious community manager",
            avatar: "/avatars/avatar7.jpg"
        }
    ]

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
    }

    return (
        <section className="py-16 md:py-24 bg-[#e0e0e0] dark:bg-[#2c2c2c]" id="testimonials">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
                    <FormattedMessage
                        defaultMessage="Trusted by Community Managers Worldwide"
                        id="Testimonials / Section Header"
                    />

                </div>

                <div className="relative max-w-4xl mx-auto">
                    <Button
                        onClick={prevTestimonial}
                        className="absolute left-10 bottom-[-35px] md:left-0 md:bottom-1/3 -translate-y-1/2 -translate-x-12 p-2 rounded-full bg-background text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeftIcon className="w-6 md:h-6" />
                    </Button>

                    <Button
                        onClick={nextTestimonial}
                        className="absolute right-10 bottom-[-35px] md:right-0 md:bottom-1/3 -translate-y-1/2 translate-x-12 p-2 rounded-full bg-background text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        aria-label="Next testimonial"
                    >
                        <ChevronRightIcon className="w-6 md:h-6" />
                    </Button>

                    <div className="relative overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {testimonials.map((testimonial) => (
                                <div
                                    key={testimonial.id}
                                    className="w-full flex-shrink-0 px-4"
                                >
                                    <div className="bg-white dark:bg-black p-8 md:p-10 border border-black dark:border-white">
                                        <blockquote className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
                                            "{testimonial.text}"
                                        </blockquote>
                                        <div className="flex items-center">
                                            <Avatar className="h-12 w-12 mr-4">
                                                <AvatarImage src={testimonial.avatar} />
                                                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                                                <p className="text-gray-600 dark:text-gray-400">{testimonial.position}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-center mt-8 space-x-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-colors ${currentIndex === index ? 'bg-black' : 'bg-gray-300'}`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}