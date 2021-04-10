import { connect, styled } from "frontity";
import Link from "./link";
import FooterLogoSVG from '../../img/footerLogo.svg';
import Facebook from '../../img/fb.svg';
import Instagram from '../../img/instagram.svg';
import Linkedin from '../../img/linkedin.svg';

const Footer = ({ state }) => {
  return (
    <>
        <FooterContainer>
          <Container>
            <FooterSubContainer>
                <FooterLogo>
                    <StyledLink link="/">
                        <img src={FooterLogoSVG} alt="Prairie" style={{ width: '115.6px', height: '24px'}}/>
                    </StyledLink>
                </FooterLogo>
                <Social>
                    <ul>
                        <li><a href="https://www.facebook.com/carebyprairie" target="_blank"><img src={Facebook} alt="Facebook Prairie" style={{ width: '24px', height: '24px'}}/></a></li>
                        <li><a href="https://www.instagram.com/prairie_health" target="_blank"><img src={Instagram} alt="Instagram Prairie" style={{ width: '24px', height: '24px'}}/></a></li>
                        <li><a href="http://www.linkedin.com/company/31281223/" target="_blank"><img src={Linkedin} alt="Linkedin Prairie" style={{ width: '24px', height: '24px'}}/></a></li>
                    </ul>
                </Social>
            </FooterSubContainer>
          </Container>
        </FooterContainer>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Footer);

const FooterContainer = styled.div`
  background-color: #2f2f2f;
  padding: 50px 0;
  /* margin-top: 107px; */
`;

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  box-sizing: border-box;
  margin: auto;
  padding-left: 80px;
  padding-right: 80px;

  @media (max-width: 768px) {
      padding-left: 64px;
      padding-right: 64px;
  }

  @media (max-width: 375px) {
      padding-left: 24px;
      padding-right: 24px;
  }

`;

const FooterSubContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 480px) {
        flex-direction: column;
    }
`;



const StyledLink = styled(Link)`
  text-decoration: none;
`;

const FooterLogo = styled.div`

`;

const Social = styled.div`

    @media screen and (max-width: 480px) {
        margin: 30px 0;
    }

    ul {
        margin: 0;
        padding: 0;
    }
    li {
        list-style: none;
        display: inline-block;
        padding: 0 10px;
    }
`;
