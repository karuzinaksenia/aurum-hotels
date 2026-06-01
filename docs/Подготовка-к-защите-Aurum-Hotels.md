# Aurum Hotels — подготовка к защите курсового проекта

**Проект:** трёхстраничное SPA для бронирования отелей  
**Папка:** `aurum-hotels`  
**Репозиторий:** https://github.com/karuzinaksenia/aurum-hotels

---

## 1. Выполнены ли все требования курса?

| Требование | Статус | Где в проекте |
|------------|--------|----------------|
| SPA на React | ✅ | `src/`, `package.json` (react, vite) |
| REST API (реальный бэкенд) | ✅ | `server/` — Express + MongoDB |
| Минимум 3 страницы / маршрута | ✅ | `src/routes/AppRoutes.jsx` |
| Форма с отправкой данных | ✅ | `src/pages/HotelDetailsPage/components/BookingForm/` |
| «Красивый» интерфейс | ✅ | Emotion, `src/styles/theme.js`, карточки отелей |
| Компонентный UI | ✅ | `src/components/ui/` — Button, Input, Spinner… |
| Redux (управление данными) | ✅ | `src/store/slices/` |
| CSS-in-JS (Emotion) | ✅ | `*.styles.js` рядом с компонентами |
| Семантическая разметка | ✅ | `main`, `header`, `footer`, `article`, `section` |
| Доступность (a11y) | ✅ | skip-link, `aria-label`, `role`, labels у полей |
| Стили и компоненты в отдельных файлах | ✅ | каждый компонент: `.jsx` + `.styles.js` |
| localStorage | ✅ | `src/services/storage.js` — токен, недавние поиски, кэш броней |
| Деплой не на localhost | ⚙️ | `render.yaml`, инструкция в `README.md` (нужно задеплоить на Render) |
| Unit-тесты | ➖ опционально | не реализованы |

**Дополнительно (сверх минимума курса):** JWT-авторизация, личный кабинет, избранное, фильтры по стране/городу/звёздам/цене, 24 отеля в 14 странах.

---

## 2. Три страницы курса — что считать «страницей 1, 2, 3»

На защите логично объяснять так (соответствует трём **фичам** курса):

| № | Страница для защиты | URL | Главная фича |
|---|---------------------|-----|--------------|
| **1** | Каталог / поиск отелей | `/hotels` (вход с главной `/`) | Поиск, фильтры, REST GET |
| **2** | Детали отеля + бронирование | `/hotels/:id` | Форма брони → POST API |
| **3** | Личный кабинет | `/profile` | Брони + избранное (GET/DELETE, избранное) |

Главная `/` — **лендинг** (герой, популярные отели), не отдельная «четвёртая фича», а точка входа в каталог.

Вспомогательные экраны: `/login`, `/register` — для JWT, не считаются одной из трёх фич.

---

## 3. Карта папок проекта

