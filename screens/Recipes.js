import React from 'react';
import Text from 'react-native';
import RecipeCard from 'SeniorDesignApp/components/RecipeCard.js'

const Recipes = (props) => {
	const query = "q=";
	const appId = "&app_id=3e6d9a08";
	const appKey = "&app_key=b6723e25aa0fde680a04c6c7cf456de2";
	const fromNum = "&from=0";	//Don't mess with this now
	const toNum = "&to=3";			//Don't mess with this now
	const dietType = "&diet=";
	
	//Recipe search bar
	//
	
	const http = new XMLHttpRequest();
	const nakedURL = "https://api.edamam.com/search?";
	var url = nakedURL;
	var hits;
	var recipes;
	
	url.concat(query, appId, appKey, fromNum, toNum);
	http.open("GET", url);
	http.send();
	
	http.onreadystatechange = () => {
		if(this.readyState == 4 && this.status == 200)
			hits = JSON.parse(this.responseText);
			recipes = getHits(hits);
	}
	
	const getHits(rHits) {
		var hitArray = rHits.hits;
		var recipeArray = new Array(hitArray.length);
		for(var i = 0, length = hitArray.length; i < length; i++){
			recipeArray[i] = hitArray.recipe;
		}
		return recipeArray;
	}
	
	const recipesComponents = recipes.map(type => <RecipeCard {type, props.spices})
	return(
		<Text>This is the recipes results page</Text>
	)
}