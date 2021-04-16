import { connect, styled } from "frontity";
import { useRef } from "react";
import ScreenReaderText from "../styles/screen-reader";
import Button from "../styles/button";
import Input from "../styles/input";
import SearchIcon from '../../../img/search.svg';

const SearchForm = ({ state, actions, libraries }) => {
  const parse = libraries.source.parse(state.router.link);
  const searchQuery = parse.query["s"];

  // Keep a reference to the input so we can grab it's value on form submission
  const inputRef = useRef();


  const handleSubmit = (event) => {
    // Prevent page navigation
    event.preventDefault();

    // Get the input's value
    const searchString = inputRef.current.value;

    // If the typed search string is not empty
    // Better to trim write spaces as well
    if (searchString.trim().length > 0) {
      // Let's go search for blogs that match the search string
      actions.router.set(`/?s=${searchString.toLowerCase()}`);

      // Scroll the page to the top
      window.scrollTo(0, 0);
      event.target.reset();

      // On submit, we hide the modal of the search in mobile mode
      state.theme.isMobileMenuOpen = false;

    }
  };

  return (
        <Form role="search" aria-label="404 not found" onSubmit={handleSubmit}>
          <Label>
            <ScreenReaderText>Search for:</ScreenReaderText>
            <SearchInput
              type="search"
              defaultValue={searchQuery}
              placeholder="Search articles, authors..."
              ref={inputRef}
            />
          </Label>
          <SearchButton type="submit"><img src={SearchIcon} alt="Search Icon" /></SearchButton>
        </Form>
  );
};

export default connect(SearchForm);

const Form = styled.form`
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  margin: 0;
  justify-content: center;
`;

const Label = styled.label`
  align-items: stretch;
  display: flex;
  font-size: inherit;
  margin: 0;
  width: 100%;
`;

const SearchInput = styled(Input)`
  margin: 0;
  font-family: 'DM Sans';

  ::placeholder {
      color: #7C989B;
      opacity: 1;
  }

  :-ms-input-placeholder {
      color: #7C989B;
  }

  ::-ms-input-placeholder {
      color: #7C989B;
  }
`;

const SearchButton = styled(Button)`
  flex-shrink: 0;
  opacity: 1;
  transition: opacity 0.15s linear;
  outline: 0;
`;
