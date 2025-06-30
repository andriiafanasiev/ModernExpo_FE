'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';

export default function ReviewsSection() {
    return (
        <section className="w-full max-w-6xl mx-auto mt-12 px-4 md:px-0">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 md:mb-14">
                Відгуки
            </h2>
            <Swiper
                spaceBetween={24}
                slidesPerView={1}
                breakpoints={{
                    768: { slidesPerView: 3 },
                }}
                pagination={{ clickable: true }}
                className="!pb-10"
            >
                {[1, 2, 3, 4].map((n) => (
                    <SwiperSlide key={n}>
                        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col h-full min-h-[370px] max-w-[420px] mx-auto">
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-3">
                                    <Image
                                        src="/assets/images/partners/atb.png"
                                        alt="АТБ"
                                        width={60}
                                        height={32}
                                        className="object-contain h-8 w-auto"
                                    />
                                    <div className="font-semibold text-base md:text-lg">
                                        Маркетинг-відділ мережі &quot;АТБ&quot;
                                    </div>
                                </div>
                                <span className="text-xs text-gray-500">
                                    15.03.2023
                                </span>
                            </div>
                            <div className="text-sm md:text-base mb-4">
                                Все чітко, оперативно та з урахуванням наших
                                побажань. Дякуємо за професіоналізм!
                            </div>
                            <div className="flex-1 flex items-center justify-center">
                                <div className="w-full h-32 md:h-36 bg-[#E5E5E5] rounded-xl flex items-center justify-center text-lg text-black/80">
                                    Відео
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
