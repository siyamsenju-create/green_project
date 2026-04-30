import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const Testimonials = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const testimonials = [
    {
      id: 1,
      name: "Sarah Jenkins",
      location: "Chennai",
      text: "GreenScape completely transformed our backyard. Their attention to detail and creative landscape design exceeded all our expectations. The team was professional and completed the project on time.",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=1"
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Bangalore",
      text: "We hired them for our corporate office terrace garden. It has now become everyone's favorite spot! The artificial grass and vertical gardens are of premium quality. Highly recommended.",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=11"
    },
    {
      id: 3,
      name: "Priya Sharma",
      location: "Hyderabad",
      text: "Their garden maintenance service is top-notch. They come every month and ensure my exotic plants stay healthy. Very knowledgeable team.",
      rating: 4,
      image: "https://i.pravatar.cc/150?img=5"
    }
  ];

  return (
    <section className="py-24 bg-[#EAF4F0] relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-light/20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-primary/10 blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Quote className="mx-auto text-primary w-16 h-16 mb-6 opacity-30" />
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-textDark mb-12">What Our Clients Say</h2>
          
          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            effect="fade"
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            className="pb-16"
          >
            {testimonials.map((testi) => (
              <SwiperSlide key={testi.id}>
                <div className="px-4 md:px-12">
                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-6 h-6 ${i < testi.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <p className="text-xl md:text-2xl text-textDark font-medium leading-relaxed italic mb-8">
                    "{testi.text}"
                  </p>
                  <div className="flex flex-col items-center">
                    <img src={testi.image} alt={testi.name} className="w-16 h-16 rounded-full border-2 border-primary mb-3" />
                    <h4 className="font-bold text-dark text-lg">{testi.name}</h4>
                    <span className="text-textMuted text-sm">{testi.location}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
