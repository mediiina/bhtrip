import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

const Detail = ({ setActive }) => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Definirajte funkciju getPostDetail unutar useEffect-a
    const getPostDetail = async () => {
      const docRef = doc(db, 'attractions', id);
      const postDetail = await getDoc(docRef);
      setPost(postDetail.data());
    };

    // Pozovite funkciju getPostDetail
    id && getPostDetail();
  }, [id]);


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
                    <p className="price-start">{post?.price}</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
