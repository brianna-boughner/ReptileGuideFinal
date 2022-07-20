import './careguide.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BookmarkFill, Bookmark, ArrowLeftCircle } from 'react-bootstrap-icons';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import {useParams, useNavigate} from 'react-router-dom';
import {Data} from '../Saved/Data';
import {useEffect, useState} from 'react';

function CareGuide(props){
  
  const [favourites, setFavourites] = useState([]);
  const [isFavourited, setIsFavourited] = useState(false);
const getArray = JSON.parse(localStorage.getItem('favourites') || 0)

useEffect(()=> {
  if(getArray !== 0){
    setFavourites([...getArray])
  }
}, [])
const {id} = useParams();

useEffect(() => {
  console.log("made it!")
  let array = favourites
  
  array.map((item,key) => {
    console.log("Hey")
    if (item.id == Data[id].id){
      setIsFavourited(true)
    }
    
  })
});


 function addSaved() {
  console.log(favourites)
  console.log(Data2[id]);

    let array = favourites
    let addArray = true
    array.map((item,key) => {
      console.log(item.title)
      console.log(key)
      if (item.id == Data[id].id){
        console.log(array)
        console.log("removing" + array[key].title)
        array.splice(key,1);
        console.log(array)
        addArray=false;
        console.log("reached!")
      };
    })
    if(addArray){
    array.push(Data[id])
    
    console.log("favourited " + Data[id].title)
    
  }
  setFavourites([...array])
  localStorage.setItem("favourites", JSON.stringify(favourites))

  // var storage = localStorage.getItem('favItem' + Data[id] || 0)
  // if (storage == null) {
  //   localStorage.setItem(('favItem' + Data[id]), JSON.stringify(Data[id]))
  // }
}
const navigate = useNavigate();

  
  const Data2 = [
    {
        id: 1,
        link: "/guide/0",
        image: "../images/crestedGecko.jpg",
        title: "Crested Gecko",
        difficulty: "Beginner",
        diet: "Fruits and insects",
        humidity: "50-70%",
        temperature: "70-85",
        tankSize: "20 gallons",
        description: "Crested geckos are a low-maintenance pet and are well-suited for children or novice lizard owners who have little time to devote to their daily care. Crested geckos usually have relatively docile temperaments, though they are a bit skittish and care is required when handling. They don't usually like handling, so avoid it if possible. Crested geckos are arboreal, active, and need lots of vertical space for climbing, so a tall tank is preferred."
      },
      {
        id: 2,
        link: "/guide/1",
        image: "../images/Lizards/Mourning Gecko.jpg",
        title: "Mourning Gecko",
        difficulty: "Beginner",
        diet: "Fruit flies and fruit",
        humidity: "60-80%",
        temperature: "70-80",
        tankSize: "10 gallons",
        description: "Mourning geckos are a very small species, but are low maintenance. Provide lots of hiding and climbing areas for the geckos, as they are arboreal. Mourning geckos are all female, and produce asexually, so multiple can be housed together. They lay eggs about once a month, which take 2 months to hatch. These geckos can sometimes be heard chirping at each other!"
      },
      {
        id: 3,
        link: "/guide/2",
        image: "../images/Lizards/Leopard gecko.jpg",
        title: "Leopard Gecko",
        difficulty: "Beginner",
        diet: "Insects",
        humidity: "30-40%",
        temperature: "75-85",
        tankSize: "20 gallons",
        description: "Leopard geckos are probably the most common lizard pet, and for good reason. They are very docile and easy to care for, and do not require a very complicated enclosure. Leopard geckos can be handled occasionally. Leopard geckos are mostly nocturnal, ground-dwelling geckos that are easy to tame. They do not have the sticky toe pads like other geckos, so they do not climb walls. But unlike other geckos, they do have eyelids."
        },
        {
          id: 4,
          link: "/guide/3",
          image: "../images/Lizards/Blue Tongue Skink.jpg",
          title: "Blue Tongue Skink",
          difficulty: "Intermediate",
            diet: "Vegetables and insects",
        humidity: "60-80%",
        temperature: "75-95",
        tankSize: "40 gallons",
        description: "The blue-tongued skink is a large, diurnal lizard that is docile, quiet, gentle, and easily tamed. Skinks are native to Australia and got their name from their distinct blue tongues.They require a large amount of space for their habitat and specific substrates that fit their needs. They can be fed a wide variety of foods, including dog food!"
        },
        {
          id: 5,
          link: "/guide/4",
          image: "../images/Lizards/newt.jpg",
          title: "Fire Belly Newt",
          difficulty: "Intermediate",
        diet: "Bloodworms and earthworms",
        humidity: "75-80%",
        temperature: "62-68",
        tankSize: "10 gallons",
        description: "Fire belly newts are one of the most popular amphibians to keep. They're a fun pet to observe, though their somewhat toxic skin secretions make them unwise to handle. Still, once you get them set up with the proper environment and determine their feeding schedule, they can be a low-maintenance, enjoyable companion for many years. It is important that their enclosure has both dry and submerged areas for them to swim."
        },
        {
          id: 6,
          link: "/guide/5",
          image: "../images/Lizards/chameleon.jpg",
          title: "Veiled Chameleon",
          difficulty: "Difficult",
        diet: "Insects and leafy greens",
        humidity: "50% during the day, 90% at night",
        temperature: "55-80",
        tankSize: "30-60 gallons",
        description: "Veiled chameleons are territorial and aggressive to other chameleons so they should always be housed individually. While they are usually quite docile towards people, regular handling tends to be stressful for them. They are pets better suited to being watched rather than handled. These lizards are not good as a beginner reptile due to their complex needs and susceptibility to stress (especially while handling them) but if you are a seasoned reptile owner and are ready to take that next step the veiled chameleon might be for you."
        },
        {
          id: 7,
          link: "/guide/6",
          image: "../images/Lizards/Green Anole.jpg",
          title: "Green Anole",
          difficulty: "Beginner",
        diet: "Insects",
        humidity: "50-70%",
        temperature: "75-90",
        tankSize: "20 gallons",
        description: "Anoles can be kept alone or in small groups. Males are territorial and may display and fight with one another, so a group is best composed of females with no more than one male. They can change colours from brown to bright green."
        },
        {
          id: 8,
          link: "/guide/7",
          image: "../images/Lizards/Leachie.jpg",
          title: "Leachianus Gecko",
          difficulty: "Beginner",
        diet: "Fruits, insects and small mammals",
        humidity: "50-70%",
        temperature: "75-80",
        tankSize: "40 gallons",
        description: "These geckos are probbably one of the most unique pets. Also known as 'leachie geckos', this is the largest known species of gecko. They are usually docile, but they do have a painful bite if they feel threatened. They are nocturnal and omnivorous."
        },
        {
            id: 9,
            link:"/guide/8",
            image: "../images/Lizards/Milk Frog.jpg",
            title: "Milk Frog",
            difficulty: "Intermediate",
            diet: "Insects",
            humidity: "50-90%",
            temperature: "80-85",
            tankSize: "20 gallons",
            description: "Amazon Milk Frogs are one of the larger tree frogs in captivity. They are big, bold, easily handled when mature, and visually striking with their brown and white stripes, and blue toes. Amazon Milk frogs have a loud call at night."
          },
          {
            id: 10,
            link:"/guide/9",
            image: "../images/Lizards/Whites Tree Frog.jpg",
            title: "White's Tree Frog",
            difficulty: "Beginner",
            diet: "Insects",
            humidity: "60-70%",
            temperature: "80-86",
            tankSize: "15-20 gallons",
            description: "A White's tree frog is a good choice for a beginning frog owner.  Its skin also has a waxy coating that allows it to tolerate more arid conditions than other common tree frog species, making it a better match for home environments. White's tree frogs are nocturnal, which means they are more active in the evening and night hours. These frogs are quite sedentary and docile; they often become fairly tame and tolerant of handling."
          },
          {
              id: 11,
              link:"/guide/10",
              image: "../images/Lizards/Dart Frog.jpg",
              title: "Dart Frog",
              difficulty: "Intermediate",
              diet: "Fruit flies or other small insects",
              humidity: "70-100%",
              temperature: "75-85",
              tankSize: "20 gallons",
              description: "Although poison dart frogs may be dangerous in the wild, the truth is these happy tiny amphibians are perfectly safe in the home. In captivity, poison dart frogs do not eat the toxic plants that cause them to be dangerous. Taking care of a dart frog is pretty easy but not completely maintenance-free. You'll need to spend about thirty minutes a week cleaning their habitat."
            },
            {
              id: 12,
              link:"/guide/11",
              image: "../images/Lizards/Fire Toad.jpg",
              title: "Fire Bellied Toad",
              difficulty: "Intermediate",
              diet: "Crickets and worms",
              humidity: "80%",
              temperature: "65-78",
              tankSize: "10 gallons",
              description: "Oriental fire-bellied toads are hardy, colorful little creatures. You will not be able to hold it much, but they are interesting to observe. They are not difficult to care for, although they do take a fair amount of work to maintain. They require an enclosure with both water and land."
            },
            {
              id: 13,
              link:"/guide/12",
              image: "../images/Lizards/Pacman Frog.jpg",
              title: "Pacman Frog",
              difficulty: "Beginner",
              diet: "Insects",
              humidity: "50-80%",
              temperature: "75-85",
              tankSize: "20 gallons",
              description: "Native to South America, Pacman frogs are amphibians that are relatively common in the pet trade. As strictly terrestrial amphibians, they are very poor swimmers. Instead, they spend most of their time in a humid environment among damp leaf litter. Pacman frogs get their common name from the popular PacMan arcade game, because like the animated character, these frogs have a rounded appearance with huge mouths."
            },
            {
              id: 14,
              link:"/guide/13",
              image: "../images/Lizards/African Frog.jpg",
              title: "African Dwarf Frog",
              difficulty: "Intermediate",
              diet: "Brine shrimp, bloodworms, commercial frog food",
              humidity: "N/A",
              temperature: "64-77",
              tankSize: "5-20 gallons",
              description: "African Dwarf Frogs are fully aquatic, so they need a fully cycled fishtank. They can be kept with other fish, but beware that they may eat the smaller ones."
            },
            {
              id: 15,
              link:"/guide/14",
              image: "../images/Lizards/Red Eyed Tree Frog.jpg",
              title: "Red-Eyed Tree Frog",
              difficulty: "Intermediate",
              diet: "Insects",
              humidity: "60-70%",
              temperature: "75-85",
              tankSize: "10 gallons",
              description: "The Red Eye Tree Frog has a very obvious common name – it is a tree frog with bright red eyes! In daylight Red Eyes are bright green and conceal themselves by keeping their bright red eyes closed, tucking their legs up against their bodies to hide their distinct blue sides. The compact sleeping design also helps to reduce exposed surface area, thus reducing water loss via evaporation."
            },
            {
              id: 16,
              link:"/guide/15",
              image: "../images/Lizards/Pixie Frog.jpg",
              title: "Pixie Frog",
              difficulty: "Beginner",
              diet: "Insects, occasionally rodents",
              humidity: "70-80%",
              temperature: "75-90",
              tankSize: "15 gallons",
              description: "Pixie frogs are the second largest species of frogs. However, they are lazy and do not move much, so they can be kept in a 15 gallon enclosure. Females can be housed together, but males should be housed alone."
            },
            {
                id: 17,
                image: "../images/Lizards/Ball Python.jpg",
                link:"/guide/16",
                title: "Ball Python",
                difficulty: "Beginner",
              diet: "Rats and mice",
              humidity: "50-60%",
              temperature: "70-85",
              tankSize: "40 gallons",
              description: "The ball python is quite simply the most popular pet python in the world. Ball pythons are generally a bit shy, but they make for ideal captives, because they are of a small size, are generally friendly, are manageable to care for, and come in a remarkable array of colors and patterns."
              },
              {
                id: 18,
                link:"/guide/17",
                image: "../images/Lizards/Hognose.jpg",
                title: "Western Hognose",
                difficulty: "Beginner",
                diet: "Small rodents",
                humidity: "70-80%",
                temperature: "75-90",
                tankSize: "20 gallons",
                description: "Hognose snakes tend to be timid, preferring to hide from predators in the wild rather than attack. Likewise, in captivity, they rarely turn aggressive. They are relatively easy to maintain once you have their housing and feeding routine down."
              },
              {
                  id: 19,
                  link:"/guide/18",
                  image: "../images/Lizards/Corn Snake.jpg",
                  title: "Corn Snake",
                  difficulty: "Beginner",
                  diet: "Rodents",
                  humidity: "40-50%",
                  temperature: "75-90",
                  tankSize: "40 gallons",
                  description: "Taking its name from the corn granaries, which attracted mice and then these mouse predators, the corn snake makes an excellent pet snake. It is generally docile, relatively easy to care for, and does not get very large."
                },
                {
                  id: 20,
                  link:"/guide/19",
                  image: "../images/Lizards/Black Snake.jpg",
                  title: "Black Mexican Kingsnake",
                  difficulty: "Intermediate",
                  diet: "Mice",
                  humidity: "75-85%",
                  temperature: "75-",
                  tankSize: "30 gallons",
                  description: "These snakes are well known for their solid black colour, which is very unique amongst snakes. They are interesting to watch, as they are diurnal and spend their time moving and swimming."
                },
                {
                  id: 21,
                  link:"/guide/20",
                  image: "../images/Lizards/worm snake.webp",
                  title: "Worm Snake",
                  difficulty: "Intermediate",
                  diet: "Earthworms",
                  humidity: "60-70%",
                  temperature: "75-90",
                  tankSize: "10 gallons",
                  description: "Caring for worm snakes can be difficult because of their specialized needs. They feed almost exclusively on earthworms and soft-bodied insects, which they find by burrowing deep within the soil. They also hide beneath leaf litter, fallen logs, and rocks, and they do not bite."
                },
                {
                  id: 22,
                  link:"/guide/21",
                  image: "../images/Lizards/Egg Eater.jpg",
                  title: "Egg-Eating Snake",
                  difficulty: "Difficult",
                  diet: "Eggs",
                  humidity: "60-70%",
                  temperature: "75-90",
                  tankSize: "20 gallons",
                  description: "As its name implies, the egg-eating snake eats eggs, and only eggs. Because of their small size they can’t just eat chicken eggs, which are too large. To feed these little guys, you will need a steady supply of quail, finch, canary or other smaller birds’ eggs.   Egg-eaters prefer fresh eggs, but some will take refrigerated once the eggs have been warmed to room temperature."
                },
                {
                  id: 23,
                  link:"/guide/22",
                  image: "../images/Lizards/Garter Snake.jpg",
                  title: "Garter Snake",
                  difficulty: "Intermediate",
                  diet: "Small fish, slugs, worms, frogs",
                  humidity: "50-60%",
                  temperature: "75-90",
                  tankSize: "10-20 gallons",
                  description: "Garter snakes are the most commonly found snake in North America, but they can also make good pets. They are easy to care for, however their diet can sometimes be difficult to maintain."
                },
                {
                  id: 24,
                  link:"/guide/23",
                  image: "../images/Lizards/Tree Python.jpg",
                  title: "Green Tree Python",
                  difficulty: "Difficult",
                  diet: "Small mammals and reptiles",
                  humidity: "40-70%",
                  temperature: "78-88 F",
                  tankSize: "30 gallons",
                  description: "As pets, these are shy snakes that aren't particularly high-maintenance (with the exception of the required humidity levels within their enclosure). Though vibrant and exotic, they will not tolerate being handled often, can be prone to biting when startled, and may not make as good a pet as some other snakes."
                },
                {
                    id: 25,
                    link:"/guide/24",
                    image: "../images/Lizards/Slider.jpg",
                    title: "Red-Eared Slider",
                    difficulty: "Intermediate",
                    diet: "Commerical turtle food, insects",
                    humidity: "70%",
                    temperature: "75-95 F",
                    tankSize: "50 gallons",
                    description: "Red-eared sliders are very popular aquatic turtles that require special lighting, an animal and plant based diet, and continuous cleaning and maintenance. Red-eared sliders are a serious commitment because they can live up to 20 years in captivity and needs proper upkeeping to stay happy and healthy. If you get one of these quarter-sized babies, it may look easy at first, but as they grow, they will need a bigger tank and a lot of constant care."
                  },
                  {
                    id: 26,
                    link:"/guide/25",
                    image: "../images/Lizards/Tortoise.jpg",
                    title: "Greek Tortoise",
                    difficulty: "Difficult",
                    diet: "Leafy greens",
                    humidity: "40-60%",
                    temperature: "75-95 F",
                    tankSize: "50 gallons",
                    description: "Greek tortoises are commonly kept as pets, and their affable personalities make them enjoyable companions. However, because these pet tortoises have a lifespan in captivity often of 50 years or longer, prospective owners should think long and hard about whether they want to commit to caring for an animal that could easily outlive them."
                  },
                  {
                      id: 27,
                      link:"/guide/26",
                      image: "../images/Lizards/Box Turtle.jpg",
                      title: "Box Turtle",
                      difficulty: "Difficult",
                      diet: "Insects, fruit and vegetables",
                      humidity: "40-70%",
                      temperature: "78-88 F",
                      tankSize: "75 gallons",
                      description: "Box turtles primarily live on land, and they can be somewhat challenging pets. They are a long-term commitment, living for several decades, plus getting their environment right can be difficult."
                    },
                    {
                      id: 28,
                      link:"/guide/27",
                      image: "../images/Lizards/African Turtle.jpg",
                      title: "African Sideneck Turtle",
                      difficulty: "Intermediate",
                      diet: "Plants, insects, fish",
                      humidity: "50%",
                      temperature: "75-85 F",
                      tankSize: "110 gallons",
                      description: "These turtles can be a lot of work to care for, but aren't necessarily complicated. They are mostly aquatic, and do not like to be handled. One of the biggest difficulties with this pet is the huge tank size required, but if you have some room to spare these turtles might be for you. They also do well housed outside, climate permitting."
                    }

];
  
    return (
      <div className="centred">
        <OverlayTrigger
      key={"bottom"}
      placement={"bottom"}
      overlay={
        <Tooltip>
          Go Back
        </Tooltip>
         }
        >  
<button className= "backButton" onClick={() => navigate(-1)}><ArrowLeftCircle size="40px"/></button>
</OverlayTrigger>
<div className="careGuide">

  <Row style={{paddingBottom: "5%"}}>
    <Col sm={5} className="centred"><img src={Data2[id].image} className="lizardPic"></img></Col>
    <Col>
    <h1>{Data[id].title}</h1>
    <div className="summary">
      <b>Difficulty:</b> {Data2[id].difficulty}
      <br></br>
      <b>Tank size:</b> {Data2[id].tankSize}
      <br></br>
      <b>Diet:</b> {Data2[id].diet}
      <br></br>
      <b>Temperature:</b> {Data2[id].temperature} &deg;F
      <br></br>
      <b>Humidity:</b> {Data2[id].humidity}
    </div>
    </Col>
    <Col sm={1}>
      {isFavourited ? (
        <OverlayTrigger
        key={"left"}
        placement={"left"}
        overlay={
          <Tooltip>
            Unsave this reptile
          </Tooltip>
           }
          >  
          <a href="" onClick={addSaved} style={{color:'black'}}><BookmarkFill size="40px" ></BookmarkFill></a>
          </OverlayTrigger>
      ):(
    <OverlayTrigger
      key={"left"}
      placement={"left"}
      overlay={
        <Tooltip>
          Save this reptile
        </Tooltip>
         }
        >  
        <a href="" onClick={addSaved} style={{color:'black'}}><Bookmark size="40px" ></Bookmark></a>
        </OverlayTrigger>
      )}
      </Col>
  </Row>

  <p>{Data[id].description}</p>
 


</div>
    
</div>
    )
    
  }
export default CareGuide;

