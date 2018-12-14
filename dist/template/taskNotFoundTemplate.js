const taskNotFoundTemplate = (keywords) => {
  return `
    <p>Nenhum resultado encontrado para "<span>${keywords}</span>".</p>
  `
};

export default taskNotFoundTemplate;
