export const getItemFromLocalStorage = (key: string): string | null => {
    return localStorage.getItem(key);
  };
  
  export const setItemToLocalStorage = (key: string, value: any): void => {
    // Convert value to string before saving it (JSON.stringify for objects)
    localStorage.setItem(key, JSON.stringify(value));
  };
  
  export const deleteFromLocalStorage = (key: string): void => {
    localStorage.removeItem(key);
  };
  