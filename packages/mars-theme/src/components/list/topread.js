import { connect, styled } from "frontity";
import Link from "../link";
import FeaturedMedia from "../featured-media";
import ReadingTime from '../../../img/reading-time.svg';



const TopRead = ({ state, item }) => {
  const author = state.source.author[item.author];
  const date = new Date(item.date);

  const readingTime = require('reading-time');
  const stats = readingTime(item.content.rendered);

  let i = 0;

  let isReview = "no";
  //let authorOne = '';
  let authorTwo = '';
  let reviewerURLRaw = '';
  let reviewerURL = '';

  isReview = item.medicalreview;

  try {
      //authorOne = item.authors[0].display_name;
      authorTwo = item.authors[1].display_name;
      //console.log(authorOne);
      //console.log(authorTwo);

  }catch(error) {
      //console.log(error.name + ":" + error.message);
  }

  try {
      reviewerURLRaw = item.authors[1].reviewer_link;
      reviewerURL = reviewerURLRaw.replace('/blog', '');
      //console.log(reviewerURL);

  } catch(error) {
      //console.log(error.name + ":" + error.message);
  }

  return (
    <TopReads>
        <div className="ReadNumber"></div>
        <article className={item.sticky.toString()}>
              <Link link={item.link}>
                <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
              </Link>

              <PostMeta>
                <div className="PostAuthorCategory">
                    <div className="PostAuthor">
                    {/* If the post has an author, we render a clickable author text. */}
                    {author && (
                        <div>
                            { isReview == "yes" ?
                                <StyledLink link={reviewerURL}>
                                    <AuthorName>{authorTwo}</AuthorName>
                                </StyledLink>
                            :
                                <StyledLink link={author.link}>
                                    <AuthorName>{author.name}</AuthorName>
                                </StyledLink>
                            }
                        </div>
                    )}
                    </div>
                    <div className="PostCat">
                        {item.categories.map( category => {
                            const cat = state.source.category[category]
                            return (
                                <Link key={cat.id} link={cat.link}>{cat.name}</Link>
                            )
                        })}
                    </div>
                </div>
                <div className="PostTime">
                    <img src={ReadingTime} alt="Prairie" style={{ width: '16px', height: '16px'}}/> <span>{stats.text}</span>
                </div>
              </PostMeta>
        </article>

    </TopReads>
  );
};



// Connect the Item to gain access to `state` as a prop
export default connect(TopRead);

const TopReads = styled.div`
    display: grid;
    grid-template-columns: 48px auto;

    &:nth-of-type(1n+4) {
        display: none;
    }

    .ReadNumber {
        font-size: 2rem;
        padding-right: 12px;
        padding-top: 8px;
        color: #6D9147;
    }
    .ReadNumber::before {
        counter-increment: my-sec-counter;
        content: "0" counter(my-sec-counter);
    }
`;

const Title = styled.h3`
  font-size: 1.25rem; /* 20px */
  font-weight: 400;
  letter-spacing: -0.03em;
  margin: 0;
  padding-top: 12px;
  padding-bottom: 12px;
  box-sizing: border-box;
  line-height: 26.04px;
  color: #183F4F;
  transition: all .5s linear;

  &:hover {
      color: #2A440E;
  }

  @media (max-width: 950px) {

  }
`;

const AuthorName = styled.span`
  color: #456772;
  font-weight: 400;
  font-size: 0.75rem;
`;

const StyledLink = styled(Link)`
  padding: 15px 0;
`;

const PostMeta = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: center;

    @media (max-width: 1280px) {
        grid-template-columns: 1fr;
        grid-row-gap: 5px;
    }
    @media (max-width: 1025px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    @media (max-width: 550px) {
        display: grid;
        grid-template-columns: 1fr;
        grid-row-gap: 5px;
    }

    .PostTime span {
        font-size: 0.75rem;
    }
    .PostTime img {
        vertical-align: sub;
        margin-right: 6px;
    }
    .PostTime span {
        font-size: 0.75rem;
        font-weight: 400;
        color: #456772;
    }
    .PostCat a {
        color: #6D9147;
        text-transform: uppercase;
        font-size: 0.75rem;
        font-weight: 700;
        transition: all .5s linear;
    }
    .PostCat a:hover {
        color: #2A440E;
    }
    .PostCat a::after {
        content: '.';
        line-height: 10px;
        padding: 0px 5px;
        vertical-align: top;
        font-size: 20px;
    }
    .PostCat a:last-child::after {
        content: '';
    }
`;
