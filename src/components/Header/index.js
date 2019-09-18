import React from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Wrapper,
  Logo,
  ImageLogo,
  Container,
  BasketContainer,
  CountItens,
} from './styles';

function Header({ navigation, cartSize }) {
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

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
