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
    <div >
        <span className="todo-count">
			      <strong>{props.count}</strong>
			      <span> </span>
			      <span>items</span>
			      <span>left</span>
		      </span>
          <ul className='filters'>
            <li>
              <a className={props.filterStatus === null ? 'selected' : ''} onClick={setAllList}>All</a>
            </li>
            <span> </span>
            <li>
              <a className={props.filterStatus === false ? 'selected' : ''} onClick={setUncompletedList}>Active</a>
            </li>
            <span> </span>
            <li>
              <a className={props.filterStatus === true ? 'selected' : ''}  onClick={setCompletedList}>Completed</a>
            </li>
            <span> </span>
          </ul>
    </div>
  )
}

export default Footer



