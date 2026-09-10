import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import Brands from "@/components/sections/Brands";
import Services from "@/components/sections/Services";
import Problems from "@/components/sections/Problems";
import Advantages from "@/components/sections/Advantages";
import Process from "@/components/sections/Process";
import Stats from "@/components/sections/Stats";
import Pricing from "@/components/sections/Pricing";
import Gallery from "@/components/sections/Gallery";
import Team from "@/components/sections/Team";
import Reviews from "@/components/sections/Reviews";
import FAQ from "@/components/sections/FAQ";
import Booking from "@/components/sections/Booking";
import CTA from "@/components/sections/CTA";
import Contacts from "@/components/sections/Contacts";

const Index = () => {
  return (
    <Layout>
      {/* Главный экран с оффером и ключевыми преимуществами */}
      <Hero />

      {/* Логотипы брендов — доверие и охват */}
      <Brands />

      {/* Услуги — что мы делаем */}
      <Services />

      {/* Частые неисправности — боли клиента */}
      <Problems />

      {/* Почему выбирают нас — преимущества */}
      <Advantages />

      {/* Как мы работаем — прозрачный процесс */}
      <Process />

      {/* Статистика в цифрах — социальное доказательство */}
      <Stats />

      {/* Цены — прозрачное ценообразование */}
      <Pricing />

      {/* Галерея работ — визуальные доказательства */}
      <Gallery />

      {/* Команда — люди, которым доверяют */}
      <Team />

      {/* Отзывы клиентов — реальный опыт */}
      <Reviews />

      {/* FAQ — снятие возражений */}
      <FAQ />

      {/* Запись на ремонт — целевое действие */}
      <Booking />

      {/* Финальный призыв к действию */}
      <CTA />

      {/* Контакты и форма обратной связи */}
      <Contacts />
    </Layout>
  );
};

export default Index;
