import Button from '@/components/ui/Button';
import React from 'react';

interface LeadFormProps {
    mapEmbed?: React.ReactNode;
    title?: string;
    buttonText?: string;
    className?: string; 
}

export default function LeadForm({
    title = 'Заповніть заявку',
    buttonText = 'Відправити',
    className = '', 
}: LeadFormProps) {
    return (
        <section
            id="lead-form"
            className={`w-full max-w-5xl mx-auto mt-16 px-2 md:px-0 ${className}`} // Додано className
        >
            <div className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row items-center md:items-stretch overflow-hidden p-4 md:p-8 gap-8 md:gap-0">
                <form className="flex-1 flex w-full flex-col justify-center gap-4 md:pr-8 order-2 md:order-1">
                    <div className="flex flex-col items-center justify-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left mb-2">
                            {title}
                        </h2>
                    </div>
                    <input
                        type="text"
                        placeholder="Ім'я"
                        className="rounded-xl border w-full  border-gray-400 px-4 py-3 text-base md:text-lg outline-none focus:ring-2 focus:ring-[var(--color-purple)] transition"
                    />
                    <input
                        type="tel"
                        placeholder="Номер телефону"
                        className="rounded-xl border w-full border-gray-400 px-4 py-3 text-base md:text-lg outline-none focus:ring-2 focus:ring-[var(--color-purple)] transition"
                    />
                    <input
                        type="text"
                        placeholder="Назва компанії або діяльність"
                        className="rounded-xl border w-full border-gray-400 px-4 py-3 text-base md:text-lg outline-none focus:ring-2 focus:ring-[var(--color-purple)] transition"
                    />
                    <Button
                        variant="purple"
                        className="mt-2 text-white text-lg md:text-xl font-bold py-3 rounded-xl"
                    >
                        {buttonText}
                    </Button>
                </form>
            </div>
        </section>
    );
}
