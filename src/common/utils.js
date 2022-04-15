let SIZE = 10;

const SIMULATE_SIZE = 10;

export const generate = (sz)=> {
  if(sz) {
    SIZE = sz
  }
  
  const obj = {};
  for (let i = 0; i < SIZE; ++i) {
    obj[i] = {
      id: i,
      content: `Todo item - ${i + 1}`,
      isComplete: false,
    };
  }
  return obj;
};

export const updateHandler = (btnId, fullList) => {
  const id = btnId.split("-")[1];
  const oldRecord = fullList[id];
  const newList = {
    ...fullList,
    [id]: { ...oldRecord, isComplete: !oldRecord.isComplete },
  };

  return newList;
};

export const simulateHandler = () => {
  let ctr = 0;
  const intervalRef = setInterval(() => {
    if (ctr === SIMULATE_SIZE) {
      clearInterval(intervalRef);
      return false;
    } else {
      const id = Math.floor(Math.random() * SIZE);
      const elem = document.getElementById(`btn-${id}`);
      elem.click();
      ctr++;
    }
  }, 100);
};
