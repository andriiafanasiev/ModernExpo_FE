import React from 'react';

interface Option {
    label: string;
    value: string;
}

interface SelectProps {
    options: Option[];
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;
}

const Select: React.FC<SelectProps> = ({
    options,
    value,
    onChange,
    placeholder,
    className,
}) => {
    return (
        <select
            className={`w-full rounded-xl border border-[#D9D9D9] bg-white px-4 py-3 text-base md:text-lg font-medium focus:outline-none focus:ring-2 focus:ring-[var(--color-purple)] transition ${className}`}
            value={value}
            onChange={(e) => onChange(e.target.value)}
        >
            {placeholder && (
                <option value="" disabled hidden>
                    {placeholder}
                </option>
            )}
            {options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                    {opt.label}
                </option>
            ))}
        </select>
    );
};

export default Select;
