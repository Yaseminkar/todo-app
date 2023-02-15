import React from 'react'


function Footer(props) {

  //filteredTodoList will be updated to show only the uncompleted tasks.
  const setUncompletedList = event => {
    event.preventDefault();
    props.setFilterStatus(false);
  }
  

   //filteredTodoList will be updated to show only the completed tasks.
   const setCompletedList = event => {
    event.preventDefault();
    props.setFilterStatus(true);
   };

    //will be updated to show all list tasks.
  const setAllList = event => {
    event.preventDefault();
    props.setFilterStatus(null);
  }

  return (
    <div>
         <div id='footer'>
          <button  onClick={setCompletedList}>completed</button>
          <button  onClick={setUncompletedList}>uncompleted</button>
          <button  onClick={setAllList}>all</button>
        </div>

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
              <a onClick={setUncompletedList}>Active</a>
            </li>
            <span> </span>
            <li>
              <a onClick={setCompletedList}>Completed</a>
            </li>
            <span> </span>
          </ul>
          {/* <button class="clear-completed">
		      	Clear completed
		      </button> */}
    </div>
  )
}

export default Footer