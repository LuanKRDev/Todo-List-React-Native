import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A'
    },
    header: {
        width: '100%',
        backgroundColor: '#0D0D0D',
        paddingHorizontal: 30,
        paddingTop: 50
    },
    logo: {
        alignSelf: 'center',
        width: 110,
        objectFit: 'scale-down', 
    },
    inputContent: {
        marginTop: 20,
        marginBottom: -27,
        flexDirection: 'row'
    },
    addButton: {
        width: 54,
        height: 54,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1E6F9F'
    },
    content: {
        marginHorizontal: 30,
    },
    statusContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 20,
        marginTop: 30,
        
        
    },
    statusItem: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    
    statusLabel: {
        color: '#4EA8DE',
        fontWeight: 'bold',
        marginRight: 10
    },
    colorPurple: {
        color: '#8284FA'
    },
    statusCount: {
        paddingHorizontal: 8,
        borderRadius: 100,
        backgroundColor: '#333333',
        color: '#FFF',
        fontWeight: 'bold',
    },
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: "#333333"
    }
})