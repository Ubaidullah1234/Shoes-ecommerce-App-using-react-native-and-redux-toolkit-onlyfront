import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductsScreen from './screens/ProductsScreen';
import ProductDetailsScreen from './screens/ProductDetailsScreen';
import ShoppingCart from './screens/ShoppingCart';
import { Pressable, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { selectNumberOfItems } from './store/cartSlice';
const Stack = createStackNavigator();

const Navigation = () => {

  const numberOfItems = useSelector(selectNumberOfItems);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Products" 
          component={ProductsScreen} 
          options={({navigation})=>({
            headerRight: () => (
              <Pressable onPress={()=> navigation.navigate('ShoppingCart')} style={{ paddingRight: 15,flexDirection:'row' }}>
                <Text style={{ color: 'blue' }}>Cart</Text>
                <Text style={{marginLeft:5,fontWeight:'500'}}>{numberOfItems}</Text>
              </Pressable>
            ),
          })} 
        />
        <Stack.Screen 
          name="ProductDetails" 
          component={ProductDetailsScreen} 
          options={{ presentation: 'modal' }} 
        />
        <Stack.Screen 
          name="ShoppingCart" 
          component={ShoppingCart} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
