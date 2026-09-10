import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { useToast } from "@/hooks/use-toast";
import { siteData } from "@/data/siteData";
import { Calendar as CalendarIcon, Clock, CircleCheck as CheckCircle2, ChevronLeft, ChevronRight, CalendarDays, Zap, Package, User, Phone, Mail, Tablet } from "lucide-react";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

const Booking = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeSlot, setTimeSlot] = useState<string>("");
  const [monitorType, setMonitorType] = useState<string>("");
  const [urgency, setUrgency] = useState<string>("");
  const [step, setStep] = useState(1);

  const progressValue = step === 1 ? 33 : step === 2 ? 66 : 100;

  const handleNext = () => {
    if (step === 1 && (!date || !timeSlot)) {
      toast({ title: "Выберите дату и время", description: "Пожалуйста, выберите удобную дату и временной слот.", variant: "destructive" });
      return;
    }
    if (step === 2 && (!monitorType || !urgency)) {
      toast({ title: "Заполните данные", description: "Укажите модель планшета и срочность ремонта.", variant: "destructive" });
      return;
    }
    setStep((s) => Math.min(s + 1, 3));
  };

  const handlePrev = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка принята!",
      description: `Мы свяжемся с вами для подтверждения записи на ${date ? format(date, "d MMMM", { locale: ru }) : ""} в ${timeSlot}.`,
    });
    setStep(1);
    setDate(undefined);
    setTimeSlot("");
    setMonitorType("");
    setUrgency("");
  };

  const today = new Date();
  const minDate = new Date(today);
  minDate.setDate(today.getDate() + 1);

  return (
    <section id="booking" className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <Badge variant="secondary" className="mb-3 border-primary/20 bg-primary/5 text-primary">
            <CalendarDays className="mr-1 h-3.5 w-3.5" />
            Бронирование
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            {siteData.booking.title}
          </h2>
          <p className="mt-3 text-muted-foreground text-balance">
            {siteData.booking.subtitle}
          </p>
        </div>

        <Card className="mx-auto max-w-3xl border-primary/20 shadow-xl">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">Шаг {step} из 3</CardTitle>
              <span className="text-sm text-muted-foreground">
                {step === 1 && "Дата и время"}
                {step === 2 && "Детали ремонта"}
                {step === 3 && "Контактные данные"}
              </span>
            </div>
            <Progress value={progressValue} className="mt-2 h-2" />
          </CardHeader>

          <CardContent>
            {step === 1 && (
              <div className="animate-fade-in space-y-6">
                <div className="space-y-3">
                  <Label className="flex items-center gap-2 text-base font-semibold">
                    <CalendarIcon className="h-4 w-4 text-primary" />
                    Выберите дату
                  </Label>
                  <div className="flex justify-center">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(d) => d < minDate || d.getDay() === 0}
                      locale={ru}
                      className="rounded-lg border"
                    />
                  </div>
                  {date && (
                    <p className="text-center text-sm text-muted-foreground">
                      Выбрана дата: <span className="font-semibold text-primary">{format(date, "d MMMM yyyy", { locale: ru })}</span>
                    </p>
                  )}
                </div>

                <Separator />

                <div className="space-y-3">
                  <Label className="flex items-center gap-2 text-base font-semibold">
                    <Clock className="h-4 w-4 text-primary" />
                    Выберите время
                  </Label>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
                    {siteData.booking.timeSlots.map((slot) => (
                      <Button
                        key={slot}
                        variant={timeSlot === slot ? "default" : "outline"}
                        size="sm"
                        onClick={() => setTimeSlot(slot)}
                        className="text-xs"
                      >
                        {slot}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button onClick={handleNext} size="lg">
                    Продолжить
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-fade-in space-y-6">
                <div className="space-y-3">
                  <Label className="flex items-center gap-2 text-base font-semibold">
                    <Tablet className="h-4 w-4 text-primary" />
                    Модель планшета
                  </Label>
                  <Select value={monitorType} onValueChange={setMonitorType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите модель или бренд" />
                    </SelectTrigger>
                    <SelectContent>
                      {siteData.booking.monitorTypes.map((type) => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Separator />

                <div className="space-y-3">
                  <Label className="flex items-center gap-2 text-base font-semibold">
                    <Zap className="h-4 w-4 text-primary" />
                    Срочность ремонта
                  </Label>
                  <RadioGroup value={urgency} onValueChange={setUrgency} className="grid gap-2">
                    {siteData.booking.urgencyOptions.map((opt) => (
                      <div key={opt} className="flex items-center gap-3 rounded-lg border border-border/60 p-3 transition-colors hover:border-primary/30">
                        <RadioGroupItem id={`urg-${opt}`} value={opt} />
                        <Label htmlFor={`urg-${opt}`} className="flex-1 cursor-pointer text-sm font-normal">
                          {opt}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div className="flex items-center justify-between">
                  <Button variant="outline" onClick={handlePrev} size="lg">
                    <ChevronLeft className="mr-1 h-4 w-4" />
                    Назад
                  </Button>
                  <Button onClick={handleNext} size="lg">
                    Продолжить
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <form onSubmit={handleSubmit} className="animate-fade-in space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="bk-name" className="flex items-center gap-1.5">
                      <User className="h-3.5 w-3.5 text-primary" />
                      Ваше имя
                    </Label>
                    <Input id="bk-name" placeholder="Иван Иванов" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bk-phone" className="flex items-center gap-1.5">
                      <Phone className="h-3.5 w-3.5 text-primary" />
                      Телефон
                    </Label>
                    <Input id="bk-phone" type="tel" placeholder="+7 (___) ___-__-__" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bk-email" className="flex items-center gap-1.5">
                    <Mail className="h-3.5 w-3.5 text-primary" />
                    Email
                  </Label>
                  <Input id="bk-email" type="email" placeholder="email@example.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bk-model" className="flex items-center gap-1.5">
                    <Package className="h-3.5 w-3.5 text-primary" />
                    Модель планшета
                  </Label>
                  <Input id="bk-model" placeholder="Например: Apple iPad Air или Samsung Galaxy Tab" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bk-desc">Опишите проблему</Label>
                  <Input id="bk-desc" placeholder="Разбит экран, не заряжается и т.д." />
                </div>

                <div className="rounded-lg bg-primary/5 p-4 space-y-1.5 text-sm">
                  <p className="font-semibold text-primary">Детали записи:</p>
                  <p>Дата: {date ? format(date, "d MMMM yyyy", { locale: ru }) : "—"}</p>
                  <p>Время: {timeSlot || "—"}</p>
                  <p>Модель планшета: {monitorType || "—"}</p>
                  <p>Срочность: {urgency || "—"}</p>
                </div>

                <div className="flex items-start gap-2">
                  <Checkbox id="bk-consent" required />
                  <Label htmlFor="bk-consent" className="text-xs text-muted-foreground font-normal cursor-pointer leading-relaxed">
                    Я согласен на обработку персональных данных и подтверждаю запись на ремонт
                  </Label>
                </div>

                <div className="flex items-center justify-between">
                  <Button type="button" variant="outline" onClick={handlePrev} size="lg">
                    <ChevronLeft className="mr-1 h-4 w-4" />
                    Назад
                  </Button>
                  <Button type="submit" size="lg">
                    <CheckCircle2 className="mr-1.5 h-4 w-4" />
                    Подтвердить запись
                  </Button>
                </div>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Booking;
