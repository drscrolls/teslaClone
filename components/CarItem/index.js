import React from 'react'
import { View, Text, ImageBackground } from 'react-native';
import StyledButton from '../StyledButton'
import styles from './styles';


const CarItem = ({name, tagline, taglineCTA, image}) => {

    // console.warn("image = ", image);

    
    return (
        <View style={styles.carContainer}>
            <ImageBackground
                style={styles.image}
                source={image} />

            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>
                    {tagline}
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
