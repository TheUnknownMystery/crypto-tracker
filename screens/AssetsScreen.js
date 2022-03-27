import { Text, View, StyleSheet, Image } from 'react-native';
import React from 'react';

const CoinDisplay = (coin) => (
  <View style={styles.coin_display}>
    <Image
      style={styles.coin_image}
      source={{
        uri: coin.image,
      }}
    />

    <View>
      <Text style={styles.coin_title}>{coin.name}</Text>
      <Text style={styles.coin_unicode}>{coin.unicode}</Text>
    </View>
  </View>
);
export default function BuyScreen() {
  return (
    <View style={styles.container}>
      <CoinDisplay
        name="Ethereum"
        unicode="ETH"
        image={
          'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880'
        }
      />

      <CoinDisplay
        name="Ethereum"
        unicode="ETH"
        image={
          'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880'
        }
      />

      <CoinDisplay
        name="Ethereum"
        unicode="ETH"
        image={
          'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880'
        }
      />

      <CoinDisplay
        name="Ethereum"
        unicode="ETH"
        image={
          'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880'
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },

  coin_title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 20,
  },

  coin_unicode: {
    fontSize: 17,
    marginLeft: 20,
    color: '#a2a6a3',
  },

  coin_image: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 20,
  },

  coin_display: {
    padding: 20,
    flexDirection: 'row',
  },
});
