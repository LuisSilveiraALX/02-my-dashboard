import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SimplePokemon } from '@/pokemons';

interface PokemonsState {
    [key: string]: SimplePokemon,
}

const initialState: PokemonsState = {
     '1': { id: '1', name: 'bulbasur'},
    '3': { id: '3', name: 'venusaur'},
    '4': { id: '4', name: 'charmander'},
    '6': { id: '6', name: 'charizard'}, 
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {

    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {

      const pokemon = action.payload;
      const { id } = pokemon;

      if ( !!state[id] ) {
        delete state[id];
      } else {
        state[id] = pokemon;
      }
      // No se debe hacer en redux
      localStorage.setItem('favorite-pokemons', JSON.stringify ( state ));
      
    }

  }
});

export const { toggleFavorite } = pokemonsSlice.actions

export default pokemonsSlice.reducer