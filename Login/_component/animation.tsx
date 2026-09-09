import type { PropsWithChildren } from "react";
import { useRef, useEffect } from "react";
import { Animated } from "react-native";




type FadeinViewProps = PropsWithChildren<{
  style?: object;
}>;

const FadeinView = ({ children, style }: FadeinViewProps) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [fadeAnim]);
  return (
    <Animated.View style={{ ...style, opacity: fadeAnim }}>
      {children}
    </Animated.View>
  );
};


export default FadeinView;