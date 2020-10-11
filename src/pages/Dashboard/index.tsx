import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Header, HeaderTitle, UserName, Container, ProfileButton, UserAvatar } from './styles';

import { useAuth } from '../../hook/auth';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();
  const { navigate } = useNavigation();

  const navigateToProfile = useCallback(() => {
    navigate('Profile');
  }, [navigate]);

  return (
    <Container>
      <Header>
        <HeaderTitle>
          Bem-vindo, {"\n"}
          <UserName>{user.name}</UserName>
        </HeaderTitle>

        <ProfileButton onPress={() => {navigateToProfile}}>

          {/** MAKE A CONDITIONAL FOR CASE THAT HASNT AN AVATAR IMAGE */}
          <UserAvatar source={{ uri: user.avatar_url }} />
        </ProfileButton>
      </Header>
    </Container>
  );
}

export default Dashboard;
