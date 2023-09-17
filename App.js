import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ex3 from './src/ex3';
import ex1 from './src/ex1';
import ex2 from './src/ex2';
import ex4 from './src/ex4';
import ex5 from './src/ex5';
import ex6 from './src/ex6';
import ex7 from './src/ex7';
import ex8 from './src/ex8';

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    
    { key: 'ex1', title: 'ex1', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'ex2', title: 'ex2', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'ex3', title: 'ex3', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'ex4', title: 'ex4', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'ex5', title: 'ex5', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'ex6', title: 'ex6', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'ex7', title: 'ex7', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'ex8', title: 'ex8', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    ex3: ex3,
    ex1:ex1,
    ex2:ex2,
    ex4:ex4,
    ex5:ex5,
    ex6:ex6,
    ex7:ex7,
    ex8:ex8,
    
  });

  return (
    <SafeAreaProvider>
       <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
    </SafeAreaProvider>
   
  );
};

export default MyComponent;