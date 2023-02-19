
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
  //"filterStatus" variable can be used to filter the to-do items based on a certain status chosen by the user. 
  const [filterStatus, setFilterStatus] = useState(null);

  const handleChange = event => {
    console.log(event.target.value)
    setTodo(event.target.value);
  };

  //When it is triggered, it will first check if the "todo" state i*s an empty string, 
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
    // setToDoList((item) =>
    // {
    //   if(item.id == id)
    //   {
    //     item.completed = event.target.checked;
    //   }

    //   return item;
    // });


    // toDoList.find(x=>x.id == id).completed = event.target.checked;
    // setToDoList(toDoList.filter(x=>x.id>0));

    const updateToDoList = toDoList.map(item => {
      if(item.id == id){
        item.completed = event.target.checked;
        return {
          ...item,
          completed: event.target.checked
        }
      }
      else{
        return item;
      }
    });

    setToDoList(updateToDoList);
  };

  function removeItem(id){
    setToDoList(toDoList.filter(x=>x.id != id));
  }

  function clearCompleted(){
    setToDoList(toDoList.filter(x=>x.completed == false));
  }

  return (
    
    <section className='todoapp'>
      <div>
        <form className='header' onSubmit={handleSubmit}>
          <h1>todos</h1>
          <input className='new-todo' value={todo} onChange={handleChange} defaultValue="What needs to be done?"/>
        </form>
        <section className='main'>
         <div>
         <ul className='todo-list'>
           {toDoList.filter(x => filterStatus == null || x.completed == filterStatus).map((item,index) => (
            <li key={item.id} className={item.completed ? "completed" : ""}>
              <div className="view" >
                <input className="toggle" type="checkbox" onChange={(event) => handleCompleted(event,item.id)} defaultChecked={item.completed}/>
                  <label >{item.title}</label>
                  <button className="destroy" onClick={() => removeItem(item.id)}>
                  </button>
              </div>
              <input className="edit" value="öööö" />
            </li>
           ))}
          </ul>
         </div>
        </section>
        <footer className='footer'>
          <Footer setFilterStatus={setFilterStatus} count={toDoList.filter(x => x.completed == false).length}/>
          <button class="clear-completed" onClick={() => clearCompleted()}>
		      	Clear completed
		      </button>
        </footer>
      </div>
        
       
    </section>
  );
}

export default TodoList;

