const taskTemplate = (task, id) => {
  return `
    <li id=${id} class="task todo d-flex">
      <div class="d-flex j-center al-center">
        <input type="checkbox" class="checkbox">
      </div>
      <p>${task}</p>
    </li>
  `
};

export default taskTemplate;
