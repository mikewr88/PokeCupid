# PokeCupid

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

PokeCupid is a web application inspired by OkCupid that will be build using Ruby on Rails and React.js.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [ ] New account creation, login, and guest/demo login
- [ ] Smooth, bug-free navigation
- [ ] Adequate seed data to demonstrate the site's features
- [ ] The necessary features for the site: making a profile with Pokemon, liking other people, viewing details of other profiles, notification of likes in the nav bar
- [ ] Hosting on Heroku
- [ ] CSS styling that is visually appealing and emulates that of OkCupid

## Product Goals and Priorities

PokeCupid will allow users to do the following:

- [ ] Create an account (MVP)
- [ ] Log in / Log out, including as a Guest/Demo User (MVP)
- [ ] Create a detailed profile and answer questions for 'Better Matching' (MVP)
- [ ] Browse photos and usernames for all users, utilizing infinite scroll (MVP)
- [ ] Create and remove a Pokemon from your profile (MVP)
- [ ] Search for other users (MVP)
- [ ] Like, view, and communicate with other users (the latter being non-MVP)
- [ ] See who has viewed your profile (non-MVP)
- [ ] Ability to Filter Users by certain criteria (MVP)
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

### Phase 1: Backend setup and User Authentication (0.5 days)

**Objective:** Functioning rails project with Authentication

- [ ] create new project
- [ ] create `User` model
- [ ] authentication
- [ ] user signup/signin pages
- [ ] blank landing page after signin

### Phase 2: Pokemon Model, API, and basic APIUtil (1.5 days)

**Objective:** Pokemon can be created, viewed, destroyed through
the API.

- [ ] create `Pokemon` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for Pokemon (`PokemonsController`)
- [ ] jBuilder views for Pokemon and Users
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (2.5 days)

**Objective:** Able to view pages for Trainers and Pokemon. Links to other pages work

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each Trainer component, building out the flux loop as needed.
  - [ ] `TrainerIndex`
  - [ ] `TrainerIndexItem`
  - [ ] `SearchIndex`
  - [ ] `VisitedIndex`
  - [ ] `TrainerDetail`
- implement each Pokemon component, building out the flux loop as needed.
  - [ ] `PokemonIndex`
  - [ ] `PokemonDetail`
  - [ ] `PokemonForm`
- [ ] can search for a user and screen will populate with matches to search string
- [ ] can create and remove Pokemon for your profile

### Phase 4: NavBar and Start Styling (1.5 day)

**Objective:** Existing pages (including singup/signin) will look good. NavBar will allow links
to other pages as well as be styled

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles
- [ ] add either video or slideshow to root splash page
- [ ] make notification bubbles for visited and likes

### Phase 5: Likes and Visitors (1.5 days)

**Objective:** Visitors belong to Users. Users can like other users, that user can see who liked them

- [ ] create `Likes` and `Visitors` model
- build out API, Flux loop, and components for:
  - [ ] Likes and Visitors CRUD
  - [ ] Liking a user or visiting a user's page notifies that user
  - [ ] Visitor Index as well as dropdown menu for Visitors in NavBar
  - [ ] Dropdown for Likes and LikesIndex Page
- Use CSS to style new views

### Phase 6: Styling Cleanup and Seeding (1 day)

**objective:** Make the site feel more cohesive and clean.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] Pagination / infinite scroll for TrainerIndex
- [ ] Add chat between users
- [ ] Add music to the site that plays, maybe changes when you navigate to different page
- [ ] Multiple sessions

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
