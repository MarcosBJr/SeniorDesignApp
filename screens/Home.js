import React from 'react';
import {Button, Modal, StyleSheet, Text, TextInput, TouchableHighlight, View} from 'react-native';
import {Dropdown} from 'prime-react';
import {Actions} from 'react-native-router-flux';

class Home extends React.Component {
	//Class constructor to initiate the state of this page (basically, the variable we're gonna have to keep track of throughout the operation of this page)
	constructor(props) {
		super(props);
		this.state = {//spices: new Array(8)
							 isTsp: false,
							 tspAmt: 0,
							 popup: false,
							 }
		//Maybe I should get the spices as props from the Bluetooth handler component
	}
	
	const goToRecipes = () => {
		Actions.recipes();
	}
	
	render() {
		const spiceArray = ["Oregano", "Black Pepper", "Salt", "Cayenne Pepper", "Paprika", "Cinnamon", "Basil", "Nutmeg"];
		const amtArray = [{label: 'Teaspoons', value: true},
									{label: 'Tablespoons', value: false}];
		return (
			<View>
				<TouchableHighlight
					onPress={()=>this.setState({popup: true})}>
					<SelectionPane spiceName={spiceArray[0]}/>
				</TouchableHighlight>
				<TouchableHighlight
					onPress={()=>this.setState({popup: true})}>
					<SelectionPane spiceName={spiceArray[1]}/>
				</TouchableHighlight>
				<TouchableHighlight
					onPress={()=>this.setState({popup: true})}>
					<SelectionPane spiceName={spiceArray[2]}/>
				</TouchableHighlight>
				<TouchableHighlight
					onPress={()=>this.setState({popup: true})}>
					<SelectionPane spiceName={spiceArray[3]}/>
				</TouchableHighlight>
				</TouchableHighlight
					onPress={goToRecipes}>
					<Text>Go to the Recipes Page</Text>
				</TouchableHighlight>
			</View>
		)
	}
}

function SelectionPane(props) {
	return (
		<Modal 
			animationType='slide'
			visible={this.state.popup}>
			<Text>{props.spiceName}</Text>
			<TextInputf
				keyboardType='number-pad'
				onSubmitEditing={(e)=>{this.setState({tspAmt: e.nativeEvent.text})}}
			/>
			<Dropdown 
				optionLabel='label'
				options='amtArray'
				value={this.state.isTsp}
				onChange={(e) => this.setState({isTsp: e.value})}
			/>
			<Button
				onPress={()=>{this.setState({popup: false})}} //change this later to acutally send command
				title='Send'
				color='#a31000'/>
		</Modal>
	)
}
