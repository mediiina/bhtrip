import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {Link} from "react-router-dom"


const Trending = ({ attractions }) => {
  const options = {
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  };
  return (
    <>
      <div>
        <div className="post-heading text-start py-2 mb-4">Trending</div>
      </div>
      <AliceCarousel mouseTracking {...options} items={attractions?.map((item) => (
          <div className="item px-2" key={item.id}>
            <Link to={`/detail/${item.id}`}>
              <div className="trending-img-position">
                <div className="trending-img-size">
                  <img
                    src={item.imgUrl}
                    alt={item.title}
                    className="trending-img-relative"
                  />
                </div>
                <div className="trending-img-absolute"></div>
                <div className="trending-img-absolute-1">
                  <span className="text-white">{item.title}</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      />
    </>
  );
};

export default Trending;