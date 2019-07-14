import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
//import { SafeAreaView } from 'react-navigation';


export default (props) => (
	<SafeAreaView
		style={{
			paddingTop: StatusBar.currentHeight,
			backgroundColor: 'transparent',
			flex: 1 
		}}
	>
		{props.children}
	</SafeAreaView>
);
