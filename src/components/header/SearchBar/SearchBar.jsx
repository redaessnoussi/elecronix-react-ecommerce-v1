import React, { useState } from "react";
import { UilSearch } from "@iconscout/react-unicons";
import { Button, FormControl, InputGroup } from "react-bootstrap";

function SearchBar({ searchProduct, setfilterNow }) {
  const [query, setQuery] = useState("");
  const searchNow = (query) => {
    if (query !== "") {
      searchProduct(query);
      setfilterNow(true);
    } else {
      setfilterNow(false);
    }
  };

  return (
    <InputGroup>
      <FormControl
        placeholder="Search here"
        aria-label="Search here"
        aria-describedby="search"
        className="bg-light bg-opacity-25 shadow-none"
        onChange={(event) => setQuery(event.target.value)}
        value={query}
      />
      <Button variant="primary" id="search" onClick={() => searchNow(query)}>
        <UilSearch />
      </Button>
    </InputGroup>
  );
}

export default SearchBar;
