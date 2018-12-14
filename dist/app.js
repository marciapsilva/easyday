import addTask from './modules/addTask.js';
import doUndoTask from './modules/doUndoTask.js';
import changeList from './modules/changeList.js';
import searchTask from './modules/searchTask.js';
import clearSearchBar from './modules/clearSearchBar.js';

window.onload = () => {
  const taskIpt = document.getElementById('add-ipt');
  const addTaskBtn = document.getElementById('add-task');
  const taskList = document.getElementById('task-list');
  const selectList = document.getElementById('select-list');
  const searchIpt = document.getElementById('search-ipt');
  const searchBtn = document.getElementById('search-tasks');
  let id = 0;

  addTaskBtn.addEventListener('click', (e) => {
    e.preventDefault();
    taskIpt.value = '';
  });
  taskIpt.addEventListener('keydown', (e) => {
    if (e.which === 13) {
      addTask(selectList, taskIpt, taskList, id);
      id++;
    }
  });
  
  taskList.addEventListener('click', doUndoTask);
  selectList.addEventListener('change', (e) => startSlctListEv());
  searchBtn.addEventListener('click', () => checkBtnValue(searchBtn));
  searchIpt.addEventListener('keyup', searchTask);
};

const startSlctListEv = () => {
  const searchKeyword = document.getElementById('search-ipt').value;

  if (searchKeyword) {
    searchTask();
  } else {
    const tasks = Array.from(document.getElementsByClassName('task'));
    changeList(tasks);
  }
};

const checkBtnValue = (searchBtn) => {   
  (searchBtn.classList.contains('js-clear')) ? startClearSearch() : searchTask() };

const startClearSearch = () => {
  const tasks = Array.from(document.getElementsByClassName('task'));

  clearSearchBar();
  changeList(tasks);
};