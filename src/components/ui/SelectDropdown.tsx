import React, { useState, useRef, useEffect } from 'react';

interface Option {
    label: string;
    value: string;
}

interface SelectDropdownProps {
    options: Option[];
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;
    disabled?: boolean;
}

const SelectDropdown: React.FC<SelectDropdownProps> = ({
    options,
    value,
    onChange,
    placeholder = 'Оберіть',
    className = '',
    disabled = false,
}) => {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!open) return;
        const handleClick = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, [open]);

    // Закриття по Escape
    useEffect(() => {
        if (!open) return;
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setOpen(false);
        };
        document.addEventListener('keydown', handleKey);
        return () => document.removeEventListener('keydown', handleKey);
    }, [open]);

    const selected = options.find((o) => o.value === value);

    return (
        <div
            ref={ref}
            className={`relative w-full select-none ${className}`}
            tabIndex={-1}
        >
            <button
                type="button"
                className={`w-full flex items-center justify-between rounded-2xl border border-[#BEB1B1] bg-transparent px-5 py-3 text-base md:text-lg font-medium text-[#BEB1B1] transition focus:outline-none focus:ring-2 focus:ring-[var(--color-purple)] ${
                    disabled
                        ? 'opacity-60 pointer-events-none'
                        : 'cursor-pointer'
                }`}
                onClick={() => setOpen((v) => !v)}
                disabled={disabled}
                aria-haspopup="listbox"
                aria-expanded={open}
            >
                <span className={selected ? 'text-black' : 'text-[#BEB1B1]'}>
                    {selected ? selected.label : placeholder}
                </span>
                <svg
                    className={`ml-2 w-5 h-5 transition-transform ${
                        open ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>
            {open && (
                <div className="absolute left-0 top-full z-40 mt-2 w-full bg-white rounded-2xl shadow-xl border border-[#BEB1B1] overflow-hidden animate-fadeIn">
                    <ul
                        className="max-h-60 overflow-y-auto py-1"
                        tabIndex={-1}
                        role="listbox"
                    >
                        {options.map((opt) => (
                            <li
                                key={opt.value}
                                className={`px-5 py-3 text-base md:text-lg cursor-pointer select-none transition
                  ${
                      value === opt.value
                          ? 'bg-[#F3F0F7] font-bold text-black'
                          : 'text-black hover:bg-[#F3F0F7]'
                  }
                `}
                                onClick={() => {
                                    onChange(opt.value);
                                    setOpen(false);
                                }}
                                role="option"
                                aria-selected={value === opt.value}
                            >
                                {opt.label}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SelectDropdown;
 