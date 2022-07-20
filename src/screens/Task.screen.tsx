import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, FlatList, Text, View } from 'react-native';
import { TaskResponse } from '../types';
export const Task: React.FC = () => {
  const [task, setTask] = useState<TaskResponse[]>();
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(json => {
        const res = json.filter((item: TaskResponse) => {
          return item.userId === 1;
        });
        setTask(res);
      })
      .catch(err => console.log(err));
  }, []);

  const renderItem = ({ item }: { item: TaskResponse }) => {
    return (
      <View style={styles.box}>
        <Text style={[styles.text, styles.title]}>{item.title}</Text>
        <Text style={styles.text}>{`Task completed: ${item.completed}`}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={task}
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
  },
  text: {
    textAlign: 'justify',
  },
  title: {
    fontWeight: 'bold',
  },
});
