import taskNotFoundTemplate from '../template/taskNotFoundTemplate.js';

const notFound = (searchIpt) => {
  const notFound = document.getElementById('not-found');
  const taskList = document.getElementById('task-list');

  notFound.classList.remove('hide');
  notFound.innerHTML = taskNotFoundTemplate(searchIpt);
  taskList.classList.add('hide');
};

export default notFound;