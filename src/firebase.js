import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const app = firebase.initializeApp({

  apiKey: "AIzaSyASasZuXLrUyIbgQIpLViqV3YicxojXVEc",
  authDomain: "bhtrip-2023.firebaseapp.com",
  projectId: "bhtrip-2023",
  storageBucket: "bhtrip-2023.appspot.com",
  messagingSenderId: "973573092059",
  appId: "1:973573092059:web:0a308d5c494755222e52fe",
  measurementId: "G-58ZK2W7B6Z"
})

export const auth = app.auth()
export default app