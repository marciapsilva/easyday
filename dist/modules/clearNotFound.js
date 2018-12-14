const clearNotFound = () => {
  const notFound = document.getElementById('not-found');
  const taskList = document.getElementById('task-list');

  notFound.classList.add('hide');
  taskList.classList.remove('hide');
};

export default clearNotFound;