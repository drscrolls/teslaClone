import React from 'react'
import { View, Text, ImageBackground } from 'react-native';
import StyledButton from '../StyledButton'
import styles from './styles';


const CarItem = ({car}, key) => {

    const {name, tagline, taglineCTA, image} = car;

    
    return (
        <View key={key} style={styles.carContainer}>
            <ImageBackground
                style={styles.image}
                source={image} />

            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>
                    {tagline}&nbsp;
                    <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
                </Text>

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
