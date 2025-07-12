import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const completedProjects = [
    {
      id: 1,
      title: "Механический Автомат",
      description: "Паровой робот с искусственным интеллектом",
      image: "/img/d2466341-21e6-487d-9008-c52a6bb2e8af.jpg",
      technologies: ["Медь", "Латунь", "Пар"],
      status: "Завершён",
    },
    {
      id: 2,
      title: "Воздушный Дирижабль",
      description: "Летательный аппарат для исследований",
      image: "/img/d2466341-21e6-487d-9008-c52a6bb2e8af.jpg",
      technologies: ["Газ", "Ткань", "Дерево"],
      status: "Завершён",
    },
  ];

  const inProgressProjects = [
    {
      id: 1,
      title: "Временная Машина",
      description: "Устройство для путешествий во времени",
      progress: 75,
      technologies: ["Хронотон", "Кристаллы", "Медь"],
    },
    {
      id: 2,
      title: "Паровой Экзоскелет",
      description: "Усиливающий костюм для рабочих",
      progress: 45,
      technologies: ["Сталь", "Пар", "Шестерни"],
    },
  ];

  const videos = [
    {
      id: 1,
      title: "Сборка Парового Двигателя",
      description: "Пошаговая инструкция",
      thumbnail: "/img/e884d6b9-d41f-448c-a0aa-e23885ebac8d.jpg",
      duration: "15:30",
    },
    {
      id: 2,
      title: "Работа с Медными Трубами",
      description: "Мастер-класс по пайке",
      thumbnail: "/img/e884d6b9-d41f-448c-a0aa-e23885ebac8d.jpg",
      duration: "22:15",
    },
  ];

  const team = [
    {
      id: 1,
      name: "Профессор Механикус",
      role: "Главный Инженер",
      specialization: "Паровые механизмы и автоматы",
      contact: "@mechanicus_prof",
      avatar: "/img/ca605d69-3a25-40f3-aafd-24b9d1b5aee2.jpg",
    },
    {
      id: 2,
      name: "Доктор Коггинс",
      role: "Изобретатель",
      specialization: "Летательные аппараты",
      contact: "@dr_coggins",
      avatar: "/img/ca605d69-3a25-40f3-aafd-24b9d1b5aee2.jpg",
    },
    {
      id: 3,
      name: "Мастер Гирман",
      role: "Механик",
      specialization: "Точные приборы и часы",
      contact: "@master_gearman",
      avatar: "/img/ca605d69-3a25-40f3-aafd-24b9d1b5aee2.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-steampunk-gear via-steampunk-dark-bronze to-steampunk-bronze">
      {/* Header */}
      <header className="relative py-20 px-6">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative container mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Icon
                name="Settings"
                size={80}
                className="text-steampunk-brass animate-gear-rotate"
              />
              <Icon
                name="Cog"
                size={40}
                className="absolute top-4 left-4 text-steampunk-copper animate-spin-slow"
              />
            </div>
          </div>
          <h1 className="text-6xl font-bold text-steampunk-cream mb-4 font-serif">
            STEAMPUNK PORTFOLIO
          </h1>
          <p className="text-xl text-steampunk-steam max-w-2xl mx-auto">
            Добро пожаловать в мастерскую механических чудес и паровых
            изобретений
          </p>
          <div className="flex justify-center mt-8 space-x-4">
            <Icon
              name="Wrench"
              size={24}
              className="text-steampunk-brass animate-steam-rise"
            />
            <Icon
              name="Hammer"
              size={24}
              className="text-steampunk-copper animate-steam-rise delay-300"
            />
            <Icon
              name="Zap"
              size={24}
              className="text-steampunk-brass animate-steam-rise delay-700"
            />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 pb-20">
        {/* Завершённые проекты */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Icon
              name="CheckCircle"
              size={32}
              className="text-steampunk-brass mr-4"
            />
            <h2 className="text-4xl font-bold text-steampunk-cream">
              Завершённые Проекты
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {completedProjects.map((project) => (
              <Card
                key={project.id}
                className="bg-steampunk-steam/90 border-steampunk-brass border-2 hover:scale-105 transition-transform duration-300"
              >
                <CardHeader>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <CardTitle className="text-steampunk-gear text-2xl">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-steampunk-dark-bronze">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-steampunk-bronze text-steampunk-cream"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Badge className="bg-steampunk-patina text-white">
                    {project.status}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Проекты в разработке */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Icon
              name="Wrench"
              size={32}
              className="text-steampunk-brass mr-4 animate-spin-slow"
            />
            <h2 className="text-4xl font-bold text-steampunk-cream">
              Проекты в Разработке
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {inProgressProjects.map((project) => (
              <Card
                key={project.id}
                className="bg-steampunk-steam/90 border-steampunk-copper border-2"
              >
                <CardHeader>
                  <CardTitle className="text-steampunk-gear text-2xl">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-steampunk-dark-bronze">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-steampunk-gear font-semibold">
                        Прогресс
                      </span>
                      <span className="text-steampunk-bronze">
                        {project.progress}%
                      </span>
                    </div>
                    <Progress
                      value={project.progress}
                      className="h-3 bg-steampunk-dark-bronze"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-steampunk-bronze text-steampunk-gear"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Лучшие видео */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Icon
              name="Video"
              size={32}
              className="text-steampunk-brass mr-4"
            />
            <h2 className="text-4xl font-bold text-steampunk-cream">
              Лучшие Видео
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {videos.map((video) => (
              <Card
                key={video.id}
                className="bg-steampunk-steam/90 border-steampunk-brass border-2 hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <CardHeader>
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center rounded-lg">
                      <Icon
                        name="Play"
                        size={48}
                        className="text-steampunk-brass"
                      />
                    </div>
                    <Badge className="absolute top-4 right-4 bg-steampunk-gear text-steampunk-cream">
                      {video.duration}
                    </Badge>
                  </div>
                  <CardTitle className="text-steampunk-gear text-xl">
                    {video.title}
                  </CardTitle>
                  <CardDescription className="text-steampunk-dark-bronze">
                    {video.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Оповещения о стримах */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-steampunk-bronze to-steampunk-copper border-steampunk-brass border-2">
            <CardHeader>
              <div className="flex items-center">
                <Icon
                  name="Radio"
                  size={32}
                  className="text-steampunk-cream mr-4 animate-pulse"
                />
                <CardTitle className="text-steampunk-cream text-3xl">
                  Прямые Трансляции
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-steampunk-cream space-y-4">
                <p className="text-lg">
                  🔴 <strong>Сегодня в 19:00</strong> - Сборка парового
                  двигателя для дирижабля
                </p>
                <p className="text-lg">
                  📅 <strong>Завтра в 15:00</strong> - Мастер-класс по работе с
                  медными трубами
                </p>
                <div className="flex flex-wrap gap-4 mt-6">
                  <Button className="bg-steampunk-steam text-steampunk-gear hover:bg-steampunk-cream">
                    <Icon name="Bell" size={20} className="mr-2" />
                    Уведомить о стриме
                  </Button>
                  <Button
                    variant="outline"
                    className="border-steampunk-cream text-steampunk-cream hover:bg-steampunk-cream hover:text-steampunk-gear"
                  >
                    <Icon name="Calendar" size={20} className="mr-2" />
                    Расписание стримов
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Лента VK сообщества */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Icon
              name="Users"
              size={32}
              className="text-steampunk-brass mr-4"
            />
            <h2 className="text-4xl font-bold text-steampunk-cream">
              Сообщество VK
            </h2>
          </div>
          <Card className="bg-steampunk-steam/90 border-steampunk-copper border-2">
            <CardHeader>
              <CardTitle className="text-steampunk-gear text-2xl">
                Последние Новости
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-l-4 border-steampunk-bronze pl-4">
                <p className="text-steampunk-gear font-semibold">
                  Новый изобретательный конкурс!
                </p>
                <p className="text-steampunk-dark-bronze">
                  Принимаем заявки на лучший паровой механизм года
                </p>
                <span className="text-sm text-steampunk-bronze">
                  2 часа назад
                </span>
              </div>
              <Separator className="bg-steampunk-bronze" />
              <div className="border-l-4 border-steampunk-bronze pl-4">
                <p className="text-steampunk-gear font-semibold">
                  Завершён проект временной машины
                </p>
                <p className="text-steampunk-dark-bronze">
                  Первые испытания прошли успешно!
                </p>
                <span className="text-sm text-steampunk-bronze">
                  5 часов назад
                </span>
              </div>
              <Separator className="bg-steampunk-bronze" />
              <div className="border-l-4 border-steampunk-bronze pl-4">
                <p className="text-steampunk-gear font-semibold">
                  Мастер-класс по пайке медных труб
                </p>
                <p className="text-steampunk-dark-bronze">
                  Запись доступна в нашей группе
                </p>
                <span className="text-sm text-steampunk-bronze">
                  1 день назад
                </span>
              </div>
              <div className="mt-6">
                <Button className="w-full bg-steampunk-bronze text-steampunk-cream hover:bg-steampunk-dark-bronze">
                  <Icon name="ExternalLink" size={20} className="mr-2" />
                  Перейти в сообщество VK
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Команда */}
        <section>
          <div className="flex items-center mb-8">
            <Icon
              name="Users2"
              size={32}
              className="text-steampunk-brass mr-4"
            />
            <h2 className="text-4xl font-bold text-steampunk-cream">
              Наша Команда
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <Card
                key={member.id}
                className="bg-steampunk-steam/90 border-steampunk-brass border-2 hover:scale-105 transition-transform duration-300"
              >
                <CardHeader className="text-center">
                  <div className="relative mx-auto mb-4">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-steampunk-bronze mx-auto"
                    />
                    <Icon
                      name="Cog"
                      size={20}
                      className="absolute -top-2 -right-2 text-steampunk-brass animate-spin-slow"
                    />
                  </div>
                  <CardTitle className="text-steampunk-gear text-xl">
                    {member.name}
                  </CardTitle>
                  <Badge className="bg-steampunk-bronze text-steampunk-cream">
                    {member.role}
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-steampunk-dark-bronze mb-4">
                    {member.specialization}
                  </p>
                  <Button
                    variant="outline"
                    className="border-steampunk-bronze text-steampunk-gear hover:bg-steampunk-bronze hover:text-steampunk-cream"
                  >
                    <Icon name="MessageCircle" size={16} className="mr-2" />
                    {member.contact}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-steampunk-gear text-steampunk-steam py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center space-x-8 mb-8">
            <Icon
              name="Settings"
              size={40}
              className="text-steampunk-brass animate-gear-rotate"
            />
            <Icon name="Wrench" size={40} className="text-steampunk-copper" />
            <Icon name="Hammer" size={40} className="text-steampunk-brass" />
          </div>
          <p className="text-lg mb-4">
            Steampunk Portfolio - Мастерская механических чудес
          </p>
          <p className="text-steampunk-bronze">
            © 2024 Все права защищены паром и медью
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
