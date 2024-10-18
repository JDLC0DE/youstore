import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import Main from "./src/Main";
import { REACT_APP_API_URL } from "@env";

// Initialize Apollo Client
const client = new ApolloClient({
  uri: REACT_APP_API_URL,
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <SafeAreaProvider>
        <StatusBar style="light" />
        <Main />
      </SafeAreaProvider>
    </ApolloProvider>
  );
}
