import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  FlatList,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigations";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export default function HomeScreen({ navigation }: Props) {
  const [balance, setBalance] = useState(200);
  const [amount, setAmount] = useState("");
  const [transactions, setTransactions] = useState<string[]>([]);

  const addTransaction = () => {
    const value = parseFloat(amount);
    if (!isNaN(value)) {
      setBalance(balance + value);
      setTransactions([...transactions, `R$ ${value.toFixed(2)}`]);
      setAmount("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saldo: R$ {balance.toFixed(2)}</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={amount}
        placeholder="Valor (+ ou -)"
        onChangeText={setAmount}
      />
      <Button title="Adicionar Transação" onPress={addTransaction} />
      <FlatList
        data={transactions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
      <Button
        title="Ir para Perfil"
        onPress={() => navigation.navigate("Profile")}
      />
      <Button
        title="Ver Detalhes"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1 },
  title: { fontSize: 24, marginBottom: 10 },
  input: { borderWidth: 1, padding: 10, marginVertical: 10 },
});
