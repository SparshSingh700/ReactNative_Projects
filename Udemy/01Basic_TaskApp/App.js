import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { Button, StyleSheet,ScrollView, Text, TextInput, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals]=useState([]);

  function startAddGoalHandler(){
    setModalIsVisible(true);
  }
  function endAddGoalHandler(){
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {            //use this way if one state depends on prev, new var currentCourseGoals
    setCourseGoals(currentCourseGoals=>[
      ...currentCourseGoals,
      {text:enteredGoalText, id:Math.random().toString()},
      ]);
    endAddGoalHandler();
  }

  //filter will drop the element if false is returned
  function deleteGoalHandler(id){
    const goalToDelete = courseGoals.find(goal => goal.id === id);
    if (goalToDelete) {
    console.log("Deleting:", goalToDelete.text); // 🖨️ print the goal name
    }
    setCourseGoals(currentCourseGoals=>{
      return currentCourseGoals.filter((goal) => goal.id!== id);
    });
  }

  return (
      <>
      <StatusBar style='light'/>
      <View style={styles.appContainer}>
      <Button
          title='Add a goal'
          color='#5e0acc'
          onPress={startAddGoalHandler} 
      />
      {modalIsVisible && <GoalInput visibility={modalIsVisible} onCancel={endAddGoalHandler} onAddGoal={addGoalHandler} />}


      <View style={styles.goalsContainer}>
      <FlatList 
      data={courseGoals}
      renderItem={(itemData)=>{
        return <GoalItem
        text={itemData.item.text} 
        id={itemData.item.id}
        onDeleteItem={deleteGoalHandler}/>;
      }}
      keyExtractor={(item, index)=>{
          return item.id;
      }} 
      />
        
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
   appContainer:{
    flex:1,
    paddingTop: 50,
    paddingHorizontal:16,
  },
  goalsContainer: {
    flex:5,
  }
});
