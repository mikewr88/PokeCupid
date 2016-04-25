# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app and Splash page

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`
- `GET /users`
  - main page aliased as /trainers
- `GET /users/:id`
  - show page aliased as /trainers/:id

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Visitors

- `GET /api/visitors`
- `POST /api/visitors`

### Pokemon

- `DELETE /api/pokemons/:id`
- `POST /api/pokemons`
- `GET /api/pokemons`

### Likes

- `POST /api/likes`
- `GET /api/likes`
