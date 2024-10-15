import { Text, View } from 'react-native';
import React from 'react';
import Navigation from './src/navigation'; // Assuming your navigation file is in src/navigation
import { store } from './src/store';
import { Provider } from 'react-redux';


const App = () => {
  return (
    <Provider store={store}>
    <View style={{ flex: 1 }}>
      <Navigation/>
    </View>
    </Provider>

    
  );
};

export default App;
