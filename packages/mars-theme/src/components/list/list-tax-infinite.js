import { loadable, Global, css, connect, styled, decode } from "frontity";

//import { useArchiveInfiniteScroll } from "@frontity/hooks";

import React, {Component} from "react";

//import $ from 'jquery';

//import AllTax from "./list-cat";
//import Loading from "../loading";

//import InfiniteListTaxNormal from "./list-tax-infinite-normal";
//import InfiniteListTaxReverse from "./list-tax-infinite-reverse";

// Thanks to loadable we prevent component from loading until it's needed.
const InfiniteListTaxNormal = loadable(() => import('./list-tax-infinite-normal'));
const InfiniteListTaxReverse = loadable(() => import('./list-tax-infinite-reverse'));


const options = [
    {
        label: "newest to oldest",
        value: "newest",
    },
    {
        label: "oldest to newest",
        value: "oldest",
    },
];

let orderState = 0;

class TaxInfiniteList extends Component {


    constructor(props) {
        super(props);
        this.state = {
            orderDefault: "newest",
        };
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange = (event) => {
        event.preventDefault();
        this.setState({ orderDefault: event.target.value });

        console.log('ffff');
        if(event.target.value == "oldest") {
            orderState = 1;
        } else {
            orderState = 0;
        }
    }

    // componentDidMount(){
    //     $( ".SortContainer" ).insertAfter( $(".AuthorHeading") );
    //     $( ".SortContainer" ).insertAfter( $(".CategoryHeading") );
    // }
    //
    //
    // componentDidUpdate() {
    //     $( ".SortContainer" ).insertAfter( $(".AuthorHeading") );
    //     $( ".SortContainer" ).insertAfter( $(".CategoryHeading") );
    // }


    render() {

  return (
    <div>

        <Global styles={sortTaxStyles} />
        <div className="SortContainer">
            <div className="SortLabel">
                <h3>Sorted by</h3>
            </div>
            <div className="SortSelect">
                <select value={this.state.orderDefault} onChange={this.handleChange}>
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
            </div>
        </div>

        { orderState == 1 ?
            <div>
                <InfiniteListTaxReverse />
            </div>
        :
            <div>
                <InfiniteListTaxNormal />
            </div>
        }


    </div>
  );
}
};

export default TaxInfiniteList;

// const ButtonContainer = styled.div`
//   width: 100%;
//   text-align: center;
//   margin-bottom: 40px;
// `;
//
// const Button = styled.button`
//   position: relative;
//   background: #1f38c5;
//   color: white;
//   padding: 12px;
//   font-weight: bold;
//   border: none;
// `;
//
// const IntroText = styled.div`
//   width: 100%;
//   margin-top: 2rem;
//   font-weight: initial;
//   @media (min-width: 700px) {
//     font-size: 2rem;
//     margin-top: 2.5rem;
//   }
//   .no-results {
//       max-width: 950px;
//       margin-left: auto;
//       margin-right: auto;
//       text-align: center;
//       height: 40vh;
//       display: flex;
//       flex-direction: column;
//       justify-content: center;
//       align-items: center;
//   }
// `;
//
// const Text = styled.p`
//   margin: 0 0 1em 0;
//   color: #183f4f;
//   &:last-child {
//     margin-bottom: 0;
//   }
//   b::before {
//       content: open-quote;
//       padding: 0;
//   }
//   b::after {
//       content: close-quote;
//       padding: 0 0 0 5px;
//   }
//
// `;
//
// const Container = styled.section`
//   max-width: 1440px;
//   width: 100%;
//   margin: auto;
//   padding: 0 90px 64px;
//   list-style: none;
//   position: relative;
//
//     @media (max-width: 768px) {
//         padding: 0 24px 64px;
//     }
//     .AuthorHeading h3{
//         text-transform: capitalize;
//     }
// `;
//
//
// const Header = styled.h3`
//     font-size: 2rem;
//     font-weight: 700;
//     text-transform: uppercase;
//     line-height: 42px;
//     color: #183F4F;
// `;
//
// const AuthorDescription = styled.div`
//     display: flex;
//     flex-direction: row;
//     justify-content: stretch;
//     align-items: center;
//
//     div {
//         padding-right: 24px;
//     }
//
//     p{
//         font-size: 0.875rem;
//         font-weight: 400;
//         color: #456772;
//         line-height: 21px;
//     }
//     img {
//         width: 64px;
//         height: 64px;
//         border-radius: 50%;
//     }
// `;

const sortTaxStyles = css`

    .SortContainer {
        padding: 0 90px;
        margin-top: 32px;
        justify-content: flex-end;
    }

    @media (max-width: 768px) {
        .SortContainer {
            padding: 0 24px;
            justify-content: center;
            margin-bottom: 20px;
        }
        .SortLabel {
            margin-right: 12px;
        }
    }
    @media (max-width: 367px) {
        .SortLabel h3 {
            font-size: 1.15rem;
        }
        select {
            font: 400 1.15rem 'DM Sans';
        }
    }
    @media (max-width: 360px) {
        .SortLabel h3 {
            font-size: 1rem;
        }
        select {
            font: 400 1rem 'DM Sans';
        }
    }
    @media (max-width: 336px) {
        .SortContainer {
            flex-direction: column;
            width: 100%;
        }
        .SortLabel h3 {
            margin-bottom: 0;
        }
    }
`;
