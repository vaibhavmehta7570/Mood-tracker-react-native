import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  TextInput,
  View,
} from 'react-native';
import { useAppContext } from '../App.provider';

import { PostsResponse } from '../types';
import { generateColor } from '../utils';

export const Post: React.FC = ({ navigation }: any) => {
  const appContext = useAppContext();
  const [filteredData, setFilteredData] = useState([]);
  const [masterData, setMasterData] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        const res =
          json.filter(item => {
            return item?.userId === appContext.user_Id;
          }) ?? {};
        setFilteredData(res);
        setMasterData(res);
      })
      .catch(err => console.log(err));
  }, [appContext.user_Id]);

  const renderItem = ({ item }: { item: PostsResponse }) => {
    return (
      <TouchableOpacity
        style={[styles.box, { backgroundColor: generateColor() }]}
        onPress={() => {
          navigation.navigate('PostOrTask', {
            mainHeading: 'Post',
            title: item.title,
            body: item.body,
            userId: item.userId,
            id: item.id,
          });
        }}>
        <View>
          <View>
            <Text numberOfLines={1} style={[styles.text, styles.title]}>
              Tittle: {item.title}
            </Text>
          </View>
          <Text numberOfLines={2} style={styles.text}>
            {item.body.replace(/(\r\n|\n|\r)/gm, '')}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  const searchFilter = (text: React.SetStateAction<string>) => {
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
        keyExtractor={(item: PostsResponse) => `${item.id}`}
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
    marginVertical: 5,
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
});
