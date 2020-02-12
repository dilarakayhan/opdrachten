const superheroes = [
    {
        "name": "Batman",
        "publisher": "DC Comics",
        "alter_ego": "Bruce Wayne",
        "first_appearance": "Detective Comics #27",
        "weight": "210"
    },
    {
        "name": "Superman",
        "publisher": "DC Comics",
        "alter_ego": "Kal-El",
        "first_appearance": "Action Comics #1",
        "weight": "220"
    },
    {
        "name": "Flash",
        "publisher": "DC Comics",
        "alter_ego": "Jay Garrick",
        "first_appearance": "Flash Comics #1",
        "weight": "195"
    },
    {
        "name": "Green Lantern",
        "publisher": "DC Comics",
        "alter_ego": "Alan Scott",
        "first_appearance": "All-American Comics #16",
        "weight": "186"
    },
    {
        "name": "Green Arrow",
        "publisher": "DC Comics",
        "alter_ego": "Oliver Queen",
        "first_appearance": "All-American Comics #16",
        "weight": "195"
    },
    {
        "name": "Wonder Woman",
        "publisher": "DC Comics",
        "alter_ego": "Princess Diana",
        "first_appearance": "The Incredible Hulk #180",
        "weight": "165"
    },
    {
        "name": "Blue Beetle",
        "publisher": "DC Comics",
        "alter_ego": "Dan Garret",
        "first_appearance": "Mystery Men Comics #1",
        "weight": "145"
    },
    {
        "name": "Spider Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Peter Parker",
        "first_appearance": "Amazing Fantasy #15",
        "weight": "167"
    },
    {
        "name": "Captain America",
        "publisher": "Marvel Comics",
        "alter_ego": "Steve Rogers",
        "first_appearance": "Captain America Comics #1",
        "weight": "220"
    },
    {
        "name": "Iron Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Tony Stark",
        "first_appearance": "Tales of Suspense #39",
        "weight": "250"
    },
    {
        "name": "Thor",
        "publisher": "Marvel Comics",
        "alter_ego": "Thor Odinson",
        "first_appearance": "Journey into Myster #83",
        "weight": "200"
    },
    {
        "name": "Hulk",
        "publisher": "Marvel Comics",
        "alter_ego": "Bruce Banner",
        "first_appearance": "The Incredible Hulk #1",
        "weight": "1400"
    },
    {
        "name": "Wolverine",
        "publisher": "Marvel Comics",
        "alter_ego": "James Howlett",
        "first_appearance": "The Incredible Hulk #180",
        "weight": "200"
    },
    {
        "name": "Daredevil",
        "publisher": "Marvel Comics",
        "alter_ego": "Matthew Michael Murdock",
        "first_appearance": "Daredevil #1",
        "weight": "200"
    },
    {
        "name": "Silver Surfer",
        "publisher": "Marvel Comics",
        "alter_ego": "Norrin Radd",
        "first_appearance": "The Fantastic Four #48",
        "weight": "unknown"
    }
]

// names of all superheroes
const superheroesName = superheroes.map((superhero) => superhero.name)
//heroes below 190 pounds
const superheroesLightWeight = superheroes.filter((lightweight) => lightweight.weight < 190)
//heroes who are 200 pounds
const twoHundredPoundSuperheroes = superheroes.filter((weight) => weight.weight == 200).map((superhero) => superhero.name)
//heroes' first gig
const firstAppearance = superheroes.map((firstgig) => firstgig.first_appearance)
//all DC heroes
const dcHeroes = superheroes.filter((dc) => dc.publisher == "DC Comics")
//all Marvel heroes
const marvelHeroes = superheroes.filter((marvel) => marvel.publisher == "Marvel Comics")
//all dc heroes' weight combined
const dcHeroesWeight = superheroes.filter((dc) => dc.publisher == "DC Comics").reduce((currentTotal, superhero) => parseInt(superhero.weight) + currentTotal, 0)
//all marvel heroes' weight combined
const marvelHeroesWeight = superheroes.filter((marvel) => {
    return marvel.publisher == "Marvel Comics"
}).filter((rotteAppel) => {
    return rotteAppel.weight !== "unknown"
}).reduce((currentTotal, superhero) => {
    return parseInt(superhero.weight) + currentTotal
}, 0)
// all heroes' weight combined
const superheroesWeight = superheroes.filter((rotteAppel) => rotteAppel.weight !== "unknown").reduce((currentTotal, superhero) => parseInt(superhero.weight) + currentTotal, 0)
//heaviest of them all 
const heaviestOfThemAll = superheroes.filter((rotteAppel) => {
    return rotteAppel.weight !== "unknown"
}).map((weight) => {
    return (parseInt(weight.weight))
})


console.log(superheroesName)
console.log(superheroesLightWeight)
console.log(twoHundredPoundSuperheroes)
console.log(firstAppearance)
console.log(dcHeroes)
console.log(marvelHeroes)
console.log(dcHeroesWeight)
console.log(marvelHeroesWeight)
console.log(superheroesWeight)
console.log(Math.max(...heaviestOfThemAll))


