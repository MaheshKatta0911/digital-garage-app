import { StyleSheet, Text, View ,ScrollView,Image} from 'react-native'
import {React,useState,useEffect} from 'react'

const FoodTypes = () => {
    const types = [
        {
            id:"0",
            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/rwnkrdtnusqdkyjssahq",
            name:"Suspension",
        },
        {
            id:"1",
            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/qwrkgxefwzjergtzowsc",
            name:"Air Filter Change"
        },
        {
            id:"2",
            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/uckbx3rr87jhakb81mbs",
            name:"break Inspection"
        },
        {
            id:"3",
            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/z9xmu9pb65lcbt3wepud",
            name:"AC Service",

        },
        {
            id:"4",
            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/m7osxfhdon2opecztidb",
            name:"Transmission"
        }
    ]
    const [database, setData] = useState(null);
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
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {types.map((item,index) => (
            <View style={{margin:10}} key={index}>
                <Image source={{uri:item.image}} style={{width:60,height:60,borderRadius:30}}/>
                <Text style={{marginTop:6,textAlign:"center"}}>{item.name}</Text>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default FoodTypes

const styles = StyleSheet.create({})