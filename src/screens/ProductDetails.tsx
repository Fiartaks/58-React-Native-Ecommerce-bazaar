import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Pressable,
} from "react-native";
import CommonHeader from "../components/CommonHeader";
import { useEffect, useState } from "react";
import { ProductProps } from "../../typs";
import { colors } from "../constants";
import Loader from "../components/Loader";
import DetailsView from "../components/DetailsView";
import PriceFormat from "../components/PriceFormat";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import IsNewBadge from "../components/IsNewBadge";
import { addToCart } from "../redux/orebiSlices";
import Toast from "react-native-toast-message";
import { useDispatch } from "react-redux";

const { width, height } = Dimensions.get("window");
const ProductDetails = ({ route }: any) => {
  const _id = route?.params?._id;
  const [productData, setProductData] = useState<ProductProps | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const getData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://jsonserver.reactbd.com/amazonpro/${_id}`
      );
      const json = await response.json();
      setProductData(json);
      setIsLoading(false);
    } catch (error) {
      console.log("Error", error);
    }
  };
  useEffect(() => {
    getData();
  }, [_id]);
  return (
    <View>
      <CommonHeader title="Product Details" />
      {isLoading ? (
        <Loader title="Product Details is Loading" />
      ) : (
        <View style={styles.container}>
          <View style={styles.imgView}>
            {productData?.image && (
              <Image source={{ uri: productData?.image }} style={styles.img} />
            )}
          </View>
          <DetailsView productData={productData} />
          <View style={styles.bottomMenu}>
            <View>
              <Text
                style={{
                  color: colors.defaultWhite,
                  fontWeight: "600",
                  fontSize: 16,
                }}
              >
                <PriceFormat amount={productData?.price} />
              </Text>
              <Text
                style={{
                  color: colors.defaultWhite,
                  textDecorationLine: "line-through",
                }}
              >
                <PriceFormat amount={productData?.previousPrice} />
              </Text>
            </View>
            <Pressable

                 onPress={() => {
                               dispatch(
                                 addToCart(productData),
                                 Toast.show({
                                   type: "success",
                                   text1: `${productData?.title} added successfully`,
                                 })
                               );
                             }}

              style={{
                backgroundColor: colors.designColor,
                paddingHorizontal: 10,
                paddingVertical: 8,
                borderRadius: 6,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "600",
                  marginRight: 5,
                  color: colors.textBlack,
                }}
              >
                Add to Cart
              </Text>
              <ArrowRightIcon size={16} color={colors.textBlack} />
            </Pressable>
          </View>
          {productData?.isNew && (
            <IsNewBadge
              customStyle={{
                right:20,
                top: 20,
                paddingHorizontal: 10,
                paddingVertical: 7,
                borderRadius: 6,
              }}
              title="New Arrival"
            />
          )}
        </View>
      )}
    </View>
  );
};
export default ProductDetails;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: height,
    position: "relative",
  },
  imgView: {
    width: width,
    height: height / 2,
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  bottomMenu: {
    position: "absolute",
    bottom: 60,
    borderWidth: 1,
    borderColor: "black",
    width: width - 20,
    alignSelf: "center",
    borderRadius: 6,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    backgroundColor: colors.bgColor,
    marginBottom: 15,
  },
});
