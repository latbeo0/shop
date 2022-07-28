import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
} from '@material-ui/icons';
import styled from 'styled-components';
import { mobile } from './../responsive';
import { Link } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: 'column' })}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.div`
    margin: 20px 0;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: ${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: 'none' })}
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: '#fff8f8' })}
`;

const ContractItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>LV7.</Logo>
                <Desc>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                </Desc>
                <SocialContainer>
                    <SocialIcon color='#3B5999'>
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color='#E4405F'>
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color='#55ACEE'>
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color='#E60023'>
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>
                        <Link
                            to='/'
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                            Home
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link
                            to='/cart'
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                            Cart
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link
                            to='/products/men'
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                            Man Fashion
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link
                            to='/products/women'
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                            Woman Fashion
                        </Link>
                    </ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Term</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContractItem>
                    <Room style={{ marginRight: '10px' }} />
                    Thu Duc District, Ho Chi Minh City
                </ContractItem>
                <ContractItem>
                    <Phone style={{ marginRight: '10px' }} />
                    0377.499.617
                </ContractItem>
                <ContractItem>
                    <MailOutline style={{ marginRight: '10px' }} />
                    tuanluong0704@gmail.com
                </ContractItem>
                <Payment src='https://i.ibb.co/Qfvn4z6/payment.png' />
            </Right>
        </Container>
    );
};

export default Footer;
