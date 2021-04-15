import { styled, connect, Global } from "frontity";
import { CloseIcon, HamburgerIcon, SearchIcon } from "./menu-icon";
import MenuModal from "./menu-modal";

function MobileMenu({ state, actions }) {
  const { isMobileMenuOpen } = state.theme;
  return (
    <>
      <MenuToggle onClick={actions.theme.toggleMobileMenu}>
        {isMobileMenuOpen ? (
          <>
            {/* Add some style to the body when menu is open,
            to prevent body scroll */}
            <Global styles={{ body: { overflowY: "hidden" } }} />
            <CloseIcon color="#7C989B" size="20px" />
          </>
        ) : (
          <SearchIcon color="white" size="32px" />
        )}
      </MenuToggle>
      {/* If the menu is open, render the menu modal */}
      {isMobileMenuOpen && <MenuModal />}
    </>
  );
}

const MenuToggle = styled.button`
  position: absolute;
  right: 58px;
  top: 27px;
  background: transparent;
  border: 0;
  color: #183F4F;
  z-index: 5;
  height: 32px;
  display: none;
  outline:0;

  @media (max-width: 720px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default connect(MobileMenu);
