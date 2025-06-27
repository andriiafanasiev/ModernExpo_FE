'use client';
import { useState, useEffect } from 'react';
import Select from '@/components/ui/Select';
import Button from '@/components/ui/Button';
import Image from 'next/image';

const regions = [
    { label: 'Дніпропетровська область', value: 'dnp' },
    { label: 'Київська область', value: 'kyiv' },
    { label: 'Львівська область', value: 'lviv' },
];
const cities: Record<string, { label: string; value: string }[]> = {
    dnp: [
        { label: 'Дніпро', value: 'dnipro' },
        { label: 'Кривий Ріг', value: 'kriviy' },
    ],
    kyiv: [
        { label: 'Київ', value: 'kyiv' },
        { label: 'Біла Церква', value: 'bc' },
    ],
    lviv: [
        { label: 'Львів', value: 'lviv' },
        { label: 'Дрогобич', value: 'drohobych' },
    ],
};
const cards = [
    {
        id: 1,
        city: 'Дніпро',
        address: 'ТЦ Пасаж, пр. Дмитра Яворницького 50',
        img: '/assets/images/catalog/1.jpg',
    },
    {
        id: 2,
        city: 'Дніпро',
        address: 'ТЦ Пасаж, пр. Дмитра Яворницького 50',
        img: '/assets/images/catalog/1.jpg',
    },
    {
        id: 3,
        city: 'Дніпро',
        address: 'ТЦ Пасаж, пр. Дмитра Яворницького 50',
        img: '/assets/images/catalog/1.jpg',
    },
    {
        id: 4,
        city: 'Дніпро',
        address: 'Заводська Набережна Вул., 4 - Червоний Камінь Вул., В Центр',
        img: '/assets/images/catalog/2.jpg',
    },
    {
        id: 5,
        city: 'Дніпро',
        address: 'ТЦ Пасаж, пр. Дмитра Яворницького 50',
        img: '/assets/images/catalog/1.jpg',
    },
    {
        id: 6,
        city: 'Дніпро',
        address: 'ТЦ Пасаж, пр. Дмитра Яворницького 50',
        img: '/assets/images/catalog/1.jpg',
    },
];

export default function CatalogSection() {
    const [region, setRegion] = useState('dnp');
    const [city, setCity] = useState('dnipro');
    const [page, setPage] = useState(1);
    const [isMobile, setIsMobile] = useState(false);
    const perPage = isMobile ? 3 : 6;
    const totalPages = Math.ceil(cards.length / perPage);
    const pagedCards = cards.slice((page - 1) * perPage, page * perPage);
    useEffect(() => {
        setPage(1);
    }, [region, city]);
    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    return (
        <section className="w-full max-w-6xl mx-auto mt-16 px-4 md:px-0">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                Каталог
            </h2>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center mb-8">
                <Select
                    options={regions}
                    value={region}
                    onChange={(v) => {
                        setRegion(v);
                        setCity(cities[v][0].value);
                    }}
                    placeholder="Оберіть область"
                    className="max-w-xs"
                />
                <Select
                    options={cities[region]}
                    value={city}
                    onChange={setCity}
                    placeholder="Оберіть місто"
                    className="max-w-xs"
                />
                <Button className="w-full md:w-auto md:min-w-[160px]">
                    Пошук
                </Button>
            </div>
            <div
                className={`grid ${
                    isMobile ? 'grid-cols-1' : 'md:grid-cols-3'
                } gap-6`}
            >
                {pagedCards.map((card) => (
                    <div
                        key={card.id}
                        className="bg-white rounded-2xl shadow-lg p-4 flex flex-col h-full"
                    >
                        <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4">
                            <Image
                                src={card.img}
                                alt={card.city}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex-1 flex flex-col gap-1 mb-4">
                            <span className="font-semibold text-lg">
                                м.{card.city}
                            </span>
                            <span className="text-sm text-black/80">
                                {card.address}
                            </span>
                        </div>
                        <Button variant="purple">Детальніше</Button>
                    </div>
                ))}
            </div>
            {cards.length > perPage && (
                <div className="flex justify-center items-center gap-4 mt-8">
                    <button
                        className="text-[32px] text-[var(--color-purple)] disabled:text-gray-300 px-2"
                        onClick={() => setPage(page - 1)}
                        disabled={page === 1}
                        aria-label="Попередня сторінка"
                    >
                        &lt;
                    </button>
                    <div className="flex gap-3">
                        {Array.from({ length: totalPages }).map((_, n) => (
                            <button
                                key={n}
                                className={`w-4 h-4 rounded-full ${
                                    page === n + 1
                                        ? 'bg-[var(--color-purple)]'
                                        : 'bg-gray-300'
                                } transition`}
                                onClick={() => setPage(n + 1)}
                                aria-label={`Сторінка ${n + 1}`}
                            />
                        ))}
                    </div>
                    <button
                        className="text-[32px] text-[var(--color-purple)] disabled:text-gray-300 px-2"
                        onClick={() => setPage(page + 1)}
                        disabled={page === totalPages}
                        aria-label="Наступна сторінка"
                    >
                        &gt;
                    </button>
                </div>
            )}
        </section>
    );
}
