import React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import MenuButtons from '../components/MenuButtons';
import ContactsMenu from '../components/ContactsMenu';

const Home = () => {
	return (
		<View style={styles.container}>
			<SafeAreaView>
				{/* Header */}
				<Header />
				{/* Search Bar */}
				<SearchBar />
				{/* Menu Buttons */}
				<MenuButtons />
				{/* Contacts Menu */}
				<ContactsMenu />
			</SafeAreaView>
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {},
});
