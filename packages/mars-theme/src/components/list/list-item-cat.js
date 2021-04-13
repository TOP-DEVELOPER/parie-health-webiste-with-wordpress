import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import FeaturedMedia from "../featured-media";
import ReadingTime from '../../../img/reading-time.svg';
import FeaturedIcon from '../../../img/star.svg';

/**
 * Item Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */


const Item = ({ state, item }) => {
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
         <FeaturedImage>
            {state.theme.featured.showOnList && (
              <Link link={item.link}><FeaturedMedia id={item.featured_media} /></Link>
            )}
            <div className="PostCat">
                {item.categories.map( category => {
                    const cat = state.source.category[category]
                    return (
                        <Link key={cat.id} link={cat.link}>{cat.name}</Link>
                    )
                })}
                {item.sticky.toString() == "true" ?  (
                    <div className="FeaturedPost"><img src={FeaturedIcon} style={{ width: '12.5px', height: '12px'}}/> Featured</div>
                ) : null }
            </div>

        </FeaturedImage>
        <PostMeta>
          <Link link={item.link}>
            <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
          </Link>

            <div className="otherMeta">
                <div className="PostAuthor">
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
            </div>


        </PostMeta>
    </article>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(Item);



const Title = styled.h1`
  font-size: 1.429rem; /* 20px */
  font-weight: 400;
  letter-spacing: -0.03em;
  margin: 0;
  padding-top: 12px;
  padding-bottom: 12px;
  box-sizing: border-box;
  line-height: 26px;
  min-height: 76px;
  max-height: 76px;
  /* min-width: 304px; */

  color: #183F4F;

  @media (max-width: 1285px) {
    font-size: 1.129rem;
  }
  @media (max-width: 1068px) {
    font-size: 1.029rem;
  }
  @media (max-width: 950px) {
    font-size: 1.429rem;
  }
  @media (max-width: 880px) {
    font-size: 1.129rem;
    line-height: 20px;
  }
  @media (max-width: 740px) {
    font-size: 1.029rem;
  }
  @media (max-width: 699px) {
    font-size: 1rem;
  }
  &:hover {
      color: #2A440E;
  }
`;

const AuthorName = styled.span`
    color: #456772;
    font-weight: 500;
    font-size: 0.8rem;

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

const StyledLink = styled(Link)`
  padding: 15px 0;
`;

const FeaturedImage = styled.div`
    position: relative;

    img {
        height: 200px;
        width: 100%;
    }

    .PostCat {
        position: absolute;
        top: 8px;
    }

    .PostCat a {
        color: #6D9147;
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 700;
        border-radius: 8px;
        background: #fff;
        padding: 8px;
        margin: 0 0px 8px 8px;
        display: inline-block;
        text-align: center;
    }
    .PostCat a:hover {
        color: #2A440E;
    }
    .FeaturedPost {
        position: absolute;
        /* top: 45px; */
        background: #6D9147;
        color: #fff;
        padding: 8px;
        border-radius: 8px;
        left: 8px;
        font-size: 12px;
        font-weight: 700;
        line-height: 15.62px;
        text-transform: uppercase;
    }
    .FeaturedPost img {
        margin-right: 1.5px;
        position: relative;
        top: 1px;
    }
`;

const PostMeta = styled.div`
    padding-left: 0;

    .otherMeta {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .PostTime {
        /* width: 30%; */
    }
    .PostTime img {
        vertical-align: sub;
    }
    .PostTime span {
        font-size: 12px;
        font-weight: 500;
        color: #456772;
        padding-left: 5px;
    }
`;
