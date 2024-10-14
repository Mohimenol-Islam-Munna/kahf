export const setLocalStorage = (key: string, value: any) => {
  const stringifyData = JSON.stringify(value);
  localStorage.setItem(key, stringifyData);
};

export const getLocalStorage = (key: string) => {
  const data = localStorage.getItem(key);

  if (data) {
    return JSON.parse(data);
  } else {
    return null;
  }
};

export const removeLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};
