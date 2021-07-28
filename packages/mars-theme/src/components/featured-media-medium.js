import { connect, styled } from "frontity";
import Image from "@frontity/components/image";

const FeaturedMediaMedium = ({ state, id }) => {
  const media = state.source.attachment[id];

  let medium_large_URL;
  let medium_URL;

  if (!media) return null;

  if(media.media_details.sizes.medium_large) {
    medium_large_URL = media.media_details.sizes.medium_large.source_url;
  }
  if(media.media_details.sizes.medium) {
    medium_URL = media.media_details.sizes.medium.source_url;
  }


  return (
    <Container>
        { medium_large_URL ?
              <StyledImage
                alt={media.title.rendered}
                src={medium_large_URL}
              />
        :
              <StyledImage
                alt={media.title.rendered}
                src={medium_URL}
              />
        }
    </Container>
  );
};

export default connect(FeaturedMediaMedium);

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
