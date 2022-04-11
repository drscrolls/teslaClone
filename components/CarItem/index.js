import React from 'react'
import { View, Text, ImageBackground } from 'react-native';
import StyledButton from '../StyledButton'
import styles from './styles';


const CarItem = props => {
    return (
        <View style={styles.carContainer}>
            <ImageBackground
                style={styles.image}
                source={require('../../assets/images/ModelX.jpeg')} />

            <View style={styles.titles}>
                <Text style={styles.title}>Model S</Text>
                <Text style={styles.subtitle}>Starting at $69,420</Text>

            </View>

            <View style={styles.buttonsContainer}>
                <StyledButton
                    type="primary"
                    content="Custom order"
                    onPress={() => {
                        console.warn("Custom order was pressed");
                    }} />

                <StyledButton
                    type="secondary"
                    content="Existing inventory"
                    onPress={() => {
                        console.warn("Existing inventory was pressed");
                    }} />
            </View>

        </View>
    )
}

export default CarItem
