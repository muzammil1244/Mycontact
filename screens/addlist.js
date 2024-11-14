
            
            import { Image, Text, TouchableOpacity, View } from "react-native";
            import { TextInput } from "react-native-gesture-handler";
            import AsyncStorage from "@react-native-async-storage/async-storage";
            import { useState } from "react";
            
            const AddList = ({ navigation }) => {
                const [getName, setName] = useState('');
                const [getNum, setNum] = useState('');
            
                const setData = async () => {
                    try {
                        const existingContacts = await AsyncStorage.getItem('CONTACTS');
                        let contactsArray = existingContacts ? JSON.parse(existingContacts) : [];
            
                        if(getNum.length == 10 || getName.length >0){
                        contactsArray.push({ name: getName, mobile: getNum });

                        }else{
setNum("")
setName("")

                            return false
                        }

            
                        await AsyncStorage.setItem('CONTACTS', JSON.stringify(contactsArray));
            
                        navigation.navigate("contactList");
                        setNum("")
                        setName("")
                    } catch (error) {
                        console.error("Error saving contact:", error);
                    }
                };
            
                return (
                    <View style={{
                        width: "100%",
                        height: '100%',
                        backgroundColor: '#eeeeee',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Image
                            style={{ marginBottom: 50 }}
                            source={require('../images/conicons.png')}
                        />
                        <View style={{ height: 200, justifyContent: 'space-between' }}>
                            <View style={{
                                borderWidth: 2,
                                borderColor: '#00c853',
                                width: 260,
                                paddingHorizontal: 5,
                                backgroundColor: '#b9f6ca',
                                borderRadius: 10
                            }}>
                                <TextInput
                                    placeholder="Enter Name"
                                    onChangeText={(text) =>{
                                        

                                        
                                        setName(text)
                                    
                                    } }
                                    value={getName}
                                />
                            </View>
                            <View style={{
                                borderWidth: 2,
                                borderColor: '#00c853',
                                width: 260,
                                paddingHorizontal: 5,
                                backgroundColor: '#b9f6ca',
                                borderRadius: 10
                            }}>
                                <TextInput
                                    placeholder="Enter Number"
                                    onChangeText={(text) => {
                                        
                                        
                                        setNum(text)
                                    
                                    
                                    }}
                                    value={getNum}
                                    keyboardType="numeric"
                                />
                            </View>
                            <TouchableOpacity
                                style={{
                                    width: 260,
                                    borderWidth: 1,
                                    borderColor: '#00c853',
                                    justifyContent: 'center',
                                    height: 50,
                                    backgroundColor: '#00c853',
                                    borderRadius: 10
                                }}
                                onPress={setData}
                            >
                                <Text style={{
                                    textAlign: 'center',
                                    color: 'white'
                                }}>ADD Contact</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={{
                            position:'absolute',
                            bottom:70,
                            left:50
                        }} onPress={()=>{
navigation.navigate("contactList")

                        }}>
                            <View style={
                                {

                                    backgroundColor:'#00c853',
                                    paddingHorizontal:20,
                                    paddingVertical:10,
                                    borderRadius:10,


                                }
                            }>
                                <Text style={
                                    {
                                        color:'white'
                                    }
                                }>
                                    Back
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                );
            };
            
            export default AddList;
            