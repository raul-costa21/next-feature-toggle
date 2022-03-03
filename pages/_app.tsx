import { useEffect, useState } from "react";
import { FeatureToggle } from "../components/FeatureToggle";
import { fetchFeatures } from "../services/FeatureToggle";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [enabledFeatures, setEnabledFeatures] = useState<string[]>([]);

  const processFeatures = async () => {
    const features = await fetchFeatures();
    setEnabledFeatures(features);
  };

  useEffect(() => {
    processFeatures();
  }, []);

  return (
    <FeatureToggle enabledFeatures={enabledFeatures}>
      <Component {...pageProps} />
    </FeatureToggle>
  );
}

export default MyApp;
