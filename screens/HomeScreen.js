import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, FlatList, Modal, TextInput, Button, View, Text, Pressable, TouchableOpacity } from 'react-native';
import tempData from '../tempData';

const HomeScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [enteredList, setEnteredList] = useState('');
/*   const [shoppingLists, setShoppingLists] = useState([]); */
  const newListHandler = (enteredText) => {
    setEnteredList(enteredText);   
  }
  const addListHandler = () => {
    if (enteredList) {
    /* setShoppingLists(shoppingLists => [...shoppingLists, {key: Math.random().toString(), title: enteredList, completed: false, list: []}]); */
      tempData.push({
        title: enteredList,
        listItems: []
      })
    }
    setEnteredList('');
    setModalVisible(false)
  }  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleView}><Text style={styles.title}>Shopping lists</Text></View>
      <FlatList
        data={tempData}
        keyExtractor={item => item.name}
        renderItem={listData => 
          <Pressable style={styles.listItem} onPress={() => navigation.navigate('Back to Lists', {title: listData.item.title, list: listData.item.listItems})} >
            <Text style={styles.listText}>{listData.item.title}
            </Text>
          </Pressable> 
            }
      />
      <Modal 
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => {
          Alert.alert("New list added");
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.textInput}>
              <TextInput
              numberOfLines={1}
                autoFocus={true} 
                placeholder="Name your list"
                onChangeText={newListHandler}
                value={enteredList}
              ></TextInput>
            </View>
            <Button color='coral' style={styles.createButton}
              title="Create"
              onPress={addListHandler}
            ></Button>      
          </View>
        </View>        
      </Modal>
      <TouchableOpacity style={styles.floatingButton}
        onPress={() => setModalVisible(true)}
      ><Text style={styles.listText}>+</Text></TouchableOpacity>        
    </SafeAreaView> 
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 55,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  title: {
    fontSize: 32,
    textAlign: 'center'
  },
  titleView: {
    marginTop: 30,
    marginBottom: 30
  },
  textInput: {
    borderBottomWidth: 1,
    marginBottom: 30,
    fontSize: 40
  },
  floatingButton: {
    position: 'absolute',
    width: 65,
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
    backgroundColor: 'coral',
    borderRadius: 50
  },
  listItem: {
    padding: 20,
    borderColor: 'black',
    backgroundColor: 'coral',
    margin: 5
  },
  listText: {
    color: 'white'
  },
  createButton: {   
    marginTop: 50,
    marginHorizontal: 20,
    backgroundColor: 'coral',
    color: 'white' }
});

export default HomeScreen;