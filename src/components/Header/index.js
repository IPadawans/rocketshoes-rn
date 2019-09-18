import React from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Wrapper,
  Logo,
  ImageLogo,
  Container,
  BasketContainer,
  CountItens,
} from './styles';

export default function Header({ navigation }) {
  const cartSize = useSelector(state => state.cart.length);
  return (
    <Wrapper>
      <Container>
        <Logo onPress={() => navigation.navigate('Main')}>
          <ImageLogo />
        </Logo>
        <BasketContainer>
          <Icon
            name="shopping-basket"
            onPress={() => navigation.navigate('Cart')}
            color="#FFF"
            size={24}
          />
          <CountItens>{cartSize}</CountItens>
        </BasketContainer>
      </Container>
    </Wrapper>
  );
}