```
aurum-hotels/
├── src/                          # ФРОНТЕНД (React SPA)
│   ├── main.jsx                  # Точка входа, Redux Provider, hydrateAuth
│   ├── App.jsx                   # AuthEffects + маршруты
│   ├── routes/
│   │   └── AppRoutes.jsx         # Все URL приложения
│   ├── constants/
│   │   └── ru.js                 # Все русские тексты интерфейса
│   ├── services/
│   │   ├── api.js                # Axios → /api (hotels, bookings, auth, favorites)
│   │   └── storage.js            # localStorage: токен, пользователь, поиски, кэш броней
│   ├── store/
│   │   ├── index.js              # configureStore
│   │   └── slices/
│   │       ├── hotelsSlice.js    # Каталог, фильтры, meta
│   │       ├── bookingsSlice.js  # Бронирования
│   │       ├── authSlice.js      # Вход / регистрация
│   │       └── favoritesSlice.js # Избранные отели
│   ├── styles/
│   │   ├── theme.js              # Цвета, шрифты, breakpoints
│   │   └── GlobalStyles.jsx      # Глобальный CSS через Emotion
│   ├── components/
│   │   ├── layout/               # Header, Footer, Layout (skip-link)
│   │   ├── ui/                   # Button, Input, Spinner, HotelImage, FavoriteButton…
│   │   ├── auth/                 # ProtectedRoute, AuthEffects
│   │   └── ErrorBoundary/
│   └── pages/
│       ├── HomePage/             # Главная (/)
│       ├── HotelsPage/           # СТРАНИЦА 1 — каталог (/hotels)
│       ├── HotelDetailsPage/     # СТРАНИЦА 2 — отель + форма (/hotels/:id)
│       ├── ProfilePage/          # СТРАНИЦА 3 — кабинет (/profile)
│       ├── AuthPage/             # Login, Register
│       └── BookingsPage/         # Старый код списка броней (переиспользуется в Profile)
│
├── server/                       # БЭКЕНД
│   ├── server.js                 # Express, CORS, подключение роутов
│   ├── config/db.js              # MongoDB + seed при старте
│   ├── models/                   # Hotel, Booking, User (Mongoose)
│   ├── routes/                   # hotels, bookings, auth, favorites
│   ├── middleware/auth.js        # JWT authRequired
│   └── seed/seedHotels.js        # 24 отеля, цены, фото Unsplash
│
├── public/                       # Статика (placeholder, favicon)
├── render.yaml                   # Деплой Render
├── vite.config.js                # Proxy /api → localhost:3001
├── package.json
└── README.md
```

---

# СТРАНИЦА 1 — Каталог отелей (`/hotels`)

## Что сделано

1. **Поиск** — строка по названию, городу, стране (`SearchBar` → `loadHotels` с параметром `q`).
2. **Фильтры** — страна, город (чипы), звёзды, мин. рейтинг, цена от/до, сортировка (`FilterPanel`).
3. **Сетка карточек** — фото, звёзды, рейтинг, цена, кнопка «Забронировать», ♥ в избранное (`HotelGrid`, `HotelCard`).
4. **REST** — `GET /api/hotels`, `GET /api/hotels/meta` (страны, города, диапазон цен).
5. **Redux** — `hotelsSlice`: `list`, `filters`, `meta`, `loadHotels`, `loadHotelsMeta`.
6. **localStorage** — недавние поисковые запросы (`addRecentSearch` в `storage.js`).
7. **Emotion** — стили в `HotelsPage/components/*/*.styles.js`.

### Ключевые файлы

| Файл | Назначение |
|------|------------|
| `src/pages/HotelsPage/HotelsPage.jsx` | Сборка страницы |
| `src/pages/HotelsPage/components/SearchBar/` | Форма поиска |
| `src/pages/HotelsPage/components/FilterPanel/` | Фильтры |
| `src/pages/HotelsPage/components/HotelGrid/` | Сетка |
| `src/pages/HotelsPage/components/HotelCard/` | Карточка отеля |
| `server/routes/hotels.js` | API списка и meta |

## Вопросы преподавателя — Страница 1

**В: Какая фича на первой странице?**  
О: Поиск и фильтрация каталога отелей через REST API с сохранением недавних запросов в localStorage.

**В: Как данные попадают на экран?**  
О: При загрузке `HotelsPage` диспатчится `loadHotelsMeta()` и `loadHotels()`. Thunk в `hotelsSlice` вызывает `fetchHotels` из `api.js` → Express → MongoDB. Ответ кладётся в `state.hotels.list`, компоненты читают через `useSelector`.

**В: Зачем Redux, если можно useState?**  
О: Единое хранилище для каталога, фильтров и детальной страницы; предсказуемые async-операции через `createAsyncThunk`; фильтры не сбрасываются при переходах.

**В: Где localStorage на этой странице?**  
О: В `hotelsSlice` при успешном поиске с `q` вызывается `addRecentSearch` — до 5 последних запросов. `SearchBar` показывает их чипами.

