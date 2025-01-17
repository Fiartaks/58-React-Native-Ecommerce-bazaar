import { useNavigation } from "@react-navigation/native";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { XMarkIcon } from "react-native-heroicons/outline";
const SideMenu = () => {
  const navigations = [
    {
      title: "Home",
    },
    {
      title: "Intro",
    },
    {
      title: "Cart",
    },
    {
      title: "Addresses",
    },
    {
      title: "Contact",
    },
  ];
  const navigation: any = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginVertical: 15,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            Press the Menu to navigate
          </Text>
          <Pressable onPress={() => navigation.closeDrawer()}>
            <XMarkIcon size={20} color={"red"} />
          </Pressable>
        </View>
        {navigations.map(({ title }: { title: string }) => (
          <Pressable
            key={title}
            style={styles.menu}
            onPress={() => navigation.navigate(title)}
          >
            <Text style={styles.menuText}>{title}</Text>
          </Pressable>
        ))}
      </View>
    </SafeAreaView>
  );
};
export default SideMenu;
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  menu: {
    backgroundColor: "black",
    marginVertical: 5,
    paddingVertical: 10,
    borderRadius: 30,
  },
  menuText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
