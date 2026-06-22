"use client";

import Image from "next/image";
import { ArrowUpRight, Brain, BarChart2, Globe } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

interface Service {
  id: number;
  category: string;
  title: string;
  image: string;
  IconComponent: React.ElementType;
}

const services: Service[] = [
  {
    id: 1,
    category: "ROBOT",
    title: "Machine Learning",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
    IconComponent: Brain,
  },
  {
    id: 2,
    category: "SOLUTION",
    title: "Data Analysis",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
    IconComponent: BarChart2,
  },
  {
    id: 3,
    category: "DESIGN",
    title: "Web Development",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    IconComponent: Globe,
  },
  {
    id: 4,
    category: "CLOUD",
    title: "Cloud Solutions",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
    IconComponent: Globe,
  },
  {
    id: 5,
    category: "SECURITY",
    title: "Cyber Security",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    IconComponent: Brain,
  },
];

function ServiceCard({ category, title, image, IconComponent }: Service) {
  return (
    <div className="group relative flex flex-col rounded-2xl shadow-sm bg-white cursor-pointer overflow-hidden">

      {/* Image */}
      <div className="relative w-full h-[260px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* White footer */}
      <div className="relative flex items-center justify-between bg-white px-5 pb-4 pt-7">

        {/*
          Icon badge:
          - position: absolute, -top-5 so it straddles the image/footer boundary
          - left-4 aligns it to the left edge inside the card
          - white bg + shadow, blue icon inside
          - on hover: bg turns blue, icon turns white
        */}
        <div
          className="
            absolute -top-5 left-4 z-10
            flex h-11 w-11 items-center justify-center
            rounded-full bg-white shadow-md border border-slate-100
            transition-colors duration-200
            group-hover:bg-blue-600
          "
        >
          <IconComponent
            size={20}
            strokeWidth={1.5}
            className="text-blue-600 transition-colors duration-200 group-hover:text-white"
          />
        </div>

        {/* Text */}
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400 mb-0.5">
            {category}
          </p>
          <h3 className="text-[17px] font-bold text-slate-900 leading-snug">
            {title}
          </h3>
        </div>

        {/* Arrow — turns blue on card hover */}
        <button
          aria-label={`Go to ${title}`}
          className="
            flex h-10 w-10 shrink-0 items-center justify-center
            rounded-full bg-slate-100 text-slate-500
            transition-colors duration-200
            group-hover:bg-blue-600 group-hover:text-white
          "
        >
          <ArrowUpRight size={17} />
        </button>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section className="bg-[#eef0f4] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full border border-slate-300 bg-white px-5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 shadow-sm">
            Our Services
          </span>
          <h2 className="mt-5 text-[2.6rem] font-extrabold leading-[1.15] tracking-tight text-slate-900 md:text-5xl">
            We Deal With The Aspects Of
            <br />
            Professional IT Services
          </h2>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          pagination={{
            clickable: true,
            el: ".services-pagination",
            bulletClass: "svc-dot",
            bulletActiveClass: "svc-dot-active",
            renderBullet: (_index: number, className: string) =>
              `<span class="${className}"></span>`,
          }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
        >
          {services.map((s) => (
            <SwiperSlide key={s.id}>
              <ServiceCard {...s} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination dots */}
        <div className="services-pagination mt-8 flex items-center justify-center gap-2" />
      </div>

      <style>{`
        .svc-dot {
          display: inline-block;
          height: 8px;
          width: 8px;
          border-radius: 9999px;
          background: #94a3b8;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .svc-dot-active {
          background: #2563eb;
          width: 22px;
        }
      `}</style>
    </section>
  );
}
