import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";
import SearchForm from "./search/search-form";
import LogoDark from '../../img/logoDark.svg';

const Header = ({ state }) => {
  return (
    <>
      <Container>
        <HeaderTop>
            <PrairieLogo>
                <StyledLink link="/">
                  <img src={LogoDark} alt="Prairie Health" style={{ width: '154.13px', height: '32px'}}/>
                </StyledLink>
            </PrairieLogo>

            <JoinPrairie>
                <SearchBar>
                    <SearchForm />
                </SearchBar>
                <JoinBtn>
                    <a href="https://www.prairiehealth.co/register" target="_blank">Join Prairie</a>
                </JoinBtn>
            </JoinPrairie>

        </HeaderTop>
      </Container>
      <Nav />
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Container = styled.div`
  box-sizing: border-box;
  padding: 24px 0;
  margin-bottom: 14px;
  color: #fff;
  border-bottom: 1px solid #E3E3E3;
`;

const HeaderTop = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const PrairieLogo = styled.div`

`;

const SearchBar = styled.div`

`;

const JoinPrairie = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    a {
        background-color: #6D9147;
        color: #fff;
        border-radius: 4px;
        font-size: 0.9rem;
        font-style: normal;
        font-weight: 500;
        line-height: 18px;
        padding: 7px 16px;
        display: inline-block;
        height: 32px;
    }
    a:hover {
        background-color: #4F6B32;
    }

`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 16px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;


const JoinBtn = styled.div`
    margin-left: 24px;
`;
