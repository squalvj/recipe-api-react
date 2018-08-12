import React, { Component } from 'react';
import './App.css';
import Recipes from './components/Recipes';
// component
import Form from './components/Form';
const API_KEY = 'd956d199e130fa4ad8e24bdf403caa47';
// need this website to pass cross origin content to localhost
const PASS_ORIGIN = 'https://cors-anywhere.herokuapp.com/';

class App extends Component {

  // no need define state in constructor in react 16
  state = {

    recipes: []

  }

  componentDidMount = () => {

    const json = localStorage.getItem('recipes');
    const recipes = JSON.parse(json);

    this.setState({

      recipes: recipes

    })
    console.log("DIDMOUNT")

  }

  componentDidUpdate = () => {

    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes)
    console.log("BERUBAH")

  }

  getRecipe = async (e) => {

    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value
    const api_call = await fetch(`${PASS_ORIGIN}http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}`)
    const data = await api_call.json();

    this.setState({

      recipes: data.recipes,

    })

  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe = {this.getRecipe} />
        <Recipes recipes = {this.state.recipes} />
      </div>
    );

  }
}

export default App;