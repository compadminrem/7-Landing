import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { siteData } from "@/data/siteData";
import { ArrowRight, CircleCheck as CheckCircle2, Phone, Clock, Zap } from "lucide-react";

const CTA = () => {
  return (
    <section id="cta" className="py-20">
      <div className="container mx-auto px-4">
        <Card className="relative overflow-hidden border-0 shadow-2xl">
          <div className="absolute inset-0">
            <img
              src={siteData.cta.image}
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-accent/85" />
          </div>

          <CardContent className="relative z-10 p-10 sm:p-16">
            <div className="mx-auto max-w-2xl text-center text-white">
              <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
                Не откладывайте
              </Badge>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-balance">
                {siteData.cta.title}
              </h2>
              <p className="mt-4 text-lg text-white/90 text-balance">
                {siteData.cta.subtitle}
              </p>

              <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/90">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4" />
                  Бесплатная диагностика
                </span>
                <span className="flex items-center gap-1.5">
                  <Zap className="h-4 w-4" />
                  Срочный ремонт
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  Гарантия 24 мес
                </span>
              </div>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild size="lg" variant="secondary" className="h-12 px-8 text-base">
                  <a href="#booking">
                    {siteData.hero.ctaPrimary}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-12 px-8 text-base border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white">
                  <a href={`tel:${siteData.brand.phone.replace(/[^+\d]/g, "")}`}>
                    <Phone className="mr-1.5 h-4 w-4" />
                    {siteData.brand.phone}
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTA;
