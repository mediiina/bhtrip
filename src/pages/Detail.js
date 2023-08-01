import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import {db} from '../firebase'
import { doc, getDoc } from 'firebase/firestore'

const Detail = ({setActive}) => {
    const {id} = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        id && getPostDetail();
    }, [id])

    const getPostDetail = async () => {
        const docRef = doc(db, "attractions", id);
        const postDetail = await getDoc(docRef);
        setPost(postDetail.data());
    }
  return (
    <div className="single">
      <div className="post-title-box" 
      style={{backgroundImage: `url('${post?.imgUrl}')`}}>
        <div className="overlay"></div>
        <div className="post-title">
            <h2>{post?.title}</h2>
        </div>
      </div>
      <div className="container-fluid pb-4 pt-4 padding post-single-content">
        <div className="container padding">
            <div className="row mx-0">
                <div className="col-md-8">
                    <p className="text-start">{post?.description}</p>
                </div>
                <div className="col-md-3">
                    <h2>Tags</h2>
                    <h2>Most Popular</h2>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
