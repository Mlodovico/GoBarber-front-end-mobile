import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 64px 0 24px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const ForgotPasswordText = styled.Text`
  color: #f4ede8;
  font-size: 15px;
  font-family: 'RobotoSlab-Regular';
`;

export const CreateAccountButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: 16px 0 ${16 + getBottomSpace()}px;
  border-top-width: 1.5px;
  border-color: #232129;

  flex-direction: row;
`;

export const CreateAccountText = styled.Text`
  color: #f4ede8;
  font-size: 15px;
  font-family: 'RobotoSlab-Regular';
  margin-left: 5px;

`;
