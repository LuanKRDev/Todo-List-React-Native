import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 10,
        backgroundColor: '#262626',
        borderWidth: 1,
        borderColor: '#333333'
    },
    containerChecked: {
        borderColor: 'transparent'
    },
    pressableContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        padding: 10,

    },
    checkContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 20,
        height: 20,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#4EA8DE'
    },
    checkContainerChecked: {
        borderColor: '#5E60CE',
        backgroundColor: '#5E60CE'
    },
    descLabel: {
        flex: 1,
        color: '#F2F2F2'
    },
    descLabelChecked: {
        textDecorationLine: 'line-through',
        color: '#808080'
    },
    removeButton: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    }
})