# Flux Cycles

## User Cycles

### Users API Request Actions

* `fetchAllUsers`
  0. invoked from `TrainerIndex` `didMount`/`willReceiveProps`
  0. `GET /api/users` is called.
  0. `receiveAllUsers` is set as the callback.

* `fetchSingleUser`
  0. invoked from `TrainerDetail` `didMount`/`willReceiveProps`
  0. `GET /api/users/:id` is called.
  0. `receiveSingleUser` is set as the callback.

### Users API Response Actions

* `receiveAllUsers`
  0. invoked from an API callback.
  0. `Trainer` store updates `_trainers` and emits change.

* `receiveSingleUser`
  0. invoked from an API callback.
  0. `Trainer` store updates `_trainers[id]` and emits change.

### Store Listeners

* `TrainerIndex` component listens to `Trainer` store.
* `TrainerDetail` component listens to `Trainer` store.

## SearchSuggestion Cycles

* `fetchSearchSuggestions`
  0. invoked from `TrainerSearchBar` `onChange` when there is text
  0. `GET /api/users` is called with `text` param.
  0. `receiveSearchSuggestions` is set as the callback.

* `receiveSearchSuggestions`
  0. invoked from an API callback.
  0. `SearchSuggestion` store updates `_suggestions` and emits change.

* `removeSearchSuggestions`
  0. invoked from `TrainerSearchBar` `onChange` when empty
  0. `SearchSuggestion` store resets `_suggestions` and emits change.

### Store Listeners

* `SearchBarSuggestions` component listens to `SearchSuggestion` store.

## Pokemon Cycles

### Pokemon API Request Actions

* `fetchTrainersPokemon`
  0. invoked from `PokemonIndex` `didMount`/`willReceiveProps`
  0. `GET /api/pokemons` is called.
  0. `receiveTrainersPokemon` is set as the callback.

* `createPokemon`
  0. invoked from new Pokemon form button `onClick`
  0. `POST /api/pokemons` is called.
  0. `receiveSinglePokemon` is set as the callback.

* `destroyPokemon`
  0. invoked from delete Pokemon button `onClick`
  0. `DELETE /api/pokemons/:id` is called.
  0. `removePokemon` is set as the callback.

### Pokemon API Response Actions

* `receiveTrainersPokemon`
  0. invoked from an API callback.
  0. `Pokemon` store updates `_pokemons` and emits change.

* `receiveSinglePokemon`
  0. invoked from an API callback.
  0. `Pokemon` store updates `_pokemons[id]` and emits change.

* `removePokemon`
  0. invoked from an API callback.
  0. `Pokemon` store removes `_pokemons[id]` and emits change.

### Store Listeners

* `PokemonIndex` component listens to `Pokemon` store.

### Visitors API Response Actions

* `receiveTrainersVisitors`
  0. invoked from an API callback.
  0. `Visitors` store updates `_visitors` and emits change.

### Store Listeners

* `VisitedIndex` component listens to `Visitors` store.

### Likes API Response Actions

* `receiveTrainersLikes`
  0. invoked from an API callback.
  0. `Likes` store updates `_likes` and emits change.

### Store Listeners

* `LikesIndex` component listens to `Likes` store.
