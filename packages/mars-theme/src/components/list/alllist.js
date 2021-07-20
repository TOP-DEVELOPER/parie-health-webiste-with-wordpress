import { loadable,  connect, styled, decode } from "frontity";
//import Item from "./list-item-cat";
import FeaturedIcon from '../../../img/star.svg';

// Thanks to loadable we prevent component from loading until it's needed.
const Item = loadable(() => import('./list-item-cat'));


const ListCat = ({ state, link }) => {
    // Get the data of the current list.
    const data = state.source.get(link);



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

const Container = styled.section`
  max-width: 1440px;
  width: 100%;
  margin: auto;
  padding: 30px 60px 0;
  list-style: none;
  overflow-anchor: none;

    @media (max-width: 768px) {
        padding: 30px 0 0;
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
    grid-row-gap: 30px;
    padding: 0 24px;
    justify-content: center;


    @media (min-width: 1026px) {
        grid-template-columns: repeat(3, minmax(0, 380px));
        grid-column-gap: 60px;
    }
    @media (max-width: 1025px) {
        grid-template-columns: repeat(2, minmax(0, 380px));
        grid-column-gap: 40px;
    }

    @media (max-width: 700px) {
        grid-template-columns: repeat(1, minmax(0, auto));
        grid-column-gap: 24px;
    }
`;
