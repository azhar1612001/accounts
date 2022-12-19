import './App.css';

import React, { useState } from 'react';

const App = () => {
  
  const [data,setData] = useState([]);
  const [debitAmount,setDebit] = useState(0.0);
  const [creditAmount,setCredit] = useState(0.0);

  const remove = (ind) => {
    setCredit(creditAmount-parseFloat(data[ind].credit));
    setDebit(debitAmount-parseFloat(data[ind].debit));
    setData((oldData) => {
      return oldData.filter((arrData,index) => {
        return index!=ind;
      })
    })
  }

  const addItem = () => {
    const newData = {
      account: "Select Account",
      credit: 0,
      debit: 0,
    }
    setData((oldData) => {
      return [...oldData,newData];
    })
  }

  const updateAccount = (ind,value) => {
    data[ind].account = value;
    setData((oldData) => {
      return [...oldData];
    })
  }

  const updateCredit = (ind,value) => {
    if(value){
      data[ind].credit = parseFloat(value);
      setData((oldData) => {
        return [...oldData];
      })
      let credit = 0;
      data.map((obj)=>credit+=parseFloat(obj.credit));
      setCredit(credit);
    }
  }

  const updateDebit = (ind,value) => {
    if(value){
      data[ind].debit = parseFloat(value);
      setData((oldData) => {
        return [...oldData];
      })
      let debit = 0;
      data.map((obj)=>debit+=parseFloat(obj.debit));
      setDebit(debit);
    }
  }

  return(
    <div className="main">
      <div className="heading">
        <div>Accounts</div>
        <div>Debit Amount</div>
        <div>Credit Amount</div>
      </div>
      {data.map((obj,ind) => {
          return <div className="arrange" key={ind}>
            <div className="items">
              <div>
              <select defaultValue={obj.account} onChange={(event)=>updateAccount(ind,event.target.value)}>
                <option value="Select Account">Select Account</option>
                <option value="SBI">SBI</option>
                <option value="Punjab National Bank">Punjab National Bank</option>
                <option value="Indian Bank">Indian Bank</option>
                <option value="HDFC">HDFC</option>
              </select>
            </div>
            <div><input type="number" value={obj.credit} onChange={(event)=>updateCredit(ind,event.target.value)}/></div>
            <div><input type="number" value={obj.debit} onChange={(event)=>updateDebit(ind,event.target.value)}/></div>
            </div>
            {data.length>0 && <button className="danger" onClick={()=>remove(ind)}>Remove</button>}
        </div>
      })}
      <div className="footer">
        <div>
          <div className="footer-inner">
            <button className="success" onClick={addItem}>Add Row</button>
            <div>Total : ({(creditAmount-debitAmount).toFixed(2)})</div>
          </div>
        </div>
        <div>{creditAmount.toFixed(2)}</div>
        <div>{debitAmount.toFixed(2)}</div>
      </div>
      

    </div>
  );
}

export default App;
