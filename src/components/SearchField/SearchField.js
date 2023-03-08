import { Input, SearchIcon, Form } from './SearchField.styled';

const SearchFiels = ({ onChange, value }) => {
  return (
    <>
      <Form autoComplete="off">
        <SearchIcon size={24} />
        <Input
          type="text"
          name="name"
          placeholder="Filter by name..."
          value={value}
          onChange={e => onChange(e.target.value)}
        />
      </Form>
    </>
  );
};

export default SearchFiels;
