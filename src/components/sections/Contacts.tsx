import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { siteData } from "@/data/siteData";
import {
  Phone, Mail, MapPin, Clock, Send, MessageCircle, Share2, Mail as MailIcon,
  MessageSquarePlus,
} from "lucide-react";

const socialIcons: Record<string, typeof Send> = {
  Send, MessageCircle, Share2, Mail: MailIcon,
};

const Contacts = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Сообщение отправлено!",
      description: "Мы ответим вам в течение 15 минут в рабочее время.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contacts" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <Badge variant="secondary" className="mb-3 border-primary/20 bg-primary/5 text-primary">
            <MessageSquarePlus className="mr-1 h-3.5 w-3.5" />
            Контакты
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            {siteData.contacts.title}
          </h2>
          <p className="mt-3 text-muted-foreground text-balance">
            {siteData.contacts.subtitle}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact info */}
          <div className="space-y-4">
            <Card className="border-border/60 transition-all hover:shadow-md">
              <CardContent className="flex items-center gap-4 p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-primary shrink-0">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Телефон</p>
                  <a href={`tel:${siteData.contacts.phone.replace(/[^+\d]/g, "")}`} className="text-lg font-bold transition-colors hover:text-primary">
                    {siteData.contacts.phone}
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/60 transition-all hover:shadow-md">
              <CardContent className="flex items-center gap-4 p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-primary shrink-0">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href={`mailto:${siteData.contacts.email}`} className="text-lg font-bold transition-colors hover:text-primary">
                    {siteData.contacts.email}
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/60 transition-all hover:shadow-md">
              <CardContent className="flex items-center gap-4 p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-primary shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Адрес сервисного центра</p>
                  <p className="text-base font-semibold">{siteData.contacts.address}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/60 transition-all hover:shadow-md">
              <CardContent className="flex items-center gap-4 p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-primary shrink-0">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Часы работы</p>
                  <p className="text-base font-semibold">{siteData.contacts.workHours}</p>
                </div>
              </CardContent>
            </Card>

            <Separator />

            <div>
              <p className="mb-3 text-sm font-semibold text-muted-foreground">Мы в социальных сетях:</p>
              <div className="flex gap-3">
                {siteData.contacts.socials.map((social) => {
                  const Icon = socialIcons[social.icon] || Send;
                  return (
                    <a
                      key={social.name}
                      href="#"
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background text-muted-foreground transition-all hover:border-primary hover:text-primary hover:shadow-md"
                      aria-label={social.name}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <Card className="border-primary/20 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold">Напишите нам</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Заполните форму, и мы свяжемся с вами в кратчайшие сроки
              </p>
              <Separator className="my-4" />

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="ct-name">Имя *</Label>
                    <Input id="ct-name" placeholder="Ваше имя" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ct-phone">Телефон *</Label>
                    <Input id="ct-phone" type="tel" placeholder="+7 (___) ___-__-__" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="ct-email">Email</Label>
                  <Input id="ct-email" type="email" placeholder="email@example.com" />
                </div>

                <div className="space-y-2">
                  <Label>Тема обращения</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите тему" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="repair">Ремонт монитора</SelectItem>
                      <SelectItem value="diagnostic">Диагностика</SelectItem>
                      <SelectItem value="warranty">Гарантийное обслуживание</SelectItem>
                      <SelectItem value="other">Другое</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="ct-message">Сообщение *</Label>
                  <Textarea
                    id="ct-message"
                    placeholder="Опишите ваш вопрос или проблему..."
                    rows={4}
                    required
                  />
                </div>

                <div className="flex items-start gap-2">
                  <Checkbox id="ct-consent" required />
                  <Label htmlFor="ct-consent" className="text-xs text-muted-foreground font-normal cursor-pointer leading-relaxed">
                    Я согласен на обработку персональных данных в соответствии с политикой конфиденциальности
                  </Label>
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Отправить сообщение
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
