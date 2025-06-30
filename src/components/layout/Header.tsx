'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const nav = [
    { label: 'Додаткові послуги', href: '#' },
    { label: 'Каталог', href: '/catalog' },
    { label: 'Залишити заявку', href: '/#contact' },
];

export default function Header() {
    const [open, setOpen] = useState(false);

    const handleSmoothScroll = (
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string
    ) => {
        e.preventDefault();
        const targetId = href.split('#')[1];
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        setOpen(false);
    };

    return (
        <header className="header-blur max-w-8xl mx-auto fixed top-0 left-0 w-full z-30 flex items-center justify-between px-4 py-4 bg-[var(--color-bg)]">
            <Link
                href="/"
                className="font-gotham font-medium text-white text-xl"
            >
                Лого
            </Link>
            <nav className="hidden md:flex gap-8">
                {nav.map((item) =>
                    item.href === '/catalog' ? (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="font-gotham font-medium text-white text-lg hover:underline underline-offset-4 transition"
                        >
                            {item.label}
                        </Link>
                    ) : (
                        <a
                            key={item.label}
                            href={item.href}
                            className="font-gotham font-medium text-white text-lg hover:underline underline-offset-4 transition"
                            onClick={(e) => handleSmoothScroll(e, item.href)}
                        >
                            {item.label}
                        </a>
                    )
                )}
            </nav>
            <div className="flex gap-4 items-center text-white text-2xl">
                <span className="cursor-pointer hidden md:inline">
                    <Image
                        src="/assets/icons/phone.svg"
                        alt="phone"
                        width={24}
                        height={24}
                    />
                </span>
                <span className="cursor-pointer">
                    <Image
                        src="/assets/icons/cart.svg"
                        alt="cart"
                        width={24}
                        height={24}
                    />
                </span>
                <span className="cursor-pointer hidden md:inline">
                    <Image
                        src="/assets/icons/user.svg"
                        alt="user"
                        width={24}
                        height={24}
                    />
                </span>
                <button
                    className="md:hidden ml-2"
                    aria-label="Відкрити меню"
                    onClick={() => setOpen(true)}
                >
                    <Image
                        src="/assets/icons/burger.svg"
                        alt="menu"
                        width={32}
                        height={32}
                        style={{ filter: 'invert(1)' }}
                    />
                </button>
            </div>
            {open && (
                <div
                    className="fixed inset-0 z-50 flex flex-col min-h-screen h-full w-full bg-white"
                    style={{
                        backgroundImage: "url('/assets/images/bg2.svg')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <div className="flex items-center justify-between px-4 py-4">
                        <div className="font-gotham font-medium text-white text-xl">
                            Лого
                        </div>
                        <div className="flex gap-4 items-center">
                            <span>
                                <Image
                                    src="/assets/icons/cart.svg"
                                    alt="cart"
                                    width={28}
                                    height={28}
                                />
                            </span>
                            <button
                                aria-label="Закрити меню"
                                onClick={() => setOpen(false)}
                            >
                                <Image
                                    src="/assets/icons/close.svg"
                                    alt="close"
                                    width={32}
                                    height={32}
                                    style={{ filter: 'invert(1)' }}
                                />
                            </button>
                        </div>
                    </div>
                    <nav className="flex flex-col items-center justify-center flex-1 gap-10">
                        {nav.map((item) =>
                            item.href === '/catalog' ? (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="font-gotham font-medium text-white text-2xl"
                                    onClick={() => setOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="font-gotham font-medium text-white text-2xl"
                                    onClick={(e) =>
                                        handleSmoothScroll(e, item.href)
                                    }
                                >
                                    {item.label}
                                </a>
                            )
                        )}
                    </nav>
                    <div className="flex justify-center pb-8">
                        <a
                            href="tel:+380508886010"
                            className="flex items-center gap-2 bg-white text-black rounded-full px-4 py-2 text-lg font-medium shadow-md"
                        >
                            <Image
                                src="/assets/icons/phone.svg"
                                alt="phone"
                                width={22}
                                height={22}
                            />
                            + 050 888 6010
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
