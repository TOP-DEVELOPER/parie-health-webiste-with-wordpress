import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import Footer from "./footer";
import ListHome from "./list";
import ListCat from "./list/list-cat";
import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import FontFaces from "./styles/font-faces";

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>

      {/* Add some global styles for the whole site, like body or a's.
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />
      <FontFaces />

      {/* Add the header of the site. */}
      <HeadContainer>
        <Header />
      </HeadContainer>

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <ListHome when={data.isHome} />
          <ListCat when={data.isArchive} />
          <Post when={data.isPostType} />
          <PageError when={data.isError} />
        </Switch>
      </Main>


     <Footer />
    </>
  );
};

export default connect(Theme);

const globalStyles = css`

    * {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

  body {
    margin: 0;
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
    font-size: 14px;
    background: #FDFCFD;
    counter-reset: my-sec-counter;
    overflow-x: hidden;
  }
  a,
  a:visited {
    color: #183F4F;
    text-decoration: none;
  }
  a:hover {
      color: #2A440E;
  }
  hr {
      border: 1px solid #E3E3E3;
      width: 100vw;
      position: relative;
      margin-left: -50vw;
      left: 50%;
  }
`;

const HeadContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1440px;
  width: 100%;
  margin: auto;
  padding-left: 60px;
  padding-right: 60px;
  @media (max-width: 768px) {
      padding-left: 24px;
      padding-right: 24px;
  }
  @media (max-width: 375px) {
      padding-left: 28px;
      padding-right: 28px;
  }
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  /* background-image: linear-gradient(
    180deg,
    rgba(66, 174, 228, 0.1),
    rgba(66, 174, 228, 0)
  ); */
`;