**В: Как работает фильтр по стране?**  
О: Параметр `country` уходит в `GET /api/hotels?country=...`. При смене страны перезагружается meta (`/api/hotels/meta?country=...`) — список городов только для выбранной страны.

**В: Почему Emotion, а не обычный CSS?**  
О: Требование курса CSS-in-JS; стили рядом с компонентом, тема из `theme.js`, динамические props (`$active` на чипах).

**В: Что такое `listStatus` и `detailStatus`?**  
О: Раздельные статусы загрузки списка и одного отеля, чтобы спиннер на деталях не ломал каталог.

---

# СТРАНИЦА 2 — Детали отеля и бронирование (`/hotels/:id`)

## Что сделано

1. **Карточка отеля** — фото, описание, удобства, цена (`HotelHero`, `AmenitiesList`).
2. **Форма бронирования** — ФИО, email, даты, гости; валидация на клиенте (`BookingForm`).
3. **Авторизация** — без входа форма скрыта, ссылки на login/register (`ProtectedRoute` не на всей странице, только на отправку).
4. **REST** — `GET /api/hotels/:id`, `POST /api/bookings` (с JWT).
5. **Redux** — `bookingsSlice.submitBooking`, `hotelsSlice.loadHotelById`.
6. **localStorage** — после успешной брони `addLocalBooking` дублирует в кэш.
7. **Избранное** — `FavoriteButton` на фото отеля.

### Ключевые файлы

| Файл | Назначение |
|------|------------|
| `src/pages/HotelDetailsPage/HotelDetailsPage.jsx` | Загрузка отеля по id из URL |
| `src/pages/HotelDetailsPage/components/BookingForm/` | Форма (требование «форма с отправкой») |
| `src/pages/HotelDetailsPage/components/HotelHero/` | Шапка отеля |
| `server/routes/bookings.js` | POST/GET/DELETE броней |
| `server/middleware/auth.js` | JWT для броней |

## Вопросы преподавателя — Страница 2

**В: Где форма с отправкой данных пользователя?**  
О: `BookingForm.jsx` — `onSubmit` → `dispatch(submitBooking({ hotelId, guestName, email, checkIn, checkOut, guests }))` → POST `/api/bookings`.

**В: Как валидируете форму?**  
О: Функция `validate()` проверяет имя, email с `@`, даты; ошибки в `localErrors`, поля с `error` у `Input`.

**В: Почему нужен вход для брони?**  
О: На бэкенде `authRequired` — бронь привязана к `userId` в MongoDB, пользователь видит только свои заказы.

**В: Как JWT попадает в запрос?**  
О: `api.js` — interceptor добавляет `Authorization: Bearer <token>` из `localStorage` (`getToken`).

**В: Что после успешного бронирования?**  
О: Сообщение об успехе, через 1.5 с редирект на `/profile`; бронь в БД и в localStorage через `addLocalBooking`.

**В: Откуда берётся id отеля?**  
О: React Router `useParams().id` → `loadHotelById(id)` → `GET /api/hotels/:id`.

**В: semantic / a11y на форме?**  
О: `section` с `aria-labelledby`, у полей `label`, ошибки с `role="alert"`, кнопка submit с текстом состояния загрузки.

---

# СТРАНИЦА 3 — Личный кабинет (`/profile`)

## Что сделано

1. **Профиль пользователя** — имя, email, счётчики броней и избранного.
2. **Вкладка «Мои брони»** — список, отмена с подтверждением (`BookingsList`, `BookingCard`).
3. **Вкладка «Избранное»** — отели с ♥ (`FavoritesList`, переиспользует `HotelCard`).
4. **REST** — `GET/DELETE /api/bookings`, `GET/POST/DELETE /api/favorites`.
5. **Защита маршрута** — `ProtectedRoute` → редирект на `/login`.
6. **Redux** — `bookingsSlice`, `favoritesSlice`, `authSlice`.

