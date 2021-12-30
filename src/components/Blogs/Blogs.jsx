import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  FormControl,
  Image,
  InputGroup,
  Pagination,
  Row,
} from "react-bootstrap";
import { UilSearch } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";

function Blogs() {
  const [query, setQuery] = useState("");
  const postTitle =
    "Keep Your Guard Ups, What the Best Solution to Your Surveillance?";
  const postDesctiption =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint consequatur earum delectus dolore consectetur pariatur.";
  const postAuthor = "Admin";

  const SearchInput = () => (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Search here"
        aria-label="Search here"
        aria-describedby="search"
        className="bg-light bg-opacity-25 shadow-none"
        onChange={(event) => setQuery(event.target.value)}
        value={query}
      />
      <Button variant="white" id="search-blogs" className="border">
        <UilSearch className="text-black-50" />
      </Button>
    </InputGroup>
  );

  const Categories = () => (
    <>
      <Card className="mb-3">
        <Card.Body>
          <h6 className="mb-3">Categories</h6>
          <ul className="mb-0">
            <li>
              <a href="!#">Technology</a>
            </li>
            <li>
              <a href="!#">Blog</a>
            </li>
            <li>
              <a href="!#">Gadget</a>
            </li>
            <li>
              <a href="!#">Gaming</a>
            </li>
            <li>
              <a href="!#">Reviews</a>
            </li>
            <li>
              <a href="!#">News</a>
            </li>
          </ul>
        </Card.Body>
      </Card>
    </>
  );
  const TagName = ({ name }) => (
    <>
      <span className="badge bg-light text-dark me-2 px-4 py-2">{name}</span>
    </>
  );
  const Tags = () => (
    <>
      <Card className="mb-5">
        <Card.Body>
          <h6 className="mb-4">Tags</h6>
          <div className="d-flex flex-wrap gap-y-10">
            <TagName name="Tips">Tips</TagName>
            <TagName name="News">News</TagName>
            <TagName name="Tech">Tech</TagName>
            <TagName name="Reviews">Reviews</TagName>
            <TagName name="Gaming">Gaming</TagName>
          </div>
        </Card.Body>
      </Card>
    </>
  );

  const RecentPostItem = () => (
    <>
      <div className="d-flex mb-3 position-relative">
        <div className="flex-shrink-0">
          <Image
            src="/images/none.svg"
            className="img-cover"
            alt="blog-image"
            width="100"
            height="100"
          />
        </div>
        <div className="flex-grow-1 ms-3">
          <h6 className="lh-base mt-0">
            <Link to="/blogs" className="stretched-link">
              {postTitle}
            </Link>
          </h6>
          <p className="small text-primary mb-0">
            {postAuthor} - <span className="text-black">12 June 2021</span>
          </p>
        </div>
      </div>
    </>
  );

  const RecentPosts = () => (
    <>
      <h6 className="mb-3">Recent Posts</h6>
      <RecentPostItem />
      <RecentPostItem />
      <RecentPostItem />
    </>
  );

  const LeftSidebar = () => (
    <>
      <SearchInput />
      <Categories />
      <Tags />
      <RecentPosts />
    </>
  );

  const PostCard = ({ postTitle, postAuthor, postDesctiption }) => {
    return (
      <>
        <Col md="4">
          <Card className="border-0 shadow-sm">
            <Image
              src="/images/none.svg"
              className="card-img-top img-card-rounded"
              alt="blog-post"
            />
            <Card.Body>
              <h5 className="card-title">
                <Link to="/blogs">{postTitle}</Link>
              </h5>
              <p className="card-text">{postDesctiption}</p>
              <p className="small text-primary mb-0">
                {postAuthor} - <span className="text-black">12 June 2021</span>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </>
    );
  };

  let items = [];
  const current = 2;
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === 2 && current}>
        {number}
      </Pagination.Item>
    );
  }

  const PaginationButtons = () => (
    <div className="d-flex justify-content-center mt-5">
      <Pagination>{items}</Pagination>
    </div>
  );

  const BlogPosts = () => (
    <>
      <Row className="gap-y-20">
        <PostCard
          postTitle={postTitle}
          postAuthor={postAuthor}
          postDesctiption={postDesctiption}
        />
        <PostCard
          postTitle={postTitle}
          postAuthor={postAuthor}
          postDesctiption={postDesctiption}
        />
        <PostCard
          postTitle={postTitle}
          postAuthor={postAuthor}
          postDesctiption={postDesctiption}
        />
        <PostCard
          postTitle={postTitle}
          postAuthor={postAuthor}
          postDesctiption={postDesctiption}
        />
        <PostCard
          postTitle={postTitle}
          postAuthor={postAuthor}
          postDesctiption={postDesctiption}
        />
        <PostCard
          postTitle={postTitle}
          postAuthor={postAuthor}
          postDesctiption={postDesctiption}
        />
      </Row>
      <PaginationButtons />
    </>
  );

  return (
    <>
      <Container className="py-5">
        <Row>
          {/* LEFT MENU SIDBEBAR */}
          <Col md="3">
            <LeftSidebar />
          </Col>
          {/* BLOGS LIST CONTAINER */}
          <Col md="9">
            <BlogPosts />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Blogs;
