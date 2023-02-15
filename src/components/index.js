import './css/styles.css'
import './footer/Footer.js'
import React, { useState, useEffect} from 'react';
import Footer from './footer/Footer.js';

const Initial_State =[
  { id: 1, title: "Study react", completed: false },
  { id: 2, title: "Study english", completed: true}
]

function TodoList() {
  const [todo, setTodo] = useState('');
  //The "Initial_State" is the initial value of the toDoList state.
  const [toDoList, setToDoList] = useState(Initial_State);
  const [filteredTodoList, setFilteredTodoList] = useState(Initial_State);
  //"filterStatus" variable can be used to filter the to-do items based on a certain status chosen by the user. 
  const [filterStatus, setFilterStatus] = useState(null);
 
  //the effect is set to run the "setFilteredList" function when the "filterStatus" variable changes. 
  //it will call setFilteredList function, where setFilteredList will filter the To-do list based on filterStatus and update the FilteredList state variable.
  useEffect(()=>{
    debugger;
    setFilteredList();
  },[filterStatus]);

  useEffect(()=>{
    debugger;
    setFilteredList();
  },[toDoList]);

  //The function first checks if the "filterStatus" variable is null.
  // If it is, it sets the "filteredTodoList" state to be the same as the "toDoList" state, meaning it is not filtered
  const setFilteredList=()=>{
    if(filterStatus === null){
      setFilteredTodoList(toDoList)
    }else{
      setFilteredTodoList(toDoList.filter(item=>item.completed==filterStatus))
    }
  }
  

  const handleChange = event => {
    console.log(event.target.value)
    setTodo(event.target.value);
  };

  //When it is triggered, it will first check if the "todo" state is an empty string, 
  //if it is then it will exit the function without doing anything.
  const handleSubmit = event => {

    event.preventDefault();

    if (todo ===''){
      return;
    }
    let count = toDoList.length;
    setToDoList([...toDoList, {id:count+1, title:todo, completed:false}]);
    setTodo('');
  };

  function handleCompleted(event, id) {
    // setCompeleted(event.target.checked)
    //git elemanı onun id si ile bul statusunu değiştir.
    //buradaki x listenin içindeki her elemanın
    //Bu satır JavaScript kodudur ve bir toDoList dizisinde belirli bir öğenin tamamlanma durumunu değiştirir.
    //toDoList.find(x=>x.id == id) kod parçası, dizide id değerine eşit olan bir öğeyi arar ve bu öğeyi döndürür.
    //completed = event.target.checked kod parçası, bulunan öğenin completed özelliğinin değerini event.target.checked değerine eşitler.
    //Bu şekilde, toDoList dizisindeki belirli bir öğenin tamamlanma durumu değiştirilmiş olur.

    toDoList.find(x=>x.id == id).completed = event.target.checked;
    setToDoList(toDoList.filter(x=>x.id == true));        
  };

  function handleCompleteAll() {
    // toDoList.map(x=>x.completed = true);
    // setToDoList(item => {
    //   return item;
    // });
    setToDoList(prevState => {
      const updatedList = prevState.map(item => {
        return {...item, completed: true};
      });
      return updatedList;
    });

    // setToDoList(toDoList.filter(x=>x.id>0)); 
  };

  return (
    
    <section className='todoapp'>
      <div>
        <form className='header' onSubmit={handleSubmit}>
          <h1>todos</h1>
          <input className='new-todo' value={todo} onChange={handleChange} placeholder="What needs to be done?"/>
        </form>
        <section className='main'>
         <div>
        
         <ul className='todo-list'>
           {filteredTodoList.map((item) => (
            // <div key={item.id}>
            //   {/* her ögenin default değerinin completed durumunu değiştirir */}
            //  <input type='checkbox' defaultChecked={item.completed} onChange={(event) => handleCompleted(event,item.id)}/>
            //  <li>{item.title}</li>
            // </div>
            <li class={item.completed ? "completed" : ""}>
              <div class="view" >
                <input class="toggle" type="checkbox" defaultChecked={item.completed}/>
                  <label >{item.title}</label>
                  <button class="destroy" 
            // onClick={removeItem{item.id}}
            >
                  </button>
              </div>
              <input class="edit" value="öööö" />
            </li>
           ))}
          </ul>
         </div>
        </section>
        <footer className='footer'>
          {/* <Footer setFilterStatus={setFilterStatus}/> */}
          <span class="todo-count">
			      <strong>2</strong>
			      <span> </span>
			      <span>items</span>
			      <span>left</span>
		      </span>
          <ul className='filters'>
            <li>
              <a href="#/" class="selected">All</a>
            </li>
            <span> </span>
            <li>
              <a href="#/active">Active</a>
            </li>
            <span> </span>
            <li>
              <a href="#/completed">Completed</a>
            </li>
            <span> </span>
          </ul>
          {/* <button class="clear-completed">
		      	Clear completed
		      </button> */}
        </footer>
      </div>
        
       
    </section>
  );
}

export default TodoList;