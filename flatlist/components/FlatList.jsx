// Importa o React e hooks/funções da biblioteca React Native
import React, { useState } from "react";
import { View, Text, TextInput, FlatList, Image, StyleSheet } from "react-native";

// Lista de contatos fictícios com id, nome, imagem e última mensagem
const contatos = [
  { id: "1", nome: "雪花飘飘北风啸啸", imagem: require("assets/fulano.png"), mensagem: "Grazi -: Saiu boneca nova?" },
  { id: "2", nome: "Mae", imagem: require("assets/fulano.png"), mensagem: "manda o boleto da faculdade..." },
  { id: "3", nome: "Pai", imagem: require("assets/fulano.png"), mensagem: "Para de gastar" },
  { id: "4", nome: "Julia(irmã)", imagem: require("assets/fulano.png"), mensagem: "Vem me ajudar" },
  { id: "5", nome: "Nebulosa", imagem: require("assets/fulano.png"), mensagem: "Miau" },
  { id: "6", nome: "Igor", imagem: require("assets/fulano.png"), mensagem: "E o trabalho?" },
  // Vários contatos genéricos
  { id: "7", nome: "contato", imagem: require("assets/fulano.png"), mensagem: "lorem ipsum" },
  // ...
  { id: "30", nome: "contato", imagem: require("assets/fulano.png"), mensagem: "lorem ipsum" }
];

// Componente principal que renderiza a FlatList com os contatos
export default function FlatListComponent() {
  // Hook para armazenar o texto digitado na busca
  const [busca, setBusca] = useState("");

  return (
    <View style={styles.container}>
      {/* Campo de busca para filtrar contatos */}
      <TextInput
        style={styles.input}
        placeholder="Pesquisar"
        placeholderTextColor="#aaa"
        value={busca}
        onChangeText={setBusca}
      />

      {/* FlatList para renderizar a lista de contatos de forma eficiente */}
      <FlatList
        // Filtra os contatos conforme a busca
        data={contatos.filter(item => item.nome.toLowerCase().includes(busca.toLowerCase()))}
        // Define a chave única de cada item
        keyExtractor={item => item.id}
        // Renderiza cada item da lista
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

// Estilos usados na interface
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2", // fundo claro
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
    elevation: 3, // Sombra para Android
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
    borderRadius: 24, // imagem redonda
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
