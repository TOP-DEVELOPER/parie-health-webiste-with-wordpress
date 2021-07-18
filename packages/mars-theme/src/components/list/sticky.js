import { connect, styled } from "frontity";
import Link from "../link";
import FeaturedMedia from "../featured-media";
import ReadingTime from '../../../img/reading-time.svg';



const StickyItem = ({ state, item }) => {
  const author = state.source.author[item.author];
  const date = new Date(item.date);

  const readingTime = require('reading-time');
  const stats = readingTime(item.content.rendered);

  return (

    <article className={item.sticky.toString()}>

        {/*
         * If the want to show featured media in the
         * list of featured posts, we render the media.
         */}
        {state.theme.featured.showOnList && (
          <Link link={item.link}><FeaturedMedia id={item.featured_media} /></Link>
        )}
        <PostCat>
            {item.categories.map( category => {
                const cat = state.source.category[category]
                return (
                    <Link key={cat.id} link={cat.link}>{cat.name}</Link>
                )
            })}
        </PostCat>

        <Link link={item.link}>
            <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
        </Link>

      <StickyPostMeta>
            <div className="StickyAuthorMeta">
                {/* If the post has an author, we render a clickable author text. */}
                {author && (
                  <StyledLink link={author.link}>
                    <AuthorName>
                      <img src={author.avatar_urls[48]} alt={author.name} className="authorAvatar"/> <b>{author.name}</b>
                    </AuthorName>
                  </StyledLink>
                )}
            </div>

            <div className="PostTime">
                <img src={ReadingTime}
                alt="Prairie"
                style={{ width: '16px', height: '16px'}}/> <span>{stats.text}</span>
            </div>
      </StickyPostMeta>




    </article>
  );
};



// Connect the Item to gain access to `state` as a prop
export default connect(StickyItem);

const Title = styled.h3`
  font-size: 1.75rem;
  font-weight: 400;
  letter-spacing: -0.03em;
  margin: 0;
  line-height: 36px;
  padding-top: 16px;
  padding-bottom: 16px;
  box-sizing: border-box;
  color: #183F4F;
  transition: all .5s linear;

  &:hover {
      color: #2A440E;
  }
`;

const AuthorName = styled.span`
    color: #456772;
    font-size: 0.75rem;

  b {
      position: relative;
      top: -10px;
      left: 8px;
      font-weight: 400;
  }
`;

const StyledLink = styled(Link)`
  padding: 15px 0;
`;

const PostCat = styled.div`
    padding-top: 12px;

    a {
        text-transform: uppercase;
        font-size: 0.75rem;
        font-weight: 700;
        color: #6D9147;
        line-height: 15.62px;
        transition: all .5s linear;
        &:hover {
            color: #2A440E;
        }
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

const StickyPostMeta = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1280px) {
        display: grid;
        grid-template-columns: 1fr;
        grid-row-gap: 5px;
    }
    @media (max-width: 1025px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .authorAvatar {
        width: 32px;
        height: 32px;
        border-radius: 50%;
    }

    .PostTime img {
        vertical-align: sub;
    }
    .PostTime span {
        font-size: 0.75rem;
        font-weight: 500;
        color: #456772;
        padding-left: 5px;
    }
`;
