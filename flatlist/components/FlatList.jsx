import React, { useState } from "react";
import { View, Text, TextInput, FlatList, Image, StyleSheet } from "react-native";

const contatos = [
  { id: "1", nome: "雪花飘飘北风啸啸", imagem: require("assets/fulano.png"), mensagem: "Grazi -: Saiu boneca nova?" },
  { id: "2", nome: "Mae", imagem: require("assets/fulano.png"), mensagem: "manda o boleto da faculdade..." },
  { id: "3", nome: "Pai", imagem: require("assets/fulano.png"), mensagem: "Para de gastar" },
  { id: "4", nome: "Julia(irmã)", imagem: require("assets/fulano.png"), mensagem: "Vem me ajudar" },
  { id: "5", nome: "Nebulosa", imagem: require("assets/fulano.png"), mensagem: "Miau" },
  { id: "6", nome: "Igor", imagem: require("assets/fulano.png"), mensagem: "E o trabalho?" },
  { id: "7", nome: "contato", imagem: require("assets/fulano.png"), mensagem: "lorem ipsum" },
  { id: "8", nome: "contato", imagem: require("assets/fulano.png"), mensagem: "lorem ipsum" },
  { id: "9", nome: "contato", imagem: require("assets/fulano.png"), mensagem: "lorem ipsum" },
  { id: "10", nome: "contato", imagem: require("assets/fulano.png"), mensagem: "lorem ipsum" },
  { id: "12", nome: "contato", imagem: require("assets/fulano.png"), mensagem: "lorem ipsum" },
  { id: "13", nome: "contato", imagem: require("assets/fulano.png"), mensagem: "lorem ipsum" },
  { id: "14", nome: "contato", imagem: require("assets/fulano.png"), mensagem: "lorem ipsum" },
  { id: "15", nome: "contato", imagem: require("assets/fulano.png"), mensagem: "lorem ipsum" },
  { id: "16", nome: "contato", imagem: require("assets/fulano.png"), mensagem: "lorem ipsum" },
  { id: "17", nome: "contato", imagem: require("assets/fulano.png"), mensagem: "lorem ipsum" },
  { id: "18", nome: "contato", imagem: require("assets/fulano.png"), mensagem: "lorem ipsum" },
  { id: "19", nome: "contato", imagem: require("assets/fulano.png"), mensagem: "lorem ipsum" },
  { id: "20", nome: "contato", imagem: require("assets/fulano.png"), mensagem: "lorem ipsum" },
  { id: "21", nome: "contato", imagem: require("assets/fulano.png"), mensagem: "lorem ipsum" },
  { id: "22", nome: "contato", imagem: require("assets/fulano.png"), mensagem: "lorem ipsum" },
  { id: "23", nome: "contato", imagem: require("assets/fulano.png"), mensagem: "lorem ipsum" },
  { id: "24", nome: "contato", imagem: require("assets/fulano.png"), mensagem: "lorem ipsum" },
  { id: "25", nome: "contato", imagem: require("assets/fulano.png"), mensagem: "lorem ipsum" },
  { id: "26", nome: "contato", imagem: require("assets/fulano.png"), mensagem: "lorem ipsum" },
  { id: "27", nome: "contato", imagem: require("assets/fulano.png"), mensagem: "lorem ipsum" },
  { id: "28", nome: "contato", imagem: require("assets/fulano.png"), mensagem: "lorem ipsum" },
  { id: "29", nome: "contato", imagem: require("assets/fulano.png"), mensagem: "lorem ipsum" },
  { id: "30", nome: "contato", imagem: require("assets/fulano.png"), mensagem: "lorem ipsum" }
];

export default function FlatListComponent() {
  const [busca, setBusca] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Pesquisar"
        placeholderTextColor="#aaa"
        value={busca}
        onChangeText={setBusca}
      />
      <FlatList
        data={contatos.filter(item => item.nome.toLowerCase().includes(busca.toLowerCase()))}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={item.imagem} style={styles.image} />
            <View>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.mensagem}>{item.mensagem}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    paddingTop: 50,
    paddingHorizontal: 15,
  },
  input: {
    height: 50,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingHorizontal: 15,
    color: "#333333",
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#DDDDDD",
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
    borderWidth: 1,
    borderColor: "#CCCCCC",
  },
  nome: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222222",
  },
  mensagem: {
    fontSize: 14,
    color: "#666666",
  },
});


