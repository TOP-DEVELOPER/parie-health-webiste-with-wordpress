import { connect, styled, decode } from "frontity";

import React from "react";

import Item from "./list-item";
import StickyItem from "./sticky";
import TopRead from "./topread";
import FeaturedIcon from '../../../img/star.svg';
import EmailIcon from '../../../img/email.svg';
import InfiniteList from "./infinite-scroll-list";

const List = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);

  return (
    <div>

    <Container>
          <StickyPost>
          {data.items.map(({ type, id }) => {
            const item = state.source[type][id];
            // Render one Item component for each one.
            return <StickyItem key={item.id} item={item} />;
          })}
          </StickyPost>

          <NewArticles>
            <h2>New Articles</h2>
            {data.items.map(({ type, id }) => {
                const item = state.source[type][id];
                // Render one Item component for each one.
                return <Item key={item.id} item={item} />;
            })}
          </NewArticles>

          <TopArticles>
            <h2>Top Reads</h2>
            {data.items.map(({ type, id }) => {
                const item = state.source[type][id];
                // Render one Item component for each one.
                return <TopRead key={item.id} item={item} />;
            })}
          </TopArticles>
    </Container>


    <Container1>
      {/* EMail Subscription */}
      <MailSubscription>
        <div className="mailMessage">
            <h4>Subscribe for the latest from Prairie.</h4>
        </div>
        <div className="mailForm">
            <div id="mc_embed_signup">
                <form action="https://prairiehealth.us8.list-manage.com/subscribe/post?u=82ce164019d40ac0fb4e3248d&amp;id=8ceb6ec6eb" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
                    <div id="mc_embed_signup_scroll">
                        <img className="emailIcon" src={EmailIcon} alt="Email Icon" style={{ width: '22px', height: '15px'}}/><input type="email" name="EMAIL" className="email" id="mce-EMAIL" placeholder="Enter your email" required />
                        {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                        <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true"><input type="text" name="b_82ce164019d40ac0fb4e3248d_8ceb6ec6eb" tabIndex="-1" defaultValue="" /></div>
                        <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
                    </div>
                </form>
            </div>
        </div>

        </MailSubscription>
      </Container1>

      <InfiniteList />

    </div>
  );
};

export default connect(List);

const Container = styled.section`
  max-width: 1440px;
  width: 100%;
  margin: auto;
  padding: 38px 60px 64px;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 1025px) {
      flex-direction: column;
      padding: 32px 64px 64px;
  }
  @media (max-width: 768px) {
      padding: 32px 24px 64px;
  }
`;

const Header = styled.h3`
  font-weight: 300;
  text-transform: capitalize;
  color: rgba(12, 17, 43, 0.9);
`;


const StickyPost = styled.div`

    max-width: 440px;
    padding: 0 20px;
    width: 100%;

    @media (max-width: 1025px) {
        max-width: 100%;
        margin-bottom: 48px;
        padding: 0;
    }
    @media (max-width: 1025px) {
        article.true img {
            max-height: 217px;
        }
    }

    article.false {
        display: none;
    }
    article.true div:first-of-type {
        margin-top: 0;
    }
`;

const NewArticles = styled.div`
    max-width: 440px;
    padding: 0 20px;
    width: 100%;

    @media (max-width: 1025px) {
        max-width: 100%;
        margin-bottom: 48px;
        padding: 0;
    }

    article {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        position: relative;
    }
    article.true span:first-of-type div{
        position: relative;
    }
    article.true span:first-of-type div::after {
        content: '';
        width: 24px;
        height: 24px;
        background: #6D9147 url(${FeaturedIcon}) no-repeat center center;
        position: absolute;
        bottom: 0px;
        right: 0;
        border-radius: 2px 0px 8px 0px;
    }

    article:nth-of-type(1n+6) {
        display: none;
    }

    h2 {
        font-size: 1.5rem;
        font-weight: 400;
        color: #183F4F;
        margin: 0;
        padding: 0 0 10px;
    }
`;

const TopArticles = styled.div`
    max-width: 440px;
    padding: 0 20px;
    width: 100%;

    @media (max-width: 1025px) {
        max-width: 100%;
        /* margin-bottom: 48px; */
        padding: 0;
    }

    article {
        padding-bottom: 12px;
        padding-left: 12px;
    }

    article:nth-of-type(1n+4) {
        display: none;
    }

    h2 {
        font-size: 1.5rem;
        font-weight: 400;
        color: #183F4F;
        margin: 0;
        padding: 0 0 10px;
    }
`;


const Container1 = styled.section`
  max-width: 1440px;
  width: 100%;
  margin: auto;
  padding: 0 60px 64px;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 950px) {
      flex-direction: column;
      padding: 0 64px 64px;
  }
  @media (max-width: 768px) {
      padding: 0 24px 64px;
  }
`;

const MailSubscription = styled.div`
    background-color: #F2F2F2;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    max-width: 1280px;
    width: 100%;
    margin: auto;
    padding: 12px 0;

    @media (max-width: 1199px) {
        flex-direction: column;
        padding: 0 0 24px;
        width: 100vw;
        position: relative;
        margin-left: -50vw;
        left: 50%;
        border-radius: 0;
    }
    @media (max-width: 650px) {
        left: 50%;
        padding:0 24px 25px;
    }

    .mailMessage h4 {
        font-size: 1.125rem;
        line-height: 26.04px;
        font-weight: 400;
        color: #183F4F;
        letter-spacing: -0.03em;
        margin: 0;


        @media (max-width: 1200px) {
            font-size: 1.029rem;
        }
        @media (max-width: 1199px) {
            font-size: 1.125rem;
            margin: 24px 0;
        }
    }
    #mc_embed_signup_scroll {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        position: relative;
    }

    #mce-EMAIL {
        font-size: 1.125rem;
        border: 0;
        border-radius: 8px;
        letter-spacing: -0.03em;
        padding: 0 73px;
        color: #7C989B;
        width: 440px;
        background-color: #fff;
        font-family: 'DM Sans';
        font-weight: 400;
        height: 48px;

        &::placeholder {
            color: #7C989B;
            opacity: 1;
        }
        &::-ms-input-placeholder {
            color: #7C989B;
        }

        &::-ms-input-placeholder {
            color: #7C989B;
        }
    }

    .emailIcon {
        position: absolute;
        left: 22px;
    }
    #mc-embedded-subscribe {
        background: #183F4F;
        color: #fff;
        font-family: 'DM Sans';
        font-weight: 400;
        font-size: 1.125rem;
        border: 0;
        border-radius: 8px;
        letter-spacing: -0.03em;
        padding: 0 24px;
        margin-left: 24px;
        cursor: pointer;
        height: 48px;
    }
    #mc-embedded-subscribe:hover {
        background-color: #061D26;
        transition: all .5s linear;
    }

    @media (max-width: 650px) {
        #mc_embed_signup_scroll {
            flex-direction: column;
        }
        .emailIcon {
            top: 17px;
        }
        #mce-EMAIL {
            margin-bottom: 16px;
            width: 100%;
        }
        .clear {
            width: 100%;
        }
        #mc-embedded-subscribe {
            margin-left: 0;
            width: 100%;
        }
        .mailMessage h4 {
            text-align: center;
            margin: 24px 0 16px;
        }
    }
`;
