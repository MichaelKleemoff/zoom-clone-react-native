import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const MenuButtons = () => {
	return (
		<View style={styles.container}>
			{/* One Button */}
			<View style={styles.buttonContainer}>
				<TouchableOpacity>
					<FontAwesome name={'video-camera'} size={23} color={'#efefef'} />
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default MenuButtons;

const styles = StyleSheet.create({
	container: {},
	buttonContainer: {},
});
