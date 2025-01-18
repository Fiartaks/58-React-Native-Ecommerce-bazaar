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
import WebView from "react-native-webview";

const { height } = Dimensions.get("window");
const Intro = () => {

const navigation:NavigationProps = useNavigation()

  return (
    <View style={styles.container}>
        <WebView
        style={styles.backgroundGif}
        source={require('../assets/ekran.gif')} // Doğru GIF dosyası
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
      
      <WebView
        style={styles.backgroundGif}
        source={require('../assets/ekran.gif')} // Doğru GIF dosyası
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />

<WebView
        style={styles.backgroundGif}
        source={require('../assets/ekran.gif')} // Doğru GIF dosyası
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
 

     {/* Üstteki içerikler */}
     <View style={styles.overlay}>
     <View style={styles.top}>
        <Image style={styles.introImg} source={require('../assets/canon2.webp')} />
      </View>
        <Text style={styles.title}>Great way to lift your style</Text>
        <Text style={styles.subtitle}>
          Complete your style with awesome collections from bazaar shopping
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
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
    flex: 1,
    position: "relative",
    backgroundColor: 'rgba(56, 186, 247, 0.5)', 
  },
  backgroundGif: {
    width: '100%',
    height: '100%',
    position: "absolute",
    top: 0,
    left: 0,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: "absolute",
    width: '100%',
    height: '100%', 
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Yarı saydam arka plan
  },
  top: {
    height: height / 2,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 40,
  },
  introImg: {
    width: "100%",
    height: "90%",
    objectFit: "contain",
    marginTop: -50,
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
    marginTop: -10,

  },
  subtitle: {
    color: colors.defaultWhite,
    textAlign: "center",
    marginTop: 20,
    fontSize: 15,

  },
  button: {
    backgroundColor: "#fff",
    width: "60%",
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.textBlack,
  },
});