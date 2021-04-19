import { connect, styled, decode } from "frontity";

import { useArchiveInfiniteScroll } from "@frontity/hooks";

import React from "react";

import AllTaxReverse from "./list-cat-reverse";
import Loading from "../loading";

const InfiniteListTaxReverse = ({ state, link }) => {

    // Important
    const data = state.source.get(state.router.link);

    const {
        pages,
        isFetching,
        isError,
        isLimit,
        fetchNext
    } = useArchiveInfiniteScroll({ limit: 0 });

    // data.total → total pages that match the current path/url
    // data.searchQuery → query done to get search results
    const { total, searchQuery } = data;
    const isEmpty = data.total === 0;

  return (
    <Container>

        {/* If the list is a taxonomy, we render a title. */}
        {data.isTaxonomy && (
          <Header>
            {decode(state.source[data.taxonomy][data.id].name)}
          </Header>
        )}

        {/* If the list is for a specific author, we render a title. */}
        {data.isAuthor && (
          <div className="AuthorHeading">
          <Header>
            {decode(state.source.author[data.id].name)}
          </Header>
          <AuthorDescription>
              <div><img src= {decode(state.source.author[data.id].avatar_urls[96])}/></div>
              <div><p>{decode(state.source.author[data.id].description)}</p></div>
          </AuthorDescription>
          </div>
        )}

        {data.isSearch && (
            <IntroText size="thin">
              {isEmpty ? (
                  <div className="no-results">
                      <Text>
                          We could not find any results for your search. You can try again or instead search by the categories listed above.
                      </Text>
                  </div>
              ) : (
                <Text>
                  We found {total} blog {total === 1 ? "post" : "posts"} including <b><em>{data.searchQuery}</em></b>
                </Text>
              )}
            </IntroText>
        )}

        {/* This code if we use  useArchiveInfiniteScroll */}

        {pages.map(({ Wrapper, key, link, isLast }) => (
            <Wrapper key={key}>
              <AllTaxReverse link={link}/>
            </Wrapper>
          ))}
          <ButtonContainer>
            {isFetching && <Loading />}
            {isLimit && <Button onClick={fetchNext}>Load Next Page</Button>}
            {isError && (
              <Button onClick={fetchNext}>Something failed - Retry</Button>
            )}
          </ButtonContainer>

    </Container>
  );
};

export default connect(InfiniteListTaxReverse);

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

const IntroText = styled.div`
  width: 100%;
  margin-top: 2rem;
  font-weight: initial;
  @media (min-width: 700px) {
    font-size: 2rem;
    margin-top: 2.5rem;
  }
  .no-results {
      max-width: 950px;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
      height: 80vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
  }
`;

const Text = styled.p`
  margin: 0 0 1em 0;
  color: #183f4f;
  &:last-child {
    margin-bottom: 0;
  }
  b::before {
      content: open-quote;
      padding: 0;
  }
  b::after {
      content: close-quote;
      padding: 0 0 0 5px;
  }

`;

const Container = styled.section`
  max-width: 1440px;
  width: 100%;
  margin: auto;
  padding: 0 60px 64px;
  list-style: none;

    @media (max-width: 768px) {
        padding: 32px 24px 64px;
    }
    .AuthorHeading h3{
        text-transform: capitalize;
    }
`;


const Header = styled.h3`
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 42px;
    color: #183F4F;
`;

const AuthorDescription = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    align-items: center;
    padding-bottom: 48px;

    div {
        padding-right: 24px;
    }

    p{
        font-size: 0.875rem;
        font-weight: 400;
        color: #456772;
        line-height: 21px;
    }
    img {
        width: 64px;
        height: 64px;
        border-radius: 50%;
    }
`;
