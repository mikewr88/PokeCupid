== README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...



# PokeCupid

###[Live link](https://poke-cupid.herokuapp.com/)

This application is a fun take on the dating website OkCupid. The purpose of the site is to see and meet other 'Pokemon Trainers' like you. This full stack application is completed with Ruby on Rails and React.js. Inspiration for the application comes from [OkCupid](okcupid.com) and Pokemon.

## Application Features

#### Home page with new User Sign Up
![home_page]

#### Login modal with Pokeball shape
![modal]

#### Index page of all Trainers on the site. Background is according to your selected type. Trainer card color according to their type
![index]

#### Dynamic filtering allowing users to mix and match compounded search parameters and receive instant updates
![filter]

#### View other Trainers that have liked your profile
![likes]

#### View other Trainers that have visited your profile
![visits]

#### A profile page for each user with all of their info and details
![show]

[home_page]: ./docs/screenshots/homepage.png
[filter]: ./docs/screenshots/filterindex.png
[modal]: ./docs/screenshots/modallogin.png
[index]: ./docs/screenshots/homeindex.png
[likes]: ./docs/screenshots/likepage.png
[visits]: ./docs/screenshots/visitpage.png
[show]: ./docs/screenshots/showpage.png

## Technical Features

###Stack
* Ruby on Rails
* React.js
* Postgresql

###Models Schema
* Users
* Likes
* Visits

###APIs
* Cloudinary API

## Todos
* refactor code to be shorter and better to read
* make the trainer show page a modal with a Pokedex style
* add pokemon creation
* profile page for the current user
* messaging

## Future Features
* **Pokemon creation and interaction:** Add pokemon to your profile
* **Messaging model:** complete messaging between users


[views]: ./docs/views.md
[components]: ./docs/components.md
[stores]: ./docs/stores.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md
