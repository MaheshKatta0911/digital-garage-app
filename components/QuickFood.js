import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Pressable,
    ImageBackground,
  } from "react-native";
  import quickfood from "../data/quickfood";
  import { MaterialIcons } from "@expo/vector-icons";
  import {React,useState,useEffect} from 'react'

  
  const QuickFood = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
useEffect(() => {

        const fetchData = async () => {
          try {
            const response = await fetch("https://digital-garage.onrender.com/getServices");
            
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
    
            const result = await response.json();
            setData(result);
          } catch (error) {
            setError(error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchData();
      }, []);

    return (
      <View style={{ margin: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: "500" }}>Get it Quickly</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {data && data.map((item, index) => (
            <Pressable style={{ margin: 10 }} key={index}>
              <ImageBackground
                imageStyle={{ borderRadius: 6 }}
                style={{ aspectRatio: 5 / 6, height: 170 }}
                source={{ uri: item.serviceImage }}
              >
                <Text
                  style={{
                    position: "absolute",
                    bottom: 10,
                    left: 10,
                    fontSize: 27,
                    fontWeight: "900",
                    color: "white",
                  }}
                >
                  {item.offer} OFF
                </Text>
              </ImageBackground>
              <Text style={{ marginTop: 10, fontSize: 16, fontWeight: "500" }}>
                {item.serviceName}
              </Text>
              <View style={{flexDirection:"row",alignItems:"center",marginTop:3}}>
                <MaterialIcons name="stars" size={24} color="green" />
                <Text style={{marginLeft:3,fontSize:15,fontWeight:"400"}}>{item.rating}</Text>
                <Text style={{marginLeft:3}}>{item.package}</Text>
                {/* <Text style={{marginLeft:3,fontSize:15,fontWeight:"400"}}>{item.time}mins</Text> */}
              </View>
            </Pressable>
          ))}
        </ScrollView>
      </View>
    );
  };
  
  export default QuickFood;
  
  const styles = StyleSheet.create({});