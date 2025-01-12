import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { intro } from "../assets";
import { colors } from "../constants";
import { useNavigation } from "@react-navigation/native";
import type { NavigationProps } from "../../typs";

const { height } = Dimensions.get("window");
const Intro = () => {

const navigation:NavigationProps = useNavigation()

  return (
    <View style={styles.container}>
      {/*Top */}
      <View style={styles.top}>
        <Image style={styles.introImg} source={intro} />
      </View>

      {/*Bottom */}
      <View style={styles.bottom}>
        <Text style={styles.title}>Great way to lift your style</Text>
        <Text style={styles.subtitle}>
          Complete your style with awesome collections from bazaar shopping{" "}
        </Text>
        <TouchableOpacity style={styles.button}
        onPress={()=>navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Intro;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    height: height,
  },
  top: {
    height: height / 2,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  introImg: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    marginTop: -10,
  },
  bottom: {
    flex: 1,
    padding: 30,
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 36,
    fontWeight: "700",
    textAlign: "center",
  },
  subtitle: {
    color: colors.defaultWhite,
    textAlign: "center",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#fff",
    width: "100%",
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.textBlack,
  },
});
