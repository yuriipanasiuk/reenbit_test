import { Input, SearchBtn, Button, Form } from './SearchField.styled';

const SearchFiels = ({ onChange, value }) => {
  const handleSubmit = e => {
    e.preventDefault();
    // const value = e.target.name.value;
    // onSubmit(value);

    // e.target.reset();
  };

  return (
    <>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <Button type="submit">
          <SearchBtn size={24} />
        </Button>
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
