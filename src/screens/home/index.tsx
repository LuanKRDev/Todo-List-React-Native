import { Alert, Button, FlatList, Image, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import {styles} from './styles'
import InputTask from "../../components/InputTask";
import { AntDesign } from '@expo/vector-icons'; 
import TaskStatus from "../../components/TaskStatus/TaskStatus";
import NoTasks from "../../components/NoTasks/NoTasks";
import { useState } from "react";
import { ITodo } from "../../@types/ITask";
import TaskItem from "../../components/TaskItem/TaskItem";
import { VerifyTextEmpty } from "../../utils/utils";



export default function Home() {
    const [todos,setTodos] = useState<ITodo[]>([])
    const [todoDesc,setTodoDesc] = useState<string>('')

    const HandleAddTodo = () => {
        if(VerifyTextEmpty(todoDesc)){
            return;
        }
        if(todos.find(x => x.desc === todoDesc)){
            Alert.alert("","Já existe uma tarefa com essa descrição.")
            return;
        }
        setTodos(prevState => [...prevState,{desc: todoDesc,state: "todo"}])
        setTodoDesc('');
    }

    const HandleChangeTaskStatus = (task: ITodo) => {
        
        Alert.alert("Alterar Status",`Deseja alterar o status da tarefa: ${task.desc}?`,[
            {
                text: "Alterar",
                onPress: () => onChangeTask()
            },
            {
                text: "Cancelar",
                style: 'cancel'
            }
        ])

        const onChangeTask = () => {
            setTodos(prevState => {
                let oldState = [...prevState];
                let findIndex = oldState.findIndex(x => x.desc === task.desc)
                oldState[findIndex].state = task.state == 'todo' ? 'finished' : 'todo'
                return oldState
            })
        }
    }
    const HandleRemoveTask = (desc: string) => {
        Alert.alert("Remover",`Deseja mesmo remover a tarefa: ${desc}?`,[
            {
                text: "Remover",
                onPress: () => setTodos(prevState => prevState.filter(x => x.desc !== desc))
            },
            {
                text: "Cancelar",
                style: 'cancel'
            }
        ])
        
    }
    const GetTodosFinishedCount = (): number => {
        return todos.filter(x => x.state == 'finished').length;
    }
    
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo} source={require('../../../assets/Logo.png')}/>
                <View style={styles.inputContent}>
                    <InputTask value={todoDesc} onChangeText={setTodoDesc} handleSubmit={HandleAddTodo}/>
                    <TouchableHighlight underlayColor="#4EA8DE"  style={styles.addButton} disabled={VerifyTextEmpty(todoDesc)} onPress={HandleAddTodo}>
                        <AntDesign name="pluscircleo" size={16} color="#F2F2F2" />
                    </TouchableHighlight>
                </View>
            </View>
            <View style={styles.content}>
                <View style={styles.statusContainer}>
                    <TaskStatus label="Criadas" color="#4EA8DE" count={todos.length}/>
                    <TaskStatus label="Concluidas" color="#8284FA" count={GetTodosFinishedCount()}/>
                </View>
                {todos.length == 0 && <View style={styles.divider}/>}
                
            </View>
            <FlatList
                data={todos}
                renderItem={({item}) => (
                    <TaskItem task={item} onChangeStatus={() => HandleChangeTaskStatus(item)} onRemove={() => HandleRemoveTask(item.desc)}/>
                )}
                keyExtractor={item => item.desc}
                style={{paddingHorizontal: 30}}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={<NoTasks/>}
            />
        </View>
    )
}