import changeList from './changeList.js';
import searchTask from './searchTask.js';

const doUndoTask = (e) => {
  e.preventDefault;

  if (e.target.nodeName === 'INPUT') {
    const task = e.target.parentElement.parentElement;
    const searchKeyword = document.getElementById('search-ipt').value;
    const tasks = Array.from(document.getElementsByClassName('task'));

    if (task.classList.contains('todo')) {
      task.classList.add('done');
      task.classList.remove('todo');
      e.target.checked = true;
    } else if (task.classList.contains('done')) {
      task.classList.remove('done');
      task.classList.add('todo');
      e.target.checked = false;
    }
    
    (searchKeyword.length > 0) ? searchTask() : changeList(tasks);
  }
};

export default doUndoTask;
