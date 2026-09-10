import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu, Monitor, Phone, Clock } from "lucide-react";
import { siteData } from "@/data/siteData";

const navLinks = [
  { label: "Услуги", href: "#services" },
  { label: "Проблемы", href: "#problems" },
  { label: "Цены", href: "#pricing" },
  { label: "Мастера", href: "#team" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Галерея", href: "#gallery" },
  { label: "Вопросы", href: "#faq" },
  { label: "Контакты", href: "#contacts" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="#hero" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-primary">
            <Monitor className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-bold tracking-tight">{siteData.brand.name}</span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent/10 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="flex flex-col items-end text-xs">
            <a href={`tel:${siteData.brand.phone.replace(/[^+\d]/g, "")}`} className="flex items-center gap-1.5 font-semibold text-foreground">
              <Phone className="h-3.5 w-3.5 text-primary" />
              {siteData.brand.phone}
            </a>
            <span className="flex items-center gap-1 text-muted-foreground">
              <Clock className="h-3 w-3" />
              {siteData.brand.workHours}
            </span>
          </div>
          <Button asChild size="sm">
            <a href="#booking">Записаться</a>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[350px]">
            <div className="flex items-center gap-2.5 pb-6">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-primary">
                <Monitor className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold">{siteData.brand.name}</span>
            </div>
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <SheetClose asChild key={link.href}>
                  <a
                    href={link.href}
                    className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent/10 hover:text-primary"
                  >
                    {link.label}
                  </a>
                </SheetClose>
              ))}
            </nav>
            <div className="mt-6 space-y-3 border-t pt-6">
              <a href={`tel:${siteData.brand.phone.replace(/[^+\d]/g, "")}`} className="flex items-center gap-2 text-sm font-semibold">
                <Phone className="h-4 w-4 text-primary" />
                {siteData.brand.phone}
              </a>
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                {siteData.brand.workHours}
              </p>
              <SheetClose asChild>
                <Button asChild className="w-full">
                  <a href="#booking">Записаться на ремонт</a>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
