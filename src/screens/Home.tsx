import {
  View,
  Text,
  FlatList,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { colors } from "../constants";
import type { Item, NavigationProps } from "../../typs";
import Carousel from "react-native-reanimated-carousel";
import { bannerOne, bannerThree, bannerTwo } from "../assets";
import { useNavigation } from "@react-navigation/native";

const { height, width } = Dimensions.get("window");

const Home = () => {
  const navigation: any = useNavigation();
  const [productArray, setProductArray] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://jsonserver.reactbd.com/amazonpro");
      const json = await response.json();
      setProductArray(json);
      setIsLoading(false);
    } catch (error) {
      console.log("Error", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const images = [bannerOne, bannerTwo, bannerThree];

  const RenderItem = ({ item }: Item) => {
    return (
      <TouchableOpacity
        style={styles.productView}
        onPress={() =>
          navigation.navigate("ProductDetails", {
            _id: item?._id,
          })
        }
      >
        <Image
          source={{ uri: item?.image }}
          alt="product-image"
          style={styles.img}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Header />
      <View>
        {isLoading ? (
          <Text>Loader</Text>
        ) : (
          <FlatList
            data={productArray}
            contentContainerStyle={styles.container}
            keyExtractor={(item: any) => item?._id}
            renderItem={RenderItem}
            refreshing={refreshing}
            onRefresh={() => {
              getData();
            }}
            numColumns={2}
            ListHeaderComponent={
              <View>
                <Carousel
                  loop
                  width={width}
                  style={{ height: 210 }}
                  autoPlay={true}
                  data={images}
                  scrollAnimationDuration={1000}
                  renderItem={({ item }) => {
                    return (
                      <View>
                        <Image
                          source={item}
                          style={{
                            width: "100%",
                            height: 270,
                            objectFit: "cover",
                          }}
                        />
                      </View>
                    );
                  }}
                />
              </View>
            }
          />
        )}
      </View>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.defaultWhite,
    paddingBottom: 200,
  },
  productView: {
    flex: 1,
    height: height / 3,
    borderWidth: 0.5,
    borderColor: colors.lightText,
    margin: 5,
    borderRadius: 6,
    marginHorizontal: 10,
    overflow: "hidden",
    position: "relative",
  },
  img: {
    flex: 1,
    objectFit: "cover",
  },
});
