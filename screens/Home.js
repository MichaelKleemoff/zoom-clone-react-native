import React from 'react';
import { View, SafeAreaView } from 'react-native';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

const Home = () => {
	return (
		<View>
			<SafeAreaView>
				{/* Header */}
				<Header />
				{/* Search Bar */}
				<SearchBar />
				{/* Menu Buttons */}
				{/* Contacts Menu */}
			</SafeAreaView>
		</View>
	);
};

export default Home;
