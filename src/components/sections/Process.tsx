import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { siteData } from "@/data/siteData";
import { ClipboardList, Search, FileCheck, Wrench, CircleCheck as CheckCircle, ShieldCheck } from "lucide-react";

const iconMap: Record<string, typeof ClipboardList> = {
  ClipboardList, Search, FileCheck, Wrench, CheckCircle, ShieldCheck,
};

const Process = () => {
  return (
    <section id="process" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <Badge variant="secondary" className="mb-3 border-primary/20 bg-primary/5 text-primary">Как мы работаем</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Простой и прозрачный процесс ремонта
          </h2>
          <p className="mt-3 text-muted-foreground text-balance">
            Шесть шагов от заявки до получения готового монитора с гарантией
          </p>
        </div>

        <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteData.process.map((item, i) => {
            const Icon = iconMap[item.icon] || ClipboardList;
            return (
              <Card
                key={item.step}
                className="relative border-border/60 transition-all hover:shadow-lg hover:border-primary/30 animate-fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-primary shadow-md">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-4xl font-extrabold text-primary/10">{item.step}</span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
