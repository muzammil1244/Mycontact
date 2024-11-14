import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native"
import { FlatList } from "react-native-gesture-handler";
import { useIsFocused } from "@react-navigation/native";



const ContactList = ({navigation})=>{
    const [getvalue,setValue] = useState([])
const focus = useIsFocused()

    useEffect(()=>{

getData()



    },[focus])

    const getData=async()=>{


        let contactsS = await AsyncStorage.getItem("CONTACTS")
    
    setValue( JSON.parse(contactsS))
        
    }


  const deleteData=async(index)=>{

    let finaldata = getvalue

    let filterData = finaldata.filter((item,ind)=>{

        return ind != index
    })
    setValue(filterData)
    await AsyncStorage.setItem('CONTACTS', JSON.stringify(filterData));


  }



return(
    <View style={
        {
width:"100%",
height:"100%",
padding:10,

        }
    }>
    <FlatList style={{
    }} data={getvalue} renderItem={({item,index})=>{
            return(
                <View style={{
                    width:'100%',
                    height:60,
                    backgroundColor:'#b9f6ca',
                    borderRadius:20,
                    flexDirection:'row',
                    justifyContent:'space-between',
                    alignItems:'center',
                    paddingHorizontal:10,
                    marginVertical:5
            
                   }}>
                    
            
                    <View>
            <Text>{item.name}</Text>
            <Text>{item.mobile}</Text>
            
            </View>
            
            <View style={{
            
                width:80,
                height:40,
                backgroundColor:'#ffcdd2',
                alignItems:'center',
                justifyContent:'center',
                borderRadius:20
            
            }}>
                <TouchableOpacity onPress={()=>{
                    deleteData(index)
                }}>
                    <Image source={require("../images/icons8-delete-24.png")}/>
                    </TouchableOpacity>
                    </View>
            
                   </View>


            )
        }}/>
      <TouchableOpacity onPress={()=>{

navigation.navigate("Addlist")


      }} style={{
        position:'absolute',
        bottom:40,
        left:20

      }}>
<View style={{
    backgroundColor:'#00c853',
    width:100,
    padding:10,
    borderRadius:20,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:"space-around"
}}>
    <Image style={{
        width:25,
        height:25
    }} source={require("../images/icons8-add-contact-48.png")}/>
    <Text style={{
        color:'white'
    }}>Add</Text>
</View>
</TouchableOpacity>

    </View>
)

}

export default ContactList;