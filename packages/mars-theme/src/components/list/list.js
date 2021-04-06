import { connect, styled, decode } from "frontity";
import Item from "./list-item";
import StickyItem from "./sticky";
import TopRead from "./topread";
import Pagination from "./pagination";
import FeaturedIcon from '../../../img/star.svg';
import EmailIcon from '../../../img/email.svg';
import AllItems from "./list-item-cat";

import InfiniteScroll from 'react-infinite-scroll-component';

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
            {/* Iterate over the items of the list. */}
            {data.items.map(({ type, id }) => {
            const item = state.source[type][id];
            // Render one Item component for each one.
            return <Item key={item.id} item={item} />;
            })}
          </NewArticles>

          <TopArticles>
            <h2>Top Reads</h2>
            {/* Iterate over the items of the list. */}
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
            <h4>Get the latest mental health tips from Prairie</h4>
        </div>
        <div className="mailForm">
            <div id="mc_embed_signup">
                <form action="https://prairiehealth.us8.list-manage.com/subscribe/post?u=82ce164019d40ac0fb4e3248d&amp;id=8ceb6ec6eb" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                    <div id="mc_embed_signup_scroll">
                        <img className="emailIcon" src={EmailIcon} alt="Email Icon" style={{ width: '22px', height: '15px'}}/><input type="email" name="EMAIL" className="email" id="mce-EMAIL" placeholder="Let us know your email" required />
                        {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                        <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true"><input type="text" name="b_82ce164019d40ac0fb4e3248d_8ceb6ec6eb" tabIndex="-1" defaultValue="" /></div>
                        <div className="clear"><input type="submit" value="Sign up" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
                    </div>
                </form>
            </div>
        </div>

        </MailSubscription>
      </Container1>

      <Container>
            {/*<InfiniteScroll
              dataLength={data.items.length} //This is important field to render the next data
              next={data.items.fetchData}
              hasMore={true}
              loader={<h4>Loading...</h4>}
              endMessage={
                <p style={{ textAlign: 'center' }}>
                  <b>Yay! You have seen it all</b>
                </p>
              }
            >*/}
                <CategoryArticles>
                  {console.log(data.items.length)}
                  {data.items.map(({ key, type, id }) => {
                    const item = state.source[type][id];
                    // Render one Item component for each one.
                    return <AllItems key={item.id} item={item} />;
                  })}
                </CategoryArticles>
            {/* </InfiniteScroll> */}

      </Container>
      <Container>
        <Pagination />
      </Container>

    </div>
  );
};

export default connect(List);

const Container = styled.section`
  max-width: 1440px;
  width: 100%;
  margin: auto;
  padding: 32px 60px 64px;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 950px) {
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

    @media (max-width: 950px) {
        max-width: 100%;
        margin-bottom: 48px;
        padding: 0;
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

    @media (max-width: 950px) {
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
    article.true::after {
        content: '';
        width: 24px;
        height: 24px;
        background: #6D9147 url(${FeaturedIcon}) no-repeat center center;
        position: absolute;
        bottom: 0px;
        right: 0;
        left: 56px;
        border-radius: 0 0 8px;
    }

    article:nth-of-type(1n+6) {
        display: none;
    }

    h2 {
        font-size: 1.5rem;
        margin: 0;
        padding: 0 0 10px;
    }
`;

const TopArticles = styled.div`
    max-width: 440px;
    padding: 0 20px;

    @media (max-width: 950px) {
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
        margin: 0;
        padding: 0 0 10px;
    }
`;


const Container1 = styled.section`
  max-width: 1440px;
  width: 100%;
  margin: auto;
  padding: 32px 60px 64px;
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
    width: 100%;
    padding: 5px 0 5px 0;

    @media (max-width: 1130px) {
        flex-direction: column;
        padding: 0 0 25px;
        width: 100vw;
        position: relative;
        margin-left: -50vw;
        left: 49%;
        border-radius: 0;
    }
    @media (max-width: 650px) {
        left: 50%;
        padding:0 24px 25px;
    }

    .mailMessage h4 {
        font-size: 1.3rem;
        line-height: 26.04px;
        font-weight: 400;
        color: #183F4F;
        letter-spacing: -0.03em;
    }
    #mc_embed_signup_scroll {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        position: relative;
    }

    #mce-EMAIL {
        font-size: 1.3rem;
        border: 0;
        border-radius: 8px;
        letter-spacing: -0.03em;
        padding: 19px 75px 19px 75px;
        color: #7C989B;
        width: 440px;
        background-color: #fff;
    }
    .emailIcon {
        position: absolute;
        left: 22px;
    }
    #mc-embedded-subscribe {
        background: #183F4F;
        color: #fff;
        font-size: 1.3rem;
        border: 0;
        border-radius: 8px;
        letter-spacing: -0.03em;
        padding: 19px 24px;
        margin-left: 24px;
    }

    @media (max-width: 650px) {
        #mc_embed_signup_scroll {
            flex-direction: column;
        }
        .emailIcon {
            top: 25px;
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
        }
    }
`;

const CategoryArticles = styled.div`
    display: grid;
    grid-row-gap: 44px;
    padding: 53px 10px;
    justify-content: center;

    @media (min-width: 769px) {
        grid-template-columns: repeat(3, minmax(0, 380px));
        grid-column-gap: 60px;
    }
    @media (max-width: 768px) {
        grid-template-columns: repeat(2, minmax(0, 300px));
        grid-column-gap: 40px;
    }
    /* @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
        grid-template-columns: repeat(2, auto);
        grid-column-gap: 40px;
    } */
    @media (max-width: 375px) {
        grid-template-columns: repeat(1, minmax(0, 327px));
        grid-column-gap: 40px;
    }
    /* @media (min-width: 320px) and (max-width: 480px) {
        grid-template-columns: repeat(1, auto);
        grid-column-gap: 40px;
    } */
`;
