import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const Container = styled.div`
background-color:${({theme})=> theme.backgroundColor};
display:flex;
min-height:calc(100vh - 52px);
align-items:center;
padding:2rem;
flex-direction:column;
border-top:1px solid ${({theme})=> theme.mainColor}
`
const CoinsList = styled.ul`
display:flex;
align-items:center;
width:100%;
flex-wrap:wrap;
`
const Coin = styled.li`
    color:${({theme})=> theme.textColor};
    border:1px solid ${({theme})=> theme.mainColor};
    margin:0 1rem 1rem 0;
    border-radius:1rem;
    cursor:pointer;

    >h2{
        color:${({theme})=> theme.mainColor};

        >a{
            padding:1rem;
            display:block;
        }
    }
`
const Title = styled.h1`
color:${({theme})=> theme.mainColor};
font-size:1.6rem;
line-height:2;
width:100%;
`

const LoadingText = styled.p`
text-align:cetner;
font-size:2rem;
color:${({theme})=> theme.mainColor}
`


interface CoinItemsInterface  {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
}

const Coins = () => {
    const [items, setItems] = useState<CoinItemsInterface[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        (async()=>{
            const response = await fetch('https://api.coinpaprika.com/v1/tickers');
            const json = await response.json();
            setItems(json.slice(0,100));
            setLoading(false);
        })();
    },[])

    console.log(items)

    return <Container>
        <Title>title...</Title>
        {loading ? <LoadingText>loading...</LoadingText> : <CoinsList>
            {items.map((item)=> <Coin key={item.id}>
                <h2><Link to={`/coins/${item.id}`}>{item.name} &rarr;</Link></h2>
            </Coin>)}
        </CoinsList>}
    </Container>
}

export default Coins; 