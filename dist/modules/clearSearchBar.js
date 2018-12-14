import clearNotFound from "./clearNotFound.js";

const clearSearchBar = () => {  
  const clearBtn = document.getElementById('search-tasks');
  const searchIpt = document.getElementById('search-ipt');

  clearBtn.innerHTML = '<i class="fas fa-search"></i>';
  clearBtn.classList.remove('js-clear');
  
  searchIpt.value = '';

  clearNotFound();
};

export default clearSearchBar;