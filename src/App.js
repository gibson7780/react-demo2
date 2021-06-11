import Layout from './components/layout/Layout';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Routes from './routes/Routes';
function App() {
  const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com',
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Routes />
      </Layout>
    </ApolloProvider>
  );
}

export default App;
