import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../View/Login';
import Registration from '../View/Registration';
import Scheduling from '../View/Scheduling';
import Accepted from "../View/Accepted";
import Apply from "../View/Apply";
import { useDispatch, useSelector } from 'react-redux';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const  MyTabs = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Schedule Job" component={Scheduling} options={{
          tabBarLabel: 'Open'
        }}/>
         <Tab.Screen name="Apply" component={Apply} options={{
          tabBarLabel: 'Applied'
        }}/>
        <Tab.Screen name="Accepted" component={Accepted} options={{
          tabBarLabel: 'Accepted'
        }}/>
        {/* <Tab.Screen name="Schedule Job" component={Scheduling} />
        <Tab.Screen name="Schedule Job" component={Scheduling} /> */}
      </Tab.Navigator>
    );
  }

function HomeStack() {
    const user = useSelector((state)=>{
        console.log(state);
        return state?.user?.loginUser
    })

console.log("user",user);
    return (
        <Stack.Navigator>
            {user ? <Stack.Screen name="MyTabs" component={MyTabs}
                options={{
                    headerLeft: null,
                    headerTitleAlign: 'center',
                    headerTintColor: '#2996A2',
                }} /> :<>
             <Stack.Screen name="Login" component={Login}
                options={{
                    headerLeft: null,
                    headerTitleAlign: 'center',
                    headerTintColor: '#2996A2',
                }} />
            <Stack.Screen name="Registration" component={Registration}
                options={{
                    headerLeft: null,
                    headerTitleAlign: 'center',
                    headerTintColor: '#2996A2',
                }} />
                </>}  
        </Stack.Navigator>
    );
}

export default function AppNavigationContainer() {
    return (
        <NavigationContainer>
            <HomeStack />
        </NavigationContainer>
    );
}