import Button from '@/components/ui/Button';
import CatalogSection from '@/components/CatalogSection';

export default function Catalog() {
    return (
        <>
            <div
                className="w-full"
                style={{
                    backgroundImage: "url('/assets/images/bg.svg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="max-w-8xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-[88px] py-12 md:py-20 px-4 md:pt-28 md:px-12">
                    <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left max-w-xl md:max-w-2xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Розмісти свою рекламу вже сьогодні!
                        </h2>
                        <p className="text-white text-base md:text-xl">
                            Маєш бізнес або послугу? Дозволь нам допомогти тобі
                            знайти нових клієнтів.{' '}
                            <br className="hidden md:block" />
                            Швидке та зручне розміщення реклами по всій Україні.
                        </p>
                    </div>
                    <div className="flex-1 flex justify-center md:justify-end items-center w-full md:w-auto">
                        <Button
                            variant="white"
                            className="text-black text-lg md:text-2xl font-bold px-8 md:px-16 py-4 rounded-2xl min-w-[220px] md:min-w-[340px] max-w-[493px] w-full shadow-md"
                        >
                            Зв&apos;язатись з нами
                        </Button>
                    </div>
                </div>
            </div>
            <CatalogSection />
        </>
    );
}

export const metadata = {
    title: 'Каталог білбордів в Україні — Фото, мапа, фільтри',
    description:
        'Каталог білбордів по всій Україні з фото, адресами та фільтрами. Знайдіть ідеальну рекламну площину для вашого бізнесу.',
    keywords: [
        'каталог білбордів',
        'рекламні площини',
        'фільтри',
        'Україна',
        'зовнішня реклама',
    ],
    openGraph: {
        title: 'Каталог білбордів в Україні — Фото, мапа, фільтри',
        description:
            'Каталог білбордів по всій Україні з фото, адресами та фільтрами. Знайдіть ідеальну рекламну площину для вашого бізнесу.',
        url: 'https://modern-expo.com/catalog',
    },
};
