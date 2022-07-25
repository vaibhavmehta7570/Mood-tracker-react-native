import React from 'react';
import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';

export const UserHome: React.FC = ({ route }) => {
  const { userName, companyName, catchPhrase } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.porfileDescription}>
        <Image
          style={styles.userImage}
          source={require('../assets/user.png')}
        />
        <View style={styles.rightDescription}>
          <Text style={[styles.text, styles.name]}>{userName}</Text>
          <Text style={[styles.text]}>{companyName}</Text>
          <Text style={styles?.text}>{catchPhrase}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
        <Text style={styles.description}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" The Extremes of Good and
          Evil by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32. The standard chunk of Lorem Ipsum used since the
          1500s is reproduced below for those interested. Sections 1.10.32 and
          1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
          reproduced in their exact original form, accompanied by English
          versions from the 1914 translation by H. Rackham. Where can I get
          some? There are many variations of passages of Lorem Ipsum available,
          but the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc. 5
          paragraphs words bytes lists Start with 'Lorem ipsum dolor sit
          amet...'
        </Text>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  userImage: {
    height: 200,
    width: 150,
  },
  porfileDescription: {
    marginHorizontal: 20,
    marginVertical: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rightDescription: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    height: 200,
    marginHorizontal: 20,
  },
  text: {
    fontSize: 20,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  description: {
    textAlign: 'justify',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
});
