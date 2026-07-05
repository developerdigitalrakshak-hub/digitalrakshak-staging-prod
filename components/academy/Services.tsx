"use client";

import Image from "next/image";
import { ArrowUpRight, Fingerprint, FileCheck, AlertTriangle, Scale, Code } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

interface Category {
  id: number;
  badge: string;
  title: string;
  description: string;
  image: string;
  IconComponent: React.ElementType;
}

const categories: Category[] = [
  {
    id: 1,
    badge: "IDENTITY",
    title: "KYC & Identity Systems",
    description: "How the core pieces fit together. Learn the mechanics behind Aadhaar, PAN, DigiLocker, OCR document parsing, and how to handle biometric and identity matching reliably.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    IconComponent: Fingerprint,
  },
  {
    id: 2,
    badge: "SCREENING",
    title: "Background Verification (BGV)",
    description: "De-risking your hiring pipeline. We break down the essentials of employment histories, educational checks, criminal record checks, and how to set up fair, objective risk scores.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    IconComponent: FileCheck,
  },
  {
    id: 3,
    badge: "INTELLIGENCE",
    title: "Fraud & Risk Intelligence",
    description: "Going beyond basic checks. Learn how to spot synthetic identity fraud, set up automated AML screening, and spot high-risk patterns before they disrupt your platform.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    IconComponent: AlertTriangle,
  },
  {
    id: 4,
    badge: "COMPLIANCE",
    title: "Laws & Regulations",
    description: "What you actually need to do to stay legal. Plain-English breakdowns of the DPDP Act, GDPR basics, ISO standards, and shifting financial regulations.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
    IconComponent: Scale,
  },
  {
    id: 5,
    badge: "DEVELOPERS",
    title: "API & Integration Guides",
    description: "Built for developers. Straightforward tutorials on connecting our verification tools to your app, handling webhooks, and keeping your systems fast and resilient.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    IconComponent: Code,
  },
];

function CategoryCard({ badge, title, description, image, IconComponent }: Category) {
  return (
    <div className="group relative flex flex-col rounded-2xl shadow-sm bg-white cursor-pointer overflow-hidden border border-slate-100 min-h-[460px]">
      {/* Image */}
      <div className="relative w-full h-[200px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Footer / Content area */}
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
        <div className="flex-grow">
          <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400 mb-1">
            {badge}
          </p>
          <h3 className="text-[18px] font-bold text-slate-900 leading-snug mb-3">
            {title}
          </h3>
          <p className="text-sm text-slate-500 leading-relaxed line-clamp-4">
            {description}
          </p>
        </div>

        {/* Action Row */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
          <span className="text-xs text-blue-600 font-semibold group-hover:underline">Explore Resources</span>
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
    <section id="categories" className="bg-[#eef0f4] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full border border-slate-300 bg-white px-5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 shadow-sm">
            Learning Categories
          </span>
          <h2 className="mt-5 text-[2.6rem] font-extrabold leading-[1.15] tracking-tight text-slate-900 md:text-5xl">
            Explore Our Comprehensive
            <br />
            Knowledge Base & Blueprints
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
          {categories.map((c) => (
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
