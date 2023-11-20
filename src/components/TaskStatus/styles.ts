import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    taskStatus: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    statusLabel: {
        fontWeight: 'bold',
        marginRight: 10
    },
    statusCount: {
        paddingHorizontal: 8,
        borderRadius: 100,
        backgroundColor: '#333333',
        color: '#FFF',
        fontWeight: 'bold',
    }
})