import React, { useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import ImageWithText from "../ui/Elements/ImageWithText/ImageWithText";
import MatchWindow from "../ui/MatchWindow/MatchWindow";

interface IMatchWindowContainer {
  dataTask: { title: string; matchTitle: string; dataMatch: any[] };
}

interface DragItem  {
  index: number;
}

const MatchWindowContainer: React.FC<IMatchWindowContainer> = ({ dataTask }) => {
  const { title: taskTitle, dataMatch: taskContent } = dataTask;

  const [items, setItems] = useState(taskContent);

  const moveItem = (dragIndex: number, hoverIndex: number) => {
    const draggedItem = items[dragIndex];
    const updatedItems = [...items];
    updatedItems.splice(dragIndex, 1);
    updatedItems.splice(hoverIndex, 0, draggedItem);
    setItems(updatedItems);
  };

  const Item: React.FC<{ index: number }> = ({ index }) => {
    const [{ isDragging }, drag] = useDrag({
      type: "ITEM", // Добавлено свойство type
      item: { type: "ITEM", index },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });

    const [, drop] = useDrop({
      accept: "ITEM",
      hover(item: DragItem) {
        if (item.index !== index) {
          moveItem(item.index, index);
          item.index = index;
        }
      },
    });

    return (
      <div ref={(node) => drag(drop(node))} style={{ opacity: isDragging ? 0.5 : 1 }}>
        <ImageWithText imageUrl={items[index].leftImage} text={items[index].leftText} />
        <ImageWithText imageUrl={items[index].rightImage} text={items[index].rightText} />
      </div>
    );
  };

  return (
    <MatchWindow title={taskTitle} matchTitle={dataTask.matchTitle}>
      {items.map((_, index) => (
        <Item key={index} index={index} />
      ))}
    </MatchWindow>
  );
};

export default MatchWindowContainer;
