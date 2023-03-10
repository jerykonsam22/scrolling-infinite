import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import ListOfProduct from "./ListOfProduct";
import Test from "./Test";

const Index = () => {

  const [card, setCard] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [limitLaod, setLimitLoad] = useState(9)

  const getCardData = async () => {
    const res = await fetch(
      ` http://localhost:3006/products?_limit=${limitLaod}&_page=${page}`
    );
    const data = await res.json();
    // console.log(data);
    setCard((prev) => [...prev, ...data]);
    setLoading(false);
  };

  useEffect(() => {
    getCardData();
  }, [page]);


  console.log(card)
  const handelInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleSearch = (event) => {
    const keyword = event.target.value;
    console.log(keyword)
    const filteredResults = card.filter((item) =>
      item.title.toLowerCase().includes(keyword.toLowerCase())
    );
    setSearchKeyword(keyword);
    setSearchResults(filteredResults);
    setCurrentPage(1);
  };

  const getItemsToDisplay = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return searchResults.slice(startIndex, endIndex);
  };

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };


  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);


  useEffect(() => {
    const arr = []
    getItemsToDisplay().map((item) => {
      arr.push(item)
      setItemsPerPage((prev) => prev + 10)
  })
    setCard(arr)

  }, [searchKeyword])




  getItemsToDisplay().length === itemsPerPage && (
    <button onClick={() => setItemsPerPage((prev) => prev + 10)}>
      Load More
    </button>
  )





  return (
    <div>
      <Header handleSearch={handleSearch} />
      <ListOfProduct movieInfo={card} />
      {loading && <div class="text-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>}
      {/* <Footer /> */}
      {/* <Test/> */}
    </div>
  );
};

export default Index;
