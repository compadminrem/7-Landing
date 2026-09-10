import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Monitor, ArrowRight, CircleCheck as CheckCircle2, Star, Zap } from "lucide-react";
import { siteData } from "@/data/siteData";

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background pt-16 pb-20">
      <div className="absolute inset-0 bg-dots opacity-50" />
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute left-0 bottom-0 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

      <div className="container relative mx-auto px-4">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="animate-fade-up">
            <Badge variant="secondary" className="mb-5 gap-1.5 border-primary/20 bg-primary/5 py-1.5 pl-2.5 pr-3.5 text-primary">
              <span className="flex h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              {siteData.hero.badge}
            </Badge>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl text-balance">
              {siteData.hero.title.split(" ").slice(0, 2).join(" ")}{" "}
              <span className="gradient-text">{siteData.hero.title.split(" ").slice(2).join(" ")}</span>
            </h1>

            <p className="mt-5 max-w-lg text-lg text-muted-foreground text-balance">
              {siteData.hero.subtitle}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 px-7 text-base">
                <a href="#booking">
                  {siteData.hero.ctaPrimary}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-7 text-base">
                <a href="#contacts">{siteData.hero.ctaSecondary}</a>
              </Button>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-success" />
                Гарантия 24 месяца
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="h-4 w-4 text-warning" />
                Срочный ремонт
              </span>
              <span className="flex items-center gap-1.5">
                <Star className="h-4 w-4 fill-warning text-warning" />
                4.9 / 5 — 500+ отзывов
              </span>
            </div>
          </div>

          <div className="relative animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <div className="relative overflow-hidden rounded-2xl border border-border shadow-2xl">
              <img
                src={siteData.hero.image}
                alt="Ремонт мониторов"
                className="h-[420px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
            </div>
            <Card className="absolute -bottom-5 -left-5 w-56 shadow-xl border-primary/20">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl gradient-primary">
                    <Monitor className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">10K+</p>
                    <p className="text-xs text-muted-foreground">отремонтировано</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {siteData.hero.stats.map((stat, i) => (
            <Card key={stat.label} className="border-border/60 shadow-sm transition-all hover:shadow-md hover:border-primary/30 animate-fade-up" style={{ animationDelay: `${0.3 + i * 0.1}s` }}>
              <CardContent className="p-5 text-center">
                <p className="text-3xl font-extrabold gradient-text">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
