import { StyleSheet, TextInput,Button, View, Modal, Image} from "react-native";
import { useState } from "react";


function GoalInput(props){
    const [enteredGoalText, setEnteredGoalText]=useState('');
    
    function goalInputHandler(Text) {  //text can be enteredText doesn't matter
        setEnteredGoalText(Text);
    }
    function addGoalHandler(){ //function can be xyz doesn't matter
        props.onAddGoal(enteredGoalText);
        
        setEnteredGoalText("");
    }

   return(
    <Modal visible={props.vsibility} animationType="slide">
          <View style={styles.inputContainer}>
            <Image style={styles.image} source={require('../assets/images/goal.png')}/>
            <TextInput style={styles.TextInput} 
            placeholder="Your course goal" 
            onChangeText={goalInputHandler}
            value={enteredGoalText}/>
            <View style={styles.buttonContainer}>
              <View style={styles.button}><Button title="Add Goal" onPress={addGoalHandler} color='#5e0acc'/></View>
              <View style={styles.button}><Button title="Cancel" onPress={props.onCancel} color="#f31282"/></View>
            </View>            
          </View>
    </Modal>
   );
};

const styles= StyleSheet.create({
   
  inputContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding:16,
    backgroundColor:'#311b6b'
  },
  image: {
    height:100,
    width:100,
    margin:20
  },
  TextInput: {
    borderWidth:1,
    width:'100%',
    borderColor:'#cccccc',
    backgroundColor:"#e4d0ff",
    color:"#120438",
    borderRadius:6,
    padding:16,
  },
  buttonContainer:{
    flexDirection:'row',
    marginTop:16,
  },
  button:{
    width:'30%',
    marginHorizontal:8,
  }
})
export default GoalInput;