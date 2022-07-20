import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, FlatList, Text, View } from 'react-native';
import { PostsResponse } from '../types';
export const Post: React.FC = () => {
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
      <View style={styles.box}>
        <Text style={[styles.text, styles.title]}>{item.title}</Text>
        <Text style={styles.text}>{item.body}</Text>
      </View>
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
