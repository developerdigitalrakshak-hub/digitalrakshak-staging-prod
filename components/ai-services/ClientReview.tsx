"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { ArrowLeft, ArrowRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "William Jackson",
    role: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    review:
      "I believe in lifelong learning and they are a great place to learn from experts. I have learned a lot and recommend it",
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "UI/UX Designer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    review:
      "Outstanding experience working with the team. Their professionalism and technical expertise exceeded our expectations.",
  },
  {
    id: 3,
    name: "David Miller",
    role: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
    review:
      "The quality of service and attention to detail was exceptional. Highly recommended for anyone seeking reliable solutions.",
  },
];

export default function ClientReview() {
  return (
    <section className="relative overflow-hidden bg-[#f0f4fa] py-20">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute left-[-60px] top-20 h-72 w-72 rounded-full bg-blue-100 opacity-50 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-[-60px] h-72 w-72 rounded-full bg-cyan-100 opacity-50 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6">
        {/* ── Header ── */}
        <div className="mb-12 text-center">
          {/* Badge */}
          <span className="inline-block rounded border border-blue-300 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-widest text-blue-600">
            Our Testimonial
          </span>

          {/* Dot accent */}
          <div className="mx-auto mt-3 h-2 w-2 rounded-full bg-blue-500" />

          <h2 className="mt-4 text-3xl font-extrabold text-slate-900 md:text-5xl">
            What our clients say about us
          </h2>

          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-500">
            Accelerate innovation with world-class tech teams We'll match
            <br />
            you to an entire remote team of incredible
          </p>
        </div>

        {/* ── Carousel + arrows ── */}
        <div className="relative flex items-center">
          {/* Prev arrow — sits outside the card */}
          <button className="testimonial-prev absolute -left-16 z-20 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 shadow transition hover:border-blue-500 hover:text-blue-600">
            <ArrowLeft size={18} />
          </button>

          {/* Next arrow */}
          <button className="testimonial-next absolute -right-16 z-20 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 shadow transition hover:border-blue-500 hover:text-blue-600">
            <ArrowRight size={18} />
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: ".testimonial-prev",
              nextEl: ".testimonial-next",
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop
            className="w-full"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                {/* Card — white, rounded, left blue border */}
                <div className="flex items-stretch overflow-hidden rounded-2xl bg-white shadow-md">
                  {/* Blue left accent bar */}
                  <div className="w-1.5 shrink-0 rounded-l-2xl bg-blue-500" />

                  {/* Card body */}
                  <div className="flex items-center gap-8 px-8 py-10">
                    {/* Avatar */}
                    <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full border-2 border-slate-100 shadow">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Text */}
                    <div>
                      {/* Stars */}
                      <div className="mb-3 flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            size={18}
                            className="fill-blue-500 text-blue-500"
                          />
                        ))}
                      </div>

                      {/* Review */}
                      <p className="text-lg font-semibold leading-snug text-slate-700 md:text-xl">
                        {item.review}
                      </p>

                      {/* Author */}
                      <div className="mt-5">
                        <p className="text-base font-bold text-slate-900">
                          {item.name}
                        </p>
                        <p className="text-sm text-slate-400">{item.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
