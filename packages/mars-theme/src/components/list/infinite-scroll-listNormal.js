import { connect, styled, decode } from "frontity";

import { useArchiveInfiniteScroll } from "@frontity/hooks";

import React from "react";

import AllItems from "./alllist";
import Loading from "../loading";

const InfiniteListNormal = ({ xx }) => {

    const {
        pages,
        isFetching,
        isError,
        isLimit,
        fetchNext
    } = useArchiveInfiniteScroll({ limit: 0 });

    console.log(xx);

  return (
    <div>

        {/* This code if we use  useArchiveInfiniteScroll */}

        {pages.map(({ Wrapper, key, link, isLast }) => (
            <Wrapper key={key}>
              <AllItems link={link}/>
            </Wrapper>
        ))}
          <ButtonContainer>
            {isFetching && <Loading />}
            {isLimit && <Button onClick={fetchNext}>Load Next Page</Button>}
            {isError && (
              <Button onClick={fetchNext}>Something failed - Retry</Button>
            )}
          </ButtonContainer>

    </div>
  );
};

export default connect(InfiniteListNormal);

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
