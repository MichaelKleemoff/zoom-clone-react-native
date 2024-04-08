import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

const MeetingRoom = () => {
	return (
		<View>
			<View style={styles.startMeetingContainer}>
				<View style={styles.info}>
					<TextInput style={styles.textInput} />
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
	container: {},
	startMeetingContainer: {},
	info: {},
	textInput: {},
});
