let taskIdCounter = 1;

const generateUniqueId = () => {
  return taskIdCounter++;
};

export default generateUniqueId;
