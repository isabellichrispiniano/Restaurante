import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from '@rneui/themed';
import Icon from 'react-native-vector-icons/Ionicons'
import UserListm from './views/UserListm';

const Stack = createNativeStackNavigator()

export default props =>{
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="UserList"
             screenOption={
                {
                    headerStyle: {
                        backgroundColor: '#FEFBF6'
                    },
                    headerTintColor: '#fff',
                    headerTitileStyle: {
                        fontWeight: 'bold'
                    }
                }
             }>
            <Stack.Screen
                    name="UserList"
                    component={UserListm}
                    options={({ navigation }) => {
                        return {
                            title: "Cardapio",
                            headerRight: () => (
                                <Button
                                    onPress={() => navigation.navigate('UserForm')}
                                    type='clear'
                                    icon={<Icon name='add' size={20} color="white" />}
                                />
                            )
                        }
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}