import './App.css';
import { TonConnectButton } from '@tonconnect/ui-react';
// import { Blockchain } from "@ton-community/sandbox";
// import Counter from './contracts/counter';
// import { Address } from 'ton-core';
// import { useEffect } from 'react';
import { useCounterContract } from './hooks/useCounterContract';

function App() {
  const { value, address } = useCounterContract();

  // Other code.
  // Use sevlte example code.
  // const init = async () => {
  //   const blockchain = await Blockchain.create();
  //   const contract = blockchain.openContract(new Counter(Address.parse('EQBYLTm4nsvoqJRvs_L-IGNKwWs5RKe19HBK_lFadf19FUfb')));

  //   const res = await contract.getCounter()
  //   console.log(res, 'res')
  // }
  // useEffect(() => {
  //   init()
  // }, [])

  return (
    <div className='App'>
      <div className='Container'>
        <TonConnectButton />

        <div className='Card'>
          <b>Counter Address</b>
          <div className='Hint'>{address?.slice(0, 30) + '...'}</div>
        </div>

        <div className='Card'>
          <b>Counter Value</b>
          <div>{value ?? 'Loading...'}</div>
        </div>
      </div>
    </div>
  );
}

export default App
