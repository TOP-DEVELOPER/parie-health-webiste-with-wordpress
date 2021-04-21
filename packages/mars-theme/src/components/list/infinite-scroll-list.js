import { Global, connect, css, styled, decode } from "frontity";

//import { useArchiveInfiniteScroll } from "@frontity/hooks";

import React, {Component} from "react";

import InfiniteListNormal from "./infinite-scroll-listNormal";
//import InfiniteListReverse from "./infinite-scroll-listReverse";
//import AllItemsReverse from "./alllistreverse";
//import AllItems from "./alllist";
//import Loading from "../loading";

// const options = [
//     {
//         label: "newest to oldest",
//         value: "newest",
//     },
//     {
//         label: "oldest to newest",
//         value: "oldest",
//     },
// ];

//let orderState = 0;

class InfiniteList extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         orderDefault: "newest",
    //     };
    //
    //     this.handleChange = this.handleChange.bind(this);
    //
    //
    // }
    //
    // handleChange = (event) => {
    //     //event.preventDefault();
    //     this.setState({ orderDefault: event.target.value });
    //
    //     if(event.target.value == "oldest") {
    //         orderState = 1;
    //     } else {
    //         orderState = 0;
    //     }
    //
    // }

render(){

  return (
    <div>
        {/*
        <Global styles={sortStyles} />
        <div className="SortContainer">
            <div className="SortLabel">
                <h3>All articles, sorted by</h3>
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
                <InfiniteListReverse />
            </div>
        :
            <div>
                <InfiniteListNormal />
            </div>
        }

        */}



        <InfiniteListNormal />


    </div>

  );
}
};

export default InfiniteList;

const ButtonContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 40px;
`;

const Button = styled.button`
  position: relative;
  background: #1f38c5;
  color: white;
  padding: 12px;
  font-weight: bold;
  border: none;
`;

const sortStyles = css`
    .SortContainer {
        justify-content: center;
    }
    .SortLabel {
        margin-right: 16px;
    }

    @media (max-width: 950px) {
        .SortContainer {
            flex-direction: column;
        }
        .SortLabel h3 {
            margin-bottom: 0;
        }
    }
`;
