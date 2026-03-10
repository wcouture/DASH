import { Text, View } from 'react-native';
import { useEffect } from 'react';

export default function Landing() {
    const CheckCurrentUser = async () => {
        // See if user is created in local DB, if not create user and generate user ID
    }

    const CheckCurrentCouple = async () => {
        // See if user is coupled up with anyone, if so navigate to Home screen, if not navigate to FindMatch screen
    }

    const OnInit = async () => {
        await CheckCurrentUser();
        await CheckCurrentCouple();
    }

    useEffect(() => {
        OnInit();
    }, []);

    return (
    <View style={{ flex: 1, backgroundColor: '#1d1d24', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{color: 'white', fontSize: 24}}>Welcome to the DASH App!</Text>
    </View>
    );
}