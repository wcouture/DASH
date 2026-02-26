import { router } from "expo-router/build/exports";
import { JSX, useEffect, useState } from "react";
import { Text, View, StyleSheet, Button, TextInput } from "react-native";

export default function FindMatch() {
    const [pageBody, setPageBody] = useState(null as JSX.Element | null);

    useEffect(() => {
        setPageBody(
            <ButtonPanel />
        )
    }, []);

    const ButtonPanel = () => {
        return (
            <View>
                <Text style={styles.BodyText}>You are not currently coupled up with anyone. Select an option below to match with your partner.</Text>
                <Button title="Display User ID" onPress={() => { setPageBody(<UserIdDisplay />) }} />
                <Button title="Input Partner's User ID" onPress={() => { setPageBody(<PartnerIdInput />) }} />
            </View>
        );
    };

    const UserIdDisplay = () => {
        return (
            <View>
                <Text style={styles.BodyText}>Your User ID:</Text>
                <Text style={styles.BodyText}>1234567890</Text>
            </View>
        );
    };

    const PartnerIdInput = () => {
        return (
            <View>
                <Text style={styles.BodyText}>Input Partner's User ID:</Text>
                <TextInput style={styles.BodyText} placeholder="Enter Partner's User ID" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.PageHeader}>Time To Couple Up!</Text>
            {pageBody}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingBottom: 50,
        paddingLeft: 20,
        paddingRight: 20,
        flex: 1,
        backgroundColor: '#1d1d24',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 20
    },
    PageHeader: {
        color: '#fff',
        paddingBottom: 20,
        paddingLeft: 30,
        paddingRight: 30,
        borderBottomColor: '#3b3b4b',
        borderBottomWidth: 1,
        fontSize: 24,
        fontWeight: 'bold',
    },
    BodyText: {
        color: '#fff',
        paddingTop: 20,
        paddingLeft: 30,
        paddingRight: 30,
    }
});