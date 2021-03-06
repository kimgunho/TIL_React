import { useEffect, useState } from "react";
import {
  useLocation,
  useParams,
  Route,
  Routes,
  Link,
  useMatch,
} from "react-router-dom";
import styled from "@emotion/styled";
import Chart from "./Chart";
import Price from "./Price";

const Title = styled.h1`
  font-size: 48px;
  color: ${({ theme }) => theme.mainColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Container = styled.div`
  padding: 0px 20px;
  max-width: 680px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  text-align: center;
  font-size: 1.25rem;
  line-height: 2;
  color: ${({ theme }) => theme.backgroundColor};
`;

const Nav = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  > li {
    margin: 0 1rem;

    > a {
      padding: 1rem 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${({ theme }) => theme.backgroundColor};
      color: ${({ theme }) => theme.mainColor};
    }
  }
`;

interface RouteState {
  state: {
    state: {
      name: string;
    };
  };
}

interface InfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
}

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

function Coin() {
  const [loading, setLoading] = useState(true);
  const { id } = useParams<{ id: string }>();
  const { state } = useLocation() as RouteState;
  const [info, setInfo] = useState<InfoData>();
  const [priceInfo, setPriceInfo] = useState<PriceData>();
  const chartMatch = useMatch("/coins/:id/chart");
  const priceMatch = useMatch("/coins/:id/price");

  useEffect(() => {
    (async () => {
      const infoData = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${id}`)
      ).json();
      const priceData = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${id}`)
      ).json();
      setInfo(infoData);
      setPriceInfo(priceData);
      setLoading(false);
    })();
  }, [id]);
  return (
    <Container>
      <Header>
        <Title>{id || "Loading..."}</Title>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Text>{info?.description}</Text>
          <Nav>
            <li>
              <Link to={`/coins/${id}/chart`}>chart</Link>
            </li>
            <li>
              <Link to={`/coins/${id}/price`}>price</Link>
            </li>
          </Nav>

          <Routes>
            <Route path={`chart`} element={<Chart />} />
            <Route path={`price`} element={<Price />} />
          </Routes>
        </>
      )}
    </Container>
  );
}
export default Coin;
