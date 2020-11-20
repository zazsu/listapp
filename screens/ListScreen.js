import React, {useState} from 'react';
import { Button, View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView, Modal, TextInput} from 'react-native';

const ListScreen = ({route }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [enteredItem, setEnteredItem] = useState();
  const [listItems, setListItems] = useState(route.params.list)

  const {title} = route.params;

  const newItemHandler = (enteredItem) => {
    setEnteredItem(enteredItem);   
  }
  const addItemHandler = () => {
    if (enteredItem) {
        setListItems(listItems => [...listItems, {title: enteredItem, completed: false}]); 
  }
    setEnteredItem('');
    setModalVisible(false)
  }
  const removeItemHandler = (item) => {
    let array = [...listItems];
    var index = array.indexOf(item);
    if (index !== -1) {
      array.splice(index,1);
      setListItems(array);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleView}>
      <Text style={styles.title}>{title}</Text> 
      </View>
      <FlatList
        data={listItems}
        keyExtractor={item => item.title}
        renderItem={listData => 
          <View style={styles.listItem}>
            <Text style={styles.listText}>{listData.item.title}
            </Text>
            <TouchableOpacity 
            onPress={() => removeItemHandler(listData.item)} 
            style={styles.delete}>
              <Text style={styles.deleteText}>X</Text></TouchableOpacity>
          </View>}
      />
    <Modal 
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => {
          Alert.alert("New item added");
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.textInput}>
              <TextInput
              numberOfLines={1}
                autoFocus={true} 
                placeholder="Add new item"
                onChangeText={newItemHandler}
                value={enteredItem}
              ></TextInput>
            </View>
            <Button color='coral' style={styles.createButton}
              title="Add"
              onPress={addItemHandler}
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
  delete: {
    position: 'absolute',
    right: 0,
    fontSize: 20,
    backgroundColor: 'crimson',
    padding: 16
  },
  listText: {
    color: 'white'
  },
  deleteText: {
    color: 'white',
    fontSize: 20
  },
  listItem: {
    padding: 20,
    borderColor: 'black',
    backgroundColor: 'coral',
    margin: 5,
  },
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
  textInput: {
    borderBottomWidth: 1,
    marginBottom: 30,
    fontSize: 40
  }}
);

export default ListScreen;