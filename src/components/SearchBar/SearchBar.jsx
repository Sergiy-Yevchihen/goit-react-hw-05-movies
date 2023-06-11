// SearchBar.jsx
import React from 'react';
import {
  ButtonIcon,
  // SearchBox,
  Input,
  Form,
} from 'components/Styles/Element.styled';
import { BsSearch } from 'react-icons/bs';
import PropTypes from 'prop-types';

const SearchForm = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const searchForm = e.currentTarget;
    onSubmit(searchForm.elements.movieName.value);
    searchForm.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="movieName"
        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="May contain only letters, apostrophe, dash and spaces. For example moon"
        required
        autoComplete="off"
        autoFocus
        placeholder="Search movie..."
      />
      <ButtonIcon type="submit" aria-label="search button">
        <BsSearch />
      </ButtonIcon>
    </Form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};


export default SearchForm;