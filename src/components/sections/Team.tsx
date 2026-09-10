import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { siteData } from "@/data/siteData";
import { Users, CircleCheck as CheckCircle2 } from "lucide-react";

const Team = () => {
  return (
    <section id="team" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <Badge variant="secondary" className="mb-3 border-primary/20 bg-primary/5 text-primary">
            <Users className="mr-1 h-3.5 w-3.5" />
            Команда
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Опытные мастера своего дела
          </h2>
          <p className="mt-3 text-muted-foreground text-balance">
            Наши инженеры имеют опыт от 6 до 15 лет в ремонте электроники и мониторов
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {siteData.team.map((member, i) => (
            <Card
              key={member.name}
              className="group overflow-hidden border-border/60 transition-all hover:shadow-xl hover:border-primary/30 animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <Badge className="absolute bottom-3 right-3" variant="secondary">
                  {member.experience}
                </Badge>
              </div>
              <CardContent className="p-5">
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <div className="cursor-pointer">
                      <h3 className="text-lg font-bold">{member.name}</h3>
                      <p className="text-sm text-primary">{member.role}</p>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-72">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={member.image} alt={member.name} />
                        <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-semibold">{member.name}</p>
                        <p className="text-xs text-muted-foreground">{member.experience}</p>
                      </div>
                    </div>
                    <div className="mt-3 space-y-1">
                      <p className="text-xs font-medium text-muted-foreground">Специализации:</p>
                      {member.specializations.map((spec) => (
                        <p key={spec} className="flex items-center gap-1.5 text-xs">
                          <CheckCircle2 className="h-3 w-3 text-success" />
                          {spec}
                        </p>
                      ))}
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
