import { View,Text,TouchableHighlight,TouchableOpacity } from "react-native";
import { ITodo } from "../../@types/ITask";
import { styles } from "./styles";
import { EvilIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 

interface ComponentProps{
    task: ITodo,
    onChangeStatus(): void;
    onRemove(): void;
}

export default function TaskItem({task,onChangeStatus,onRemove}: ComponentProps){
    return (
        <View style={[styles.container, task.state == 'finished' && styles.containerChecked]}>
            <TouchableHighlight style={styles.pressableContainer} onPress={onChangeStatus} underlayColor='transparent'>
                <>
                    <View style={[styles.checkContainer, task.state == 'finished' && styles.checkContainerChecked]}>
                        {
                            task.state === 'finished' &&
                            <FontAwesome name="check" size={10} color="#FFF" />
                        }
                    </View>
                    <Text style={[styles.descLabel, task.state == 'finished' && styles.descLabelChecked]}>{task.desc}</Text>
                </>
            </TouchableHighlight>
            <TouchableOpacity style={styles.removeButton} onPress={onRemove}>
                <EvilIcons name="trash" size={24} color="#F2F2F2" />
            </TouchableOpacity>    
        </View>
    )
}