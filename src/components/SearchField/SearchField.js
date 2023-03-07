// import { useDispatch } from 'react-redux';

import { Input, SearchBtn, Button, Form } from './SearchField.styled';
// import { searchCharacters } from 'redux/searchSlice';

const SearchFiels = ({ onSubmit }) => {
  // const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const value = e.target.name.value;
    onSubmit(value);
    // dispatch(searchCharacters(value));

    e.target.reset();
  };

  return (
    <>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <Button type="submit">
          <SearchBtn size={24} />
        </Button>
        <Input type="text" name="name" placeholder="Filter by name..." />
      </Form>
    </>
  );
};

export default SearchFiels;
