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
                <span className="cursor-pointer text-white">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.80722 26C7.09156 26 6.47912 25.7456 5.96992 25.2369C5.46071 24.7281 5.20568 24.1158 5.20481 23.4C5.20394 22.6841 5.45898 22.0722 5.96992 21.5644C6.48086 21.0565 7.09329 20.8017 7.80722 20.8C8.52114 20.7982 9.13401 21.053 9.64581 21.5644C10.1576 22.0757 10.4122 22.6876 10.4096 23.4C10.407 24.1124 10.1524 24.7247 9.64581 25.2369C9.13921 25.7491 8.52635 26.0034 7.80722 26ZM20.8192 26C20.1036 26 19.4911 25.7456 18.9819 25.2369C18.4727 24.7281 18.2177 24.1158 18.2168 23.4C18.216 22.6841 18.471 22.0722 18.9819 21.5644C19.4929 21.0565 20.1053 20.8017 20.8192 20.8C21.5332 20.7982 22.146 21.053 22.6578 21.5644C23.1696 22.0757 23.4242 22.6876 23.4216 23.4C23.419 24.1124 23.1644 24.7247 22.6578 25.2369C22.1512 25.7491 21.5384 26.0034 20.8192 26ZM5.46505 2.6H24.6578C25.1566 2.6 25.5361 2.8223 25.7963 3.2669C26.0566 3.7115 26.0674 4.16086 25.8289 4.61499L21.2096 12.935C20.971 13.3683 20.6514 13.7041 20.2506 13.9425C19.8498 14.1808 19.4105 14.3 18.9325 14.3H9.23854L7.80722 16.9H22.1204C22.4891 16.9 22.7984 17.0248 23.0482 17.2744C23.298 17.524 23.4225 17.8325 23.4216 18.2C23.4208 18.5674 23.2959 18.8764 23.0469 19.1269C22.7979 19.3773 22.4891 19.5017 22.1204 19.5H7.80722C6.83131 19.5 6.09397 19.0723 5.59517 18.2169C5.09638 17.3615 5.07469 16.5108 5.53011 15.665L7.28674 12.48L2.60241 2.6H1.30121C0.932533 2.6 0.623714 2.4752 0.374751 2.2256C0.125787 1.976 0.000871955 1.66746 4.4869e-06 1.3C-0.000862981 0.932532 0.124052 0.623999 0.374751 0.3744C0.625449 0.1248 0.934267 0 1.30121 0H3.41566C3.65421 0 3.88192 0.065 4.09879 0.195C4.31566 0.325 4.47831 0.509166 4.58674 0.747499L5.46505 2.6Z"
                            fill="currentColor"
                        />
                    </svg>
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
