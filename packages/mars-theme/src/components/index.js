import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import Footer from "./footer";
import ListHome from "./list/list";
//import ListCat from "./list/list-cat";
import ListCat from "./list/list-tax-infinite";
import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import FontFaces from "./styles/font-faces";
import Arrow from '../../img/arrow.svg';

import { useRef } from "react";

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
        <link rel="canonical" href={state.router.link} />
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
      <Main id={ `_totalResults${data.total}` } className={ `_authorName${data.isAuthor}` }>
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
    font-size: 1rem;
    background: #FDFCFD;
    counter-reset: my-sec-counter;
    overflow-x: hidden;
    text-rendering: optimizeLegibility;
  }
  a {
    color: #6D9147;
    text-decoration: none;
    transition: all .5s linear;
  }
  a:hover {
      color: #2A440E;
  }
  /* h1 {
      text-transform: lowercase;
      &::first-letter {
        text-transform: capitalize;
      }
  } */
  hr {
      border: 1px solid #E3E3E3;
      width: 100vw;
      position: relative;
      margin-left: -50vw;
      left: 50%;
  }

  .SortContainer {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0 60px;
  }

    div#_totalResults0 .SortContainer {
        display: none;
    }

  .SortLabel {
      margin-right: 24px;
  }
  .SortLabel h3 {
      font-size: 1.25rem;
      font-weight: 500;
      line-height: 26px;
      color: #183F4F;
  }
  select {
      -webkit-appearance: none;
      -moz-appearance: none;
      -ms-appearance: none;
      appearance: none;
      outline: 0;
      box-shadow: none;
      border: 0 !important;
      background: transparent;
      background-image: none;
  }
    select::-ms-expand {
        display: none;
    }
    .SortSelect {
      position: relative;
      display: flex;
      height: 2.5em;
      line-height: 3;
      overflow: hidden;
      width: 188px;
      max-width: 188px;
      border-bottom: 1px solid #183F4F;
    }
    select {
      flex: 1;
      padding: 0 0.5em;
      color: #183F4F;
      cursor: pointer;
      line-height: 26px;
      font: 400 1.25rem 'DM Sans';
    }
    .SortSelect::after {
      content: "";
      background: url(${Arrow});
      background-position: 0 50%;
      background-repeat: no-repeat;
      position: absolute;
      top: 0;
      right: 0;
      padding: 0;
      cursor: pointer;
      pointer-events: none;
      -webkit-transition: .25s all ease;
      -o-transition: .25s all ease;
      transition: .25s all ease;
      width: 14px;
      height: 40px;
    }
    .SortSelect:hover::after {
        color: #f39c12;
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
  @media (max-width: 800px) {
      padding-left: 40px;
      padding-right: 40px;
  }
  @media (max-width: 768px) {
      padding-left: 24px;
      padding-right: 24px;
  }
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
}
`;
