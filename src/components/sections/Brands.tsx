import { siteData } from "@/data/siteData";
import { Monitor, MonitorSmartphone } from "lucide-react";

const iconMap: Record<string, typeof Monitor> = {
  Monitor,
  MonitorSmartphone,
};

const Brands = () => {
  return (
    <section id="brands" className="border-y bg-muted/20 py-10">
      <div className="container mx-auto px-4">
        <p className="mb-6 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Ремонтируем мониторы всех брендов
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8">
          {siteData.brands.map((brand) => {
            const Icon = iconMap[brand.icon] || Monitor;
            return (
              <div
                key={brand.name}
                className="group flex items-center gap-2.5 rounded-xl border border-border/50 bg-background px-5 py-3 transition-all hover:border-primary/40 hover:shadow-md"
              >
                <Icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                <span className="text-base font-bold tracking-tight text-muted-foreground transition-colors group-hover:text-foreground">
                  {brand.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Brands;
