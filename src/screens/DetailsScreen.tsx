import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigations";

type DetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Details"
>;

type Props = {
  navigation: DetailsScreenNavigationProp;
};

export default function DetailsScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Esta é a tela de detalhes.</Text>
      <Button
        title="Voltar para Home"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: { fontSize: 24, marginBottom: 10 },
});
