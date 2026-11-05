import { Image, StyleSheet, Text, View } from 'react-native';


export default function App(){
    return (
        <View style={mySyle.container}>
            <Text style={mySyle.title}>test1234</Text>
            <Image 
            source={require('@/assets/images/a.jpg')} 
            style={{
                width: 200,
                height: 200,
                borderRadius: 100,
                borderWidth: 10,
                borderColor: "purple"
            }}
            /> 
            <Image
            source={{uri:"https://caughtinsouthie.com/wp-content/uploads/2025/07/closeup-of-funny-white-domestic-rat-with-long-whis-2022-02-09-06-53-40-utc-1.jpg"}}
            style={{
                width: 200,
                height: 200,
                borderRadius: 100,
                borderWidth: 10,
                borderColor: "purple"
            }}
            />
            <View style={{flexDirection: "row"}}>
                <Text>cat🐱</Text>
                <Text>dog🐶</Text>
                <Text>duck🦆</Text>
                <Text>bird🦅</Text>
                <Text>fish🐟</Text>
            </View>
        </View>
    )
}

const mySyle = StyleSheet.create({
    container:{
        paddingTop: 120,
        backgroundColor: "purple",
        flex: 1,
        alignItems: "center"
    },

    title:{
        color: "white",
        fontSize: 30,
        fontWeight: 800, //หนา
        textAlign: "center",
    }
})