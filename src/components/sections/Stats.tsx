import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { siteData } from "@/data/siteData";
import { ChartBar as BarChart3, TrendingUp } from "lucide-react";

const AnimatedNumber = ({ value, suffix }: { value: number; suffix: string }) => {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const duration = 1500;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(value * eased);
            if (progress < 1) requestAnimationFrame(animate);
            else setDisplay(value);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  const formatted = value % 1 !== 0 ? display.toFixed(1) : Math.round(display).toLocaleString();

  return (
    <div ref={ref}>
      <span className="text-4xl font-extrabold gradient-text sm:text-5xl">
        {formatted}{suffix}
      </span>
    </div>
  );
};

const Stats = () => {
  return (
    <section id="stats" className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <Badge variant="secondary" className="mb-3 border-primary/20 bg-primary/5 text-primary">
            <BarChart3 className="mr-1 h-3.5 w-3.5" />
            Статистика
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            {siteData.stats.title}
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {siteData.stats.items.map((item, i) => (
            <Card
              key={item.label}
              className="border-border/60 transition-all hover:shadow-lg hover:border-primary/30 animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <AnimatedNumber value={item.value} suffix={item.suffix} />
                <p className="mt-2 flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
                  <TrendingUp className="h-3.5 w-3.5 text-success" />
                  {item.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
