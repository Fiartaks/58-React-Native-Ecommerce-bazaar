import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import CommonHeader from "../components/CommonHeader";
import { useSelector } from "react-redux";
import CartProduct from "../components/CartProduct";
import type { NavigationProps, ProductProps } from "../../typs";
import { colors } from "../constants";
import PriceFormat from "../components/PriceFormat";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";
const Cart = () => {
  const navigation: NavigationProps = useNavigation();

  const { productData } = useSelector((state: any) => state?.orebi);
  const [totalAmt, setTotalAmt] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState(0);

  useEffect(() => {
    let amt = 0;
    let discountedAmt = 0;
    productData?.map((item: ProductProps) => {
      amt += item?.previousPrice * item?.quantity;
      discountedAmt += item?.price * item?.quantity;
      return;
    });
    setTotalAmt(amt);
    setDiscountedPrice(discountedAmt);
  }, [productData]);

  return (
    <View>
      <CommonHeader title="Cart" />
      <ScrollView contentContainerStyle={{ paddingBottom: 100, margin: 10 }}>
        {productData?.length > 0 ? (
          <>
            <View>
              {productData?.map((item: ProductProps) => (
                <CartProduct key={item?._id} item={item} />
              ))}
            </View>
            <View style={{ backgroundColor: colors.defaultWhite, padding: 20 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 17, color: colors.textBlack }}>
                  Subtotal
                </Text>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: "600",
                    color: colors.textBlack,
                  }}
                >
                  <PriceFormat amount={totalAmt} />
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 16, color: colors.textBlack }}>
                  Discount
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "600",
                    color: colors.textBlack,
                  }}
                >
                  -<PriceFormat amount={totalAmt - discountedPrice} />
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginVertical: 5,
                }}
              >
                <Text style={{ fontSize: 18, color: colors.textBlack }}>
                  Total
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "600",
                    color: colors.textBlack,
                  }}
                >
                  <PriceFormat amount={discountedPrice} />
                </Text>
              </View>
              <TouchableOpacity
                onPress={() =>
                  Toast.show({
                    type: "error",
                    text1: "Please login yo initialize the Checkout",
                    text1Style: { color: "red" },
                    text2: "Login feature is on progress, please wait...",
                    text2Style: { color: "black" },
                  })
                }
                style={{
                  backgroundColor: colors.buttonColor,
                  paddingVertical: 8,
                  borderRadius: 6,
                  alignItems: "center",
                  justifyContent: "center",
                  marginVertical: 5,
                }}
              >
                <Text
                  style={{
                    color: colors.defaultWhite,
                    fontSize: 16,
                    fontWeight: "600",
                  }}
                >
                  Proceed to Checkout
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
                style={{
                  backgroundColor: colors.defaultWhite,
                  paddingVertical: 8,
                  borderRadius: 6,
                  alignItems: "center",
                  justifyContent: "center",
                  marginVertical: 5,
                  borderWidth: 1,
                  borderColor: colors.lightText,
                }}
              >
                <Text
                  style={{
                    color: colors.textBlack,
                    fontSize: 16,
                    fontWeight: "600",
                  }}
                >
                  Continue Shopping
                </Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <View
            style={{
              flex: 1,
              backgroundColor: colors.defaultWhite,
              padding: 20,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: colors.textBlack,
                textAlign: "center",
                fontWeight: "600",
              }}
            >
              Your Cart is Empty
            </Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
                style={{
                  backgroundColor: colors.defaultWhite,
                  paddingVertical: 8,
                  borderRadius: 6,
                  alignItems: "center",
                  justifyContent: "center",
                  marginVertical: 5,
                  borderWidth: 1,
                  borderColor: colors.lightText,
                }}
              >
                <Text
                  style={{
                    color: colors.textBlack,
                    fontSize: 16,
                    fontWeight: "600",
                    marginTop:20,
                  }}
                >
                  Back to Shopping
                </Text>
              </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </View>
  );
};
export default Cart;
