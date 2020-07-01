import React from 'react';
import { View, Text, Button } from 'react-native';

import { useAuth } from '../../hook/auth';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <View>
      <Text>DashBoard</Text>
      <Button title="Sair" onPress={signOut} />
    </View>
  );
}

export default Dashboard;
