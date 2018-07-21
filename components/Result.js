import React, { Component } from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  Linking,
  View,
  ScrollView,
  Dimensions,
  Button
} from "react-native";

const { height, width } = Dimensions.get("window");

class Result extends Component {
  openLink = () => {
    const username = this.props.user;
    username ? Linking.openURL(`https://github.com/${username}`) : <View />;
  };



  render() {
    const { containerStyle, textStyle, imageStyle } = styles;

    // console.log('Data==>',this.props);
    return (
      <ScrollView scrollEventThrottle={16}>
        <TouchableOpacity style={containerStyle}>
          <Text style={textStyle}>{this.props.username}</Text>
          <View style={{ width: width - 40, height: 250, marginTop: 20 }}>
            <Image
              style={{
                flex: 1,
                width: null,
                height: null,
                resizeMode: "cover",
                borderRadius: 5,
                borderColor: "#ddd",
                borderWidth: 1
              }}
              source={{ uri: this.props.image }}
            />
          </View>
          {/* <Image 
          source={{ uri: this.props.image }} 
          style={imageStyle}
        /> */}
        </TouchableOpacity>
        <View
        style={{
          width: this.props.width / 2 - 30,
          height: this.props.width / 2 - 30,
          borderWidth: 0.5,
          borderColor: "#ddd",
          marginTop: 5
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "flex-start",
            justifyContent: "space-evenly",
            paddingLeft: 10
          }}
        >
        <Text  style={{ fontSize: 14, fontWeight: "normal"}}>
          <Text style={{ fontSize: 14, fontWeight: "bold"}}>
          Bio: 
        </Text>{this.props.bio}
        </Text>

        <Text  style={{ fontSize: 14, fontWeight: "normal"}}>
          <Text style={{ fontSize: 14, fontWeight: "bold"}}>
          Blog: 
        </Text>{this.props.blog}
        </Text>

        <Text  style={{ fontSize: 14, fontWeight: "normal"}}>
          <Text style={{ fontSize: 14, fontWeight: "bold"}}>
          Company: 
        </Text>{this.props.company}
        </Text>

        <Text  style={{ fontSize: 14, fontWeight: "normal"}}>
          <Text style={{ fontSize: 14, fontWeight: "bold"}}>
          Public Repos: 
        </Text>{this.props.repos}
        </Text>
        </View>
        <Button
          title="Go to Repo Page" 
          onPress={this.openLink}
        />
        </View>
      </ScrollView>
    );
  }
}

const styles = {
  containerStyle: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#e2e2e2",
    borderTopWidth: 1
  },
  textStyle: {
    fontSize: 27,
    fontWeight: "500",
    marginBottom: 10
  },
  imageStyle: {
    width: 200,
    height: 200,
    marginLeft: 10,
    marginBottom: 10
  }
};

export default Result;
