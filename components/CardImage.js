import { View, Text, Image, StyleSheet } from 'react-native';

const CardImage = (coin) => (
  <View style={styles.coin_item}>
    <View style={styles.coin_main}>
      <Image
        style={styles.coin_image}
        source={{
          uri: coin.image,
        }}
      />

      <View style={styles.coin_info}>
        <Text style={styles.coin_title}>{coin.name}</Text>
        <Text style={styles.coin_unicode}>{coin.unicode}</Text>
      </View>
    </View>

    <View style={styles.coin_value_info}>
      <Text style={styles.coin_loss}>{coin.loss}</Text>
      <Text style={styles.coin_loss_percentage}>{coin.loss_percent}</Text>
    </View>

    <View style={styles.coin_value_info}>
      <Text style={styles.coin_value}>{coin.coin_value}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  coin_item: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#121212',
    padding: 14,
    borderWidth: 0,
  },

  coin_image: {
    width: 40,
    height: 40,
  },

  coin_title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff',
  },

  coin_loss: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff',
  },

  coin_loss_percentage: {
    fontSize: 17,
    color: 'red',
    marginLeft: 30,
  },
  coin_unicode: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#736f6f',
  },

  coin_info: {
    flexDirection: 'column',
    paddingLeft: 10,
  },

  coin_value_info: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 20,
  },

  coin_value: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },

  coin_main: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CardImage;
