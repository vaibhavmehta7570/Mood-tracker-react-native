import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
export const PostOrTask = ({ route, navigation }) => {
  const { mainHeading, title, body, userId, id } = route.params;
  return (
    <View style={styles.container}>
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <View>
          <Text> Back </Text>
        </View>
      </Pressable>
      <View>
        <Text style={styles.mainHeading}>{mainHeading}</Text>
      </View>
      <View style={styles.heading}>
        <Text style={styles.bold}>UserId: {userId}</Text>
        <Text style={styles.bold}>
          {mainHeading === 'Task' ? 'TaskId: ' : 'PostId: '} {id}
        </Text>
      </View>
      <Text numberOfLines={1} style={[styles.bold, styles.title]}>
        {title}
      </Text>
      <Text style={styles.text}>
        {mainHeading === 'Task'
          ? `Task Completed: ${body}`
          : `${body.replace(/(\r\n|\n|\r)/gm, '')}`}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  text: {
    textAlign: 'justify',
  },
  bold: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  heading: {
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row',
    margin: 10,
  },
  mainHeading: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  title: {
    margin: 10,
  },
  backButton: {
    backgroundColor: '#dcdde1',
    width: 100,
    height: 40,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    borderRadius: 5,
    position: 'absolute',
    top: 0,
    left: 0,
  },
});
