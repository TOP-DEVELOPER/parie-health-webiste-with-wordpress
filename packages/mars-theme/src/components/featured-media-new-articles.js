import { connect, styled } from "frontity";
import Image from "@frontity/components/image";

const FeaturedMediaNewArticles = ({ state, id }) => {
  const media = state.source.attachment[id];

  let thumbnailURL;

  if (!media) return null;

  if(media.media_details.sizes.thumbnail) {
    //console.log(media.media_details.sizes.thumbnail.source_url);
    thumbnailURL = media.media_details.sizes.thumbnail.source_url;
  }


  return (
    <Container>
      <StyledImage
        alt={media.title.rendered}
        src={thumbnailURL}
      />
    </Container>
  );
};

export default connect(FeaturedMediaNewArticles);

const Container = styled.div`
  margin-top: 12px;
  height: auto;
`;

const StyledImage = styled(Image)`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
`;
