import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements';
import Board from './Board';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      turnX: true,
      turnCount: 1,
      winner: null,
      tableData: [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ],
    }
  }

  takeTurn = (row, col) => {
    console.log('taking a turn!')
    let newData = [...this.state.tableData]
    newData[row][col] = this.state.turnX ? 'X' : 'O'
    let winner = this.checkWin(newData)

    if(winner){
      console.log(winner, 'is the winner')
      this.setState({
        tableData: newData,
        turnX: !this.state.turnX,
        turnCount: this.state.turnCount++,
        winner: winner
      })
    }
    else if(this.state.turnCount > 0){
      console.log('Draw - cats game!')
      this.setState({
        tableData: newData,
        winner: 'CAT'
      })
    }
    else { // Game keeps going
      this.setState({
        tableData: newData,
        turnX: !this.state.turnX,
        turnCount: this.state.turnCount++
      })

    }
  }
  else {
    Alert.alert(`Chill out, ${this.state.winner} already won!`);
  }
  checkWin = (data) => {
    let square = [].concat(...data);// flatter our data arry!
    const WinLines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
    ];
    for(let i = 0; i< WinLines.length; i++){
      const [a,b,c] = WinLines[i];
      if (square[a] && squares[a] === squares[b] && square[a] === squares[c]){
        return squares[a];
      }
    }
    return null;
  }


  reset = () => {
    console.log('resetting!')
    this.setState({
      turnX: true,
      turnCount: 1,
      winner: null,
      tableData: [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ],
    })
  }

  render() {
    console.log(this.state);
    let statusView;
    if(this.state.winner){
      statusView = (
        <View style={styles.centered}>
          <Text style={styles.winner}>Congratulations {this.state.winner}!</Text>
          <Text style={style.winner}>You win!</Text>
        </View>
      )
    }else{
      statusView = (
        <View style={styles.centered}>
          <Text style={styles.turn}>Turn: {this.status.turnX ? 'X' : 'O'}</Text>
        </View>
        )
    }
    return (
      <View style={styles.container}>
        <Header
          leftComponent={{ icon: 'home', color: '#fff', onPress: () => this.reset() }}
          centerComponent={{ text: 'TIC-TAC-TOE!', style: { color: '#fff' } }}
          outerContainerStyle={{ backgroundColor: '#7f6dcc'}} />
        <View style={styles.centered}>
          <Board takeTurn={this.takeTurn} tableData={this.state.tableData}/>
        <View style={styles.centered}>
          <Text style={styles.turn}>Turn: {this.state.turnX ? 'X': 'O'}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0',
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15
  },
  turn: {
    fontSize: 35,
  }
});
