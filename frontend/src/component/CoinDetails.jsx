import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import ErrorComponent from './ErrorComponent';
import { useParams } from 'react-router-dom';
import { data } from './bitcoin'
import './CoinDetails.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import { VictoryChart, VictoryStack, VictoryArea } from 'victory'
const CoinDetails = () => {
    console.log(data.categories)
    const costo = data.market_data.current_price.usd;

    const sampleData = [
        // { x: .1, y: costo + (costo * data.market_data.price_change_percentage_1h_in_currency.usd) },
        // { x: 1, y: costo + (costo * data.market_data.price_change_percentage_24h) / 100 },
        // { x: 7, y: costo + (costo * data.market_data.price_change_percentage_7d) / 100 },
        // { x: 14, y: costo + (costo * data.market_data.price_change_percentage_14d) / 100 },
        // { x: 30, y: costo + (costo * data.market_data.price_change_percentage_30d) / 100 },
        // { x: 60, y: costo + (costo * data.market_data.price_change_percentage_60d) / 100 },
        // { x: 200, y: costo + (costo * data.market_data.price_change_percentage_200d) / 100 },
        // { x: 365, y: costo + (costo * data.market_data.price_change_percentage_1y) / 100 },

        { x: .24, y: costo + (costo * data.market_data.price_change_percentage_1y) / 100 },
        { x: 1, y: costo + (costo * data.market_data.price_change_percentage_200d) / 100 },
        { x: 7, y: costo + (costo * data.market_data.price_change_percentage_60d) / 100 },
        { x: 14, y: costo + (costo * data.market_data.price_change_percentage_30d) / 100 },
        { x: 30, y: costo + (costo * data.market_data.price_change_percentage_14d) / 100 },
        { x: 60, y: costo + (costo * data.market_data.price_change_percentage_7d) / 100 },
        { x: 200, y: costo + (costo * data.market_data.price_change_percentage_24h) / 100 },
        { x: 365, y: costo + (costo * data.market_data.price_change_percentage_1h_in_currency.usd) },

    ];
    return (
        <>
            <div className='Container' style={{ backgroundColor: "#F0F8FF" }}>
                <div className='left'>
                    <div className='flex-row' style={{ justifyContent: "space-between" }}>
                        <img src={data.image.small} alt={data.id} />
                        <div className='flex-row bolder' style={{ fontWeight: "900" }}>
                            <div className='flex-cols cent' style={{ color: '#0C2340', fontSize: "xx-large", fontWeight: "900", fontFamily: "sans-serif" }}>{data.name}</div>
                            #{data.market_cap_rank}
                            <div className='flex-cols cent' style={{ fontSize: "large", fontFamily: "sans-serif", fontWeight: "600" }}>{data.symbol} </div>
                        </div>
                        <div className='flex-row cent' style={{ flexWrap: "wrap" }}>
                            {

                                data.categories.map((item, index) => (
                                    <div style={{ fontSize: "small", backgroundColor: "#E0FFFF  ", padding: "3px", margin: "1px", borderRadius: "5px", color: "#0047AB", border: "1px solid #004792" }}>
                                        {item}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <br />
                    <div className='pricer flex-row ' style={{ fontFamily: "sans-serif", fontWeight: "600" }}>
                        ${data.market_data.current_price.usd}
                        {
                            data.market_data.price_change_percentage_24h > 0 ?
                                (<div style={{ color: 'green', fontSize: "medium" }} className="flex-rows cent">
                                    <ArrowDropUpIcon />
                                    {data.market_data.price_change_percentage_24h.toFixed(1)}
                                </div>)
                                :
                                (<div style={{ color: 'red' }}>
                                    <ArrowDropDownIcon style={{}} />
                                    {data.market_data.price_change_percentage_24h.toFixed(1)}
                                </div>)
                        }
                    </div>
                    <br />

                    <div className='flex-row' style={{ width: "62%", alignItems: "center", fontSize: "large", justifyContent: 'space-around' }}>
                        <div> Rating : </div>
                        <ThumbUpIcon style={{ color: "#00e676", }} />{data.sentiment_votes_up_percentage}
                        <ThumbUpIcon style={{ color: "#ff1744", transform: "rotate(180deg)" }} /> {data.sentiment_votes_down_percentage}
                    </div>
                    <br />
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px', fontSize: "small" }}>
                        <span>low({data.market_data.low_24h.usd})</span>
                        <span>high({data.market_data.high_24h.usd})</span>
                    </div>
                    <div style={{ height: '10px', width: '100%', backgroundColor: '#eee', borderRadius: '10px', display: 'flex' }}>
                        <div style={{
                            height: '100%',
                            width: `${(data.market_data.current_price.usd - data.market_data.low_24h.usd) / (data.market_data.high_24h.usd - data.market_data.low_24h.usd) * 100}%`,
                            background: 'linear-gradient(to right, #eb2d3a, #90ee90)',
                            borderRadius: '10px'
                        }}></div>
                        <div style={{
                            height: '100%',
                            flex: 1,
                            backgroundColor: '#F0F8FF',
                            borderRadius: '10px'
                        }}></div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5px', fontSize: "small" }}>
                        <span><ArrowUpwardIcon />current({data.market_data.current_price.usd})</span>
                    </div>
                    <br />
                    <hr />
                    <br />
                    <div className='flex-cols' style={{ border: "1px solid #000080", padding: "5px", borderRadius: "6px", backgroundColor: "#A4DDED" }}>
                        <div className='flex-row cent' style={{ justifyContent: "space-between", borderBottom: "1px solid white", padding: "12px" }}>
                            <div style={{ fontSize: "medium", color: "#003153" }}>Market Cap</div>
                            <div style={{ fontSize: "mediumedium", color: "#132257" }} className='bolder'>$ {data.market_data.market_cap.usd}</div>
                        </div>
                        <div className='flex-row cent' style={{ justifyContent: "space-between", borderBottom: "1px solid white", padding: "12px" }}>
                            <div style={{ fontSize: "medium", color: "#003153" }}>Volume</div>
                            <div className="flex-row cent bolder" style={{ fontSize: "medium", color: "#132257" }} ><EqualizerIcon />{data.market_data.total_volume.usd}</div>
                        </div>
                        <div className='flex-row cent' style={{ justifyContent: "space-between", borderBottom: "1px solid white", padding: "12px" }}>
                            <div style={{ fontSize: "medium", color: "#003153" }}>Current Supply </div>
                            <div style={{ fontSize: "medium", color: "#132257" }} className='bolder'>{data.market_data.circulating_supply}</div>
                        </div>
                        <div className='flex-row cent' style={{ justifyContent: "space-between", borderBottom: "1px solid white", padding: "12px" }}>
                            <div style={{ fontSize: "medium", color: "#003153" }}>Totla Supply </div>
                            <div style={{ fontSize: "medium", color: "#132257" }} className='bolder'>{data.market_data.max_supply}</div>
                        </div>
                        <div className='flex-row cent' style={{ justifyContent: "space-between", borderBottom: "1px solid white", padding: "12px" }}>
                            <div style={{ fontSize: "medium", color: "#003153" }}>Genesis Date</div>
                            <div style={{ fontSize: "medium", color: "#132257" }} className='bolder'>{data.genesis_date}</div>
                        </div>
                        <div className='flex-row cent' style={{ justifyContent: "space-between", borderBottom: "1px solid white", padding: "12px" }}>
                            <div style={{ fontSize: "medium", color: "#003153" }}>PortFolio User</div>
                            <div style={{ fontSize: "medium", color: "#132257" }} className='bolder'>{data.watchlist_portfolio_users}</div>
                        </div>

                    </div>

                </div>
                <hr />
                <div className='right'>
                    <table style={{ width: "100%" }}>
                        <thead>
                            <tr>
                                <th>1h</th>
                                <th>24h</th>
                                <th>7d</th>
                                <th>14d</th>
                                <th>30d</th>
                                <th>1y</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    {data.market_data.price_change_percentage_1h_in_currency.usd > 0
                                        ? <div style={{ color: "green", backgroundColor: "#ACE1AF" }} className='flex-row cent bolder'><ArrowDropUpIcon />{data.market_data.price_change_percentage_1h_in_currency.usd}</div>
                                        : <div style={{ color: "red", backgroundColor: "#FFCCCC" }} className='flex-row cent bolder'><ArrowDropDownIcon />{data.market_data.price_change_percentage_1h_in_currency.usd}</div>}
                                </td>
                                <td>
                                    {data.market_data.market_cap_change_percentage_24h > 0
                                        ? <div style={{ color: "green", backgroundColor: "#ACE1AF" }} className='flex-row cent bolder'><ArrowDropUpIcon />{data.market_data.price_change_percentage_24h}</div>
                                        : <div style={{ color: "red", backgroundColor: "#FFCCCC" }} className='flex-row cent bolder'><ArrowDropDownIcon />{data.market_data.price_change_percentage_24h}</div>}
                                </td>
                                <td>
                                    {data.market_data.price_change_percentage_7d > 0
                                        ? <div style={{ color: "green", backgroundColor: "#ACE1AF" }} className='flex-row cent bolder'><ArrowDropUpIcon />{data.market_data.price_change_percentage_7d}</div>
                                        : <div style={{ color: "red", backgroundColor: "#FFCCCC" }} className='flex-row cent bolder'><ArrowDropDownIcon />{data.market_data.price_change_percentage_7d}</div>}
                                </td>
                                <td>
                                    {data.market_data.price_change_percentage_14d > 0
                                        ? <div style={{ color: "green", backgroundColor: "#ACE1AF" }} className='flex-row cent bolder'><ArrowDropUpIcon />{data.market_data.price_change_percentage_14d}</div>
                                        : <div style={{ color: "red", backgroundColor: "#FFCCCC" }} className='flex-row cent bolder'> <ArrowDropDownIcon />{data.market_data.price_change_percentage_14d}</div>}
                                </td>
                                <td>
                                    {data.market_data.price_change_percentage_30d > 0
                                        ? <div style={{ color: "green", backgroundColor: "#ACE1AF" }} className='flex-row cent bolder'><ArrowDropUpIcon />{data.market_data.price_change_percentage_30d}</div>
                                        : <div style={{ color: "red", backgroundColor: "#FFCCCC" }} className='flex-row cent bolder'><ArrowDropDownIcon />{data.market_data.price_change_percentage_30d}</div>}
                                </td>
                                <td>
                                    {data.market_data.price_change_percentage_1y > 0
                                        ? <div style={{ color: "green", backgroundColor: "#ACE1AF" }} className='flex-row cent bolder'><ArrowDropUpIcon />{data.market_data.price_change_percentage_1y}</div>
                                        : <div style={{ color: "red", backgroundColor: "#FFCCCC" }} className='flex-row cent bolder'><ArrowDropDownIcon />{data.market_data.price_change_percentage_1y}</div>}
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <VictoryChart
                        animate={{
                            duration: 2000,
                            onLoad: { duration: 1000 }
                        }}
                    // events={[{
                    //     // childName: "all",
                    // target: "data",
                    //     eventHandlers: {
                    //         onClick: () => {
                    //             return (
                    //                 {
                    //                     childName: "area-4",
                    //                     target: "data",
                    //                     mutation: (props) => ({ style: Object.assign({}, props.style, { fill: "red" }) })
                    //                 }
                    //             )
                    //         }
                    //     }
                    // }]}
                    >
                        <VictoryStack>
                            <VictoryArea name="area-4" data={sampleData} style={{ data: { fill: 'rgba(128, 128, 128, 0.5)' } }} />
                        </VictoryStack>
                    </VictoryChart>
                </div>
            </div >
        </>
    )
}
export default CoinDetails

