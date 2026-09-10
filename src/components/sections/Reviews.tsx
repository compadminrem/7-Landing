import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { siteData } from "@/data/siteData";
import { Star, MessageSquare, Send, ThumbsUp } from "lucide-react";

const Reviews = () => {
  const { toast } = useToast();
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({
      title: "Отзыв отправлен!",
      description: "Спасибо за ваш отзыв. Он появится на сайте после проверки модератором.",
    });
    (e.target as HTMLFormElement).reset();
    setRating(5);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="reviews" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <Badge variant="secondary" className="mb-3 border-primary/20 bg-primary/5 text-primary">
            <MessageSquare className="mr-1 h-3.5 w-3.5" />
            Отзывы
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Отзывы наших клиентов
          </h2>
          <p className="mt-3 text-muted-foreground text-balance">
            Более 500 положительных отзывов. Поделитесь своим опытом — это поможет другим
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Reviews list */}
          <div className="space-y-4 lg:col-span-3">
            {siteData.reviews.map((review, i) => (
              <Card key={i} className="border-border/60 transition-all hover:shadow-md animate-fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <Avatar className="h-11 w-11 border-2 border-primary/20">
                      <AvatarImage src={review.avatar} alt={review.name} />
                      <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold">{review.name}</p>
                          <p className="text-xs text-muted-foreground">{review.date}</p>
                        </div>
                        <Badge variant="outline" className="text-xs font-normal">
                          {review.monitor}
                        </Badge>
                      </div>
                      <div className="mt-1.5 flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <Star
                            key={idx}
                            className={`h-4 w-4 ${idx < review.rating ? "fill-warning text-warning" : "text-muted-foreground/30"}`}
                          />
                        ))}
                      </div>
                      <p className="mt-3 text-sm text-muted-foreground">{review.text}</p>
                      <div className="mt-3 flex items-center gap-3">
                        <Button variant="ghost" size="sm" className="h-7 gap-1.5 text-xs text-muted-foreground">
                          <ThumbsUp className="h-3 w-3" />
                          Полезно
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Review form */}
          <div className="lg:col-span-2">
            <Card className="sticky top-24 border-primary/20 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold">Оставить отзыв</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Ваше мнение важно для нас и других клиентов
                </p>
                <Separator className="my-4" />

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label>Оценка</Label>
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setRating(idx + 1)}
                          onMouseEnter={() => setHoverRating(idx + 1)}
                          onMouseLeave={() => setHoverRating(0)}
                          className="transition-transform hover:scale-110"
                        >
                          <Star
                            className={`h-7 w-7 ${(hoverRating || rating) > idx ? "fill-warning text-warning" : "text-muted-foreground/30"}`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="review-name">Ваше имя</Label>
                    <Input id="review-name" placeholder="Как вас зовут?" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="review-email">Email (не публикуется)</Label>
                    <Input id="review-email" type="email" placeholder="email@example.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label>Модель планшета</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите бренд" />
                      </SelectTrigger>
                      <SelectContent>
                        {siteData.brands.map((brand) => (
                          <SelectItem key={brand.name} value={brand.name}>{brand.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Тип ремонта</Label>
                    <RadioGroup className="grid grid-cols-2 gap-2">
                      {siteData.services.slice(0, 4).map((service) => (
                        <div key={service.title} className="flex items-center gap-2">
                          <RadioGroupItem id={`r-${service.title}`} value={service.title} />
                          <Label htmlFor={`r-${service.title}`} className="text-xs font-normal cursor-pointer">
                            {service.title}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="review-text">Ваш отзыв</Label>
                    <Textarea
                      id="review-text"
                      placeholder="Расскажите о вашем опыте обращения в наш сервис..."
                      rows={4}
                      required
                    />
                  </div>

                  <div className="flex items-start gap-2">
                    <Checkbox id="review-consent" required />
                    <Label htmlFor="review-consent" className="text-xs text-muted-foreground font-normal cursor-pointer leading-relaxed">
                      Я согласен на обработку персональных данных и публикацию отзыва
                    </Label>
                  </div>

                  <Button type="submit" className="w-full" size="lg" disabled={submitted}>
                    {submitted ? "Отправлено!" : "Отправить отзыв"}
                    {!submitted && <Send className="ml-2 h-4 w-4" />}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
