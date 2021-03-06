# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

urls = [
  "http://2.media.dorkly.cvcdn.com/57/22/8af3ab0e5bfa5583fb00f4a015bb90a9-amazing-fan-art-of-all-151-original-pokemon-by-151-different-artists.jpg",
  "http://g02.a.alicdn.com/kf/HTB1r6xZIpXXXXaNXpXXq6xXFXXXc/Livraison-gratuite-pokemon-Art-affiche-40-x-60-cm-d&eacute;coration-murale-meilleur-cadeau-pour-les-enfants.jpg",
  "http://www.everybodyplays.co.uk/images/articlepics/1738.jpg",
  "http://1.media.dorkly.cvcdn.com/95/47/5a6916fb7e81bbee968caa0c62760ad9.jpg",
  "https://pokewalls.files.wordpress.com/2011/07/59arcanine1600x1200.jpg",
  "http://3.bp.blogspot.com/-L-1LOTT54S4/UMAjpByIlPI/AAAAAAAAAJQ/5HFz5rU-mq4/s1600/Zapdos__lord_of_thunderstorms_by_raykins.png",
  "http://i.imgur.com/VOBd1Du.png"
]

type_arr = ['Water',
'Grass',
'Fire',
'Rock',
'Dragon',
'Flying',
'Electric',
'Psychic',
'Bug',
'Normal',
'Poison',
'Ghost',
'Ground',
'Ice',
'Fighting']

gender = ["♂",
"♀"]

location = ['Pallet Town',
"Pewter City",
"Cerulean City",
"Vermillion City",
"Lavender Town",
"Celadon City",
"Fuchsia City",
"Saffron City",
"Cinnabar Island"]

descriptions = [
  "I love normal type Pokemon. I must say my favorite Pokemon of all time is Zubat because they are very rare",
  "Growlithes are my LIFE. Adopt don't shop!! looking for a fellow Growlithe lover",
  "I love long walks on the beach, but I hate Krabby. I'm looking for a tough trainer that could defeat any Kingler in our path.",
  "Looking for an officer Jenny type. Must have blue hair. Must own a motorcycle. Must be in every city.",
  "I love Grass Pokemon. I love how they are basically walking allergies. I love how they are weak against everything, it shows true vulnerability."
]

User.create(username: 'guest',
            trainer_type: "Water",
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
            image_url: 'http://i.imgur.com/XSjRMhQ.png'
)

User.create(username: 'Misty',
            trainer_type: "Water",
            gender: "♀",
            location: "Cerulean City",
            password: 'password',
            description: "As long as you aren't immature like my ex-boyfriend Brock, I'll date you",
            image_url: 'http://i.imgur.com/RJrafFj.png'
)

User.create(username: 'PikaFan',
            trainer_type: "Electric",
            gender: "♀",
            location: "Lavender Town",
            password: 'password',
            description: "Pika Pika",
            image_url: 'http://i.imgur.com/Cpsvd8d.png'
)

User.create(username: 'SquirtleDude',
            trainer_type: "Water",
            gender: "♂",
            location: "Cerulean City",
            password: 'password',
            description: "Water Pokemon are the Best! I love Blastoise the most!",
            image_url: 'http://i.imgur.com/0lROie8.png'
)

User.create(username: 'Eric',
            trainer_type: "Grass",
            gender: "♂",
            location: "Saffron City",
            password: 'password',
            description: "Go Bulbasaur. He is the best. I will only date Grass trainers. No exceptions.",
            image_url: 'http://2.media.dorkly.cvcdn.com/57/22/8af3ab0e5bfa5583fb00f4a015bb90a9-amazing-fan-art-of-all-151-original-pokemon-by-151-different-artists.jpg'
)

User.create(username: 'charmansMan',
            trainer_type: "Normal",
            gender: "♂",
            location: "Pallet Town",
            password: 'password',
            description: "I love normal type Pokemon. I must say my favorite Pokemon of all time is Zubat because they are very rare.",
            image_url: 'http://1.media.dorkly.cvcdn.com/95/47/5a6916fb7e81bbee968caa0c62760ad9.jpg'
)

User.create(username: 'kyle',
            trainer_type: "Electric",
            gender: "♂",
            location: "Cinnabar Island",
            password: 'password',
            description: "I like Electric Pokemon",
            image_url: 'http://3.bp.blogspot.com/-L-1LOTT54S4/UMAjpByIlPI/AAAAAAAAAJQ/5HFz5rU-mq4/s1600/Zapdos__lord_of_thunderstorms_by_raykins.png'
)

User.create(username: 'Gary',
            trainer_type: "Dragon",
            gender: "♂",
            location: "Celadon City",
            password: 'password',
            description: "I love normal type Pokemon. I must say my favorite Pokemon of all time is Zubat because they are very rare",
            image_url: 'http://i.imgur.com/VOBd1Du.png'
)

User.create(username: 'James',
            trainer_type: "Fighting",
            gender: "♂",
            location: "Saffron City",
            password: 'meowth',
            description: "Make it double! To unite all peoples within our nation! To extend our reach to the stars above! James! Surrender now, or prepare to fight!",
            image_url: 'http://i.imgur.com/6BKGZPU.jpg'
)

User.create(username: 'Jessie',
            trainer_type: "Fighting",
            gender: "♀",
            location: "Saffron City",
            password: 'meowth',
            description: "Prepare for trouble! To protect the world from devastation! To denounce the evils of truth and love! Jessie! Team Rocket, blast off at the speed of light!",
            image_url: 'http://i.imgur.com/y5Uliku.jpg'
)

User.create(username: 'BirdJesus',
            trainer_type: "Flying",
            gender: "♀",
            location: "Saffron City",
            password: 'meowth',
            description: descriptions.sample,
            image_url: 'http://o.aolcdn.com/hss/storage/adam/34acb97b670f621fd39fa7d593947644/Wju4miv.jpg'
)



100.times do
  User.create(username: Faker::Internet.user_name,
              trainer_type: type_arr.sample,
              gender: gender.sample,
              location: location.sample,
              password: 'password',
              description: descriptions.sample,
              image_url: urls.sample
  )
end

1000.times do
  a = rand(1..112)
  b = rand(1..112)
  c = rand(1..112)
  if a != b && b != c
    Visit.create(
      visitor_id: a,
      visitee_id: b
    )

    Like.create(
      liker_id: b,
      likee_id: c
    )
  end
end
