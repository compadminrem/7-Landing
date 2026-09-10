import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteData } from "@/data/siteData";
import { TriangleAlert as AlertTriangle, Wrench, ArrowRight } from "lucide-react";

const Problems = () => {
  return (
    <section id="problems" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <Badge variant="secondary" className="mb-3 border-warning/20 bg-warning/5 text-warning">
            <AlertTriangle className="mr-1 h-3.5 w-3.5" />
            Неисправности
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Частые поломки мониторов
          </h2>
          <p className="mt-3 text-muted-foreground text-balance">
            Знакомые проблемы? Мы поможем — от диагностики до полного восстановления
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {siteData.problems.map((problem, i) => (
            <Card
              key={problem.title}
              className="group overflow-hidden border-border/60 transition-all hover:shadow-xl hover:border-primary/30 animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={problem.image}
                  alt={problem.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <h3 className="absolute bottom-3 left-4 right-4 text-lg font-bold text-white">
                  {problem.title}
                </h3>
              </div>
              <CardContent className="p-5">
                <p className="text-sm text-muted-foreground">{problem.description}</p>
                <div className="mt-3 flex items-start gap-2 rounded-lg bg-primary/5 p-3">
                  <Wrench className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <p className="text-xs font-medium text-primary">{problem.solution}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild size="lg">
            <a href="#booking">
              Не нашли свою проблему? Запишитесь на диагностику
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Problems;
