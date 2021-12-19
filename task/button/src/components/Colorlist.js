import { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
export default function Coinlist({ newColor }) {
  const [ArrayColor, setArray] = useState([]);
  const [Color, setColor] = useState([]);

  useEffect(() => {
    const randColor = Math.floor(Math.random() * 16777215).toString(16);
    setColor(randColor);
    setArray((oldstate) => [
      ...oldstate,
      {
        color: Color,
        id: Math.floor(Math.random() * 16777215).toString(16),
      },
    ]);
    console.log(newColor);
  }, [newColor]);

  // a little function to help us with reordering the result
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }
    // get new reorder array
    setArray((array) =>
      reorder(array, result.source.index, result.destination.index)
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {ArrayColor.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <p
                      style={{
                        color: `#${item.color}`,
                      }}
                    >{`#${item.color}`}</p>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
