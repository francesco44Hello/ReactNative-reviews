import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";
import { globalStyles } from "../styles/global";
import ReviewDeatils from "./reviewDetails";
import Card from "../shared/card";
import { MaterialIcons } from "@expo/vector-icons";
import ReviewForm from "./reviewForm";

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    {
      title: "Zelda,  Breath of fresh Air",
      rating: 5,
      body: "lorem ispum , ahfeodhcoehfoeho ouhweofown oneweo hw",
      key: "1",
    },
    { title: "Gotta catch em all", rating: 4, body: "lorem ispum", key: "2" },
    { title: "Not so final Fantasy", rating: 3, body: "lorem ispum", key: "3" },
  ]);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <View style={styles.modalContent}>
          <MaterialIcons
            name="close"
            size={24}
            style={{ ...styles.modalToggle, ...styles.modalClose }}
            onPress={() => setModalOpen(false)}
          />
          <ReviewForm />
        </View>
      </Modal>

      <MaterialIcons
        name="add"
        size={24}
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
      />
      <FlatList
        style={styles.flatlist}
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Details", item)}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
      {/* <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        /> */}
    </View>
  );
}
const styles = StyleSheet.create({
  flatlist: {
    flex: 1,
    width: "80%",
  },
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  modalClose: {
    marginTop: 60,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
});
