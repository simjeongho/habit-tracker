import React, { PureComponent } from 'react';

class HabitAddform extends PureComponent {
    inputRef = React.createRef();
    formRef = React.createRef();
    onSubmit = event =>
    {
        event.preventDefault();
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name); // 전달
        //this.inputRef.current.value = ''; // 초기화
        this.formRef.current.reset(); // 초기화  
    }
    render() {
        return (
            <form ref = {this.formRef} className="add-form" onSubmit= {this.onSubmit}>
                <input 
                    ref = {this.inputRef} //ref전달 input에 직접 접근 component에 접근 하는 것이 아니라 html요소에 직접 접근 class에 있는 내부요소에 접근할 때는 this사용
                    type="text" 
                    className="add-input" 
                    placeholder="please enter your Habit"/>
                <button className="add-button">Add</button>
            </form>
        );
    }
}

export default HabitAddform;