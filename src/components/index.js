import React, {useState, useEffect} from "react";
import styled from "styled-components";

import Web3 from "web3";
import { AbiItem } from 'web3-utils';
import { Contract } from 'web3-eth-contract';

import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';

const UserStats = styled.div`
    border: 1px solid black;
`

const Container = styled.div`
    background-color: grey;
    height: 1400px;
    margin: 0px;
    padding-top: 30px;
    padding-left: 30px;
`

const BetButton = styled.button`
    padding-left: 50px;
    padding-right: 50px;

    padding-top: 5px;
    padding-bottom: 5px;
`

const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider, // required
      options: {
        infuraId: '43b86485d3164682b5d703fd1d39fe1c' // required
      }
    }
}

export default function HomePage () {

    const [provider, setProvider] = useState(null);
    const [web3, setWeb3] = useState(null);
  
    const web3Modal = new Web3Modal({
      network: 'rinkeby', // optional
      cacheProvider: true, // optional
      providerOptions // required
    });
  
    useEffect(async() => {
        async function loadWeb3() {
            const provider = await web3Modal.connect();
            const web3 = await new Web3(provider);
      
            setProvider(provider);
            setWeb3(web3);
        }

        await loadWeb3();
    });

    return (
        <>
            <Container>
                <p>Boxing Betting</p>

                <p>Anderson Silva: +185 </p>
                <p Style="font-size: 12px;">Liquidity: 0.42 ETH</p>
                <BetButton>
                    Bet
                </BetButton>

                <p>Julio Cesar Chavez Jr: -225 </p>
                <p Style="font-size: 12px;">Liquidity: 0.24 ETH</p>
                <BetButton>
                    Bet
                </BetButton>

                <br />
                <p> Total Bet: 1.00 ETH </p>
            <UserStats>
                <p> Users </p>

                <p>Current Bets: </p>
            </UserStats>

            </Container>

        </>
    )
}