import RelayEnvironment from "../src/RelayEnvironment";
import { RelayEnvironmentProvider } from "react-relay";
import RelayTestDynamic from "../src/RelayTestDynamic.js";
import { Suspense } from "react";

export default function Home() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <RelayTestDynamic />
    </RelayEnvironmentProvider>
  );
}
