const callback = (
    id, // the "id" prop of the Profiler tree that has just committed
    phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
    actualDuration, // time spent rendering the committed update
    baseDuration, // estimated time to render the entire subtree without memoization
    startTime, // when React began rendering this update
    commitTime, // when React committed this update
    interactions // the Set of interactions belonging to this update
  ) => {
    console.log('id - ', id);
    console.log('phase - ', phase);
    console.log('actualDuration - ', actualDuration);
    console.log('startTime - ', startTime);
    console.log('commitTime - ', commitTime);
    console.log('Memory - ', window.performance.memory)
  };
  
  export default callback;