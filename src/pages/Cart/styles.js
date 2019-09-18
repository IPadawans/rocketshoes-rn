import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  margin: 15px;
`;

export const Products = styled.View``;

export const Product = styled.View``;

export const ProductInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export const ProductDetails = styled.View`
  flex: 1;
  margin-left: 10px;
  padding: 10px;
`;

export const ProductTitle = styled.Text``;

export const ProductPrice = styled.Text`
  font-size: 16px;
  margin-top: 5px;
  font-weight: bold;
`;

export const ProductDelete = styled.TouchableOpacity`
  padding: 6px;
`;

export const VisualBorder = styled.View`
  border: 1px solid #eee;
`;

export const ProductControl = styled.View`
  margin-top: 5px;
  flex-direction: row;
  background: #eee;
  padding: 8px;
  border-radius: 4px;
  align-items: center;
`;

export const ProductControlButton = styled.TouchableOpacity``;

export const ProductAmount = styled.TextInput.attrs({
  readOnly: true,
})`
  background: #fff;
  padding: 5px;
  margin: 0 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 52px;
`;

export const ProductSubtotal = styled.Text`
  text-align: right;
  font-weight: bold;
  font-size: 16px;
  flex: 1;
`;

export const TotalContainer = styled.View`
  margin-top: 20px;
`;

export const TotalText = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  color: #999;
`;

export const TotalAmount = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 25px;
`;

export const Order = styled.TouchableOpacity`
  margin-top: 20px;
  background: ${colors.primary};
  border-radius: 4px;
  padding: 10px;
`;

export const OrderText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  text-align: center;
`;

export const EmptyContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const EmptyText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-top: 18px;
`;
