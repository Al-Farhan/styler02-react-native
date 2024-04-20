import {StyleSheet, Text, View, Linking, Image, TouchableOpacity} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headintText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What's new in Javascript21 - ES6
          </Text>
        </View>
        <Image
            source={{
              uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ',
            }}
            style={styles.cardImage}
          />
        <View style={styles.bodyContainer}>
            <Text numberOfLines={3}>
            Just like every year, Javascript brings in new features. This year
            javascript is bringing 4 new features, which are almost in
            production rollout. I won't be wasting much more time and directly
            jump to code with easy to understand examples.
            </Text>
        </View>
        <View style={styles.footerContainer}>
        <TouchableOpacity onPress={() => openWebsite('https://blog.learncodeonline.in/whats-new-in-javascript-21-es12')}>
            <Text style={styles.socialLinks}>Read more</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openWebsite('https://blog.learncodeonline.in/whats-new-in-javascript-21-es12')}>
            <Text style={styles.socialLinks}>Follow us</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headintText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  card: {
    width: 350,
    height: 340,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16
  },
  elevatedCard: {
    backgroundColor: '#E07C24',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 16,
    fontWeight: '600'
  },
  cardImage: {
    height: 180,
  },
  bodyContainer: {
    padding: 10
  },
  footerContainer: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  socialLinks: {
    fontSize: 16,
    color: '#000000',
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 6
  }
});
