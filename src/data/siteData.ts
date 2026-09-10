export const siteData = {
  brand: {
    name: "ПланшетПрофи",
    tagline: "Профессиональный ремонт планшетов",
    phone: "+7 (495) 123-45-67",
    email: "info@planshetprofi.ru",
    address: "г. Москва, ул. Электронная, д. 15, оф. 204",
    workHours: "Пн–Сб: 9:00–20:00, Вс: выходной",
  },

  hero: {
    title: "Ремонт планшетов любой сложности",
    subtitle: "Быстро, качественно и с гарантией. Восстанавливаем планшеты всех популярных брендов — от iPad до Galaxy Tab.",
    badge: "Более 10 000 отремонтированных планшетов",
    image: "https://images.pexels.com/photos/11715244/pexels-photo-11715244.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    stats: [
      { label: "Лет на рынке", value: "12" },
      { label: "Мастеров", value: "8" },
      { label: "Гарантия, мес", value: "24" },
      { label: "Выполнено ремонтов", value: "10K+" },
    ],
    ctaPrimary: "Записаться на ремонт",
    ctaSecondary: "Бесплатная диагностика",
  },

  brands: [
    { name: "Apple", icon: "Tablet" },
    { name: "Samsung", icon: "TabletSmartphone" },
    { name: "Huawei", icon: "Tablet" },
    { name: "Lenovo", icon: "TabletSmartphone" },
    { name: "Xiaomi", icon: "Tablet" },
    { name: "Microsoft", icon: "TabletSmartphone" },
    { name: "Honor", icon: "Tablet" },
    { name: "Prestigio", icon: "TabletSmartphone" },
  ],

  services: [
    {
      title: "Замена стекла и дисплея",
      description: "Замена повреждённых стёкол и дисплейных модулей iPad, Galaxy Tab, MatePad и других моделей. Подбираем совместимую деталь под вашу модель.",
      price: "от 2 500 ₽",
      icon: "Monitor",
      image: "https://images.pexels.com/photos/11921157/pexels-photo-11921157.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      badge: "Популярно",
    },
    {
      title: "Ремонт разъёма зарядки",
      description: "Восстановление USB-C, Lightning и micro-USB, если планшет не заряжается или заряд прерывается.",
      price: "от 1 800 ₽",
      icon: "Lightbulb",
      image: "https://images.pexels.com/photos/6755075/pexels-photo-6755075.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      badge: null,
    },
    {
      title: "Ремонт платы питания",
      description: "Диагностика и ремонт системных плат, контроллеров питания и последствий короткого замыкания.",
      price: "от 1 500 ₽",
      icon: "Zap",
      image: "https://images.pexels.com/photos/32942100/pexels-photo-32942100.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      badge: null,
    },
    {
      title: "Ремонт логической платы",
      description: "Восстановление управляющих плат, прошивка микроконтроллеров и ремонт контроллеров.",
      price: "от 2 000 ₽",
      icon: "Cpu",
      image: "https://images.pexels.com/photos/35157345/pexels-photo-35157345.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      badge: "Сложно",
    },
    {
      title: "Замена шлейфов",
      description: "Замена внутренних шлейфов, кнопок и элементов подключения. Устраняем проблемы с сенсором и зарядкой.",
      price: "от 800 ₽",
      icon: "Cable",
      image: "https://images.pexels.com/photos/12741836/pexels-photo-12741836.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      badge: null,
    },
    {
      title: "Чистка и обслуживание",
      description: "Разбираем и очищаем планшет после пыли или влаги, предотвращаем коррозию и перегрев.",
      price: "от 600 ₽",
      icon: "Sparkles",
      image: "https://images.pexels.com/photos/12741844/pexels-photo-12741844.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      badge: null,
    },
  ],

  problems: [
    {
      title: "Не включается планшет",
      description: "Полностью чёрный экран, нет реакции на кнопку включения. Возможна неисправность аккумулятора или логики.",
      image: "https://images.pexels.com/photos/28379996/pexels-photo-28379996.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      solution: "Диагностика цепи питания, ремонт или замена аккумулятора.",
    },
    {
      title: "Полосы на экране",
      description: "Вертикальные или горизонтальные полосы, искажения изображения. Проблема с матрицей или шлейфом.",
      image: "https://images.pexels.com/photos/28380000/pexels-photo-28380000.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      solution: "Проверка шлейфа, замена стекла и дисплея при необходимости.",
    },
    {
      title: "Тусклый экран",
      description: "Изображение едва видно, подсветка не работает или мерцает. Неисправна LED-подсветка.",
      image: "https://images.pexels.com/photos/28379999/pexels-photo-28379999.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      solution: "Замена светодиодных лент разъёма зарядки или инвертора.",
    },
    {
      title: "Разбитая стекло и дисплей",
      description: "Трещины на экране, цветные разводы и пятна. Требуется полная замена стекла и дисплея.",
      image: "https://images.pexels.com/photos/28380001/pexels-photo-28380001.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      solution: "Подбор и установка совместимой стекла и дисплея.",
    },
  ],

  process: [
    {
      step: "01",
      title: "Заявка",
      description: "Оставляете заявку на сайте или по телефону. Мы консультируем и подбираем удобное время.",
      icon: "ClipboardList",
    },
    {
      step: "02",
      title: "Диагностика",
      description: "Бесплатно диагностируем планшет и определяем причину неисправности.",
      icon: "Search",
    },
    {
      step: "03",
      title: "Согласование",
      description: "Согласуем стоимость и сроки. Вы принимаете решение — без скрытых платежей.",
      icon: "FileCheck",
    },
    {
      step: "04",
      title: "Ремонт",
      description: "Выполняем ремонт с использованием качественных комплектующих.",
      icon: "Wrench",
    },
    {
      step: "05",
      title: "Тестирование",
      description: "Проверяем планшет во всех режимах и убеждаемся в исправности.",
      icon: "CheckCircle",
    },
    {
      step: "06",
      title: "Гарантия",
      description: "Выдаём гарантию до 24 месяцев на все виды работ и комплектующие.",
      icon: "ShieldCheck",
    },
  ],

  pricing: [
    {
      service: "Диагностика",
      price: "Бесплатно",
      time: "30 мин",
      description: "Полная проверка планшета с заключением",
    },
    {
      service: "Замена стекла и дисплея",
      price: "от 2 500 ₽",
      time: "1–2 дня",
      description: "Подбор и установка совместимой стекла и дисплея",
    },
    {
      service: "Ремонт разъёма зарядки",
      price: "от 1 800 ₽",
      time: "1 день",
      description: "Замена LED-лент и инвертора",
    },
    {
      service: "Замена аккумулятора",
      price: "от 1 500 ₽",
      time: "1–2 дня",
      description: "Восстановление цепей питания",
    },
    {
      service: "Замена шлейфов",
      price: "от 800 ₽",
      time: "2–4 часа",
      description: "Устранение полос и артефактов",
    },
    {
      service: "Чистка и ТО",
      price: "от 600 ₽",
      time: "1–2 часа",
      description: "Профилактика и обслуживание",
    },
  ],

  team: [
    {
      name: "Алексей Петров",
      role: "Главный инженер",
      experience: "15 лет опыта",
      image: "https://images.pexels.com/photos/3825580/pexels-photo-3825580.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      specializations: ["Дисплеи iPad и Galaxy Tab", "Логические платы", "Сложная диагностика"],
    },
    {
      name: "Дмитрий Соколов",
      role: "Инженер-электронщик",
      experience: "10 лет опыта",
      image: "https://images.pexels.com/photos/38264269/pexels-photo-38264269.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      specializations: ["Разъёмы зарядки", "Питание", "Пайка под микроскопом"],
    },
    {
      name: "Игорь Волков",
      role: "Мастер по ремонту",
      experience: "8 лет опыта",
      image: "https://images.pexels.com/photos/38264265/pexels-photo-38264265.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      specializations: ["Замена шлейфов", "Чистка", "Профилактика"],
    },
    {
      name: "Сергей Морозов",
      role: "Диагност",
      experience: "6 лет опыта",
      image: "https://images.pexels.com/photos/38190068/pexels-photo-38190068.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      specializations: ["Первичная диагностика", "Тестирование", "Приём оборудования"],
    },
  ],

  reviews: [
    {
      name: "Михаил К.",
      rating: 5,
      date: "15 августа 2026",
      text: "Разбил экран iPad после падения. Заменили дисплейный модуль за два дня, сенсор работает идеально. Цена честная, без накруток. Рекомендую!",
      monitor: "Apple iPad Air",
      avatar: "https://images.pexels.com/photos/11579595/pexels-photo-11579595.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
    },
    {
      name: "Елена В.",
      rating: 5,
      date: "8 августа 2026",
      text: "Планшет Samsung перестал заряжаться. Диагностировали бесплатно, заменили разъём за день. Сделали за день, дали гарантию на год. Отличный сервис!",
      monitor: "Samsung Galaxy Tab S9",
      avatar: "https://images.pexels.com/photos/16160801/pexels-photo-16160801.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
    },
    {
      name: "Андрей Л.",
      rating: 4,
      date: "2 августа 2026",
      text: "Заменили подсветку на Huawei MatePad 11. Работает как новый. Снял одну звезду за то, что пришлось подождать запчасти 3 дня. В целом доволен.",
      monitor: "Huawei MatePad 11",
      avatar: "https://images.pexels.com/photos/15019490/pexels-photo-15019490.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
    },
    {
      name: "Ольга Н.",
      rating: 5,
      date: "28 июля 2026",
      text: "После падения разбила экран планшета Lenovo. Думала, придётся выкидывать. Ребята подобрали совместимую стекло и дисплей и установили за 2 дня. Спасибо!",
      monitor: "Lenovo Tab P11",
      avatar: "https://images.pexels.com/photos/977374/pexels-photo-977374.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
    },
    {
      name: "Павел Р.",
      rating: 5,
      date: "20 июля 2026",
      text: "После воды планшет Xiaomi не включался. Быстро нашли следы влаги и восстановили плату. Починили за пару часов. Профессионалы!",
      monitor: "Xiaomi Pad 6",
      avatar: "https://images.pexels.com/photos/6102841/pexels-photo-6102841.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
    },
  ],

  faq: [
    {
      question: "Сколько времени занимает ремонт?",
      answer: "Большинство поломок устраняются за 1–2 дня. Сложный ремонт, требующий заказа запчастей, может занять 3–7 дней. Точные сроки называем после диагностики.",
    },
    {
      question: "Даёте ли вы гарантию на ремонт?",
      answer: "Да, мы предоставляем гарантию от 6 до 24 месяцев в зависимости от вида работ и заменённых комплектующих. Гарантия покрывает как работы, так и установленные детали.",
    },
    {
      question: "Сколько стоит диагностика?",
      answer: "Диагностика планшета проводится бесплатно при согласии на ремонт. Если вы отказываетесь от ремонта, стоимость диагностики — 500 ₽.",
    },
    {
      question: "Ремонтируете ли вы планшеты на гарантии?",
      answer: "Если планшет на гарантии производителя, рекомендуем обратиться в авторизованный сервисный центр. Мы специализируемся на постгарантийном ремонте.",
    },
    {
      question: "Можно ли привезти планшет к вам?",
      answer: "Да, вы можете привезти планшет в наш сервисный центр. Также у нас есть услуга курьерской доставки — мы заберём и вернём ваш планшет.",
    },
    {
      question: "Какие бренды планшетов вы ремонтируете?",
      answer: "Мы ремонтируем планшеты всех основных брендов: Apple, Samsung, Huawei, Lenovo, Xiaomi, Honor, Microsoft, AOC, ViewSonic и другие. Работаем с моделями любого года выпуска.",
    },
  ],

  booking: {
    title: "Запишитесь на ремонт",
    subtitle: "Выберите удобную дату и время. Мы свяжемся с вами для подтверждения.",
    timeSlots: [
      "09:00–10:00",
      "10:00–11:00",
      "11:00–12:00",
      "12:00–13:00",
      "13:00–14:00",
      "14:00–15:00",
      "15:00–16:00",
      "16:00–17:00",
      "17:00–18:00",
      "18:00–19:00",
    ],
    monitorTypes: [
      "IPS",
      "TN",
      "VA",
      "OLED",
      "QLED",
      "Не знаю / нужна диагностика",
    ],
    urgencyOptions: [
      "Стандартный (1–2 дня)",
      "Срочный (в день обращения)",
      "Не срочно (в течение недели)",
    ],
  },

  contacts: {
    title: "Свяжитесь с нами",
    subtitle: "Есть вопросы? Напишите нам — ответим в течение 15 минут в рабочее время.",
    phone: "+7 (495) 123-45-67",
    email: "info@planshetprofi.ru",
    address: "г. Москва, ул. Электронная, д. 15, оф. 204",
    workHours: "Пн–Сб: 9:00–20:00",
    mapImage: "https://images.pexels.com/photos/11715244/pexels-photo-11715244.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    socials: [
      { name: "Telegram", icon: "Send" },
      { name: "WhatsApp", icon: "MessageCircle" },
      { name: "VK", icon: "Share2" },
      { name: "Email", icon: "Mail" },
    ],
  },

  stats: {
    title: "ПланшетПрофи в цифрах",
    items: [
      { label: "Отремонтировано планшетов", value: 10000, suffix: "+" },
      { label: "Средняя оценка", value: 4.9, suffix: "/5" },
      { label: "Месяцев гарантии", value: 24, suffix: "" },
      { label: "Лет на рынке", value: 12, suffix: "" },
    ],
  },

  advantages: [
    {
      title: "Бесплатная диагностика",
      description: "Точно определяем причину поломки без предоплаты. Вы платите только за ремонт.",
      icon: "Search",
    },
    {
      title: "Гарантия до 24 месяцев",
      description: "Долгосрочная гарантия на все работы и комплектующие. Уверены в качестве.",
      icon: "ShieldCheck",
    },
    {
      title: "Срочный ремонт",
      description: "Возможен ремонт в день обращения для большинства неисправностей.",
      icon: "Clock",
    },
    {
      title: "Оригинальные запчасти",
      description: "Используем только качественные комплектующие от проверенных поставщиков.",
      icon: "PackageCheck",
    },
    {
      title: "Опыт 12 лет",
      description: "Более десяти лет ремонтируем планшеты всех брендов и моделей.",
      icon: "Award",
    },
    {
      title: "Курьерская доставка",
      description: "Заберём и вернём ваш планшет по Москве. Удобно и безопасно.",
      icon: "Truck",
    },
  ],

  cta: {
    title: "Не откладывайте ремонт — записывайтесь прямо сейчас",
    subtitle: "Бесплатная диагностика. Честные цены. Гарантия до 24 месяцев.",
    image: "https://images.pexels.com/photos/326512/pexels-photo-326512.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },

  gallery: [
    {
      title: "Ремонт стекла и дисплея Samsung",
      image: "https://images.pexels.com/photos/12741843/pexels-photo-12741843.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      category: "Замена стекла и дисплея",
    },
    {
      title: "Пайка платы управления",
      image: "https://images.pexels.com/photos/12741856/pexels-photo-12741856.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      category: "Ремонт электроники",
    },
    {
      title: "Диагностика разъёма зарядки",
      image: "https://images.pexels.com/photos/7286025/pexels-photo-7286025.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      category: "Подсветка",
    },
    {
      title: "Замена LED-лент",
      image: "https://images.pexels.com/photos/10699351/pexels-photo-10699351.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      category: "Подсветка",
    },
    {
      title: "Замена аккумулятора",
      image: "https://images.pexels.com/photos/37426133/pexels-photo-37426133.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      category: "Питание",
    },
    {
      title: "Тестирование планшета",
      image: "https://images.pexels.com/photos/9241777/pexels-photo-9241777.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      category: "Контроль качества",
    },
    {
      title: "Сборка после ремонта",
      image: "https://images.pexels.com/photos/12741844/pexels-photo-12741844.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      category: "Сборка",
    },
    {
      title: "Пайка SMD-компонентов",
      image: "https://images.pexels.com/photos/10699354/pexels-photo-10699354.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      category: "Ремонт электроники",
    },
  ],
};

export type SiteData = typeof siteData;
