import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { siteData } from "@/data/siteData";
import {
  Search, ShieldCheck, Clock, PackageCheck, Award, Truck,
} from "lucide-react";

const iconMap: Record<string, typeof Search> = {
  Search, ShieldCheck, Clock, PackageCheck, Award, Truck,
};

const Advantages = () => {
  return (
    <section id="advantages" className="py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <Badge variant="secondary" className="mb-3 border-primary/20 bg-primary/5 text-primary">Почему мы</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Почему выбирают МониторМастер
          </h2>
          <p className="mt-3 text-muted-foreground text-balance">
            Мы создаём сервис, которому доверяют — тысячи довольных клиентов подтверждают это
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {siteData.advantages.map((adv, i) => {
            const Icon = iconMap[adv.icon] || Search;
            return (
              <Card
                key={adv.title}
                className="group border-border/60 transition-all hover:shadow-xl hover:border-primary/30 animate-fade-up"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-6 w-6 text-primary transition-colors group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold">{adv.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{adv.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
