import React from 'react';

import { DashBoardView, LogOutButton, LogOutText } from './styles';

import { useAuth } from '../../hook/auth';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <DashBoardView>
      <LogOutButton onPress={signOut}>
        <LogOutText>Sair</LogOutText>
      </LogOutButton>
    </DashBoardView>
  );
}

export default Dashboard;
