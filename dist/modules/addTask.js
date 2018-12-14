import taskTemplate from '../template/taskTemplate.js';

const addTask = (selectListIpt, taskIpt, taskList, id) => {
  if (taskIpt.value.length > 0) {
    taskList.innerHTML += taskTemplate(taskIpt.value, id);
    taskIpt.value = '';
  
    selectListIpt.value = 'todo';
    selectListIpt.dispatchEvent(new Event('change'));
  }
};

export default addTask;