### Ключевые файлы

| Файл | Назначение |
|------|------------|
| `src/pages/ProfilePage/ProfilePage.jsx` | Вкладки, загрузка данных |
| `src/pages/BookingsPage/components/BookingsList/` | Список броней |
| `src/pages/ProfilePage/components/FavoritesList/` | Избранное |
| `src/components/auth/ProtectedRoute/` | Проверка авторизации |
| `server/routes/favorites.js` | API избранного |
| `server/models/User.js` | Поле `favorites[]` |

## Вопросы преподавателя — Страница 3

**В: Какая фича на третьей странице?**  
О: Управление личными бронированиями и избранными отелями — просмотр и отмена броней, список избранного.

**В: Как устроена авторизация?**  
О: Регистрация/логин → bcrypt + JWT на сервере → токен в localStorage → `hydrateAuth` при старте проверяет `/api/auth/me`.

**В: Почему `/bookings` редиректит на `/profile`?**  
О: Кабинет объединил брони и избранное; старый URL сохранён для совместимости.

**В: Как работает избранное?**  
О: `POST /api/favorites/:hotelId` добавляет id в массив `user.favorites` в MongoDB; `FavoriteButton` вызывает `toggleFavorite` в Redux.

**В: Может ли пользователь видеть чужие брони?**  
О: Нет — в `bookings.js` фильтр `{ userId: req.user.id }`.

**В: Зачем кэш броней в localStorage, если есть API?**  
О: Требование курса использовать localStorage; кэш обновляется при `loadBookings` и при создании/отмене.

---

# Общие вопросы по всему проекту

**В: Стек технологий?**  
О: Frontend — React 18, Vite, React Router, Redux Toolkit, Emotion, Axios. Backend — Node.js, Express 5, Mongoose, MongoDB, JWT, bcrypt.

**В: Сколько экранов по React Router?**  
О: `/`, `/hotels`, `/hotels/:id`, `/profile`, `/login`, `/register` (+ редиректы). Для курса три основные фичи — каталог, детали+форма, кабинет.

**В: Где MongoDB?**  
О: Модели в `server/models/`, подключение в `server/config/db.js`, URI в `.env` (`MONGODB_URI`).

**В: Как запустить?**  
О: MongoDB → `cp .env.example .env` → `npm install` → `npm run dev`. Сайт :5173, API :3001.

**В: Деплой?**  
О: `render.yaml` — два сервиса (API + статика Vite). `VITE_API_URL` на фронте, `MONGODB_URI` и `CLIENT_ORIGIN` на API. Инструкция в README.

**В: Почему цены в рублях?**  
О: Целевая аудитория — российские пользователи; в UI `toLocaleString('ru-RU')` и символ ₽ в `ru.currency`.

**В: Откуда фото отелей?**  
О: URL Unsplash в `server/seed/seedHotels.js`; при ошибке загрузки — `HotelImage` показывает placeholder из `public/images/`.

**В: Что бы вы улучшили?**  
О: Unit-тесты (опционально по курсу), пагинация каталога, редактирование профиля, оплата — как честный ответ на «развитие».

---

# Чек-лист перед защитой

- [ ] `npm run dev` — сайт и API без ошибок
- [ ] MongoDB запущена, в консоли API: «Каталог: 24 отелей…»
- [ ] Показать поиск + фильтр по стране на `/hotels`
- [ ] Показать бронь под залогиненным пользователем на `/hotels/:id`
- [ ] Показать кабинет: брони и избранное на `/profile`
- [ ] Уметь открыть `AppRoutes.jsx`, `hotelsSlice.js`, `BookingForm.jsx`, `server/routes/bookings.js`
- [ ] Знать, где skip-link и зачем (`Layout.jsx`)
- [ ] Если спросят деплой — дать URL Render или объяснить шаги из README

---

*Документ подготовлен для защиты курсового проекта Aurum Hotels.*
