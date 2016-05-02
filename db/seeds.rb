# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.create(username: 'guest',
            trainer_type: "Normal",
            gender: "♂",
            location: "Pallet Town",
            password: 'password',
            description: "I love normal type Pokemon. I must say my favorite Pokemon of all time is Zubat because they are very rare",
            image_url: 'http://i.imgur.com/VOBd1Du.png'
)
