import { Button, Icon } from './ToTopButton.styled';

const ToTopButton = ({ onClick }) => {
  return (
    <>
      <Button type="button" onClick={onClick}>
        <Icon size={50} />
      </Button>
    </>
  );
};

export default ToTopButton;
