import update from 'immutability-helper'
import type { FC } from 'react'
import { memo, useCallback, useState } from 'react'
import { useDrop } from 'react-dnd'

import { Card } from './Card'
import { ItemTypes } from './ItemTypes'
import MatchWindow from '../ui/MatchWindow/MatchWindow'
import ImageWithText from '../ui/Elements/ImageWithText/ImageWithText'
import AnswerButton from '../components/ui/AnswerButton/AnswerButton'

const style = {
    width: 400,
}

export interface ContainerState {
    cards: any[]
}

const ITEMS = [
    {
        id: 1,
        text: 'Write a cool JS library',
    },
    {
        id: 2,
        text: 'Make it generic enough',
    },
    {
        id: 3,
        text: 'Write README',
    },
    {
        id: 4,
        text: 'Create some examples',
    },
    {
        id: 5,
        text: 'Spam in Twitter and IRC to promote it',
    },
    {
        id: 6,
        text: '???',
    },
    {
        id: 7,
        text: 'PROFIT',
    },
];

interface IMatchWindowContainer {
    dataTask: { title: string; matchTitle: string; dataMatch: any[] };
}


const Container: FC<IMatchWindowContainer> = memo(({ dataTask }) => {
    const { title: taskTitle, dataMatch: taskContent } = dataTask;
    const [cards, setCards] = useState(ITEMS)
    const findCard = useCallback(
        (id: string) => {
            const card = cards.filter((c) => `${c.id}` === id)[0] as {
                id: number
                text: string
            };

            return {
                card,
                index: cards.indexOf(card),
            }
        },
        [cards],
    )

    const moveCard = useCallback(
        (id: string, atIndex: number) => {
            const { card, index } = findCard(id)
            setCards(
                update(cards, {
                    $splice: [
                        [index, 1],
                        [atIndex, 0, card],
                    ],
                }),
            )
        },
        [findCard, cards, setCards],
    );

    const [, drop] = useDrop(() => ({ accept: ItemTypes.CARD }))

    return (
        <MatchWindow 
            title={taskTitle} 
            matchTitle={dataTask.matchTitle}
            answerButton={<AnswerButton onClick={() => console.log('hello')}/>}
        >

            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        {taskContent.map((task, idx) => <ImageWithText key={idx} imageUrl={task.leftImage} text={`${++idx}. ${task.leftText}`} />)}
                    </div>
                    <div className="col-md-6">
                        <div ref={drop} style={style}>
                            {cards.map((card) => (
                                <Card
                                    key={card.id}
                                    id={`${card.id}`}
                                    text={`${card.id}. ${card.text}`}
                                    moveCard={moveCard}
                                    findCard={findCard}
                                />
                            ))}
                        </div>
                    </div>
                </div>


            </div>

        </MatchWindow>
    )
});

export default Container;




// import React, { useState } from "react";
// import { useDrag, useDrop } from "react-dnd";
// import ImageWithText from "../ui/Elements/ImageWithText/ImageWithText";
// import MatchWindow from "../ui/MatchWindow/MatchWindow";

// interface IMatchWindowContainer {
//   dataTask: { title: string; matchTitle: string; dataMatch: any[] };
// }

// interface DragItem  {
//   index: number;
// }

// const MatchWindowContainer: React.FC<IMatchWindowContainer> = ({ dataTask }) => {
//   const { title: taskTitle, dataMatch: taskContent } = dataTask;

//   const [items, setItems] = useState(taskContent);

//   const moveItem = (dragIndex: number, hoverIndex: number) => {
//     const draggedItem = items[dragIndex];
//     const updatedItems = [...items];
//     updatedItems.splice(dragIndex, 1);
//     updatedItems.splice(hoverIndex, 0, draggedItem);
//     setItems(updatedItems);
//   };

//   const Item: React.FC<{ index: number }> = ({ index }) => {
//     const [{ isDragging }, drag] = useDrag({
//       type: "ITEM", // Добавлено свойство type
//       item: { type: "ITEM", index },
//       collect: (monitor) => ({
//         isDragging: monitor.isDragging(),
//       }),
//     });

//     const [, drop] = useDrop({
//       accept: "ITEM",
//       hover(item: DragItem) {
//         if (item.index !== index) {
//           moveItem(item.index, index);
//           item.index = index;
//         }
//       },
//     });

//     return (
//       <div ref={(node) => drag(drop(node))} style={{ opacity: isDragging ? 0.5 : 1 }}>
//         <ImageWithText imageUrl={items[index].leftImage} text={items[index].leftText} />
//         <ImageWithText imageUrl={items[index].rightImage} text={items[index].rightText} />
//       </div>
//     );
//   };

//   return (
//     <MatchWindow title={taskTitle} matchTitle={dataTask.matchTitle}>
//       {items.map((_, index) => (
//         <Item key={index} index={index} />
//       ))}
//     </MatchWindow>
//   );
// };

// export default MatchWindowContainer;