import { Stack } from "expo-router";
import { StyleSheet, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import { REACT_APP_API_URL } from "@env";
import { Header } from "src/components/contents/Header";
import Theme from "src/styles/theme";

// Initialize Apollo Client
const client = new ApolloClient({
  uri: REACT_APP_API_URL,
  cache: new InMemoryCache(),
});

export default function Layout() {
  const insets = useSafeAreaInsets();

  return (
    <ApolloProvider client={client}>
      <SafeAreaProvider>
        <View
          style={{
            ...styles.container,
            paddingTop: insets.top,
            // paddingBottom: insets.bottom,
          }}
        >
          <StatusBar style="dark" />
          <Stack
            screenOptions={{
              /* headerStyle: styles.headerContainer,
              headerTitle: "",
              headerLeft: () => (
                <Text style={styles.headerTitle}>YouStore</Text>
                ), */
              header: () => <Header />,
            }}
          />
        </View>
      </SafeAreaProvider>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.white,
  },
});
