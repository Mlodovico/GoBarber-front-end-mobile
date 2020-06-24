import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #232129;
  border-radius: 10px;
  margin-bottom: 8px;

  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  border: 2px solid #232129;
  font-size: 16px;
  color: #fff;
  font-family: 'RobotoSlab-Regular'
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
