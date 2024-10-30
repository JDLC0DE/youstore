import { Stack } from "expo-router";
import { StyleSheet, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import { REACT_APP_API_URL } from "@env";
import Theme from "src/styles/theme";
import { Header } from "src/components/contents/Header";

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
        <StatusBar style="light" />
        <View
          style={{
            ...styles.container,
            paddingTop: insets.top,
            // paddingBottom: insets.bottom,
          }}
        >
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
    backgroundColor: "#272b33",
    flex: 1,
  },
  headerContainer: {
    alignItems: "center",
    flexDirection: "row",
    padding: 16,
    backgroundColor: Theme.colors.primary,
  },
  headerTitle: {
    color: Theme.colors.white,
    fontSize: 30,
    fontWeight: "bold",
  },
});
