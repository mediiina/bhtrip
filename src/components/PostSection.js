import { excerpt } from "../utility";
import { db } from '../firebase';
import React, { useEffect, useState } from "react";
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

const PostSection = () => {
  const [attractions, setAttractions] = useState([]);
  const [loading, setLoading] = useState(true); // Postavimo na true kako bi se podaci dohvatili pri prvom renderiranju
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Broj atrakcija po stranici

  // Funkcija za dohvaćanje atrakcija za trenutnu stranicu
  const fetchAttractions = async (page) => {
    setLoading(true);
    const postRef = collection(db, "attractions");
    const attractionsQuery = query(
      postRef,
      orderBy("title"),
      limit(itemsPerPage * page)
    );
    const docSnapshot = await getDocs(attractionsQuery);
    const attractionsData = docSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setAttractions(attractionsData);
    setLoading(false);
  };

  // Efekt koji se poziva kada se promijeni trenutna stranica
  useEffect(() => {
    fetchAttractions(currentPage);
  }, [currentPage]);

  // Funkcija za prebacivanje na sljedeću stranicu
  const handleNextPage = () => {
    setCurrentPage((page) => page + 1);
  };

  // Funkcija za prebacivanje na prethodnu stranicu
  const handlePrevPage = () => {
    setCurrentPage((page) => page - 1);
  };

  return (
    <div>
      <div className="post-heading text-start py-2 mb-4">
        Most Popular Destination
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {attractions.map((item) => (
            <div className="row pb-5" key={item.id}>
              <div className="col-md-6">
                    <div className="hover-posts-img">
                        <div className="posts-img">
                            <img src={item.imgUrl} alt={item.title} />
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
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

                </div>
            </div>
          ))}
          <div>
            <button className="btn-prev"
              disabled={currentPage === 1} // Onemogući gumb ako smo na prvoj stranici
              onClick={handlePrevPage}
            >
              Prev
            </button>
            <button className="btn-next"
              disabled={attractions.length < itemsPerPage} // Onemogući gumb ako nema više podataka za prikaz
              onClick={handleNextPage}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default PostSection;



