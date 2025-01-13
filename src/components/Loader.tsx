import { ActivityIndicator, Dimensions, StyleSheet, Text, View } from "react-native";
import { colors } from "../constants";

const { height } = Dimensions.get("window");
const Loader = ({ title }: { title: string }) => {
  return (
    <View style={styles.container}>
      <View style={{marginTop: -100}}>
        <Text
          style={{
            textAlign: "center",
            marginBottom: 10,
            color: colors.defaultWhite,
            fontSize: 16,
          }}
        >
          {title ? title : "Loading is Running"}
        </Text>
        <ActivityIndicator size={'large'} color={colors.designColor} />
      </View>
    </View>
  );
};
export default Loader;
const styles = StyleSheet.create({
  container: {
    height: height - 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000080",
  },
});
