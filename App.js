import React, {useState,useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import {Text, View, TouchableOpacity,StyleSheet} from 'react-native';

export default function App() {

  const [page,setPage]=useState(1)

  return (
    <View style={{flex:1}}>
      <View style={{
        flexDirection:'row',
        backgroundColor:'#222a40',
        marginVertikal:20,
        marginHorizontal:20,
        paddingVertical:20,
        borderRadius:8,
        paddingHorizontal:10,
        }}>
        <TouchableOpacity style={page ==1 ? styles.activeMenu : styles.inActiveMenu} onPress={()=>setPage(1)}>
          <Text style={{color:'#fff'}}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={page ==2 ? styles.activeMenu : styles.inActiveMenu} onPress={()=>setPage(2)}>
          <Text style={{color:'#fff'}}>2</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={page ==3 ? styles.activeMenu : styles.inActiveMenu} onPress={()=>setPage(3)}>
          <Text style={{color:'#fff'}}>3</Text>
        </TouchableOpacity>

        <TouchableOpacity style={page ==4 ? styles.activeMenu : styles.inActiveMenu} onPress={()=>setPage(4)}>
          <Text style={{color:'#fff'}}>4</Text>
        </TouchableOpacity>

        <TouchableOpacity style={page ==5 ? styles.activeMenu : styles.inActiveMenu} onPress={()=>setPage(5)}>
          <Text style={{color:'#fff'}}>5</Text>
        </TouchableOpacity>

        <TouchableOpacity style={page ==6 ? styles.activeMenu : styles.inActiveMenu} onPress={()=>setPage(6)}>
          <Text style={{color:'#fff'}}>6</Text>
        </TouchableOpacity>

        <TouchableOpacity style={page ==7 ? styles.activeMenu : styles.inActiveMenu} onPress={()=>setPage(7)}>
          <Text style={{color:'#fff'}}>7</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  activeMenu:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#005efe',
    paddingVertical:10,
    borderRadius:8,
    elevation:2
  },
  inActiveMenu:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  }
});
