import Table from "../ui/Elements/Table";

const GradesProfileContainer = () => { 
    const data = [
        {
            id: '0',
            name: 'Shopping List',
            deadline: new Date(2020, 1, 15),
            type: 'TASK',
            isComplete: true,
            nodes: 3,
        },
    ];

    const COLUMNS = [
        { label: 'Тема', renderCell: (item: any) => item.name },
        {
            label: 'Дата',
            renderCell: (item: any) =>
                item.deadline.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                }),
        },
        { label: 'Type', renderCell: (item: any) => item.type },
        {
            label: 'Выполнено (%)',
            renderCell: (item: any) => item.isComplete.toString(),
        },
        { label: 'Оценка', renderCell: (item: any) => item.nodes },
    ];

    return <Table columns={COLUMNS} data={data}/>
};

export default GradesProfileContainer;