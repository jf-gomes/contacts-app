import { useState, useContext } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

import { AuthContext } from '../contexts/auth'

export default function HomeScreen({ navigation }){

    const { contactInfo } = useContext(AuthContext)
    const { setContactInfo } = useContext(AuthContext)

    const [name, setName] = useState()
    const [phone, setPhone] = useState()
    const [email, setEmail] = useState()

  return (
    <View style={styles.container}>
      <TextInput placeholder='Name' style={styles.userInput} value={name} onChangeText={(e) => setName(e)} />
      <TextInput placeholder='Phone' keyboardType='numeric' style={styles.userInput} value={phone} onChangeText={(e) => setPhone(e)} />
      <TextInput placeholder='E-mail' style={styles.userInput} value={email} onChangeText={(e) => setEmail(e)} />
      <TouchableOpacity style={styles.addBtn} onPress={() => {

        /* -----Add Contact------- */
        let newList = contactInfo
        newList.push({
            id: newList.length + 1,
            name: name,
            phone: phone,
            email: email
        })
        setContactInfo(newList)
        setName('')
        setPhone('')
        setEmail('')

      }}>
        <Text style={styles.addBtnText}>Add</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.addBtn} onPress={() => navigation.navigate('Contacts')}>
        <Text style={styles.addBtnText}>See my contacts</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40
  },
  userInput: {
    backgroundColor: 'white',
    color: 'black',
    width: '75%',
    padding: 8,
    fontSize: 20,
    borderRadius: 8,
    margin: 10
  },
  addBtn: {
    backgroundColor: 'orange',
    padding: 8,
    borderRadius: 8,
    width: '75%',
    margin: 10
  },
  addBtnText: {
    fontSize: 20,
    textAlign: 'center'
  }
})