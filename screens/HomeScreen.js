import { StyleSheet, Text, View } from 'react-native';
import Balance from '../components/Balance';
import CardImage from '../components/CardImage';

export default function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <Balance
        currentBalance={'$10000,00,00'}
        onPress={() => navigation.navigate('AssetsScreen')}
      />
      <CardImage
        image="https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880"
        name="Bitcoin"
        unicode="BTC"
        loss="$1000"
        loss_percent="10%"
        coin_value="$1000"
      />
      <CardImage
        image="https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880"
        name="Bitcoin"
        unicode="BTC"
        loss="$1000"
        loss_percent="10%"
        coin_value="$1000"
      />
      <CardImage
        image="https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880"
        name="Bitcoin"
        unicode="BTC"
        loss="$1000"
        loss_percent="10%"
        coin_value="1000"
      />
      <CardImage
        image="https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880"
        name="Bitcoin"
        unicode="BTC"
        loss="$1000"
        loss_percent="10%"
        coin_value="$1000"
      />
      <CardImage
        image="https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880"
        name="Bitcoin"
        unicode="BTC"
        loss="$1000"
        loss_percent="10%"
        coin_value="$1000"
      />
      <CardImage
        image="https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880"
        name="Bitcoin"
        unicode="BTC"
        loss="$1000"
        loss_percent="10%"
        coin_value="$1000"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
});
