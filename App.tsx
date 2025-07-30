/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text
} from 'react-native';

function App() {

  const data = [
    { id: 1, title: 'test-01', body: 'Lorem ipsum dummy test' },
    { id: 2, title: 'test-02', body: 'Lorem ipsum dummy test' },
    { id: 3, title: 'test-03', body: 'Lorem ipsum dummy test' },
    { id: 4, title: 'test-04', body: 'Lorem ipsum dummy test' },
    { id: 5, title: 'test-04', body: 'Lorem ipsum dummy test_development' },
    { id: 6, title: 'test-04', body: 'Lorem ipsum dummy test_dev' }
  ];

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
