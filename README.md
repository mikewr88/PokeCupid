# PokeCupid

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

PokeCupid is a web application inspired by OkCupid that will be build using Ruby on Rails and React.js.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [x] New account creation, login, and guest/demo login
- [x] Smooth, bug-free navigation
- [x] Adequate seed data to demonstrate the site's features
- [x] The necessary features for the site: making a profile, liking other people, viewing details of other profiles, notification of likes and visitors in the nav bar
- [x] Hosting on Heroku
- [x] CSS styling that is visually appealing and emulates that of OkCupid

## Product Goals and Priorities

PokeCupid will allow users to do the following:

- [x] Create an account (MVP)
- [x] Log in / Log out, including as a Guest/Demo User (MVP)
- [x] Create a detailed profile (MVP)
- [x] Browse photos and usernames for all users (MVP)
- [x] Search for other users (MVP)
- [x] Like, view, and communicate with other users (the latter being non-MVP)
- [x] See who has viewed your profile (MVP)
- [x] Ability to Filter Users by certain criteria (MVP)
- [x] Adequate styling (MVP)
- [ ] Quickmatch that recommends a user based on profile data (non-MVP)

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[flux-cycles]: ./docs/flux-cycles.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (2 days)

**Objective:** Functioning rails project with Authentication

- [x] create new project
- [x] create `User` model
- [x] authentication
- [x] user signup/signin pages
- [x] blank landing page after signin

### Phase 2: Trainer Model, API, and basic APIUtil (2.5 days)

**Objective:** Trainers can be viewed created and searched

- [x] jBuilder views for Users
- [x] setup Webpack & Flux scaffold
- [x] setup `APIUtil` to interact with the API
- [x] test out API interaction in the console.
- [x] setup the flux loop with skeleton files
- [x] setup React Router
- implement each Trainer component, building out the flux loop as needed.
  - [x] `TrainerHome`
  - [x] `TrainerIndexItem`
  - [x] `SearchBar`
  - [x] `Visitors`
  - [x] `TrainerShow`
  - [x] `Likes`

### Phase 3: Likes and Visitors (1 day)

**Objective:** Visitors belong to Users. Users can like other users, that user can see who liked them. seeding

- [x] create `Likes` and `Visitors` model
- build out API, Flux loop, and components for:
  - [x] Likes and Visitors CRUD
  - [x] Liking a user or visiting a user's page notifies that user
  - [x] Visitor Index shows visitors to your profile
  - [x] Likes Index Page
- [x] seed the database with a small amount of test data


### Phase 4: NavBar and Styling (2.5 days)

**Objective:** Able to view pages for Trainers. Links to other pages work. NavBar will allow links
to other pages as well

- [x] create NavBar
- [x] create a basic style guide
- [x] position elements on the page
- [x] add basic colors & styles
- [x] make notification bubbles for visited and likes
- [x] can search for a user and screen will populate with matches to search string
- [x] can filter users based on certain criteria

### Phase 5: Styling Cleanup and fixing up (1.5 days)

**objective:** Make the site feel more cohesive and clean.

- [x] Get feedback on my UI from others
- [x] Refactor HTML classes & CSS rules
- [x] Add transitions and other styling flourishes.


### Phase 6: Pokemon (1.5 days) (bonus)

**Objective:** Existing pages (including singup/signin) will look good. Pokemon can be created, viewed, destroyed through
the API.

- [ ] create `Pokemon` model
- [ ] CRUD API for Pokemon (`PokemonsController`)
- [ ] jBuilder views for Pokemon
- implement each Pokemon component, building out the flux loop as needed.
  - [ ] `PokemonIndex`
  - [ ] `PokemonDetail`
  - [ ] `PokemonForm`
- [ ] can create and remove Pokemon for your profile


### Bonus Features (TBD)
- [ ] dropdown menu for Visitors/Likes in NavBar
- [ ] Pagination / infinite scroll for TrainerIndex
- [ ] Add chat between users
- [ ] Add music to the site that plays, maybe changes when you navigate to different page
- [ ] Multiple sessions

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
