import React from 'react'
import FontAwesome from "react-fontawesome";
import {Link} from "react-router-dom"
import { excerpt } from "../utility";


const PostSection = ({attractions}) => {
  return (
    <div>
      <div className="post-heading text-start py-2 mb-4">
        {attractions?.map((item) => (
            <div className="row pb-4" key={item.id}>
                <div className="col-md-5">
                    <div className="hover-posts-img">
                        <div className="posts-img">
                            <img src={item.imgUrl} alt={item.title} />
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="text-start">
                        <h6 className="category catg-color">
                            {item.category}</h6>
                        <span className="title py-2">{item.title}</span>
                    </div>
                    <div className="short-description text-start">
                        {excerpt(item.description, 120)}
                    </div>
                    <Link to={`/detail/${item.id}`}>
                      <button className="btn btn-read">Read More</button>
                    </Link>

                    <div style={{float: "right"}}>
                        <FontAwesome
                        name="trash"
                        style={{margin: "15px", cursor:"pointer"}}
                        size="2x" 
                      />
                        <FontAwesome
                        name="edit"
                        style={{ cursor:"pointer"}}
                        size="2x" 
                        />
                    </div>
                </div>
            </div>
        ) )}
      </div>
    </div>
  )
}

export default PostSection
