export const siteData = {
  brand: {
    name: "МониторМастер",
    tagline: "Профессиональный ремонт мониторов",
    phone: "+7 (495) 123-45-67",
    email: "info@monitormaster.ru",
    address: "г. Москва, ул. Электронная, д. 15, оф. 204",
    workHours: "Пн–Сб: 9:00–20:00, Вс: выходной",
  },

  hero: {
    title: "Ремонт мониторов любой сложности",
    subtitle: "Быстро, качественно и с гарантией. Восстанавливаем мониторы всех брендов — от IPS до OLED.",
    badge: "Более 10 000 отремонтированных мониторов",
    image: "https://images.pexels.com/photos/8353774/pexels-photo-8353774.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
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
    { name: "Samsung", icon: "Monitor" },
    { name: "LG", icon: "MonitorSmartphone" },
    { name: "ASUS", icon: "Monitor" },
    { name: "Dell", icon: "MonitorSmartphone" },
    { name: "HP", icon: "Monitor" },
    { name: "Acer", icon: "MonitorSmartphone" },
    { name: "BenQ", icon: "Monitor" },
    { name: "Philips", icon: "MonitorSmartphone" },
  ],

  services: [
    {
      title: "Замена матрицы",
      description: "Замена повреждённых матриц IPS, TN, VA и OLED. Подбираем совместимую матрицу под вашу модель.",
      price: "от 2 500 ₽",
      icon: "Monitor",
      image: "https://images.pexels.com/photos/28379997/pexels-photo-28379997.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      badge: "Популярно",
    },
    {
      title: "Ремонт подсветки",
      description: "Восстановление LED-подсветки, замена инверторов и лент. Решаем проблему тёмного экрана.",
      price: "от 1 800 ₽",
      icon: "Lightbulb",
      image: "https://images.pexels.com/photos/7286009/pexels-photo-7286009.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      badge: null,
    },
    {
      title: "Ремонт платы питания",
      description: "Диагностика и ремонт блоков питания, стабилизаторов и преобразователей напряжения.",
      price: "от 1 500 ₽",
      icon: "Zap",
      image: "https://images.pexels.com/photos/37498139/pexels-photo-37498139.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      badge: null,
    },
    {
      title: "Ремонт логической платы",
      description: "Восстановление управляющих плат, прошивка микроконтроллеров и ремонт контроллеров.",
      price: "от 2 000 ₽",
      icon: "Cpu",
      image: "https://images.pexels.com/photos/12741851/pexels-photo-12741851.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      badge: "Сложно",
    },
    {
      title: "Замена шлейфов",
      description: "Замена повреждённых шлейфов матрицы и подсветки. Устраняем полосы и артефакты на экране.",
      price: "от 800 ₽",
      icon: "Cable",
      image: "https://images.pexels.com/photos/12741836/pexels-photo-12741836.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      badge: null,
    },
    {
      title: "Чистка и обслуживание",
      description: "Внутренняя чистка монитора, замена термопасты, профилактика перегрева и пыли.",
      price: "от 600 ₽",
      icon: "Sparkles",
      image: "https://images.pexels.com/photos/12741844/pexels-photo-12741844.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      badge: null,
    },
  ],

  problems: [
    {
      title: "Не включается монитор",
      description: "Полностью чёрный экран, нет реакции на кнопку включения. Возможна неисправность блока питания или логики.",
      image: "https://images.pexels.com/photos/28379996/pexels-photo-28379996.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      solution: "Диагностика цепи питания, ремонт или замена блока питания.",
    },
    {
      title: "Полосы на экране",
      description: "Вертикальные или горизонтальные полосы, искажения изображения. Проблема с матрицей или шлейфом.",
      image: "https://images.pexels.com/photos/28380000/pexels-photo-28380000.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      solution: "Проверка шлейфа, замена матрицы при необходимости.",
    },
    {
      title: "Тусклый экран",
      description: "Изображение едва видно, подсветка не работает или мерцает. Неисправна LED-подсветка.",
      image: "https://images.pexels.com/photos/28379999/pexels-photo-28379999.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      solution: "Замена светодиодных лент подсветки или инвертора.",
    },
    {
      title: "Разбитая матрица",
      description: "Трещины на экране, цветные разводы и пятна. Требуется полная замена матрицы.",
      image: "https://images.pexels.com/photos/28380001/pexels-photo-28380001.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      solution: "Подбор и установка совместимой матрицы.",
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
      description: "Бесплатно диагностируем монитор и определяем причину неисправности.",
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
      description: "Проверяем монитор во всех режимах и убеждаемся в исправности.",
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
      description: "Полная проверка монитора с заключением",
    },
    {
      service: "Замена матрицы",
      price: "от 2 500 ₽",
      time: "1–2 дня",
      description: "Подбор и установка совместимой матрицы",
    },
    {
      service: "Ремонт подсветки",
      price: "от 1 800 ₽",
      time: "1 день",
      description: "Замена LED-лент и инвертора",
    },
    {
      service: "Ремонт блока питания",
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
      specializations: ["OLED-матрицы", "Логические платы", "Сложная диагностика"],
    },
    {
      name: "Дмитрий Соколов",
      role: "Инженер-электронщик",
      experience: "10 лет опыта",
      image: "https://images.pexels.com/photos/38264269/pexels-photo-38264269.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      specializations: ["Подсветка", "Блоки питания", "Пайка BGA"],
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
      text: "Отремонтировали мой Samsung Odyssey за 2 дня. Матрица работает идеально, никаких полос. Цена честная, без накруток. Рекомендую!",
      monitor: "Samsung Odyssey G7",
      avatar: "https://images.pexels.com/photos/11579595/pexels-photo-11579595.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
    },
    {
      name: "Елена В.",
      rating: 5,
      date: "8 августа 2026",
      text: "Монитор LG перестал включаться. Диагностировали бесплатно, оказалось блок питания. Сделали за день, дали гарантию на год. Отличный сервис!",
      monitor: "LG 27UK850",
      avatar: "https://images.pexels.com/photos/16160801/pexels-photo-16160801.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
    },
    {
      name: "Андрей Л.",
      rating: 4,
      date: "2 августа 2026",
      text: "Заменили подсветку на Dell U2719D. Работает как новый. Снял одну звезду за то, что пришлось подождать запчасти 3 дня. В целом доволен.",
      monitor: "Dell U2719D",
      avatar: "https://images.pexels.com/photos/15019490/pexels-photo-15019490.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
    },
    {
      name: "Ольга Н.",
      rating: 5,
      date: "28 июля 2026",
      text: "Разбила матрицу на мониторе ASUS. Думала, придётся выкидывать. Ребята подобрали совместимую матрицу и установили за 2 дня. Спасибо!",
      monitor: "ASUS ProArt PA278CV",
      avatar: "https://images.pexels.com/photos/977374/pexels-photo-977374.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
    },
    {
      name: "Павел Р.",
      rating: 5,
      date: "20 июля 2026",
      text: "Обращался с проблемой мерцания экрана на BenQ. Быстро нашли причину — неисправный инвертор. Починили за пару часов. Профессионалы!",
      monitor: "BenQ GW2765HE",
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
      answer: "Диагностика монитора проводится бесплатно при согласии на ремонт. Если вы отказываетесь от ремонта, стоимость диагностики — 500 ₽.",
    },
    {
      question: "Ремонтируете ли вы мониторы на гарантии?",
      answer: "Если монитор на гарантии производителя, рекомендуем обратиться в авторизованный сервисный центр. Мы специализируемся на постгарантийном ремонте.",
    },
    {
      question: "Можно ли привезти монитор к вам?",
      answer: "Да, вы можете привезти монитор в наш сервисный центр. Также у нас есть услуга курьерской доставки — мы заберём и вернём ваш монитор.",
    },
    {
      question: "Какие бренды мониторов вы ремонтируете?",
      answer: "Мы ремонтируем мониторы всех основных брендов: Samsung, LG, ASUS, Dell, HP, Acer, BenQ, Philips, AOC, ViewSonic и другие. Работаем с моделями любого года выпуска.",
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
    email: "info@monitormaster.ru",
    address: "г. Москва, ул. Электронная, д. 15, оф. 204",
    workHours: "Пн–Сб: 9:00–20:00",
    mapImage: "https://images.pexels.com/photos/8353774/pexels-photo-8353774.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    socials: [
      { name: "Telegram", icon: "Send" },
      { name: "WhatsApp", icon: "MessageCircle" },
      { name: "VK", icon: "Share2" },
      { name: "Email", icon: "Mail" },
    ],
  },

  stats: {
    title: "МониторМастер в цифрах",
    items: [
      { label: "Отремонтировано мониторов", value: 10000, suffix: "+" },
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
      description: "Более десяти лет ремонтируем мониторы всех брендов и моделей.",
      icon: "Award",
    },
    {
      title: "Курьерская доставка",
      description: "Заберём и вернём ваш монитор по Москве. Удобно и безопасно.",
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
      title: "Ремонт матрицы Samsung",
      image: "https://images.pexels.com/photos/12741843/pexels-photo-12741843.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      category: "Замена матрицы",
    },
    {
      title: "Пайка платы управления",
      image: "https://images.pexels.com/photos/12741856/pexels-photo-12741856.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      category: "Ремонт электроники",
    },
    {
      title: "Диагностика подсветки",
      image: "https://images.pexels.com/photos/7286025/pexels-photo-7286025.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      category: "Подсветка",
    },
    {
      title: "Замена LED-лент",
      image: "https://images.pexels.com/photos/10699351/pexels-photo-10699351.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      category: "Подсветка",
    },
    {
      title: "Ремонт блока питания",
      image: "https://images.pexels.com/photos/37426133/pexels-photo-37426133.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      category: "Питание",
    },
    {
      title: "Тестирование монитора",
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
