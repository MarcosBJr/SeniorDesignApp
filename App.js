/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {Router, Scene} from 'react-native-router-flux';
import Home from './screens/Home.js'
import Recipes from './screens/Recipes.js'

class App extends React.Component {
	render() {
		return{
			<Routes \>
		}
	}
};

const Routes = () => (
	<Router>
		<Scene key = "root">
			<Scene 
				key = "home" 
				component = {Home} 
				title= "Home"
			/>
			<Scene 
				key = "recipes"
				component = {Recipes}
				title = "Recipes"
			/>
		</Scene>
    </Router>
);

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
