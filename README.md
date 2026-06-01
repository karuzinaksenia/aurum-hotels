# Aurum Hotels

Трёхстраничное SPA для бронирования отелей (курсовой проект).

| Страница | Маршрут | Фича |
|----------|---------|------|
| Поиск отелей | `/` | Поиск и фильтрация через REST API |
| Детали отеля | `/hotel/:id` | Форма бронирования → API + localStorage |
| Мои брони | `/bookings` | Список и отмена бронирований |

## Стек (требования курса)

- **SPA:** React 18 + Vite + React Router (3 экрана)
- **REST API:** Express + MongoDB (Mongoose)
- **State:** Redux Toolkit
- **Стили:** Emotion (`@emotion/react`, `@emotion/styled`)
- **localStorage:** кэш броней, недавние поиски
- **a11y:** семантическая разметка, skip-link, labels, `aria-*`

## Структура

```
src/
  components/     # UI-kit и layout (отдельные .jsx + .styles.js)
  pages/          # Страницы собирают подкомпоненты из components/
  store/          # Redux slices
  services/       # api.js, storage.js
  styles/         # theme, GlobalStyles
server/           # Express + MongoDB
```

## Локальный запуск

1. Установите MongoDB (Docker):

```bash
docker run -d --name mongo -p 27017:27017 mongo:7
```

2. Скопируйте переменные:

```bash
cp .env.example .env
```

3. Установка и запуск (клиент + API):

```bash
npm install
npm run dev
```

- Сайт: http://localhost:5173  
- API: http://localhost:3001/api/health  

## Деплой на GitHub + Render (не localhost)

1. Создайте репозиторий на GitHub и запушьте проект:

```bash
git init
git add .
git commit -m "Aurum Hotels SPA"
git remote add origin https://github.com/YOUR_USER/aurum-hotels.git
git push -u origin main
```

2. [MongoDB Atlas](https://www.mongodb.com/atlas) — бесплатный кластер, скопируйте connection string.

3. [Render](https://render.com) → **New Blueprint** → подключите репозиторий → используйте `render.yaml`.

4. В Render задайте переменные:
   - **API** `aurum-hotels-api`: `MONGODB_URI`, `CLIENT_ORIGIN` = URL статики (например `https://aurum-hotels-web.onrender.com`)
   - **Web** `aurum-hotels-web`: `VITE_API_URL` = `https://aurum-hotels-api.onrender.com/api`

5. После деплоя откройте URL статического сервиса — это публичный адрес для сдачи.

## API

| Method | Endpoint | Описание |
|--------|----------|----------|
| GET | `/api/hotels` | Список (`?q`, `?city`, `?maxPrice`) |
| GET | `/api/hotels/:id` | Отель |
| GET | `/api/bookings` | Брони |
| POST | `/api/bookings` | Создать бронь |
| DELETE | `/api/bookings/:id` | Отменить |

## Скрипты

- `npm run dev` — фронт + бэкенд
- `npm run build` — сборка SPA
- `npm start` — только API (production)
