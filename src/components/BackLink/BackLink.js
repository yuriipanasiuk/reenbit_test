import { BackIcon, TextLink, Link } from './BackLink.styled';

const BackLink = ({ link }) => {
  return (
    <>
      <Link to={link}>
        <BackIcon size={24} />
        <TextLink>GO BACK</TextLink>
      </Link>
    </>
  );
};

export default BackLink;
