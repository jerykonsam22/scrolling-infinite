import React, { useState, useEffect } from "react";

// const data = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Jane" },
//   { id: 3, name: "Bob" },
//   { id: 4, name: "Alice" },
//   { id: 5, name: "Tom" },
//   { id: 6, name: "Sara" },
//   { id: 7, name: "David" },
//   { id: 8, name: "Karen" },
//   { id: 9, name: "Peter" },
//   { id: 10, name: "Mary" },
//   { id: 11, name: "Paul" },
//   { id: 12, name: "Mark" },
//   { id: 13, name: "Luke" },
//   { id: 14, name: "Matthew" },
//   { id: 15, name: "James" },
//   { id: 16, name: "Phil" },
//   { id: 17, name: "Tim" },
//   { id: 18, name: "Mike" },
//   { id: 19, name: "Steve" },
//   { id: 20, name: "Tina" }
// ];

const Test = ({data}) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const handleSearch = (event) => {
    const keyword = event.target.value;
    const filteredResults = data.filter((item) =>
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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <input type="text" value={searchKeyword} onChange={handleSearch} />
      {getItemsToDisplay().map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
      {getItemsToDisplay().length === itemsPerPage && (
        <button onClick={() => setItemsPerPage((prev) => prev + 10)}>
          Load More
        </button>
      )}
    </div>
  );
};

export default Test;
