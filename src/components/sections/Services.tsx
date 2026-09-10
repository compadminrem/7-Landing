import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteData } from "@/data/siteData";
import { Tablet, Cable, BatteryCharging, Cpu, Settings2, Droplets, ArrowRight, CircleCheck as CheckCircle2 } from "lucide-react";

const iconMap: Record<string, typeof Tablet> = {
  Tablet, Cable, BatteryCharging, Cpu, Settings2, Droplets,
};

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <Badge variant="secondary" className="mb-3 border-primary/20 bg-primary/5 text-primary">Услуги</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Полный спектр услуг по ремонту планшетов
          </h2>
          <p className="mt-3 text-muted-foreground text-balance">
            От замены стекла и дисплея до сложного ремонта электроники — решаем любые проблемы с вашим планшетом
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteData.services.map((service, i) => {
            const Icon = iconMap[service.icon] || Tablet;
            return (
              <Card
                key={service.title}
                className="group overflow-hidden border-border/60 transition-all hover:shadow-xl hover:border-primary/30 animate-fade-up"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  {service.badge && (
                    <Badge className="absolute right-3 top-3" variant={service.badge === "Сложно" ? "destructive" : "default"}>
                      {service.badge}
                    </Badge>
                  )}
                  <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-lg gradient-primary shadow-lg">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-muted-foreground">Стоимость</span>
                      <p className="text-lg font-bold text-primary">{service.price}</p>
                    </div>
                    <Button asChild variant="outline" size="sm">
                      <a href="#booking">
                        Записаться
                        <ArrowRight className="ml-1 h-3.5 w-3.5" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <CheckCircle2 className="h-4 w-4 text-success" />
          Все работы выполняются с гарантией. Бесплатная диагностика при согласии на ремонт.
        </div>
      </div>
    </section>
  );
};

export default Services;
