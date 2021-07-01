import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';
//제일 위 
//App의 state는 habits의 props가 된다. 
class App extends Component {
  state= {
    habits: [
        {id:1, name: 'Reading' , count : 0},
        {id:2, name: 'Running' , count : 0},
        {id:3, name: 'Coding' , count : 0},
    ],
}
handleIncrement = (habit) => {
  //console.log('handle Increment ${habit}');
  const habits = [...this.state.habits];// 전개 연산자
  const index = habits.indexOf(habit);
  habits[index].count++;
  this.setState({habits});
};

handleDecrement = (habit) => {
  //console.log('handle Decrement ${habit}');
  const habits = [...this.state.habits]; // 새로운 habits배열 대입
  const index = habits.indexOf(habit); // 매개 변수로 받아온 habit의 인덱스
  habits[index].count--; // 새로 선언한 habits배열의 받아온 인덱스의 카운트를 감소한다.
  if(habits[index].count < 0) habits[index].count = 0; // 0이하라면 0을 출력한다. 
  this.setState({habits}); // 꼭 setStates함수를 통해 state를 업데이트 해주어야한다. {}는 없어도 동작함
};
handleDelete = (habit) => 
{
  //console.log('handle Delete ${habit}');
  const habits = this.state.habits.filter(item =>  item.id !== habit.id);
  this.setState({habits}); // state업데이트 {}pop과 const {}가 없으면 업데이트 된 상태가 아닌 다시 그대로 초기화 된 상태가 나온다. 
}
handleAdd = name => {
  const habits = [...this.state.habits , {id: Date.now(), name, count:0}] ;
  this.setState({habits});
}
handleReset = () =>
{
  const habits = this.state.habits.map(habit => {
    habit.count = 0;
    return habit;
  });
  this.setState({habits});
}
  render() {
        return (
        <>
        <Navbar
                totalCount = {this.state.habits.filter(item =>item.count > 0).length} />
        <Habits 
                habits = {this.state.habits}
                onIncrement={this.handleIncrement}
                onDecrement = {this.handleDecrement}
                onDelete = {this.handleDelete}
                onAdd = {this.handleAdd}
                onReset = {this.handleReset}
                />;
        </>
        );
  }
}

export default App;
