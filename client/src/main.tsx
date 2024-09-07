import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/providers/router';

export const dataProvider = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
});

ReactDOM.render(
    <ApolloProvider client={dataProvider}>
        <DndProvider backend={HTML5Backend}>
            <RouterProvider router={router} />
        </DndProvider>
    </ApolloProvider>,
    document.getElementById("root")
);
