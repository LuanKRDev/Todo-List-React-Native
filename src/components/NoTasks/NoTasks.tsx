import { Text, View } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons'; 
import { styles } from "./styles";
export default function NoTasks() {
    return(
        <View style={styles.container}>
            <FontAwesome5 name="tasks" size={60} color="#808080" />
            <Text style={styles.infoBold}>Você ainda não tem tarefas cadastradas</Text>
            <Text style={styles.infoLight}>Crie tarefas e organize seus itens a fazer</Text>
        </View>
    )
}