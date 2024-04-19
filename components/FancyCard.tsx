import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]} >
        <Image
            source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ1VuKA1bfF-J9EICmf9n4YvfTkXkhQb4Zln2kVXHZnw&s'
            }}
            style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Hawa Mahal</Text>
            <Text style={styles.cardLabel}>Card label</Text>
            <Text style={styles.cardDescription}>Card description</Text>
            <Text style={styles.cardFooter}>Card Footer</Text>
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10
    },
    card: {
      width: 350,
      height: 360,
      borderRadius: 6,
      marginVertical: 12,
      marginHorizontal: 16
    },
    cardElevated: {
      backgroundColor: '#FFFFFF',
      elevation: 3,
      shadowOffset: {
        width: 1,
        height: 1
      }
    },
    cardImage: {
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
    },
    cardBody: {},
    cardTitle: {
      color: '#000000'
    },
    cardLabel: {
      color: '#000000'
    },
    cardDescription: {
      color: '#000000'
    },
    cardFooter: {
      color: '#000000'
    }
})