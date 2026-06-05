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
server/           # Express (app.js) + MongoDB
api/              # Vercel serverless entry (export app)
vercel.json       # SPA + /api rewrites
render.yaml       # Blueprint для Render (опционально)
```


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
