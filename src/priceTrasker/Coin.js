import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row, Table } from 'reactstrap';
import axios from 'axios';
import images1 from './up.png';
import images2 from './down.png';

const Coin = () => {

    const [coin, setCoin] = useState([]);

    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false")
        .then(res => {
            setCoin(res.data);
            console.log(res.data);
        })
        .catch(error => console.error("ERROR!"));
    }, [])
    return (
        <div className='coin'>
            <Container>
                <Row>
                    <Col md="12" className='text-center'>          
                        <Table dark hover>
                            <thead>
                                <tr className='text-warning'>
                                    <th>Market cap rank</th>
                                    <th>Crypto Icon</th>
                                    <th>Crypto Name</th>
                                    <th>Crypto symbol</th>
                                    <th>Current price</th>
                                    <th>Market cap change</th>
                                </tr>
                            </thead>
                            <tbody>
                                {coin.map(coins => {
                                    return (
                                        <tr key={coins.id}>
                                            <td>{coins.market_cap_rank}</td>
                                            <td><img src={coins.image} width={30}/></td>
                                            <td>{coins.name}</td>
                                            <td>{coins.symbol}</td>
                                            <td>{coins.current_price}</td>
                                            {coins.market_cap_change_percentage_24h.toFixed(2) > 0 ? (
                                               <td className='text-success'>{coins.market_cap_change_percentage_24h.toFixed(2)} %<img width={30} src={images1} alt='rasm topilmadi'/></td>
                                            )
                                            :(
                                                <td className='text-danger'>{coins.market_cap_change_percentage_24h.toFixed(2)} %<img width={30} src={images2} alt='rasm topilmadi'/></td>
                                         
                                            )}
                                         </tr>
                                    );
                                })}

                            </tbody>
                        </Table>  
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

Coin.propTypes = {};

export default Coin;