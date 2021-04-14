import { connect, styled, decode } from "frontity";

import { useArchiveInfiniteScroll } from "@frontity/hooks";

import React from "react";

import AllItems from "./alllist";
import Loading from "../loading";


const InfiniteList = ({  }) => {


    const {
        pages,
        isFetching,
        isError,
        isLimit,
        fetchNext
    } = useArchiveInfiniteScroll({ limit: 0 });




  return (
    <div>
                {/*
                    {data.items.map(({ key, type, id }) => {
                        const item = state.source[type][id];
                        // Render one Item component for each one.
                        return <AllItems key={item.id} item={item} />;
                    })}
                    <Pagination />
                */}

                {/* This code if we use  useArchiveInfiniteScroll */}

                {pages.map(({ Wrapper, key, link, isLast }) => (
                    <Wrapper key={key}>
                      <AllItems />
                    </Wrapper>
                  ))}
                  <ButtonContainer>
                    {isFetching && <Loading />}
                    {isLimit && <Button onClick={fetchNext}>Load Next Page</Button>}
                    {isError && (
                      <Button onClick={fetchNext}>Something failed - Retry</Button>
                    )}
                  </ButtonContainer>


                {/* This code if we use  usePostTypeInfiniteScroll

                {posts.map(({ Wrapper, key, link, isLast}) => (
                    <Wrapper key={key}>
                        <AllItems link={link} />
                    </Wrapper>
                ))}
                {isFetching && <Loading />}
                {isLimit && <button onClick={fetchNext}>Load Next Post</button>}

                */}




    </div>
  );
};

export default connect(InfiniteList);

const ButtonContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 40px;
`;

const Button = styled.button`
  position: relative;
  background: #1f38c5;
  color: white;
  padding: 12px;
  font-weight: bold;
  border: none;
`;
