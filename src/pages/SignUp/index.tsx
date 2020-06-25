import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {
  Image,
  View,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Input from '../../components/Input';
import Button from '../../components/Button';
import logoImg from '../../assets/logoImg.png';

import {
  Container,
  Title,
  BackToPageButton,
  BackToPageText
} from './styles';
const SignUp: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          contentContainerStyle={{ flex:1 }}
          keyboardShouldPersistTaps="handled"
        >
          <Container>
            <Image source={logoImg} />

            <View>
              <Title>Crie sua conta</Title>
            </View>


            <Input name="name" icon="user" placeholder="Nome" />
            <Input name="email" icon="mail" placeholder="E-mail" />
            <Input name="password" icon="lock" placeholder="Senha" />

            <Button onPress={() => {
              Alert.alert('Logado com sucesso');
              console.log('register success')
            }}> Cadastrar </Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <BackToPageButton onPress={() => navigation.navigate('SignIn')}>
        <Icon name="arrow-left" size={15} color="#ff9000" />
        <BackToPageText>Voltar para logon</BackToPageText>
      </BackToPageButton>
    </>
  );
};

export default SignUp;
