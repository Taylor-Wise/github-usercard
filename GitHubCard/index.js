/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

// import Axios from "axios";

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ["Taylor-Wise", "Holly919", "StrayLove", "spazdrum", "aware91", "reannalp", "tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/

const createCard = (obj) => {
  const newCard = document.createElement("div")
  const profileImg = document.createElement("img")
  const cardInfo = document.createElement("div")
  const cardName = document.createElement ("h3")
  const ghHandle = document.createElement("p")
  const locate = document.createElement("p")
  const profile = document.createElement("span")
  const profileLink = document.createElement("a")
  const followers = document.createElement("p")
  const following = document.createElement("p")
  const bio = document.createElement("p")

  newCard.appendChild(profileImg)
  newCard.appendChild(cardInfo)
  cardInfo.appendChild(cardName)
  cardInfo.appendChild(ghHandle)
  cardInfo.appendChild(locate)
  cardInfo.appendChild(profile)
  cardInfo.appendChild(profileLink)
  cardInfo.appendChild(followers)
  cardInfo.appendChild(following)
  cardInfo.appendChild(bio)

  newCard.classList.add("card")
  cardInfo.classList.add("card-info")
  cardName.classList.add("name")
  ghHandle.classList.add("username")

  profileImg.src = obj.avatar_url
  cardName.textContent = obj.name
  ghHandle.textContent = obj.login
  locate.textContent = `Location: ${obj.location}`
  profileLink.textContent = obj.html_url
  profileLink.href = obj.html_url
  profile.textContent = `Profile: ` 
  followers.textContent = `Followers: ${obj.followers}`
  following.textContent = `Following: ${obj.following}`
  bio.textContent = `Bio: ${obj.bio}`

  profile.style.fontSize ="1.4rem"
  profileLink.style.fontSize = "1.4rem"

  return newCard
}


followersArray.forEach(name => {
  axios.get(`https://api.github.com/users/${name}`)
  .then(response => {
    const cards = document.querySelector(".cards")
    cards.appendChild(createCard(response.data))
  })
  .catch(err => {
    console.log(err)
  })
})

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
