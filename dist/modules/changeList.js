const changeList = (tasks) => {
  const selectList = document.getElementById('select-list');
  const allTasks = Array.from(document.getElementsByClassName('task'));

  allTasks.map(task => task.classList.add('hide'));

  switch(selectList.value) {
    case 'all':
    tasks.map(task => task.classList.remove('hide'));
    break;

    case 'todo':
    tasks.filter(task => task.classList.contains('todo')).map(task => task.classList.remove('hide'));
    tasks.filter(task => task.classList.contains('done')).map(task => task.classList.add('hide'));
    break;

    case 'done':
    tasks.filter(task => task.classList.contains('todo')).map(task => task.classList.add('hide'));
    tasks.filter(task => task.classList.contains('done')).map(task => task.classList.remove('hide'));
    break;
  }
};

export default changeList;
