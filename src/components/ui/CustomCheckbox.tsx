'use client';
import React from 'react';

type Props = React.ComponentProps<'input'> & {
    label?: string;
    className?: string;
};

export default function CustomCheckbox({
    label,
    className = '',
    ...props
}: Props) {
    return (
        <label
            className={`inline-flex items-center cursor-pointer select-none ${className}`}
        >
            <input type="checkbox" className="peer sr-only" {...props} />
            <span
                className={`
          w-8 h-8 flex items-center justify-center rounded-lg border-2
          border-black bg-white transition
          peer-checked:border-black
          peer-checked:bg-white
          hover:border-black
          relative
        `}
            >
                <svg
                    className="absolute inset-0 m-auto transition pointer-events-none"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    style={{ opacity: 'var(--checkbox-checked, 0)' }}
                >
                    <polyline
                        points="6 13 11 18 18 7"
                        stroke="#750DBE"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                <style jsx>{`
                    input:checked + span svg {
                        --checkbox-checked: 1;
                    }
                `}</style>
            </span>
            {label && <span className="ml-3">{label}</span>}
        </label>
    );
}
