import React from "react";

interface FormProps {
    signupComponent: React.ReactNode;
}

export const PublicForm = ({ signupComponent }: FormProps) => {
    return (
        <section className="py-16 bg-gray-100" id="form-signup">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto bg-black rounded-xl shadow-sm p-8 md:p-12 border border-gray-100">
                    {signupComponent}
                </div>
            </div>
        </section>
    )
}