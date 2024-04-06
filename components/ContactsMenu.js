import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const conctactsMenuButtons = [
	{
		type: 'starred',
	},
	{
		type: 'contact',
		name: 'Michael Kleemoff',
		photo: require('../assets/michael-profile-pic.jpeg'),
	},
];

const ContactsMenu = () => {
	return (
		<View style={styles.container}>
			{/* Contact Container */}
			{conctactsMenuButtons.map((contact, index) => (
				<View style={styles.row} key={index}>
					{/* Image */}
					{contact.type === 'starred' ? (
						<View style={styles.starredIcon}>
							<AntDesign name='star' size={30} color='#efefef' />
						</View>
					) : (
						<Image source={contact.photo} style={styles.image} />
					)}
					{/* Text */}
					<Text style={styles.text}>Starred</Text>
				</View>
			))}
		</View>
	);
};

export default ContactsMenu;

const styles = StyleSheet.create({
	container: {},
	text: {
		color: '#fff',
		paddingLeft: 15,
		fontSize: 18,
	},
	row: {
		flexDirection: 'row',
		marginTop: 20,
		alignItems: 'center',
	},
	starredIcon: {
		backgroundColor: '#333',
		width: 55,
		height: 55,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 20,
	},
	image: {
		width: 55,
		height: 55,
		borderRadius: 20,
	},
});
