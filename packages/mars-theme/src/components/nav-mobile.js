import { connect, styled, Global } from "frontity";
import Link from "./link";

import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import reactCarouselStyles from "pure-react-carousel/dist/react-carousel.es.css";

import PreviousArrow from "../../img/prev-arrow.svg";
import NextArrow from "../../img/next-arrow.svg";

/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const Nav = ({ state }) => (
  <NavContainer>
    <Global styles={reactCarouselStyles} />
      <CarouselProvider
          naturalSlideWidth={32}
          naturalSlideHeight={32}
          orientation={"horizontal"}
          totalSlides={9}
          infinite ={false}
          visibleSlides ={3}
          isIntrinsicHeight ={true}
      >
      <Slider>
        {state.theme.menu.map(([name, link]) => {
          // Check if the link matched the current page url
          const isCurrentPage = state.router.link === link;

          return (
            <Slide key={name}>
              {/* If link url is the current page, add `aria-current` for a11y */}
              <Link link={link} aria-current={isCurrentPage ? "page" : undefined}>
                {name}
              </Link>
            </Slide>
          );
        })}
    </Slider>
        <ButtonBack className="BackBtn"><img src={PreviousArrow} alt="PreviousArrow" style={{ width: '6px', height: '12px'}} /></ButtonBack>
        <ButtonNext className="NextBtn"><img src={NextArrow} alt="NextArrow" style={{ width: '6px', height: '12px'}} /></ButtonNext>
    </CarouselProvider>

  </NavContainer>
);

export default connect(Nav);

const NavContainer = styled.nav`
    .carousel {
        position: relative;
        max-width: 950px;
        margin: auto;
        padding-left: 10px;
        padding-right: 10px;
    }
    .carousel ul {
        width: 150%!important;
        height: 25px;
    }
    @media (max-width: 550px) {
        .carousel ul {
            width: 200%!important;
        }
    }
    @media (max-width: 375px) {
        .carousel ul {
            width: 250%!important;
        }
    }
    .carousel ul li{
        padding: 0;
        margin: auto;
        font-size: 0.9em;
        flex-shrink: 0;
        width: auto!important;
    }

    .carousel ul li a {
        display: inline-block;
        line-height: 2em;
        border-bottom: 2px solid;
        border-bottom-color: transparent;
        font-weight: 500;
        text-transform: uppercase;
        color: #183F4F;
    }

    .carousel ul li a[aria-current="page"] {
      color: #6D9147;
    }
    .carousel ul li a:hover {
        color: #6D9147;
    }

    .BackBtn,
    .NextBtn {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        border: 0;
        background: transparent;
        padding: 0;
        outline: 0;
    }
    .BackBtn {
        left: 0;
    }
    .NextBtn {
        right: 0;
    }
    button:disabled {
        display: none;
    }
`;

const NavItem = styled.li`
  padding: 0;
  margin: 0 16px;
  color: #fff;
  font-size: 0.9em;
  box-sizing: border-box;
  flex-shrink: 0;

  & > a {
    display: inline-block;
    line-height: 2em;
    border-bottom: 2px solid;
    border-bottom-color: transparent;
    font-weight: 500;
    text-transform: uppercase;
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
