import React, { useState, useEffect} from 'react';
import './css/style.css'

const Initial_State =[
  { id: 1, title: "Study react", completed: false },
  { id: 2, title: "Study english", completed: false}
]

function TodoList() {
  const [todo, setTodo] = useState('');
  //The "Initial_State" is the initial value of the toDoList state.
  const [toDoList, setToDoList] = useState(Initial_State);
  const [completed, setCompeleted]= useState(false);
  const [filteredTodoList, setFilteredTodoList] = useState(Initial_State);
  //"filterStatus" variable can be used to filter the to-do items based on a certain status chosen by the user. 
  const [filterStatus, setFilterStatus] = useState(null);

  //the effect is set to run the "setFilteredList" function when the "filterStatus" variable changes. 
  //it will call setFilteredList function, where setFilteredList will filter the To-do list based on filterStatus and update the FilteredList state variable.
  useEffect(()=>{
    setFilteredList();
  },[filterStatus]);

  useEffect(()=>{
    setFilteredList();
  },[toDoList]);

  //The function first checks if the "filterStatus" variable is null.
  // If it is, it sets the "filteredTodoList" state to be the same as the "toDoList" state, meaning it is not filtered
  const setFilteredList=()=>{
    if(filterStatus === null){
      setFilteredTodoList(toDoList)
    }else{
      setFilteredTodoList(toDoList.filter(item=>item.completed===filterStatus))
    }
  }
  
  //filteredTodoList will be updated to show only the completed tasks.
  const setCompletedList = event => {
    event.preventDefault();
    setFilterStatus(true);
  };

  //filteredTodoList will be updated to show only the uncompleted tasks.
  const setUncompletedList = event => {
    event.preventDefault();
    setFilterStatus(false);
  }

  //will be updated to show all list tasks.
  const setAllList = event => {
    event.preventDefault();
    setFilterStatus(null);
  }
 
  const handleChange = event => {
    console.log(event.target.value)
    setTodo(event.target.value);
  };

  //When it is triggered, it will first check if the "todo" state is an empty string, 
  //if it is then it will exit the function without doing anything.
  const handleSubmit = event => {
    if (todo ===''){
      return;
    }
    event.preventDefault();
    let count = toDoList.length;
    setToDoList([...toDoList, {id:count+1, title:todo, completed:completed}]);
    setTodo('');
  };

  const handleCompleted =event => {
    console.log(event.target.checked)
    setCompeleted(event.target.checked)
  };

  return (
    
    <div id='container' >
      <form onSubmit={handleSubmit}>
        <h1>To Do List</h1>
        <input  value={todo} onChange={handleChange} placeholder={"Write a new to do"}  />
        <input type='checkbox' value={completed} onChange={handleCompleted}/>
        <button className='button'>add</button>
        <br/>
        <button onClick={setCompletedList}>completed</button>
        <button onClick={setUncompletedList}>uncompleted</button>
        <button onClick={setAllList}>all</button>
      </form>
      <div id='ul'>
        <ul>
          {filteredTodoList.map((item, index) => (
           <li key={index}>{item.id}-{item.title}-{Number(item.completed)}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;