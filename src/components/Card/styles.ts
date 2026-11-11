
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        borderRadius: 12,
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 16,
        
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,

        elevation: 3,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#1e293b",
        marginBottom: 6,
    },
    description: {
        fontSize: 14,
        color: "#64748b",
        lineHeight: 20,
    }
});
