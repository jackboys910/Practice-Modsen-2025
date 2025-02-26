const generateUniqueId = () => {
  return parseInt(`${Date.now()}${Math.random().toString().substring(2)}`, 10);
};

export default generateUniqueId;
