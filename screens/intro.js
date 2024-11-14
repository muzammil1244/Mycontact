import { useEffect } from "react";
import { Image, Text, View } from "react-native"

const Intro = ({navigation})=>{

    useEffect(()=>{

        setTimeout(() => {
           navigation.navigate('contactList') 
        }, 3000);


    },[])


return(


    <View style={{
        width:'100%',
        height:'100%',
     
      
        backgroundColor:'#eeeeee',
        alignItems:'center'
    }}>
        <View style={{
            marginTop:200
        }}>
            <Image source={require('../images/icons8-contact-list-50.png')}/>
        <Text style={{
            fontSize:25,
            color:'#00e676'


        }}>My_Contect</Text>

</View>
    </View>
)


}


export default Intro;