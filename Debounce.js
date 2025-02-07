function debounce(func, wait) {
  let timeout;
  return function (...arg) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, arg);
    }, wait);
  };
}
const fetchData = async () => {
  console.log("Fetching data...");
};

const debouncedFetchData = debounce(fetchData, 300);
debouncedFetchData();
debouncedFetchData();
