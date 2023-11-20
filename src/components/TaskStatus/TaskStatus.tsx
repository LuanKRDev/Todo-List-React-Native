import { Text, View } from "react-native"
import { styles } from './styles'
interface ComponentProps{
    color?: string,
    label?: string,
    count?: number
}
export default function TaskStatus({color,label,count}: ComponentProps){
    return (
        <View style={styles.taskStatus}>
            <Text style={[styles.statusLabel,{color: color}]}>{label}</Text>
            <Text style={styles.statusCount}>{count}</Text>
        </View>
    )
}