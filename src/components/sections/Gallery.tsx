import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { siteData } from "@/data/siteData";
import { Images, ZoomIn, X } from "lucide-react";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(siteData.gallery.map((item) => item.category)));
  const filtered = selectedCategory
    ? siteData.gallery.filter((item) => item.category === selectedCategory)
    : siteData.gallery;

  return (
    <section id="gallery" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <Badge variant="secondary" className="mb-3 border-primary/20 bg-primary/5 text-primary">
            <Images className="mr-1 h-3.5 w-3.5" />
            Галерея
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Наши работы в фотографиях
          </h2>
          <p className="mt-3 text-muted-foreground text-balance">
            Посмотрите, как мы ремонтируем мониторы — от диагностики до финального тестирования
          </p>
        </div>

        <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(null)}
          >
            Все работы
          </Button>
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>

        <ScrollArea className="w-full">
          <div className="grid grid-cols-2 gap-4 pb-4 sm:grid-cols-3 lg:grid-cols-4">
            {filtered.map((item, i) => (
              <Dialog key={`${item.title}-${i}`}>
                <DialogTrigger asChild>
                  <Card
                    className="group relative cursor-pointer overflow-hidden border-border/60 transition-all hover:shadow-xl hover:border-primary/30 animate-fade-up"
                    style={{ animationDelay: `${i * 0.06}s` }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/90 backdrop-blur-sm">
                          <ZoomIn className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      <Badge className="absolute left-3 top-3" variant="secondary">
                        {item.category}
                      </Badge>
                    </div>
                    <CardContent className="p-3">
                      <p className="text-sm font-medium">{item.title}</p>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-3xl p-0 overflow-hidden">
                  <DialogTitle className="sr-only">{item.title}</DialogTitle>
                  <div className="relative">
                    <img src={item.image} alt={item.title} className="w-full object-contain max-h-[70vh]" />
                    <div className="p-4">
                      <Badge variant="secondary" className="mb-2">{item.category}</Badge>
                      <p className="text-lg font-bold">{item.title}</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </ScrollArea>
      </div>
    </section>
  );
};

export default Gallery;
