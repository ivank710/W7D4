import {connect} from 'react-redux';
import {selectAllPokemon} from '../../reducers/selectors';
import PokemonIndex from './pokemon_index';

const mapStateToProps = state => ({
  pokemon: selectAllPokemon(state)
})

const mapDispatchToProps = dispatch => ({
  requestAllPokemon: poke => dispatch(requestAllPokemon(poke))
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonIndex);