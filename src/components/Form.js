import React from "react";

const Form = ({setInputText, todos, setTodos, inputText, setStatus}) => {
  //Can write js code
  const inputTextHandler = (e) =>{
    //console.log(e.target.value);
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) =>{
    e.preventDefault();
    setTodos([...todos, {text:inputText, completed:false, id: Math.random()*1000}]);
    setInputText('');
  };

  const statusHandler = (e) =>{
    setStatus(e.target.value);
  }

	return(
		<form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i> 
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Visited</option>
          <option value="uncompleted">Not visited</option>
        </select>
      </div>
    </form>
		);
};

export default Form;