import React from 'react';
import {} from 'react-native';
import {Card} from 'prime-react/card';
import {Button} from 'prime-react/button';

/*
	props list:
		recipeName
		imageURL
		ingredients
		spiceIngredients
*/

class RecipeCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			recipe: props.recipe;
			spices: props.spices;
		}
	}
	
	function SpiceList() {
		//get an array of Ingredients from recipe
		var ingr;
		if(this.state.recipe.hasOwnProperty(Ingredients[]))
			ingr = this.state.recipe.ingredients;
		
		//get ingredient names from Ingredient object array
		var ingrNames = new Array(ingr.length);
		for(var i; i < ingr.length; i++){
			ingrNames[i] = ingr[i].food.label;
		}
		
		//filters ingrNames to include only spices in 
		ingrNames.filter(name => spices.includes(name));
		
		
		return ();
	}
	
	render() {
		const header = (<img alt=smth src=this.state.recipe.image />);
		const footer = this.state.recipe.url; //Change this later to a button that opens browser
		
		return (
			<div>
				<Card header={header} title=this.state.recipe.label> footer[={footer}>
					<ul>
						<li>
					</ul>
				</Card>
				
			</div>
		)
	}
	//list image is empty for now, but i wanna put something else there
	const styles = StyleSheet.create({
		ingredients: {
			list-style: square outside none;
		}
		spices: {
			font-weight: bold;
			list-style: square outside none;
		}
	})
	
	RecipeCard.propTypes = {
		recipe: React.PropTypes.instanceof(Recipe) //Edamam object; may not work, but we'll see.
		
	}
}