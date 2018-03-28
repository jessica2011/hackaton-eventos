import React from 'react'
import Carousel from './carousel'
import CardEventList from './CardEventList'
import Login from './Login'
import firebase from 'firebase'

const dataEvents = [
  {title: 'Congreso de JavaScripts', name:'Laboratoria', url:'http://vitemprende.es/wp-content/uploads/2016/02/image004.jpg', organizer:'Laboratoria', address:'av. Venezuela 123, Barranco'},
  {title: 'Congreso de JavaScripts', name:'Laboratoria1', url:'http://vitemprende.es/wp-content/uploads/2016/02/image004.jpg', organizer:'Laboratoria', address:'av. Venezuela 123, Barranco'},
  {title: 'Congreso de JavaScripts', name:'Laboratoria2', url:'http://vitemprende.es/wp-content/uploads/2016/02/image004.jpg', organizer:'Laboratoria', address:'av. Venezuela 123, Barranco'}
]

firebase.initializeApp({
  apiKey: "AIzaSyByqvButDPrBlzb9AIrlYPh9LOoy5Jnpjk",
  authDomain: "reto-eventos.firebaseapp.com",
  databaseURL: "https://reto-eventos.firebaseio.com",
  projectId: "reto-eventos",
  storageBucket: "reto-eventos.appspot.com",
  messagingSenderId: "558847801184"
})


const Main = () => {
    return (
      <div className="container">
        <Carousel />
        <CardEventList 
          itemEvents = {dataEvents}
        />
        <Login />
      </div>      
    );
  }

  export default Main ;