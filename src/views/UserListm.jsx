import React from "react";
import { View, Text, FlatList, Alert, StyleSheet, Pressable } from "react-native";
import { ListItem, Avatar, ThemeProvider } from "@rneui/themed";
import users from "../data/user";

export default props => {
  function confirmPedido(user) {
    Alert.alert('Adicionar', 'Você adicionou um item na sua lista',
      [{
        onPress() {
          console.log('Seu pedido: ' + user.id)
        }
      }
      ]
    )
  }

  function RetirarPedido(user) {
    Alert.alert('Retirar pedido', 'Você retirou um item da sua lista', 
     [{
      onPress() {
        console.log(user.id)
      }
     }]
    )
  }


  function getUserItem({ item: user }) {
    return (   
      <ThemeProvider style={style.body}>
        <ListItem style={style.separacao}
          bottomDivider
          onPress={() => {
            props.navigation.navigate('UserForm')
          }}
        >

          <Avatar source={{ uri: user.avatarURL }} style={style.img} />
          <ListItem.Content>
            <ListItem.Title style={style.titulo} >{user.name}</ListItem.Title>
            <ListItem.Title style={style.textDescricao} >{user.descricao}</ListItem.Title>
            <ListItem.Title style={style.preco}>{user.preco}</ListItem.Title>
          </ListItem.Content>

          <ListItem.Chevron
            name="remove-circle"
            color="orange"
            size={25}
            onPress={() => RetirarPedido(user)}
          />
          <Text>0</Text>
          <ListItem.Chevron
            name="add-circle"
            color="orange"
            size={25}
            onPress={() => confirmPedido(user)}
          />
        </ListItem>
      </ThemeProvider>

    )
  }
  return (
    <View>
      <FlatList
        keyExtractor={user => user.id.toString()}
        data={users}
        renderItem={getUserItem}
      />

      <Pressable style={style.botao}>
        <Text style={style.txt}>Continue!</Text>
      </Pressable>
    </View>
  )
}

const style = StyleSheet.create(
  {
    body: {
      backgroundColor: "#FFFFFF",
      borderRadius: 30,
      borderWidth: 10,
      borderColor: "#FFF",
      justifyContent: "center",
      alignItems: "center",
      margin: 10,
      padding: 10
    },
    img: {
      width: 100,
      height: 100,
    },
    titulo: {
      fontSize: 20,
      color: "black",
      fontFamily: "Radio Canada Big",
      fontWeight: "bold",
    },
    preco: {
      fontSize: 20,
      color: "#43AA48",
      fontFamily: "Platypi",
      fontWeight: "bold"
    },
    textDescricao: {
      fontSize: 15,
      color: "gray",
      fontFamily: "Platypi",
      fontWeight: "bold",
      textAlign: "left",
      justifyContent: 'center',
      
    },
    botao: {
      backgroundColor: '#90D26D',
      width: 300,
      height: 40,
      margin: 20,
      marginLeft: 70,
      borderRadius: 5
    },
    txt: {
      textAlign: 'center',
      color: 'white',
      fontSize: 25
    },
    separacao:{
      marginBottom:10,
      margin:10,
      elevation:15,
      backgroundColor:'white',
    },
  })