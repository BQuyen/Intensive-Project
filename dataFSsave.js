// pushToFirestore.js
import firebase from 'firebase/app';
import 'firebase/firestore';
import citiesData from './citiesData.js';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD4LoEZuOpThXPeF4y-dnTfAO4hTUtwn04",
    authDomain: "summertravel-c678c.firebaseapp.com",
    projectId: "summertravel-c678c",
    storageBucket: "summertravel-c678c.appspot.com",
    messagingSenderId: "1014082318126",
    appId: "1:1014082318126:web:5d62e1b37e6cadd56354bf",
    measurementId: "G-D9SVVJ4HME",
  };
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Function to push cities data to Firestore
async function pushCitiesData() {
    try {
        await Promise.all(citiesData.map(async city => {
            const docRef = db.collection('cities').doc(city.city);
            await docRef.set({
                Uid: city.city,
                Tickets: city.tickets
            });
            console.log(`City data for ${city.city} added to Firestore.`);
        }));
        console.log('All cities data successfully added to Firestore.');
    } catch (error) {
        console.error('Error adding cities data to Firestore: ', error);
    }
}

// Call function to push data
pushCitiesData();
