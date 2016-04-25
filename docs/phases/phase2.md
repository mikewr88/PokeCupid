# Phase 2: Flux Architecture and Pokemon and Trainer CRUD (2 days)

## Rails
### Models

### Controllers

### Views

## Flux
### Views (React Components)
* TrainersIndex
  - TrainersIndexItem
* TrainerDetail
  - PokemonIndex
    - PokemonDetail
* PokemonForm

### Stores
* Trainer
* Pokemon

### Actions
* ApiActions.receiveAllUsers -> triggered by ApiUtil
* ApiActions.receiveSingleUser
* ApiActions.deleteNote
* PokemonActions.fetchTrainersPokemons -> triggers ApiUtil
* PokemonActions.createPokemon
* PokemonActions.destroyNote

### ApiUtil
* ApiUtil.fetchAllUsers
* ApiUtil.fetchSingleUser
* ApiUtil.createPokemon
* ApiUtil.destroyPokemon

## Gems/Libraries
* Flux Dispatcher (npm)
* Twitter Bootstrap
