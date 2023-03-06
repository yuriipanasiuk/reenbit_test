import { Input, SearchBtn, Button, Form } from './SearchField.styled';

const SearchFiels = () => {
  return (
    <>
      <Form>
        <Button type="submit">
          <SearchBtn size={24} />
        </Button>
        <Input placeholder="Filter by name..." />
      </Form>
    </>
  );
};

export default SearchFiels;
