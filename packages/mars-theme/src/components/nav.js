import { connect, styled, Global } from "frontity";
import Link from "./link";
/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const Nav = ({ state }) => (
  <NavContainer>
    {state.theme.menu.map(([name, link]) => {
      // Check if the link matched the current page url
      const isCurrentPage = state.router.link === link;

      return (
        <NavItem key={name}>

          {/* If link url is the current page, add `aria-current` for a11y */}
          <Link link={link} aria-current={isCurrentPage ? "page" : undefined}>
            {name}
          </Link>

        </NavItem>
      );
    })}
  </NavContainer>
);

export default connect(Nav);

const NavContainer = styled.nav`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  max-width: 100%;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  overflow-x: auto;


  @media screen and (max-width: 560px) {
    /* display: none; */
  }
`;

const NavItem = styled.li`
  padding: 0;
  margin: 0 16px;
  box-sizing: border-box;
  flex-shrink: 0;

  & > a {
    display: inline-block;
    line-height: 2em;
    font-weight: 500;
    text-transform: uppercase;
    color: #183F4F;
    font-size: 0.75rem;
    /* Use for semantic approach to style the current link */
    &[aria-current="page"] {
      color: #6D9147;
    }
    &:hover {
        color: #6D9147;
    }
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;
