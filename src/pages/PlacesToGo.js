import { onSnapshot } from 'firebase/firestore';
import React, {useState, useEffect} from 'react'
import { db } from '../firebase';
import { collection } from "firebase/firestore";
import PostSection from './PostSection';



const PlacesToGo = () => {
  const [loading, setLoading] = useState(true)
  const [attractions, setAttractions] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "attractions"),
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({id: doc.id, ...doc.data()})
        });
        setAttractions(list);
      }, (error) => {
        console.log(error)
      }
    );

    return () => {
      unsub();
    };

},[] );

console.log("attractions", attractions);

  return (
    <div className="container-fluid pb-4 pt-4 padding">
      <div className="container padding">
        <div className="row mx-0">
          <h2>Trending</h2>
          <div className="col-md-8">
            <PostSection attractions={attractions}/>
          </div>
          <div className="col-md-3">
            <h2>Tags</h2>
            <h2>Most Popular</h2>
          </div>
        </div>
      </div>
      
    </div>
  )
  }


export default PlacesToGo
