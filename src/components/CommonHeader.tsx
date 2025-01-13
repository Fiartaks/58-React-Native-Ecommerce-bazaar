import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { ArrowLeftIcon, ShoppingCartIcon } from "react-native-heroicons/outline";
import { colors } from "../constants";
import { useNavigation } from "@react-navigation/native";
import type { NavigationProps } from "../../typs";
import { logo } from "../assets";
const CommonHeader = ({ title }: { title: string }) => {
  const navigation: NavigationProps = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <ArrowLeftIcon color={colors.textBlack} size={20} />
          <Text style={{color:colors.textBlack, marginLeft:5, fontWeight:'600'}}>{title}</Text>
          
        </Pressable>
 <Pressable onPress={()=>navigation.navigate('Home')}>
          <Image source={logo} alt="logo-icon" style={styles.logo} />
        </Pressable>
        <Pressable onPress={()=>navigation.navigate('Cart')} style={styles.cartIcon}>
          <ShoppingCartIcon color={colors.textBlack} size={22} />
          <View style={styles.cartCount}>
            <Text style={styles.cartText}>0</Text>
          </View>
        </Pressable>
         


      </View>
      
    </SafeAreaView>
  );
};
export default CommonHeader;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBlockColor: "gray",
    marginTop:20,
  },
  logo: {
    width: 100,
    height: 25,
    objectFit: "contain",
  },
  cartIcon:{
    position:'relative'
  },

  cartCount: {
    borderRadius: 50,
    backgroundColor: "black",
    position: "absolute",
    right: -4,
    top: -6,
    width: 14,
    height: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  cartText: {
    color: colors.defaultWhite,
    fontSize: 10,
    fontWeight: '700',

  }

});
