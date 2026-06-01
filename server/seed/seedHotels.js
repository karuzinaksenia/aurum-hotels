import { Hotel } from "../models/Hotel.js";

function photo(id) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&h=800&q=85`;
}

const HOTELS = [
  // Россия
  {
    name: "Aurum Кремль",
    city: "Москва",
    country: "Россия",
    price: 7900,
    stars: 5,
    rating: 4.9,
    description:
      "Премиум-отель в центре: панорамные номера, спа, ресторан авторской кухни и консьерж 24/7.",
    amenities: ["Спа", "Wi‑Fi", "Завтрак", "Парковка", "Ресторан"],
    image: photo("1596436889106-d80ebd743e0a"),
  },
  {
    name: "Империал",
    city: "Санкт-Петербург",
    country: "Россия",
    price: 6200,
    stars: 5,
    rating: 4.8,
    description:
      "Классический люкс на Невском: высокие потолки, вид на каналы, шаг до Эрмитажа.",
    amenities: ["Wi‑Fi", "Завтрак", "Консьерж", "Ресторан"],
    image: photo("1551882547-ff40c63fe5fa"),
  },
  {
    name: "Palm Resort",
    city: "Сочи",
    country: "Россия",
    price: 5400,
    stars: 5,
    rating: 4.7,
    description:
      "Курорт у Чёрного моря: infinity-бассейн, частный пляж и завтрак на террасе.",
    amenities: ["Пляж", "Бассейн", "Спа", "Wi‑Fi"],
    image: photo("1571008883278-ee32aa7fdcf0"),
  },
  {
    name: "Восток",
    city: "Казань",
    country: "Россия",
    price: 3200,
    stars: 4,
    rating: 4.6,
    description:
      "Современный отель у Кремля: татарская кухня, семейные номера и бар на крыше.",
    amenities: ["Wi‑Fi", "Ресторан", "Завтрак", "Парковка"],
    image: photo("1611892444088-503c84e95814"),
  },
  {
    name: "Янтарь",
    city: "Калининград",
    country: "Россия",
    price: 2900,
    stars: 4,
    rating: 4.5,
    description:
      "Бутик у Балтики: светлые номера, морепродукты и набережная в пешей доступности.",
    amenities: ["Wi‑Fi", "Завтрак", "Бар"],
    image: photo("1520250497591-112f2f40a3b4"),
  },
  {
    name: "Урал Плаза",
    city: "Екатеринбург",
    country: "Россия",
    price: 3100,
    stars: 4,
    rating: 4.5,
    description:
      "Бизнес-отель в центре: быстрый Wi‑Fi, фитнес и трансфер с вокзала.",
    amenities: ["Wi‑Fi", "Завтрак", "Парковка", "Тренажёрный зал"],
    image: photo("1564501049412-61c2a3083791"),
  },
  {
    name: "Сибирь",
    city: "Новосибирск",
    country: "Россия",
    price: 2800,
    stars: 4,
    rating: 4.4,
    description:
      "Стильные номера в центре: сибирский завтрак и сауна.",
    amenities: ["Wi‑Fi", "Сауна", "Завтрак"],
    image: photo("1631049552978-20ba690921cc"),
  },
  {
    name: "Океан",
    city: "Владивосток",
    country: "Россия",
    price: 3800,
    stars: 4,
    rating: 4.6,
    description:
      "Вид на залив: морепродукты, терраса на закате и экскурсии.",
    amenities: ["Wi‑Fi", "Ресторан", "Экскурсии"],
    image: photo("1571896349842-33c89424de2d"),
  },
  {
    name: "Волга",
    city: "Нижний Новгород",
    country: "Россия",
    price: 2700,
    stars: 3,
    rating: 4.4,
    description:
      "Панорамные окна на Волгу, ресторан с локальной кухней и уютный лобби-бар.",
    amenities: ["Wi‑Fi", "Ресторан", "Завтрак"],
    image: photo("1542314831-068cd1dbfeeb"),
  },
  {
    name: "Самовар",
    city: "Тула",
    country: "Россия",
    price: 2100,
    stars: 3,
    rating: 4.2,
    description:
      "Атмосферный бутик рядом с музеями: уютные номера и завтрак.",
    amenities: ["Wi‑Fi", "Завтрак"],
    image: photo("1496417269834-92838ece822d"),
  },
  // Турция
  {
    name: "Riviera",
    city: "Анталья",
    country: "Турция",
    price: 4200,
    stars: 5,
    rating: 4.7,
    description:
      "All inclusive у моря: аквапарк, пляж и рестораны à la carte.",
    amenities: ["Пляж", "Бассейн", "All inclusive", "Wi‑Fi"],
    image: photo("1520250497591-112f2f40a3b4"),
  },
  {
    name: "Bosphorus House",
    city: "Стамбул",
    country: "Турция",
    price: 4800,
    stars: 4,
    rating: 4.6,
    description:
      "Бутик в историческом квартале: терраса с видом на пролив и турецкий завтрак.",
    amenities: ["Wi‑Fi", "Завтрак", "Терраса", "Ресторан"],
    image: photo("1523215123404-0239886770da"),
  },
  // ОАЭ
  {
    name: "Marina Sky",
    city: "Дубай",
    country: "ОАЭ",
    price: 9800,
    stars: 5,
    rating: 4.8,
    description:
      "Высотный отель у марины: infinity-бассейн на крыше и сервис мирового уровня.",
    amenities: ["Бассейн", "Спа", "Wi‑Fi", "Консьерж"],
    image: photo("1512453979798-5ea266f8880c"),
  },
  // Таиланд
  {
    name: "Lotus Bay",
    city: "Пхукет",
    country: "Таиланд",
    price: 4600,
    stars: 4,
    rating: 4.6,
    description:
      "Виллы у залива: тайский массаж, пляжный клуб и завтрак с фруктами.",
    amenities: ["Пляж", "Спа", "Wi‑Fi", "Завтрак"],
    image: photo("1552465011-b85e21c25a42"),
  },
  // Италия
  {
    name: "Dolce Vista",
    city: "Рим",
    country: "Италия",
    price: 6800,
    stars: 4,
    rating: 4.7,
    description:
      "Ренессансный дворик в центре: итальянский завтрак и консьерж для экскурсий.",
    amenities: ["Wi‑Fi", "Завтрак", "Консьерж"],
    image: photo("1551882547-ff40c63fe5fa"),
  },
  // Франция
  {
    name: "Lumière",
    city: "Париж",
    country: "Франция",
    price: 8900,
    stars: 5,
    rating: 4.8,
    description:
      "Элегантные номера у Сены: патио, винный бар и вид на город.",
    amenities: ["Wi‑Fi", "Ресторан", "Бар", "Консьерж"],
    image: photo("1566073771259-6a8506099945"),
  },
  // Испания
  {
    name: "Sol Marina",
    city: "Барселона",
    country: "Испания",
    price: 5900,
    stars: 4,
    rating: 4.6,
    description:
      "Современный отель у моря: терраса, тапас-бар и бассейн на крыше.",
    amenities: ["Бассейн", "Wi‑Fi", "Ресторан", "Терраса"],
    image: photo("1582719478250-c89cae4dc85b"),
  },
  // Греция
  {
    name: "Aegean Blue",
    city: "Санторини",
    country: "Греция",
    price: 6400,
    stars: 4,
    rating: 4.7,
    description:
      "Белоснежные домики с видом на кальдеру: завтрак на террасе и бассейн.",
    amenities: ["Бассейн", "Wi‑Fi", "Завтрак", "Трансфер"],
    image: photo("1613395877344-13b1a7aeeccd"),
  },
  // Грузия
  {
    name: "Tbilisi Grand",
    city: "Тбилиси",
    country: "Грузия",
    price: 2400,
    stars: 4,
    rating: 4.5,
    description:
      "Отель в старом городе: хинкали на завтраке, вино и вид на Мтацминду.",
    amenities: ["Wi‑Fi", "Завтрак", "Ресторан"],
    image: photo("1564501049412-61c2a3083791"),
  },
  // Армения
  {
    name: "Ararat",
    city: "Ереван",
    country: "Армения",
    price: 2300,
    stars: 3,
    rating: 4.4,
    description:
      "Уютный отель с панорамой на горы: армянская кухня и тихий двор.",
    amenities: ["Wi‑Fi", "Завтрак", "Парковка"],
    image: photo("1445019989133-9e8d968c60bf"),
  },
  // Египет
  {
    name: "Nile Palace",
    city: "Каир",
    country: "Египет",
    price: 3100,
    stars: 4,
    rating: 4.3,
    description:
      "Классический отель у Нила: бассейн на крыше и экскурсии к пирамидам.",
    amenities: ["Бассейн", "Wi‑Fi", "Экскурсии", "Завтрак"],
    image: photo("1564501049412-61c2a3083791"),
  },
  // Кипр
  {
    name: "Mediterranean",
    city: "Лимассол",
    country: "Кипр",
    price: 4500,
    stars: 4,
    rating: 4.5,
    description:
      "Курорт на побережье: пляж, спа и средиземноморский ресторан.",
    amenities: ["Пляж", "Спа", "Wi‑Fi", "Ресторан"],
    image: photo("1571008883278-ee32aa7fdcf0"),
  },
  // Австрия
  {
    name: "Alpenhof",
    city: "Вена",
    country: "Австрия",
    price: 7200,
    stars: 5,
    rating: 4.7,
    description:
      "Имперский стиль в центре: концертный зал, сауна и венский завтрак.",
    amenities: ["Спа", "Wi‑Fi", "Завтрак", "Консьерж"],
    image: photo("1555854877-d0663235b3b9"),
  },
  // Черногория
  {
    name: "Adriatic Pearl",
    city: "Будва",
    country: "Черногория",
    price: 3900,
    stars: 4,
    rating: 4.5,
    description:
      "Отель на Адриатике: пляж, яхт-клуб и вечерние концерты на набережной.",
    amenities: ["Пляж", "Wi‑Fi", "Ресторан", "Бар"],
    image: photo("1501110296876-727eadc0f217"),
  },
  // Азербайджан
  {
    name: "Flame Towers",
    city: "Баку",
    country: "Азербайджан",
    price: 3600,
    stars: 4,
    rating: 4.4,
    description:
      "Современный отель с видом на Каспий: спа, ресторан и близость к набережной.",
    amenities: ["Спа", "Wi‑Fi", "Ресторан", "Парковка"],
    image: photo("1512918728670-dbc06bc07f0e"),
  },
];

export async function seedHotels() {
  const keepNames = HOTELS.map((h) => h.name);
  await Hotel.deleteMany({ name: { $nin: keepNames } });

  for (const hotel of HOTELS) {
    await Hotel.findOneAndUpdate({ name: hotel.name }, hotel, {
      upsert: true,
      returnDocument: "after",
    });
  }

  const count = await Hotel.countDocuments();
  const countries = await Hotel.distinct("country");
  console.log(`Каталог: ${count} отелей в ${countries.length} странах`);
}
