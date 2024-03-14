import ReactDOM from 'react-dom/client';
import { 
    ApolloClient, 
    ApolloProvider, 
    InMemoryCache
} from '@apollo/client';
import App from './app';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
});

ReactDOM.createRoot(document.getElementById("root")!).render(
    <ApolloProvider client={client}> 
        <App />
    </ApolloProvider>
);