import { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import List from "./list";
import FeaturedMedia from "./featured-media";
import EmailIcon from "../../img/email.svg";
import ReadingTime from "../../img/reading-time.svg";

import Previous from "../../img/previous.svg";
import Next from "../../img/next.svg";



import Pagination from "./list/pagination";


const Post = ({ state, actions, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  // Get the data of the post.
  const post = state.source[data.type][data.id];

  // Get the data of the author.
  const author = state.source.author[post.author];
  // Get a human readable date.
  const date = new Date(post.date);

  const readingTime = require('reading-time');
  const stats = readingTime(post.content.rendered);

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  // related data
  const related = state.source.get('https://www.prairiehealth.co/blog/wp-json/yarpp/v1/related/4576');
  //const relatedpost = state.source[related.type][related.id];

  console.log(related);

  /**
   * Once the post has loaded in the DOM, prefetch both the
   * home posts and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */
  useEffect(() => {
    actions.source.fetch("/");
    List.preload();
  }, []);

  // Load the post, but only if the data is ready.
  return data.isReady ? (
    <div>
    <Container>
      <div>

          <PostCat>
              {post.categories.map( category => {
                  const cat = state.source.category[category]
                  return (
                      <Link key={cat.id} link={cat.link}>{cat.name}</Link>
                  )
              })}
          </PostCat>

        <Title dangerouslySetInnerHTML={{ __html: post.title.rendered }} />

        {/* If the post has an excerpt (short summary text), we render it */}

        {post.excerpt && (
          <Excerpt dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
        )}

        {/* Only display author and date on posts */}
        {data.isPost && (

            <OtherMeta>
                <div className="PostAuthor">
                    <p>Author</p>
                    {author && (
                      <StyledLink link={author.link}>
                        <AuthorName>
                          <img src={author.avatar_urls[48]} alt={author.name} className="authorAvatar"/> <b>{author.name}</b>
                        </AuthorName>
                      </StyledLink>
                    )}
                </div>
                <div className="PostTime">
                    <img src={ReadingTime} alt="Prairie" style={{ width: '16px', height: '16px'}}/> <span>{stats.text}</span>
                </div>
            </OtherMeta>

        )}
      </div>

      {/* Look at the settings to see if we should include the featured image */}
      {state.theme.featured.showOnPost && (
        <FeaturedMedia id={post.featured_media} />
      )}

      {/* Render the content using the Html2React component so the HTML is processed
       by the processors we included in the libraries.html2react.processors array. */}
      <Content>
        <Html2React html={post.content.rendered} />
      </Content>

      <DateWrapper>
      {" "}
      <b>{date.toDateString()}</b>
      </DateWrapper>

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
          <RelatedPosts>
              <div className="relatedPosts">
                  <h2>Related Posts</h2>
              </div>
              <div className="postPagination">
                  {post.next && (
                  <Link link={post.next.slug} title={post.next.slug}>
                      <svg className="next" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="16" cy="16" r="16" fill="#456772"/>
                      <circle cx="16" cy="16" r="15.5" stroke="white" stroke-opacity="0.1"/>
                      <path d="M22 16.4H10" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M14 12.4L10 16.4L14 20.4" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                  </Link>
                  )}
                  {post.previous && (
                    <Link link={post.previous.slug} title={post.previous.slug}>
                        <svg className="prev" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="16" cy="16" r="16" fill="#6D9147"/>
                        <path d="M10 16.4H22" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M18 12.4L22 16.4L18 20.4" fill="#6D9147"/>
                        <path d="M18 12.4L22 16.4L18 20.4" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                    </Link>
                  )}
                </div>
            </RelatedPosts>
      </Container>



  </div>
) : null ;
};

export default connect(Post);

const DateWrapper = styled.p`
  color: #456772;
  font-size: 1rem;
  font-weight: 500;
  line-height: 20.83px;
  display: inline;
`;

const Container = styled.div`
  max-width: 790px;
  width: 100%;
  margin: auto;
  padding: 24px 0 48px;

  @media (max-width: 768px) {
      padding: 24px 24px 48px;
  }
`;

const Title = styled.h1`
  margin-top: 24px;
  margin-bottom: 24px;
  color: #183F4F;
  line-height: 41.66px;
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: -0.03em;
`;

const StyledLink = styled(Link)`
  padding: 15px 0;
`;

const Author = styled.p`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
  display: inline;
`;


const PostCat = styled.div`
    padding-top: 12px;

    a {
        text-transform: uppercase;
        font-size: 1.1rem;
        font-weight: 700;
        color: #6D9147;
        line-height: 23.44px;
    }
    a::after {
        content: '.';
        line-height: 10px;
        padding: 0px 5px;
        vertical-align: top;
        font-size: 20px;
    }
    a:last-child::after {
        content: '';
    }
`;


const Container1 = styled.section`
  max-width: 790px;
  width: 100%;
  margin: auto;
  padding: 0 0 64px;
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
    border-radius: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    padding-bottom: 24px;

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

/**
 * This component is the parent of the `content.rendered` HTML. We can use nested
 * selectors to style that HTML.
 */
const Content = styled.div`
  color: #183F4F;
  word-break: break-word;
  line-height: 32px;
  font-size: 1.571rem;
  font-weight: 400;
  letter-spacing: -0.03em;
  margin-bottom: 48px;
  border-bottom: 1px solid #E3E3E3;

  * {
    max-width: 100%;
  }

  p {
    line-height: 32px;
    font-size: 1.571rem;
    font-weight: 400;
    letter-spacing: -0.03em;

  }

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  figure {
    margin: 24px auto;
    /* next line overrides an inline style of the figure element. */
    width: 100% !important;

    figcaption {
      font-size: 0.7em;
    }
  }

  iframe {
    display: block;
    margin: auto;
  }

  blockquote {
    margin: 16px 0;
    background-color: rgba(0, 0, 0, 0.1);
    border-left: 4px solid rgba(12, 17, 43);
    padding: 4px 16px;
  }

  a {
    color: #183F4F;
    text-decoration: underline;
  }

  /* Input fields styles */

  input[type="text"],
  input[type="email"],
  input[type="url"],
  input[type="tel"],
  input[type="number"],
  input[type="date"],
  textarea,
  select {
    display: block;
    padding: 6px 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    outline-color: transparent;
    transition: outline-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin: 8px 0 4px 0;

    &:focus {
      outline-color: #1f38c5;
    }
  }

  input[type="submit"] {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid #1f38c5;
    padding: 12px 36px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    color: #fff;
    background-color: #1f38c5;
  }

  /* WordPress Core Align Classes */

  @media (min-width: 420px) {
    img.aligncenter,
    img.alignleft,
    img.alignright {
      width: auto;
    }

    .aligncenter {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .alignright {
      float: right;
      margin-left: 24px;
    }

    .alignleft {
      float: left;
      margin-right: 24px;
    }
  }
`;

const Excerpt = styled.div`
  line-height: 31.25px;
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: -0.03em;
  color: #183F4F;
  margin-bottom: 16px;
  border-bottom: 1px solid #E3E3E3;

  @media (max-width: 375px) {
      margin-bottom: 16px;
  }
`;



const OtherMeta = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 48px;

    @media (max-width: 375px) {
        flex-direction: column;
        align-items: normal;
    }

    .PostTime {
        /* width: 30%; */
    }
    .PostTime img {
        vertical-align: sub;
    }
    .PostTime span {
        font-size: 1rem;
        font-weight: 500;
        color: #456772;
        padding-left: 5px;
        line-height: 20.83px;
    }

    .PostAuthor p {
        font-size: 0.9rem;
        font-weight: 700;
        line-height: 18.23px;
        margin-bottom: 8px;
        color: #183F4F;
    }

    @media (max-width: 375px) {
        .PostAuthor {
            margin-bottom: 16px;
        }
    }
`;

const AuthorName = styled.span`
    color: #456772;
    font-weight: 500;
    font-size: 1rem;
    line-height: 20.83px;

  b {
      position: relative;
      top: -10px;
      left: 8px;
  }
  .authorAvatar {
      width: 32px;
      height: 32px;
      border-radius: 50%;
  }
`;

const RelatedPosts = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .relatedPosts h2 {
        color: #456772;
        font-weight: 500;
        font-size: 1.5rem;
        line-height: 31.25px;
    }

    .postPagination a {
        margin-right: 16px;
    }
    .postPagination a svg {
        width: 32px;
        height: 32px;
        border-radius: 50%;
    }
    .postPagination a svg.next:hover {
        fill: #183F4F;
    }
    .postPagination a svg.prev:hover circle{
        fill: #4E7B1E;
    }

    .postPagination a:last-child {
        margin-right: 0;
    }

`;
