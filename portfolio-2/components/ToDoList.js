import { useCallback, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { CheckBox, Input, Button } from 'react-native-elements';

function ToDoList() {
  let [inputText, setInputText] = useState("")
  let [tasks, setTasks] = useState([
    {key:"1", 
    description: "Art Project - April 25",
    completed: false
    },
    
    {key:"2",
    description: "Final Exam - April 29",
    completed: false
    },

    {key:"3", 
    description: "Design Project - April 30",
    completed: false
    },

    {key:"4",
    description: "Math Assignment - April 31",
    completed: false
    }
  ])

  let addTask = useCallback(() => {
    let keys = tasks.map(task => parseInt(task.key))
    let maxKey = Math.max(...keys) + 1
    let newTask = {description: inputText, completed: false, key: maxKey.toString}

    setTasks([...tasks, newTask])
    setInputText("")
  }, [inputText])

  return (
    <View style={styles.container}>

      <View style={styles.innerContainer}>
        <View styles={[{ height: 30, paddingBottom: 20 }, styles.input]}>
          <Input value={inputText} onChangeText={setInputText} style={{ height: 30, paddingBottom: 20 }}></Input>
          <Button title="Add" onPress={addTask}></Button>
        </View>
        <FlatList data={tasks} renderItem={({ item: task }) =>
          <CheckBox onPress={() => {
            let currentTask = tasks.find(t=>t.key == task.key)
            currentTask.completed = !currentTask.completed
            setTasks([...tasks])
          }}title={task.description} 
            key={task.key} 
            checked={task.completed}
            textStyle={task.completed ? {
              textDecorationLine:"line-through",
              textDecorationStyle:"solid"
            } :undefined}>
            </CheckBox>
        }/>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 10,
    borderWidth: 2,
    borderStyle: 'solid',
  },
  title: {
    fontSize: 25,
    alignSelf: "center"
  },
  innerContainer: {
    maxWidth: 300,
  },
  taskComplete: {
    textDecorationLine: 'line-through', 
    textDecorationStyle: 'solid'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -20,
  },
});

export default ToDoList;