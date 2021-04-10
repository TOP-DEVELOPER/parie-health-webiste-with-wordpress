import { connect, styled, decode } from "frontity";
import Item from "./list-item-cat";
import Pagination from "./pagination";
import FeaturedIcon from '../../../img/star.svg';


const ListCat = ({ state, link, item }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);

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
        <div>
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
              <Text>
                We could not find any results for your search. You can give it
                another try through the search form above.
              </Text>
            ) : (
              <Text>
                <b>Search:</b> <em>{data.searchQuery}</em><br />
                We found {total} {total === 1 ? "result" : "results"} for your
                search.
              </Text>
            )}
          </IntroText>
      )}


      <CategoryArticles>

          {data.items.map(({ type, id }) => {
            const item = state.source[type][id];
            // Render one Item component for each one.
            return <Item key={item.id} item={item} />;
          })}


      </CategoryArticles>

    </Container>
  );
};

export default connect(ListCat);

const IntroText = styled.div`
  width: 100%;
  margin-top: 2rem;
  font-weight: initial;
  @media (min-width: 700px) {
    font-size: 2rem;
    margin-top: 2.5rem;
  }
`;

const Text = styled.p`
  margin: 0 0 1em 0;
  &:last-child {
    margin-bottom: 0;
  }
`;



const Container = styled.section`
  max-width: 1440px;
  width: 100%;
  margin: auto;
  padding: 0 60px 64px;
  list-style: none;

    @media (max-width: 768px) {
        padding: 32px 64px 64px;
    }
    @media (max-width: 375px) {
        padding: 32px 24px 64px;
    }
`;

const Header = styled.h3`
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 41.66px;
    color: #183F4F;
`;

const AuthorDescription = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    align-items: center;

    div {
        padding-right: 24px;
    }

    p{
        font-size: 0.9rem;
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

const CategoryArticles = styled.div`
    display: grid;
    grid-row-gap: 44px;
    padding: 53px 0;
    justify-content: center;

    @media (min-width: 769px) {
        grid-template-columns: repeat(3, minmax(0, 380px));
        grid-column-gap: 60px;
    }
    @media (max-width: 768px) {
        grid-template-columns: repeat(2, minmax(0, 300px));
        grid-column-gap: 40px;
    }
    /* @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
        grid-template-columns: repeat(2, auto);
        grid-column-gap: 40px;
    } */
    @media (max-width: 375px) {
        grid-template-columns: repeat(1, minmax(0, 327px));
        grid-column-gap: 40px;
    }
    /* @media (min-width: 320px) and (max-width: 480px) {
        grid-template-columns: repeat(1, auto);
        grid-column-gap: 40px;
    } */
`;
