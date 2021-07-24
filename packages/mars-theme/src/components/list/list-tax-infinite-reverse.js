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

    let revimg ='';
    let fb ='';
    let twt ='';
    let lnk ='';
    let weburl ='';
    let hgrade ='';

    try {
        revimg = state.source.author[data.id].prairieuser.reviewer_image;
        fb = state.source.author[data.id].prairieuser.facebook_prairie;
        twt = state.source.author[data.id].prairieuser.twitter_prairie;
        lnk = state.source.author[data.id].prairieuser.linkedin_prairie;
        weburl = state.source.author[data.id].prairieuser.website_prairie;
        hgrade = state.source.author[data.id].prairieuser.healthgrade_prairie;
    }catch(error) {
        console.log(error.name + ":" + error.message);
    }

  return (

    <Container>

        {/* If the list is a taxonomy, we render a title. */}
        {data.isTaxonomy && (
            <div className="CategoryHeading">
              <Header>
                {decode(state.source[data.taxonomy][data.id].name)}
              </Header>
          </div>
        )}

        {/* If the list is for a specific author, we render a title. */}
        {data.isAuthor && (
          <div className="AuthorHeading">
          <Header>
            {decode(state.source.author[data.id].name)}
          </Header>
          <AuthorDescription>
              <div>
                { revimg ?
                      <img src= {decode(state.source.author[data.id].prairieuser.reviewer_image)}/>
                    :
                    <img src= {decode(state.source.author[data.id].avatar_urls[96])}/>
                }
              </div>
              <div><p>{decode(state.source.author[data.id].description)}</p></div>
          </AuthorDescription>
          <AuthorSocial>
                {fb ?
                  <a href={decode(state.source.author[data.id].prairieuser.facebook_prairie)} target="_blank">Facebook</a>
                : null }
                {twt ?
                  <a href={decode(state.source.author[data.id].prairieuser.twitter_prairie)} target="_blank">Twitter</a>
                : null }
                {lnk ?
                    <a href={decode(state.source.author[data.id].prairieuser.linkedin_prairie)} target="_blank">LinkedIn</a>
                : null }
                {weburl ?
                    <a href={decode(state.source.author[data.id].prairieuser.website_prairie)} target="_blank">Website</a>
                : null }
                {hgrade ?
                    <a href={decode(state.source.author[data.id].prairieuser.healthgrade_prairie)} target="_blank">HealthGrade</a>
                : null }
          </AuthorSocial>
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
          )).slice().reverse()}
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
    font-weight: initial;
    margin-top: 0.5rem;
    margin-bottom: 2.25rem;
    font-size: 2rem;

    @media (max-width: 450px) {
        font-size: 1.5rem;
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
  padding: 0 90px 64px;
  list-style: none;

    @media (max-width: 768px) {
        padding: 0 24px 64px;
    }
    .AuthorHeading h1{
        text-transform: capitalize;
        @media (max-width: 336px) {
            margin: 1em 0;
        }
    }
`;


const Header = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 42px;
    color: #183F4F;
    margin: 8px 0 36px;

    @media (max-width: 336px) {
        margin: 1em 0;
    }
`;

const AuthorDescription = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    align-items: center;
    margin-bottom: 36px;
    margin-bottom: 10px;

    @media (max-width: 400px) {
        flex-direction: column;
        align-items: flex-start;

    }

    div {
        padding-right: 24px;

        @media (max-width: 336px) {
            padding-bottom: 24px;
            padding-right: 0;
        }
    }

    p{
        font-size: 0.875rem;
        font-weight: 400;
        color: #456772;
        line-height: 21px;
        margin: 0;
        max-width: 70%;

        @media (max-width: 700px) {
            max-width: 100%;
        }
    }
    img {
        width: 64px;
        height: 64px;
        border-radius: 50%;
    }
`;

const AuthorSocial = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    align-items: center;
    margin-left: 90px;
    margin-bottom: 36px;


    @media (max-width: 400px) {
        margin-left: 0;
        align-items: flex-start;
        flex-direction: row;
        justify-content: flex-start;
    }

    a {
        padding-right: 20px;
    }
`;
