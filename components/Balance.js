import { Pressable, View, Text, StyleSheet } from 'react-native';

const Balance = ({ currentBalance, onPress }) => (
  <View style={styles.balance_container}>
    <Text style={styles.balance}>Current Balance</Text>
    <Text style={styles.total}>{currentBalance}</Text>
    <Pressable style={styles.buy_button} onPress={onPress}>
      <Text style={styles.buy_button_text}>Buy Crypto</Text>
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  balance_container: {
    paddingLeft: 10,
    paddingTop: 40,
  },

  total: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
  },

  balance: {
    color: '#fff',
    fontSize: 18,
    paddingTop: 10,
  },

  buy_button: {
    backgroundColor: '#9534eb',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    width: '30%',
  },

  buy_button_text: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Balance;
