import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'; // Импортируем бэкенд для HTML5 перетаскивания
import App from './app';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <DndProvider backend={HTML5Backend}> {/* Оборачиваем компонент App в DndProvider */}
            <App />
        </DndProvider>
    </ApolloProvider>,
    document.getElementById("root")
);
