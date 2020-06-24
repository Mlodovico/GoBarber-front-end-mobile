import React from 'react';
import { Image } from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';
import logoImg from '../../assets/logoImg.png';

import { Container, Title } from './styles';

const SignIn: React.FC = () => {

  return (
    <Container>
      <Image source={logoImg} />
      <Title>Faça o seu logon</Title>
      <Input />
      <Input />
      <Button> Entrar </Button>
    </Container>
  );
};

export default SignIn;
