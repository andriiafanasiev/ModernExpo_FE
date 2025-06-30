import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="uk">
            <body className="antialiased bg-[var(--color-bg)] ">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}

export const metadata = {
    title: {
        default:
            'Реклама на білбордах по всій Україні — Оренда рекламних площин',
        template: '%s | Реклама на білбордах',
    },
    description:
        'Оренда білбордів по всій Україні. Каталог з фільтрами, фото, геолокацією. Зручне замовлення онлайн.',
    keywords: ['білборди', 'реклама', 'зовнішня реклама', 'Україна', 'каталог'],
    authors: [{ name: 'Modern Expo' }],
    openGraph: {
        type: 'website',
        locale: 'uk_UA',
        url: 'https://modern-expo.com',
        siteName: 'Modern Expo',
        images: [
            {
                url: '/og-main.jpg',
                width: 1200,
                height: 630,
                alt: 'Реклама на білбордах по всій Україні',
            },
        ],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'your-google-verification-code',
    },
};
