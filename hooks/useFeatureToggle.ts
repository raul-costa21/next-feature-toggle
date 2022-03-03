import { useContext } from "react";
import { FeatureToggleContext } from "../context/FeatureToggleContext";

export const useFeatureToggle = () => {
  const { enabledFeatures } = useContext(FeatureToggleContext);

  const isEnable = (featureName: string) => {
    return enabledFeatures.includes(featureName);
  };

  return [isEnable];
};
