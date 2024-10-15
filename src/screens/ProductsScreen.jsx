import { StyleSheet, Text, View,FlatList,Image,Pressable } from 'react-native'
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { productsSlice } from '../store/productsSlice'

const ProductsScreen = ({navigation}) => {


  const products = useSelector(state => state.products.products)

  const dispatch =  useDispatch();
  return (
    <View>
             <FlatList
       data={products}
       renderItem={({item})=> ( 
        <Pressable onPress={()=> {
          dispatch(productsSlice.actions.setSelectedProduct(item.id))
        navigation.navigate('ProductDetails')}}
         style = {styles.container}>
         <Image source={{uri : item.image}} style={styles.image}/>
         </Pressable>    
       
       )}
       numColumns={2}
 /> 
    </View>
  )
}

export default ProductsScreen

const styles = StyleSheet.create({
    image : {
      width:'100%',
      aspectRatio:1,
    },
    container :{
      width : '50%',
      padding:1,
  
    }
  })