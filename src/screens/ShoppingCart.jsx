import { StyleSheet, Text, View,FlatList,Pressable } from 'react-native'
import React from 'react'
import CartListItem from '../components/CartListItems'
import { useSelector } from 'react-redux'
import { selectedDeliveryPrice, selectSubtotal, selectTotal } from '../store/cartSlice'

const shoppingCartTotal = () =>
{
  const subtotal =  useSelector(selectSubtotal)
  const deliveryFee = useSelector(selectedDeliveryPrice);
  const total = useSelector(selectTotal);

  return (
    <View style={styles.totalsContainer}>
        <View style={styles.row}>
            <Text style={styles.text}>SubTotal</Text>
            <Text style={styles.text}>{subtotal} US$</Text>

        </View>
        <View style={styles.row}>
            <Text style={styles.text}>Delivery</Text>
            <Text style={styles.text}>{deliveryFee} US$</Text>

        </View>
        <View style={styles.row}>
            <Text style={styles.textBold}>Total</Text>
            <Text style={styles.textBold}>{total} US$</Text>

        </View>
    </View>
  )
}
const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.items)
  return (
    <>
      <FlatList
      data={cartItems}
      renderItem={({item})=> <CartListItem cartItem={item}/>}
      
      ListFooterComponent={shoppingCartTotal}

      />
      <Pressable  style={styles.button}>
          <Text style={styles.buttonText}>
            CheckOut
          </Text>
         </Pressable>
        </>
  )
}

export default ShoppingCart

const styles = StyleSheet.create({
    totalsContainer:{
      margin:20,
      paddingTop:10,
      borderColor:'gainsboro',
      borderTopWidth:1,

    },
    row:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginVertical:2

    },
    text:{
      fontSize:16,
      color:'gray',

    },
    textBold:{
      fontSize:16,
      fontWeight:'500',
      color:'black'
    },
    button: {
      backgroundColor: 'black',
      width: '90%',
      padding: 10,
      borderRadius: 100,
      alignItems: 'center',
      alignSelf: 'center',
      
        
    },
    
    buttonText: {
      color: 'white',
      fontWeight: '500',
      fontSize: 16,
    },
  
})