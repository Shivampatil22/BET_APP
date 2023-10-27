import React, { useState } from 'react';

const CreateBet = () => {
  const [initName, setInitName] = useState('');
  const [initResponse, setInitResponse] = useState('');
  const [counterName, setCounterName] = useState('');
  const [counterResponse, setCounterResponse] = useState('');
  const [criteria, setCriteria] = useState('');
  const [resolDate, setResolDate] = useState('');
  const [wager, setWager] = useState('');

  const [error, setError] = useState(false);

  const initiateBet = async () => {
    if (!initName || !initResponse || !counterName || !counterResponse || !criteria || !resolDate || !wager) {
      setError(true);
      return false;
    }
    console.warn(initName, initResponse, counterName, counterResponse, criteria, resolDate, wager);
  };

  return (
    
      <div className="w-full max-w-md p-8 m-4 bg-white rounded-lg shadow-xl">
        <h1 className="text-3xl font-semibold mb-4">Initiate Bet</h1>
        <div className="mb-4 ">
          <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="initName">
            Initiator Name
          </label>
          <input
            type="text"
            id="initName"
            placeholder="Enter initiator's name"
            className="border border-gray-300 rounded-md p-2 w-full"
            value={initName}
            onChange={(e) => setInitName(e.target.value)}
          />
          {error && !initName && <span className="text-red-500 text-left">Enter a valid name</span>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2 text-left">
            Initiator Response
          </label>
          <div className="flex items-start"> {/* Align options to the left */}
            <div className="mr-2">
              <label>
                <input
                  type="radio"
                  name="initResponse"
                  value="Option 1"
                  checked={initResponse === "YES"}
                  onChange={() => setInitResponse("YES")}
                  className='mr-1'
                />
                YES
              </label>
            </div>
            <div className="mr-2">
              <label>
                <input
                  type="radio"
                  name="initResponse"
                  value="Option 2"
                  checked={initResponse === "NO"}
                  onChange={() => setInitResponse("NO")}
                  className='ml-3 mr-1'
                />
                NO
              </label>
            </div>
          </div>
          {error && !initResponse && <span className="text-red-500 text-left">Select a response</span>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="counterName">
            Counterparty Name
          </label>
          <input
            type="text"
            id="counterName"
            placeholder="Enter counterparty's name"
            className="border border-gray-300 rounded-md p-2 w-full"
            value={counterName}
            onChange={(e) => setCounterName(e.target.value)}
          />
          {error && !counterName && <span className="text-red-500 text-left">Enter a valid name</span>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2 text-left">
            Counterparty Response
          </label>
          <div className="flex items-start"> {/* Align options to the left */}
            <div className="mr-2">
              <label>
                <input
                  type="radio"
                  name="counterResponse"
                  value="Option A"
                  checked={counterResponse === "YES"}
                  onChange={() => setCounterResponse("YES")}
                  className='mr-1'
                />
                YES
              </label>
            </div>
            <div className="mr-2">
              <label>
                <input
                  type="radio"
                  name="counterResponse"
                  value="Option B"
                  checked={counterResponse === "NO"}
                  onChange={() => setCounterResponse("NO")}
                  className='ml-3 mr-1'
                />
                NO
              </label>
            </div>
          </div>
          {error && !counterResponse && <span className="text-red-500 text-left">Select a response</span>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="criteria">
            Criteria
          </label>
          <textarea
            type="text"
            id="criteria"
            placeholder="Enter criteria"
            className="border border-gray-300 rounded-md p-2 w-full"
            value={criteria}
            onChange={(e) => setCriteria(e.target.value)}
          />
          {error && !criteria && <span className="text-red-500 text-left">Enter valid criteria</span>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="resolDate">
            Resolution Date
          </label>
          <input
            type="date"
            id="resolDate"
            placeholder="Enter resolution date"
            className="border border-gray-300 rounded-md p-2 w-full"
            value={resolDate}
            onChange={(e) => setResolDate(e.target.value)}
          />
          {error && !resolDate && <span className="text-red-500 text-left">Enter a valid date</span>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="wager">
            Wager
          </label>
          <input
            type="text"
            id="wager"
            placeholder="Enter wager"
            className="border border-gray-300 rounded-md p-2 w-full"
            value={wager}
            onChange={(e) => setWager(e.target.value)}
          />
          {error && !wager && <span className="text-red-500 text-left">Enter a valid wager</span>}
        </div>

        <button
          onClick={initiateBet}
          className="bg-blue-500 text-white rounded-md px-4 py-2 hover-bg-blue-600 w-full"
        >
          Initiate Bet
        </button>
      </div>
 
  );
};

export default CreateBet;
