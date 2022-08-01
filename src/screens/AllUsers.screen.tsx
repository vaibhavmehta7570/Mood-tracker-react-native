import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useAppContext } from '../App.provider';

export const AllUsers: React.FC = ({ navigation }: any) => {
  const appContext = useAppContext();
  const [Users, setUsers] = useState();
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => response.json())
      .then(json => setUsers(json))
      .catch(err => console.log(err));
  }, []);

  return (
    <ScrollView style={styles.container}>
      {Users?.map(user => {
        return (
          <TouchableOpacity
            style={styles.user}
            key={user.id}
            onPress={() => {
              appContext.handleUserIdChange(user?.id);
              navigation.navigate('UserHome', {
                userName: user?.username,
                companyName: user?.company?.name,
                catchPhrase: user?.company?.catchPhrase,
                id: user?.id,
              });
            }}>
            <View style={styles.wrapper}>
              <Image
                style={styles.userImage}
                source={{
                  uri: `https://robohash.org/${user.id}`,
                }}
              />
              <View>
                <Text>
                  <Text style={styles.highlight}>UserId:</Text> {user.id}
                </Text>
                <Text>
                  <Text style={styles.highlight}>Name:</Text> {user.name}
                </Text>

                <Text>
                  <Text style={styles.highlight}>Phone: </Text>
                  {user.phone}
                </Text>
                <Text>
                  <Text style={styles.highlight}>Website: </Text>
                  {user.website}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  user: {
    height: 200,
    width: '90%',
    borderWidth: 2,
    borderRadius: 10,
    margin: 10,
    backgroundColor: '#dff9fb',
    padding: 10,
  },
  subHeading: {
    marginBottom: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  highlight: {
    fontWeight: 'bold',
  },
  userImage: {
    height: 100,
    width: 70,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 40,
    marginHorizontal: 20,
  },
});
