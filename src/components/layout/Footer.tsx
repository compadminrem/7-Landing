import { Monitor, Phone, Mail, MapPin, Clock, Send, MessageCircle, Share2, Mail as MailIcon } from "lucide-react";
import { siteData } from "@/data/siteData";
import { Separator } from "@/components/ui/separator";

const socialIcons: Record<string, typeof Send> = {
  Send,
  MessageCircle,
  Share2,
  Mail: MailIcon,
};

const footerLinks = [
  {
    title: "Услуги",
    links: [
      { label: "Замена матрицы", href: "#services" },
      { label: "Ремонт подсветки", href: "#services" },
      { label: "Ремонт платы питания", href: "#services" },
      { label: "Замена шлейфов", href: "#services" },
      { label: "Чистка и ТО", href: "#services" },
    ],
  },
  {
    title: "Компания",
    links: [
      { label: "О нас", href: "#advantages" },
      { label: "Мастера", href: "#team" },
      { label: "Галерея работ", href: "#gallery" },
      { label: "Отзывы", href: "#reviews" },
      { label: "Вопросы и ответы", href: "#faq" },
    ],
  },
  {
    title: "Информация",
    links: [
      { label: "Цены", href: "#pricing" },
      { label: "Запись на ремонт", href: "#booking" },
      { label: "Контакты", href: "#contacts" },
      { label: "Гарантия", href: "#advantages" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#hero" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-primary">
                <Monitor className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold">{siteData.brand.name}</span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              {siteData.brand.tagline}. Ремонтируем планшеты всех брендов с гарантией до 24 месяцев.
            </p>
            <div className="mt-6 space-y-2.5 text-sm">
              <a href={`tel:${siteData.brand.phone.replace(/[^+\d]/g, "")}`} className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary">
                <Phone className="h-4 w-4 text-primary" />
                {siteData.brand.phone}
              </a>
              <a href={`mailto:${siteData.brand.email}`} className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary">
                <Mail className="h-4 w-4 text-primary" />
                {siteData.brand.email}
              </a>
              <p className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                {siteData.brand.address}
              </p>
              <p className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4 text-primary" />
                {siteData.brand.workHours}
              </p>
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="mb-4 text-sm font-semibold">{section.title}</h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © 2026 {siteData.brand.name}. Все права защищены.
          </p>
          <div className="flex items-center gap-3">
            {siteData.contacts.socials.map((social) => {
              const Icon = socialIcons[social.icon] || Send;
              return (
                <a
                  key={social.name}
                  href="#contacts"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-all hover:border-primary hover:text-primary hover:shadow-md"
                  aria-label={social.name}
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
