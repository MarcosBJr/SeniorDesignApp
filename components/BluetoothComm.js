import React from 'react';
import {View} from 'react-native';
//import {BluetoothSerial} from 'react-native-bluetooth-serial-next';

//Connects with Bluetooth chip on turn table and trades spice name and remaining amounts per spice
class BluetoothComm extends React.Component {
	function setSpice(int position) {
		
	}
	
	function setAmount(int position) {
		//Hit up the turn table and ask for amount for this spice
	}
	
	function connect() {
		//Check if Bluetooth on the phone is enabled
		const enabled = BluetoothSerial.isEnabled()
			.then(
				
			)
}