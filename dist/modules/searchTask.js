import changeList from './changeList.js';
import clearSearchBar from './clearSearchBar.js';
import notFound from './searchNotFound.js';
import clearNotFound from './clearNotFound.js';

const searchTask = () => {  
  const searchIpt = document.getElementById('search-ipt').value;
  const searchBtn = document.getElementById('search-tasks');

  if (searchIpt.length === 0) {
    clearSearchBar();
  } else {
    searchBtn.classList.add('js-clear');
    searchBtn.innerHTML = '<i class="fas fa-times"></i>';
  }
  
  getResult(searchIpt);
};

const getResult = (searchIpt)  => {
  const tasks = Array.from(document.getElementsByClassName('task'));

  if (searchIpt.length > 0 ) {
    const matchResult = tasks.filter(task => task.children[1].innerText.toLowerCase().indexOf(searchIpt.toLowerCase()) >= 0);

    clearNotFound();
    (matchResult.length > 0) ? changeList(matchResult) : notFound(searchIpt);
  } else {
    changeList(tasks);
  }
}

export default searchTask;