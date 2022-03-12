import React,{useState, useEffect} from 'react';
import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity,TextInput } from 'react-native';
// import Constants from 'expo-constants';
import { Swipeable } from 'react-native-gesture-handler';




var allBooks = [
  { key: 0, name: 'Ali', msg: 'Hello World', unread: 12, time: '12:09 am' },
  { key: 1, name: 'Umer', msg: 'Hello World', unread: 12, time: '12:09 am' },
  { key: 2, name: 'Zeeshan', msg: 'Hello World', unread: 12, time: '12:09 am' },
  { key: 3, name: 'Abdul Haadi', msg: 'Hello World', unread: 12, time: '12:09 am' },
  { key: 4, name: 'Moiz', msg: 'Hello World', unread: 78, time: '1:30 am' },
  { key: 5, name: 'Abdul Haadi', msg: 'Hello World', unread: 12, time: '12:09 am' },
  { key: 6, name: 'Moiz', msg: 'Hello World', unread: 78, time: '1:30 am' },
  { key: 7, name: 'Abdul Haadi', msg: 'Hello World', unread: 12, time: '12:09 am' },
  { key: 8, name: 'Moiz', msg: 'Hello World', unread: 78, time: '1:30 am' }
];

export default function App() {
  const [filterdata, setFilterdata]= useState("");
const [masterdata, setMasterData]= useState("");
const [search, setSearch] = useState("")
useEffect(() => {setFilterdata(allBooks), setMasterData(allBooks)}
, [])

  const searchFilter=(text)=>{
    if(text){
      const newData = masterdata.filter((item)=>{
        const itemData =item.name? item.name.toUpperCase():"".toUpperCase()
        const textData = text.toUpperCase();
        return itemData.indexOf(textData)>-1;
      });
      setFilterdata(newData);
      setSearch(text);
    }
    else{
      setFilterdata(masterdata);
      setSearch(text);
    }
  }
  const leftaction = () => {
    return (
     <TouchableOpacity><Text style={styles.editbtn}>Edit</Text></TouchableOpacity>
    )
  }

  const rightaction = () => {
    return (
      <TouchableOpacity><Text style={styles.delbtn}>Delete</Text></TouchableOpacity>
    )
  }



  return (

    <View style={styles.chatarea}>
      <View ><Text style={styles.heading}>Chats</Text></View>
      <TextInput placeholder='Search Here' value={search} onChangeText={(text)=>{searchFilter(text)}} style={styles.inputbox}/>
      <FlatList

        numColumns={1}

        keyExtractor={(item) => item.key}

        data={filterdata}

        renderItem={
          ({ item }) =>

            <TouchableOpacity>
              <Swipeable renderLeftActions={leftaction} renderRightActions={rightaction}>
                <View style={styles.chatsContainer}>


                  <View style={styles.profile}>
                    <Image style={styles.profileimg} source={require("../images/profile.jpg")} />
                    <View style={styles.chatDetails}>
                      <Text style={styles.chatname}>{item.name}</Text>
                      <Text style={styles.chatmsg}>{item.msg}</Text>
                    </View>
                  </View>

                  <View style={styles.chatstatus} >
                    <View ><Text style={styles.chattime}>{item.time}</Text></View>
                    <View ><Text style={styles.unreadchat}>{item.unread}</Text></View>

                  </View>
                </View>
                  <View style={styles.separator}></View>
              </Swipeable>
            </TouchableOpacity>
        }
      />
    </View>

  );
}

const styles = StyleSheet.create({
  heading: {
    color: "white",
    textAlign: 'center',
    fontSize: 26,
    fontWeight: "bold",
    borderBottomColor:"black",
    borderBottomWidth:2,
  },

  chatarea: {
    width: "100%",
    height: 100,
    backgroundColor: "darkblue",
    flex: 1,
  },

  chatsContainer: {
    flex: 1,
    margin: 20,
    justifyContent: "space-between",
    flexDirection: "row"

  },

  chatname: {
    color: "grey",
    fontSize: 20,
    marginLeft: 15,
    marginBottom: 2
  },
  profile: {
    flex: 1,
    flexDirection: 'row',
    alignItems: "center"

  },
  profileimg: {
    width: "15%",
    height: 55,
    borderRadius: 50
  },
  chatDetails: {
    flex: 1,
    marginTop: 10
  },
  chatmsg: {
    marginLeft: 10,
    fontSize: 20,
    color: "white",
    fontWeight: "bold"
  },
  chattime: {
    color: "white",
    fontSize: 18,
    marginTop: 10,
    marginBottom: 5
  },
  unreadchat: {
    backgroundColor: "darkgreen"
    , color: "white",
    width: 30,
    borderRadius: 50,
    textAlign: 'center',
    fontSize: 18
  },
  delbtn:{
    color:"white",
    fontWeight:"bold",
    fontSize:20,
    backgroundColor:"red"
    ,padding:20,
    textAlign:'center',
    marginTop:20
  },
  editbtn:{
    color:"white",
    fontWeight:"bold",
    fontSize:20,
    backgroundColor:"orange"
    ,padding:20,
    textAlign:'center',
    marginTop:20
  },
  separator:{
    borderBottomColor:"grey",
    borderBottomWidth:2,
  },
  inputbox:{
    color:"black",
    backgroundColor:"white",
    textAlign:"center",
    fontSize:20

  }

});