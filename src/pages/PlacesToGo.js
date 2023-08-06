
import React, {useState, useEffect} from 'react'
import { db } from '../firebase';
import { collection, getDocs, onSnapshot, query, where } from "firebase/firestore";
import PostSection from '../components/PostSection';
import Trending from '../components/Trending';


const PlacesToGo = () => {
  //const [loading, setLoading] = useState(true)
  const [attractions, setAttractions] = useState([]);
  const [trendPosts, setTrendPosts] = useState([]);

  const getTrendingPosts = async () => {
    const postRef = collection(db, "attractions")
    const trendQuery = query(postRef, where("trending", "==", "yes"));
    const querySnapshot = await getDocs(trendQuery);
    let trendPosts = [];
    querySnapshot.forEach((doc) => {
      trendPosts.push({ id: doc.id, ...doc.data() });
    });
    setTrendPosts(trendPosts);
  };

  useEffect(() => {
    getTrendingPosts();
    const unsub = onSnapshot(
      collection(db, "attractions"),
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({id: doc.id, ...doc.data()})
        });

        setAttractions(list);
        //setLoading(false);

      }, (error) => {
        console.log(error)
      }
    );

    return () => {
      unsub();
      getTrendingPosts();

    };

},[] );

  return (
    <div className="container-fluid pb-5 pt-5 padding">
      <div className="container padding">
        <div className="row mx-0">
          <Trending attractions={trendPosts} />
          <div className="col-md-7">
            <PostSection attractions={attractions}/>
          </div>
        </div>
      </div>
    </div>
  )
  }

export default PlacesToGo
