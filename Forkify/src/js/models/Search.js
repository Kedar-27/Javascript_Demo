import axios from 'axios';

export default class Search {

    constructor(query) {
        this.query = query;
    }
    async getResults() {
        try {
            const response = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);
            this.result = response.data.recipes
            console.log(response.data.recipes)
        } catch (error) {
            alert(error)
        }
    }

       calcTime() {
           // Assuming that we need 15 min for each 3 ingredients
           const numIng = this.ingredients.length;
           const periods = Math.ceil(numIng / 3);
           this.time = periods * 15;
       }

       calcServings() {
           this.servings = 4;
       }




}

