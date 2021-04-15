import { connect, styled, decode } from "frontity";
import Item from "./list-item-cat";
//import FeaturedIcon from '../../../img/star.svg';


const ListCat = ({ state, link}) => {
  // Get the data of the current list. VERY IMPORTANT
  const data = state.source.get(link);

  return (

      <CategoryArticles>
          {data.items.map(({ type, id }) => {
            const item = state.source[type][id];
            // Render one Item component for each one.
            return <Item key={item.id} item={item} />;
          })}
      </CategoryArticles>

  );
};

export default connect(ListCat);

const CategoryArticles = styled.div`
    display: grid;
    grid-row-gap: 44px;
    padding: 53px 0 0;
    justify-content: center;

    @media (min-width: 951px) {
        grid-template-columns: repeat(3, minmax(0, 380px));
        grid-column-gap: 60px;
    }
    @media (max-width: 950px) {
        grid-template-columns: repeat(2, minmax(0, 380px));
        grid-column-gap: 40px;
    }
    @media (max-width: 700px) {
        grid-template-columns: repeat(1, minmax(0, auto));
        grid-column-gap: 24px;
        padding: 32px 24px 71px;
    }
`;
