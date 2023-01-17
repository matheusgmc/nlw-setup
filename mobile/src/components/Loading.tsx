import { ActivityIndicator, View } from "react-native";

export function Loading() {
  return (
    <View
      style={{
        flex: 1, // flex:1;
        justifyContent: "center", // justify-content: center;
        alignItems: "center", // align-items: center;
        backgroundColor: "#09090A", //background-color: #09090A;
      }}
    >
      <ActivityIndicator color="#7C3AED" size={"large"} />
    </View>
  );
}
