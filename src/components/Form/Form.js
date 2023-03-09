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
} from './Form.styled';

const Form = ({ title, handleClick, link, formTitle, redirect, text }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setEmail('');
    setPassword('');
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
          <Input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="password"
          />
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
