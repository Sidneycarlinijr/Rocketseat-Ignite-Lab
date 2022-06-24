import { ApolloProvider, gql, useQuery } from "@apollo/client"
import { BrowserRouter } from "react-router-dom";
import { client } from "./lib/apollo"
import { Router } from "./Router";

interface Lesson {
  id: string;
  title: string;
}

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router></Router>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App