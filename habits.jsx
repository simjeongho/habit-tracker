import React, { Component } from 'react';
import Habit from './habit';
import HabitAddform from './habitAddform';


class Habits extends Component {
  
    handleIncrement = (habit) => {
        this.props.onIncrement(habit);
    };
  
    handleDecrement = (habit) => {
        this.props.onDecrement(habit);
    };
    handleDelete = (habit) => 
    {
        this.props.onDelete(habit);
    }
    handleAdd = (name) =>
    {
        this.props.onAdd(name);
    }
    handleReset =() =>
    {
        this.props.onReset();
    }

    render() {
        return (
            <>
            <HabitAddform onAdd={this.handleAdd}/>
            <ul> 
                {
                    this.props.habits.map(habit=>(
                        <Habit 
                            key = {habit.id} 
                            habit = {habit}
                            count = {habit.count} 
                            onIncrement={this.handleIncrement}
                            onDecrement = {this.handleDecrement}
                            //</ul>onDelete = {(habit) => {this.props.handleDelete(habit)}}
                            onDelete = {this.handleDelete}
                            >
                            
                        </Habit> // 위와 같은 방법으로도 props에 바로 접근 가능 but 에로우 함수가 계속 만들어져서 메모리에 영향이 간다. 
                    ))
                }    
            </ul>
            <button className="habits-reset"onClick={this.handleReset}>Reset All</button>
            </>
        );
        
    }
}

export default Habits;