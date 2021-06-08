export const sortByOne = (obj, primary) => obj.sort((x, y) => {
  var n = y[primary] - x[primary]
  return n
})
export const sortByTwo = (obj, primary, secondary) => obj.sort((x, y) => {
  var n = y[primary] - x[primary]
  if (n != 0) return n
  return x[secondary] - y[secondary]
})
export const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  
  const _result = sortByOne(result, 'prio')

  return _result;
};
export const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  // result[droppableSource.droppableId] = sourceClone;
  // result[droppableDestination.droppableId] = destClone;

  result[droppableSource.droppableId] = sortByTwo(sourceClone, 'prio', 'index');
  result[droppableDestination.droppableId] = sortByTwo(destClone, 'prio', 'index');

  return result;
};
export const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: "none",
  // change background colour if dragging
  background: isDragging ? "lightgreen" : "",

  // styles we need to apply on draggables
  ...draggableStyle
});
export const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  width: "200px",
  minHeight: "80px",
});