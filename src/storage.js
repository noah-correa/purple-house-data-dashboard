const DEFAULT_TEMP = 32.00;
const TEMP_KEY = 'PH_MAX_TEMP';

export const getMaxTemp = () => {
  const t = localStorage.getItem(TEMP_KEY);
  if (!t) return DEFAULT_TEMP;
  return t;
};

export const setMaxTemp = (temp) => {
  localStorage.setItem(TEMP_KEY, temp);
};
