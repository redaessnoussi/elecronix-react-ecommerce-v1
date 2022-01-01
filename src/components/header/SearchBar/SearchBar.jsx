import React, { useState } from "react";
import { UilSearch } from "@iconscout/react-unicons";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SearchBar({ searchProduct, setfilterNow }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const searchNow = (query, event) => {
    navigate("/products");
    searchProduct(query);
    setfilterNow(true);
    event.preventDefault();
    // if (query !== "") {
    //   searchProduct(query);
    //   setfilterNow(true);
    // } else {
    //   setfilterNow(false);
    // }
  };

  return (
    <>
      <form onSubmit={(event) => searchNow(query, event)}>
        <InputGroup>
          <FormControl
            placeholder="Search here"
            aria-label="Search here"
            aria-describedby="search"
            className="bg-light bg-opacity-25 shadow-none"
            onChange={(event) => setQuery(event.target.value)}
            value={query}
          />
          <Button type="submit" variant="primary" id="search-products">
            <UilSearch />
          </Button>
        </InputGroup>
      </form>
    </>
  );
}

export default SearchBar;
