import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useAppContext } from '../App.provider';
import { TaskResponse } from '../types';
import { generateColor } from '../utils';
export const Task: React.FC = ({ navigation }: any) => {
  const appContext = useAppContext();
  const [filteredData, setFilteredData] = useState([]);
  const [masterData, setMasterData] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(json => {
        const res =
          json.filter(item => {
            return item?.userId === appContext.user_Id;
          }) ?? {};
        setMasterData(res);
        setFilteredData(res);
      })
      .catch(err => console.log(err));
  }, [appContext.user_Id]);

  const searchFilter = text => {
    if (text) {
      const newData = masterData.filter(item => {
        const itemData = item?.title
          ? item?.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
      setSearch(text);
    } else {
      setFilteredData(masterData);
      setSearch(text);
    }
  };

  const renderItem = ({ item }: { item: TaskResponse }) => {
    return (
      <TouchableOpacity
        style={[styles.box, { backgroundColor: generateColor() }]}
        onPress={() => {
          navigation.navigate('PostOrTask', {
            mainHeading: 'Task',
            title: item.title,
            body: item.completed,
            userId: item.userId,
            id: item.id,
          });
        }}>
        <Text numberOfLines={1} style={styles.text}>
          <Text style={styles.title}>Tittle: </Text> {item.title}
        </Text>
        <Text>
          <Text style={styles.title}>Task Status: </Text>
          {item.completed === true ? (
            <Text style={styles.text}> Completed</Text>
          ) : (
            <Text style={styles.text}>Pending</Text>
          )}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={search}
        placeholder="Search here..."
        underlineColorAndroid="transparent"
        onChangeText={text => {
          searchFilter(text);
        }}
      />
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item: TaskResponse) => `${item.id}`}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    padding: 10,
    borderWidth: 2,
    margin: 5,
    borderRadius: 20,
    marginVertical: 10,
  },
  text: {
    textAlign: 'justify',
  },
  title: {
    fontWeight: 'bold',
  },
  textInput: {
    height: 50,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: '#ffff',
    borderRadius: 20,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
  },
});
