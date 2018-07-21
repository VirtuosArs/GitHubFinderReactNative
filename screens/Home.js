import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  Dimensions,
  Animated,
  Button
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Result from "../components/Result";
import Spinner from "../components/Spinner";

const { height, width } = Dimensions.get("window");

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { user: "", data: "", loading: false };
  }

  fetchData = () => {
    this.setState({ loading: true });
    console.log("Clicked search button");
    const username = this.state.user;
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => {
          console.log("Fetched data==>",data)
        this.setState({ data, loading: false });
      })
      .catch(err => console.log(err));
  };

  renderResult() {
    if (this.state.data.message) {
      return (
        this.state.loading ? <Spinner /> : 
        <Text style={styles.notFoundStyle}>User not found</Text>
      );
    }
    else if(this.state.user != "") {
      return (
        this.state.loading ? <Spinner /> : <Result 
          username={this.state.data.name}
          image={this.state.data.avatar_url}
          user={this.state.user}
          bio= {this.state.data.bio}
          company= {this.state.data.company}
          blog= {this.state.data.blog}
          repos= {this.state.data.public_repos}
        />
      );
    }
    
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={{ width: width - 40, height: 200, marginTop: 20, marginLeft: 20, flex: 1 }}>
          

        <View >
        <TextInput 
          style={styles.inputBoxStyle}
          placeholder="Enter Github username"
          autoCapitalize='none'
          autoCorrect={false}
          value={this.props.user}
          onChangeText={(user) => this.setState({ user })}
        />
        <Button
          title="Get User" 
          onPress={this.fetchData}
        />

        {this.renderResult()}

      
      </View>
      </View>
      </View>
      </SafeAreaView>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  inputBoxStyle: {
    height: 40,
    textAlign: 'center',
    marginTop: 20
  },
  notFoundStyle: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 10
  }
});
