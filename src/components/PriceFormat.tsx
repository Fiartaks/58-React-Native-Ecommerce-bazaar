import { StyleSheet, Text, View } from "react-native";
const PriceFormat = ({ amount, style }: { amount: number | undefined ; style?: any }) => {
 
const formattedAmount = new Number(amount).toLocaleString('en-US',{
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  
})

  return <Text style={style}>{formattedAmount}</Text>;
};
export default PriceFormat;
const styles = StyleSheet.create({});
