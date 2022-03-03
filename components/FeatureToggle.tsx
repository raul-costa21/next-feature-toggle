import { FeatureToggleContext } from "../context/FeatureToggleContext";

type Props = {
  children: any;
  enabledFeatures: string[];
};

// context provider component: allows consuming components to listen to context changes.
export const FeatureToggle = ({ children, enabledFeatures }: Props) => {
  return (
    <FeatureToggleContext.Provider value={{ enabledFeatures }}>
      {children}
    </FeatureToggleContext.Provider>
  );
};
