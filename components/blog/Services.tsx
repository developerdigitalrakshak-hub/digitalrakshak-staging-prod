"use client";

import Image from "next/image";
import { ArrowUpRight, UserCheck, FileCheck, ShieldAlert, Scale, Code } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

interface BlogCategory {
  id: number;
  badge: string;
  title: string;
  description: string;
  image: string;
  IconComponent: React.ElementType;
}

const blogCategories: BlogCategory[] = [
  {
    id: 1,
    badge: "IDENTITY",
    title: "Onboarding & Identity",
    description: "Best practices for making customer and vendor sign-ups secure, fast, and simple.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
    IconComponent: UserCheck,
  },
  {
    id: 2,
    badge: "SCREENING",
    title: "Background Screening",
    description: "Modern approaches to employee verification, continuous compliance, and building a trusted workforce.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    IconComponent: FileCheck,
  },
  {
    id: 3,
    badge: "FRAUD",
    title: "Fraud Defense",
    description: "A look at emerging fraud tactics, identity theft patterns, and practical ways to mitigate risk.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    IconComponent: ShieldAlert,
  },
  {
    id: 4,
    badge: "COMPLIANCE",
    title: "Regulatory Updates",
    description: "What changes like the DPDP Act or new ISO standards mean for your daily operations, minus the legalese.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
    IconComponent: Scale,
  },
  {
    id: 5,
    badge: "ENGINEERING",
    title: "Tech & Architecture",
    description: "How to build scalable verification pipelines, optimize API calls, and automate your trust infrastructure.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    IconComponent: Code,
  },
];

function CategoryCard({ badge, title, description, image, IconComponent }: BlogCategory) {
  return (
    <div className="group relative flex flex-col rounded-2xl shadow-sm bg-white cursor-pointer overflow-hidden border border-slate-100 min-h-[420px]">
      {/* Image */}
      <div className="relative w-full h-[180px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="relative flex flex-col flex-grow bg-white px-5 pb-6 pt-7">
        {/* Icon badge */}
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
        <div className="flex-grow font-sans">
          <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400 mb-1">
            {badge}
          </p>
          <h3 className="text-[17px] font-bold text-slate-900 leading-snug mb-3">
            {title}
          </h3>
          <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        {/* Action Row */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
          <span className="text-xs text-blue-600 font-semibold group-hover:underline">Read Articles</span>
          <button
            aria-label={`Explore ${title}`}
            className="
              flex h-8 w-8 shrink-0 items-center justify-center
              rounded-full bg-slate-100 text-slate-500
              transition-colors duration-200
              group-hover:bg-blue-600 group-hover:text-white
            "
          >
            <ArrowUpRight size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="write-about" className="bg-[#eef0f4] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full border border-slate-300 bg-white px-5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 shadow-sm">
            Categories
          </span>
          <h2 className="mt-5 text-[2.6rem] font-extrabold leading-[1.15] tracking-tight text-slate-900 md:text-5xl">
            What We Write About
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
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          loop
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
        >
          {blogCategories.map((c) => (
            <SwiperSlide key={c.id}>
              <CategoryCard {...c} />
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
