import { useState, useContext } from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Modal, Alert } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { AuthContext } from '../contexts/auth'

export default function ContactsScreen(){

    const { contactInfo } = useContext(AuthContext)
    const { setContactInfo } = useContext(AuthContext)

    const [modalVisible, setModalVisible] = useState(false)

    const [name, setName] = useState()
    const [phone, setPhone] = useState()
    const [email, setEmail] = useState()

    return (
        <View>
            <Modal transparent={true} visible={modalVisible}>
                <View style={styles.modalView}>
                    <Text style={styles.modalMainTitle}>Contact Info</Text>
                    <Text style={styles.modalSecondTitle}>Name</Text>
                    <Text style={styles.modalInfo}>{name}</Text>
                    <Text style={styles.modalSecondTitle}>Phone</Text>
                    <Text style={styles.modalInfo}>{phone}</Text>
                    <Text style={styles.modalSecondTitle}>Email</Text>
                    <Text style={styles.modalInfo}>{email}</Text>
                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                        <Feather name='arrow-left' size={20} style={{marginTop: 10}} />
                    </TouchableOpacity>
                </View>
            </Modal>
            <FlatList 
                data={contactInfo}
                renderItem={({item}) => (
                    <View style={styles.contactNameView}>
                        <Text style={styles.contactNameText} onPress={() => {
                            setName(item.name)
                            setPhone(item.phone)
                            setEmail(item.email)
                            setModalVisible(!modalVisible)
                        }}>{item.name}</Text>
                        <TouchableOpacity onPress={() => {

                            /*---------Delete----------- */
                            Alert.alert('Delete Contact', `Do you really want to delete ${item.name} contact info?`, [
                                {
                                    text: 'No',
                                    onPress: () => null
                                },
                                {
                                    text: 'Yes',
                                    onPress: () => {
                                        let newList = contactInfo.filter((e) => e.id !== item.id)
                                        setContactInfo(newList)
                                    }
                                }
                            ])

                        }}>
                            <Feather name='trash-2' size={20} color={'red'} />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    contactNameView: {
        backgroundColor: 'white',
        padding: 8,
        margin: 10,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    contactNameText: {
        fontSize: 20
    },
    modalView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    modalMainTitle: {
        fontSize: 30,
        textAlign: 'center',
        color: 'orange'
    },
    modalSecondTitle: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 10
    },
    modalInfo: {
        fontSize: 15,
    }
})