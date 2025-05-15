import React from "react";

interface FormProps {
    signupComponent: React.ReactNode;
}

export const PublicForm = ({ signupComponent }: FormProps) => {
    return (
        <section className="py-16 bg-[#e0e0e0] dark:bg-[#2c2c2c]" id="form-signup">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto bg-background rounded-none shadow-sm p-8 md:p-12 px-4 py-2 rounded-md border transition-colors bg-white text-black border-black dark:bg-black dark:text-white dark:border-white">
                    {signupComponent}
                </div>
            </div>
        </section>
    )
}