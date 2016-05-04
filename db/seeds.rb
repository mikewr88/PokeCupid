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

User.create(username: 'Ash',
            trainer_type: "Bug",
            gender: "♂",
            location: "Pallet Town",
            password: 'password',
            description: "Gotta Catch Em All! Pokemon! I want to be the very best, the best that ever was.",
            image_url: 'http://i.imgur.com/VOBd1Du.png'
)

User.create(username: 'Brock',
            trainer_type: "Rock",
            gender: "♂",
            location: "Pewter City",
            password: 'password',
            description: "I love normal type Pokemon. I must say my favorite Pokemon of all time is Zubat because they are very rare",
            image_url: 'http://i.imgur.com/VOBd1Du.png'
)

User.create(username: 'Misty',
            trainer_type: "Normal",
            gender: "♀",
            location: "Cerulean City",
            password: 'password',
            description: "As long as you aren't immature like my ex-boyfriend Brock, I'll date you",
            image_url: 'http://i.imgur.com/VOBd1Du.png'
)

User.create(username: 'PikaFan',
            trainer_type: "Electric",
            gender: "♀",
            location: "Lavender Town",
            password: 'password',
            description: "Pika Pika",
            image_url: 'http://i.imgur.com/VOBd1Du.png'
)

User.create(username: 'SquirtleDude',
            trainer_type: "Water",
            gender: "♂",
            location: "Cerulean City",
            password: 'password',
            description: "Water Pokemon are the Best! I love Blastoise the most!",
            image_url: 'http://i.imgur.com/VOBd1Du.png'
)

User.create(username: 'Eric',
            trainer_type: "Grass",
            gender: "♂",
            location: "Saffron City",
            password: 'password',
            description: "go Bulbasaur yeah",
            image_url: 'http://i.imgur.com/VOBd1Du.png'
)

User.create(username: 'charmansMan',
            trainer_type: "Normal",
            gender: "♂",
            location: "Pallet Town",
            password: 'password',
            description: "I love normal type Pokemon. I must say my favorite Pokemon of all time is Zubat because they are very rare",
            image_url: 'http://i.imgur.com/VOBd1Du.png'
)

User.create(username: 'kyle',
            trainer_type: "Electric",
            gender: "♂",
            location: "Cinnabar Island",
            password: 'password',
            description: "I like Electric Pokemon",
            image_url: 'http://i.imgur.com/VOBd1Du.png'
)

User.create(username: 'gary',
            trainer_type: "Dragon",
            gender: "♀",
            location: "Celadon City",
            password: 'password',
            description: "I love normal type Pokemon. I must say my favorite Pokemon of all time is Zubat because they are very rare",
            image_url: 'http://i.imgur.com/VOBd1Du.png'
)

50.times do
  a = rand(1..10)
  b = rand(1..10)
  if a != b
    Visit.create(
      visitor_id: a,
      visitee_id: b
    )

    Like.create(
      liker_id: b,
      likee_id: a
    )
  end
end
