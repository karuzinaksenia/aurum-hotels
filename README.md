# Aurum Hotels

SPA для поиска отелей, бронирования и личного кабинета (курсовой проект).

| Страница | Маршрут | Фича |
|----------|---------|------|
| Главная | `/` | Hero, избранные отели, о проекте |
| Каталог | `/hotels` | Поиск, фильтры, подсказки через REST API |
| Отель | `/hotels/:id` | Детали, бронирование, избранное |
| Профиль | `/profile` | Брони, избранное (требует входа) |
| Вход / регистрация | `/login`, `/register` | JWT-авторизация |

Маршрут `/bookings` перенаправляет на `/profile`.

## Стек (требования курса)

- **SPA:** React 18 + Vite + React Router
- **REST API:** Express + MongoDB (Mongoose)
- **State:** Redux Toolkit
- **Стили:** Emotion (`@emotion/react`, `@emotion/styled`)
- **localStorage:** токен, кэш броней, недавние поиски
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
render.yaml       # Blueprint для Render (API + static web)
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

Репозиторий: https://github.com/karuzinaksenia/aurum-hotels

1. Запушьте `main` на GitHub (в репозитории должен быть `render.yaml`).

2. **MongoDB Atlas** — бесплатный M0, connection string в `MONGODB_URI`.

3. **Render** → **New Blueprint** → подключите репозиторий → Blueprint подхватит `render.yaml`.

4. Переменные окружения (порядок важен — см. чеклист в ответе агента или ниже кратко):
   - **API** `aurum-hotels-api`: `MONGODB_URI`, `JWT_SECRET`, затем `CLIENT_ORIGIN` = URL статики
   - **Web** `aurum-hotels-web`: `VITE_API_URL` = `https://<имя-api>.onrender.com/api` (после первого деплоя API)

5. Публичная ссылка для сдачи — URL статического сервиса, например `https://aurum-hotels-web.onrender.com`.

Подробный пошаговый чеклист (Atlas + Render + порядок env) — в документации к деплою в чате / у преподавателя.

## API

| Method | Endpoint | Описание |
|--------|----------|----------|
| GET | `/api/health` | Проверка API |
| POST | `/api/auth/register` | Регистрация |
| POST | `/api/auth/login` | Вход |
| GET | `/api/auth/me` | Текущий пользователь (Bearer) |
| GET | `/api/hotels` | Список (`?q`, `?city`, фильтры) |
| GET | `/api/hotels/meta` | Мета для фильтров |
| GET | `/api/hotels/:id` | Отель |
| GET | `/api/favorites` | Избранное (auth) |
| POST | `/api/favorites/:hotelId` | Добавить в избранное |
| DELETE | `/api/favorites/:hotelId` | Убрать из избранного |
| GET | `/api/bookings` | Брони |
| POST | `/api/bookings` | Создать бронь |
| DELETE | `/api/bookings/:id` | Отменить |

## Скрипты

- `npm run dev` — фронт + бэкенд
- `npm run build` — сборка SPA (`VITE_API_URL` подставляется на этапе build)
- `npm start` — только API (production на Render)
