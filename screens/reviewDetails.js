import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalStyles, images } from "../styles/global";
import Card from "../shared/card";
import { Image } from "react-native";

const ReviewDetails = ({ route, navigation }) => {
  const { title, rating, body } = route.params;

  // const { rating } = route.params

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>{title}</Text>
        <Text style={globalStyles.titleText}>{body}</Text>
        <View style={styles.rating}>
          <Text>GamerZone rating: </Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee'
  }
});

export default ReviewDetails;
