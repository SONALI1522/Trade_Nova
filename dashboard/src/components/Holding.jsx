import React, { useState, useEffect } from "react"; 
// import {holdings} from '../data/data';
import "./Holding.css";
import axios, { all } from "axios"; 
import { VerticalGraph } from "./VerticalGraph";
import API from "../config/api";

 const Holdings = () => { 
 
  const [allHoldings, setAllHoldings] = useState([]); 
  const [aiExplanation, setAIExplanation] = useState("");
  const [loadingAI, setLoadingAI] = useState(false);

  useEffect(() => {
  axios
    .get("${API}/allHoldings", { withCredentials: true })
    .then((res) => {
      setAllHoldings(res.data);
    })
    .catch((err) => console.error(err));
  }, []);

  // 2️⃣ AI button handler
  const getAIExplanation = async () => {
    try {
      setLoadingAI(true);
      setAIExplanation("");

      const res = await axios.post(
        "${API}/ai-explain",
        { holdings: allHoldings },
        { withCredentials: true }
      );

      setAIExplanation(res.data.explanation);
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingAI(false);
    }
  };

     // Chart data
    const labels = allHoldings.map((subArray) => subArray["name"]); 
    const data = {
       labels, 
       datasets: [ 
        { 
          label: "Stock Price", 
          data: allHoldings.map((stock) => stock.price), 
          backgroundColor: "rgba(255, 99, 132, 0.5)", 
        }, 
      ], 
    }; 
    return ( 
    <> 
    <h3 className="title">Holdings ({allHoldings.length})</h3> 
    <div className="order-table"> 
      <table> 
        <thead> 
          <tr> <th>Instrument</th> 
          <th>Qty.</th> 
          <th>Avg. cost</th> 
          <th>LTP</th> 
          <th>Cur. val</th> 
          <th>P&L</th> 
          <th>Net chg.</th> 
          <th>Day chg.</th> 
          </tr> 
        </thead>
      <tbody> 
      {allHoldings.map((stock, index) => {
         const currValue = stock.price * stock.qty; 
         const isProfit = currValue - stock.avg * stock.qty >= 0; 
         const profClass = isProfit ? "profit" : "loss"; 
         const dayClass = stock.isLoss ? "loss" : "profit"; 
         return ( 
         <tr key={index}> 
         <td>{stock.name}</td> 
         <td>{stock.qty}</td> 
         <td>{stock.avg.toFixed(2)}</td> 
         <td>{stock.price.toFixed(2)}</td> 
         <td>{currValue.toFixed(2)}</td> 
         <td className={profClass}>{(currValue - stock.avg * stock.qty).toFixed(2)}</td> 
         <td className={profClass}>{stock.net}</td> 
         <td className={dayClass}>{stock.day}</td> 
         </tr> 
         ); 
        }) } 
      </tbody> 
    </table> 
    </div> 
    <div className="row"> 
      <div className="col"> 
        <h5> 
          29,875.<span>55</span>{" "} 
        </h5> 
        <p>Total investment</p> 
      </div> 
      <div className="col"> 
        <h5> 31,428.<span>95</span>{" "} </h5> 
        <p>Current value</p> 
      </div> 
      <div className="col"> 
        <h5>1,553.40 (+5.20%)</h5> 
        <p>P&L</p> </div> 
      </div>

      {/* Chart */}
      <VerticalGraph data={data} /> 

      {/* AI Button */}
      <div style={{ marginTop: "20px" }}>
        <button 
          className="ai-btn"
          onClick={getAIExplanation} 
          disabled={loadingAI}>
          {loadingAI ? "Analyzing Portfolio..." : "Explain My Portfolio"}
        </button>
      </div>
      
      {/* AI Output */}
     {aiExplanation && (
       <div className="ai-card">
         <div className="ai-card-header">
           <h4>Portfolio Insights</h4>
           <span className="ai-badge">AI</span>
         </div>
         <p className= "ai-text">{aiExplanation}</p>
       </div>
     )}

      </> 
      ); 
    };
    export default Holdings;