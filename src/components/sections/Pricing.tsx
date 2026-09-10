import { Badge } from "@/components/ui/badge";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { siteData } from "@/data/siteData";
import { Tag, Clock, CircleCheck as CheckCircle2, ArrowRight } from "lucide-react";

const Pricing = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <Badge variant="secondary" className="mb-3 border-primary/20 bg-primary/5 text-primary">Цены</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Честные цены без скрытых платежей
          </h2>
          <p className="mt-3 text-muted-foreground text-balance">
            Стоимость ремонта зависит от модели монитора и сложности поломки. Точную цену называем после диагностики.
          </p>
        </div>

        <Tabs defaultValue="table" className="mx-auto max-w-4xl">
          <TabsList className="mb-6 grid w-full max-w-xs mx-auto grid-cols-2">
            <TabsTrigger value="table">Таблица</TabsTrigger>
            <TabsTrigger value="cards">Карточки</TabsTrigger>
          </TabsList>

          <TabsContent value="table">
            <Card className="border-border/60 shadow-md">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50 hover:bg-muted/50">
                      <TableHead className="text-base font-semibold">Услуга</TableHead>
                      <TableHead className="text-base font-semibold">Стоимость</TableHead>
                      <TableHead className="text-base font-semibold">Срок</TableHead>
                      <TableHead className="hidden text-base font-semibold sm:table-text">Описание</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {siteData.pricing.map((item) => (
                      <TableRow key={item.service} className="transition-colors hover:bg-primary/5">
                        <TableCell className="font-medium">{item.service}</TableCell>
                        <TableCell>
                          <span className="font-bold text-primary">{item.price}</span>
                        </TableCell>
                        <TableCell>
                          <span className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Clock className="h-3.5 w-3.5" />
                            {item.time}
                          </span>
                        </TableCell>
                        <TableCell className="hidden text-sm text-muted-foreground sm:table-cell">
                          {item.description}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cards">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {siteData.pricing.map((item, i) => (
                <Card key={item.service} className="border-border/60 transition-all hover:shadow-lg hover:border-primary/30 animate-fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <Tag className="h-4 w-4 text-primary" />
                      <h3 className="text-lg font-bold">{item.service}</h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-extrabold text-primary">{item.price}</p>
                    <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" />
                      {item.time}
                    </p>
                    <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CheckCircle2 className="h-4 w-4 text-success" />
            Диагностика бесплатно при согласии на ремонт
          </div>
          <Button asChild size="lg">
            <a href="#booking">
              Записаться на ремонт
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
