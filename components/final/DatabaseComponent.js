import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
} from "react-native";
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

export default class DatabaseComponent extends Component {
  constructor() {
    super();
    this.state = {
      hits: [],
      showDate: [],
      color: "yellow",
      type: "",
      input: "",
    };
  }

  componentDidMount() {
    this.fetchTodos();
  }
  handleSearch() {
    console.log("handleSearch");
    this.fetchTodos();
  }

  fetchTodos() {
    // https://pixabay.com/api/?key=21151478-43d8095b51786bb97c42d5581&q=yellow+horse&image_type=photo&pretty=true

    fetch(
      "https://pixabay.com/api/?key=21151478-43d8095b51786bb97c42d5581&q=" +
        this.state.color +
        "+" +
        this.state.type +
        "&image_type=photo&pretty=true"
    )
      .then((response) => response.json())
      .then((source) => {
        this.setState({ source });

        let data = this.state.source["hits"];
        // console.log("tyepe of data", typeof(data));
        // console.log("@data", data);
        let newData = data.slice(0, 2);
        this.setState({ showDate: newData });
        // console.log("@showDate", newData);
        // console.log("@showDate1", newData[0]);
        // console.log("@showDate2", newData[0].largeImageURL);
      });
  }

  renderItem({ item }) {
    return (
      <View style={{ alignItems: "center" }}>
        <Text style={styles.text}>{item.tags}</Text>
        <Image
          source={{
            uri: item.largeImageURL,
          }}
          style={{ width: 100, height: 100 }}
        />
      </View>
    );
  }

  render() {
    return (
      <View>
        <FlatList
          style={styles.container}
          data={this.state.showDate}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.id}
        />
        <TextInput
          style={styles.input}
          placeholder={"🔍  Explore the type"}
          onChangeText={(e) => {
            this.setState(
              {
                type: e,
              },
              console.log(e)
            );
          }}
          value={this.state.type}
        />
        <Button
          style={{ fontSize: 20, color: "green" }}
          styleDisabled={{ color: "red" }}
          onPress={() => {
            this.handleSearch();
          }}
          title="My current Location"
        ></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: "10%",
    backgroundColor: "#F5FCFF",
    // height: 50,
    // width: "80%",
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
    fontWeight: "500",
  },
});
