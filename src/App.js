import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as redux from './redux/';

class App extends Component {
  componentDidMount() {
      let dataArray = [
        {
          id: 1,
          value: 1
        },
        {
          id: 2,
          value: 2
        },
        {
          id: 3,
          value: 3
        },
        {
          id: 4,
          value: 4
        },
        {
          id: 5,
          value: 5
        },
        {
          id: 6,
          value: 6
        },
        {
          id: 7,
          value: 7
        },
        {
          id: 8,
          value: 8
        },
        {
          id: 9,
          value: 9
        },
        {
          id: 10,
          value: 10
        }
      ];
      this.props.setDataArray(dataArray);
  }

  render() {
    return (
      <div className="App">
        { this.renderArray() }
        <input type="button" value="Update State" onClick = { this.updateState } />
        <input type="button" value="Mutate State" onClick = { this.mutateState }/>
      </div>
    );
  }

  renderArray = () => {
    return this.props.getArrayData.map( (data) => {
      return (
        <div key={ data.id }>
          { data.value }
        </div>
      );
    })
  }

  updateState = () => {
    console.log(this.props.getArrayData);
    this.props.updateState( 8, 6).then( ()=> {
      console.log(this.props.getArrayData);
    });

  }

  mutateState = () => {
    console.log(this.props.getArrayData);
    this.props.mutateState( 8, 6).then( ()=> {
      console.log(this.props.getArrayData);
    });
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      setDataArray: (dataArray) => dispatch(redux.setDataArray(dataArray)),
      mutateState: (index, value) => dispatch(redux.mutateState(index, value)),
      updateState: (index, value) => dispatch(redux.updateState(index, value))
    }
}

const mapStateToProps = (state) => {
  return {
    getArrayData: redux.getArrayData(state)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
