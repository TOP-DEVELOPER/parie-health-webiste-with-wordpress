import { styled, connect } from "frontity";
import Link from "./link";
import SearchFormMobile from "./search/search-form-mobile";

const MenuModal = ({ state }) => {
  const { menu } = state.theme;

  return (
    <>
      <MenuOverlay>
          <MenuContent as="nav">
            <SearchFormMobile />
          </MenuContent>
      </MenuOverlay>
    </>
  );
};

const MenuOverlay = styled.div`
  background-color: #FDFCFD;
  width: 100vw;
  height: 100vh;
  overflow: hidden auto;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
`;

const MenuContent = styled.div`
  z-index: 3;
  position: relative;
`;


export default connect(MenuModal);
