const APP_KEY = "NOTE-APP__by-Addin-Septyan";

const getData = () => {
  if (!localStorage.getItem(APP_KEY)) {
    initialSave();
  }

  const localStorageData = localStorage.getItem(APP_KEY);
  const data = JSON.parse(localStorageData);
  return data;
}

const initialSave = () => {
  const emptyData = JSON.stringify([]);
  localStorage.setItem(APP_KEY, emptyData);
}

const saveData = (data) => {
  const stringifyData = JSON.stringify(data);
  localStorage.setItem(APP_KEY, stringifyData);
}

export { getData, saveData }