import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';

import { PostsResponse } from '../types';

export const Post: React.FC = ({ navigation }: any) => {
  const [posts, setPosts] = useState<PostsResponse[]>();
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        const res = json.filter((item: PostsResponse) => {
          return item.userId === 1;
        });
        setPosts(res);
      })
      .catch(err => console.log(err));
  }, []);

  //const renderItem = ({ item }) => <Item title={item.title} />;

  const renderItem = ({ item }: { item: PostsResponse }) => {
    return (
      <TouchableOpacity
        style={styles.box}
        onPress={() => {
          navigation.navigate('PostOrTask', {
            mainHeading: 'Post',
            title: item.title,
            body: item.body,
            userId: item.userId,
            id: item.id,
          });
        }}>
        <Text numberOfLines={1} style={[styles.text, styles.title]}>
          {item.title}
        </Text>
        <Text numberOfLines={2} style={styles.text}>
          {item.body.replace(/(\r\n|\n|\r)/gm, '')}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={posts}
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
  },
  text: {
    textAlign: 'justify',
  },

  title: {
    fontWeight: 'bold',
  },
});
