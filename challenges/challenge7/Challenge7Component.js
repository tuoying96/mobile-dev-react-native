import { slice } from "lodash";
import React, { Component } from "react";
import { Text, View, FlatList, StyleSheet, Image } from "react-native";

const abbr = [
  "usd",
  "eth",
  "btc",
  "eur",
  "ltc",
  "ada",
  "cny",
  "xlm",
  "bnb",
  "xmr",
];
const name = [
  "United States Dollar - USD",
  "Ethereum - ETH",
  "Bitcoin - BTC",
  "Euro - eur",
  "Litecoin - LTC",
  "Cardano - ADA",
  "Chinese Yuan - CNY",
  "Stellar - XLM",
  "Binance Coin - BNB",
  "Monero - XMR",
];
export default class FetchComponent extends Component {
  constructor() {
    super();
    this.state = {
      dataList: [],
    };
  }

  componentDidMount() {
    this.fetchTodos();
  }

  fetchTodos() {
    let list = [];

    for (let i = 0; i < abbr.length; i++) {
      let newItem = ["", "", ""];
      newItem[0] = abbr[i];
      newItem[1] = name[i];

      fetch("https://cryptoicons.org/api/color/" + abbr[i] + "/100/100").then(
        (response) => {
          newItem[2] = response["url"];
          list.push(newItem);
          // console.log("@list", list);
          this.setState((this.state.dataList = list));
        }
      );
    }
  }

  renderItem({ item }) {
    return (
      <View style={{ alignItems: "center" }}>
        <Text style={styles.text}>{item[1]}</Text>
        <Image
          source={{
            uri: item[2],
          }}
          style={{ width: 100, height: 100 }}
        />
      </View>
    );
  }

  render() {
    return (
      <FlatList
        style={styles.container}
        data={this.state.dataList}
        renderItem={this.renderItem}
        keyExtractor={(item) => item[0]}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "10%",
    backgroundColor: "#F5FCFF",
    height: 50,
    width: "80%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#ddd",
    marginBottom: 3,
  },
  text: {
    flex: 1,
    color: "black",
    fontWeight: "bold",
  },
});
