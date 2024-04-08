import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

const MeetingRoom = () => {
	const [name, setName] = useState('');

	return (
		<View style={styles.container}>
			<View style={styles.startMeetingContainer}>
				<View style={styles.info}>
					<TextInput
						style={styles.textInput}
						value={name}
						placeholder='Enter name'
						placeholderTextColor='#767476'
						onChangeText={(text) => setName(text)}
					/>
				</View>
				<View style={styles.info}>
					<TextInput style={styles.textInput} />
				</View>
			</View>
		</View>
	);
};

export default MeetingRoom;

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#1c1c1c',
		flex: 1,
	},
	startMeetingContainer: {},
	info: {
		width: '100%',
		height: 50,
		backgroundColor: '#373538',
		borderTopWidth: 1,
		borderBottomWidth: 1,
		borderColor: '#484648',
		padding: 12,
		justifyContent: 'center',
	},
	textInput: {},
});
