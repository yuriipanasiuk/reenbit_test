import { useState } from 'react';

import {
  Wraper,
  Container,
  Title,
  Input,
  Button,
  LinkText,
  Link,
  StyledForm,
  PasswordWraper,
  IconWraper,
  ShowIcon,
  HideIcon,
} from './Form.styled';

const Form = ({ title, handleClick, link, formTitle, redirect, text }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState('false');
  const [inputType, setInputType] = useState(true);

  const handleSubmit = e => {
    e.preventDefault();
    setEmail('');
    setPassword('');
  };

  const handleChange = () => {
    setShowPassword(prevState => !prevState);
    setInputType(prevState => !prevState);
  };

  return (
    <Wraper>
      <Container>
        <StyledForm onSubmit={handleSubmit} autocomplete="off">
          <Title>{formTitle}</Title>

          <Input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="email"
          />
          <PasswordWraper>
            <Input
              type={inputType ? 'password' : 'text'}
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="password"
            />
            <IconWraper>
              {showPassword ? (
                <HideIcon onClick={handleChange} size={24} />
              ) : (
                <ShowIcon onClick={handleChange} size={24} />
              )}
            </IconWraper>
          </PasswordWraper>
          <Button onClick={() => handleClick(email, password)}>{title}</Button>
        </StyledForm>

        <LinkText>
          {text}
          <Link to={redirect}>{link}</Link>
        </LinkText>
      </Container>
    </Wraper>
  );
};

export default Form;
