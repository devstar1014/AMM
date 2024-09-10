"use client";
import { useState } from "react";
// import CardComponent from "../components/CardComponent";

const Home = () => {
  const [totalYesToken, setTotalYesToken] = useState(1000);
  const [totalNoToken, setTotalNoToken] = useState(1000);
  const [priceYesToekn, setPriceYesToken] = useState<number>(1);
  const [priceNoToekn, setPriceNoToken] = useState<number>(1);
  const [yesBuyTokenAmount, setYesBuyTokenAmount] = useState(1);
  const [yesSellTokenAmount, setYesSellTokenAmount] = useState(1);
  const [noBuyTokenAmount, setNoBuyTokenAmount] = useState(1);
  const [noSellTokenAmount, setNoSellTokenAmount] = useState(1);
  const CONST_K = 1000000;

  const buyYesToken = () => {
    const newYesAmount = totalYesToken + yesBuyTokenAmount * priceYesToekn;
    const newNoAmount = CONST_K / newYesAmount;
    setTotalYesToken(newYesAmount);
    setTotalNoToken(newNoAmount);
    setPriceYesToken(newNoAmount / newYesAmount);
    setPriceNoToken(newNoAmount / newYesAmount);
  };

  const sellYesToken = () => {
    const newYesAmount = totalYesToken + yesBuyTokenAmount - priceYesToekn;
    const newNoAmount = CONST_K / newYesAmount;
    setTotalYesToken(newYesAmount);
    setTotalNoToken(newNoAmount);
    setPriceYesToken(newNoAmount / newYesAmount);
    setPriceNoToken(newNoAmount / newYesAmount);
  };

  const buyNoToken = () => {
    const newNoAmount = totalNoToken + noBuyTokenAmount * priceNoToekn;
    const newYesAmount = CONST_K / newNoAmount;
    setTotalYesToken(newYesAmount);
    setTotalNoToken(newNoAmount);
    setPriceYesToken(newNoAmount / newYesAmount);
    setPriceNoToken(newNoAmount / newYesAmount);
  };

  const sellNoToken = () => {
    const newNoAmount = totalNoToken - noBuyTokenAmount * priceNoToekn;
    const newYesAmount = CONST_K / newNoAmount;
    setTotalYesToken(newYesAmount);
    setTotalNoToken(newNoAmount);
    setPriceYesToken(newNoAmount / newYesAmount);
    setPriceNoToken(newNoAmount / newYesAmount);
  };

  const buyYesTokenMax = () => {
    setYesBuyTokenAmount(totalYesToken - 1);
  };

  const sellYesTokenMax = () => {
    setYesSellTokenAmount(totalYesToken - 1);
  };

  const buyNoTokenMax = () => {
    setNoBuyTokenAmount(totalNoToken - 1);
  };

  const sellNoTokenMax = () => {
    setNoSellTokenAmount(totalNoToken - 1);
  };

  const refresh = () => {
    setTotalYesToken(1000);
    setTotalNoToken(1000);
    setPriceYesToken(1);
    setPriceNoToken(1);
    setYesBuyTokenAmount(1);
    setYesSellTokenAmount(1);
    setNoBuyTokenAmount(1);
    setNoSellTokenAmount(1);
  };

  return (
    <div className="w-full flex flex-1 flex-col p-[1rem]">
      <h1 className="font-bold text-[2rem] text-center">
        Dynamic Automated Market Maker (AMM)
      </h1>
      <div className="mx-auto mt-8">
        <h1 className="text-[2rem] font-bold text-center">Liquidity</h1>
      </div>
      <div className="grid grid-cols-4 text-center w-full">
        <span className="text-[1.5rem] col-start-2 ">{totalYesToken} $Yes</span>
        <span className="text-[1.5rem] col-start-3">{totalNoToken} $No</span>
        <button
          className="col-start-4 rounded-lg bg-green-500 w-1/2 px-[1rem] py-[0.3rem] text-white text-2xl border-2 hover:bg-green-400 hover:scale-105"
          onClick={() => refresh()}
        >
          Refresh
        </button>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        <div className="grid grid-cols-4 grid-rows-2 text-center bg-[#f9f9f9] border-[1.5px] border-[#ccc] rounded-lg pb-2">
          <div className="col-start-2 row-start-1 text-[1.5rem] mx-auto my-auto">
            Price
          </div>
          <div className="col-start-3 row-start-1 text-[1.5rem] mx-auto my-auto">
            Amount
          </div>
          <div className="col-start-1 row-start-2  text-[1.5rem] mx-auto my-auto">
            YES Token
          </div>
          <div className="col-start-2 row-start-2 text-[1.5rem] mx-auto my-auto">
            {priceYesToekn} $No
          </div>
          <div className="col-start-3 row-start-2 text-[1.5rem] flex flex-col gap-4 items-center">
            <div className="flex flex-row relative w-2/3">
              <input
                type="number"
                min={1}
                max={1000}
                value={yesBuyTokenAmount}
                name="yesTokenAmount"
                className="font-[1.5rem] pl-2 rounded-md border-[1.5px] border-[#CCC] w-full"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  if (Number(e.target.value) >= totalYesToken) return;
                  setYesBuyTokenAmount(Number(e.target.value));
                }}
              />
              <div className="absolute right-0 pr-1">
                <button
                  className="  rounded-lg bg-blue-500 px-[1rem] text-white text-xl border-2 hover:bg-blue-400 hover:scale-105"
                  onClick={() => buyYesTokenMax()}
                >
                  Max
                </button>
              </div>
            </div>
            <div className="flex flex-row relative w-2/3">
              <input
                type="number"
                min={1}
                max={1000}
                value={yesSellTokenAmount}
                name="yesTokenAmount"
                className="font-[1.5rem] pl-2 rounded-md border-[1.5px] border-[#CCC] w-full"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  if (Number(e.target.value) >= totalYesToken) return;
                  setYesSellTokenAmount(Number(e.target.value));
                }}
              />
              <div className="absolute right-0 pr-1">
                <button
                  className="  rounded-lg bg-blue-500 px-[1rem] text-white text-xl border-2 hover:bg-blue-400 hover:scale-105"
                  onClick={() => sellYesTokenMax()}
                >
                  Max
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col col-start-4 row-start-2 items-center gap-2">
            <button
              className="rounded-lg bg-green-500 w-1/2 px-[1rem] py-[0.3rem] text-white text-2xl border-2 hover:bg-green-400 hover:scale-105"
              onClick={() => buyYesToken()}
            >
              Buy
            </button>
            <button
              className="rounded-lg bg-red-500 w-1/2 px-[1rem] py-[0.3rem] text-white text-2xl border-2 hover:bg-red-400 hover:scale-105"
              onClick={() => sellYesToken()}
            >
              Sell
            </button>
          </div>
        </div>
        <div className="grid grid-cols-4 grid-rows-2 text-center bg-[#f9f9f9] border-[1.5px] border-[#ccc] rounded-lg pb-2">
          <div className="col-start-2 row-start-1 text-[1.5rem] mx-auto my-auto">
            Price
          </div>
          <div className="col-start-3 row-start-1 text-[1.5rem] mx-auto my-auto">
            Amount
          </div>
          <div className="col-start-1 row-start-2  text-[1.5rem] mx-auto my-auto">
            NO Token
          </div>
          <div className="col-start-2 row-start-2 text-[1.5rem] mx-auto my-auto">
            {priceNoToekn} $YES
          </div>
          <div className="col-start-3 row-start-2 text-[1.5rem] flex flex-col gap-4 items-center">
            <div className="flex flex-row relative w-2/3">
              <input
                type="number"
                min={1}
                max={1000}
                value={noBuyTokenAmount}
                name="noTokenAmount"
                className="font-[1.5rem] pl-2 rounded-md border-[1.5px] border-[#CCC] w-full"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  if (Number(e.target.value) >= totalNoToken) return;
                  setNoBuyTokenAmount(Number(e.target.value));
                }}
              />
              <div className="absolute right-0 pr-1">
                <button
                  className="  rounded-lg bg-blue-500 px-[1rem] text-white text-xl border-2 hover:bg-blue-400 hover:scale-105"
                  onClick={() => buyNoTokenMax()}
                >
                  Max
                </button>
              </div>
            </div>
            <div className="flex flex-row relative w-2/3">
              <input
                type="number"
                min={1}
                max={1000}
                value={noSellTokenAmount}
                name="noTokenAmount"
                className="font-[1.5rem] pl-2 rounded-md border-[1.5px] border-[#CCC] w-full"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  if (Number(e.target.value) >= totalNoToken) return;
                  setNoSellTokenAmount(Number(e.target.value));
                }}
              />
              <div className="absolute right-0 pr-1">
                <button
                  className="  rounded-lg bg-blue-500 px-[1rem] text-white text-xl border-2 hover:bg-blue-400 hover:scale-105"
                  onClick={() => sellNoTokenMax()}
                >
                  Max
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col col-start-4 row-start-2 items-center gap-2">
            <button
              className="rounded-lg bg-green-500 w-1/2 px-[1rem] py-[0.3rem] text-white text-2xl border-2 hover:bg-green-400 hover:scale-105"
              onClick={() => buyNoToken()}
            >
              Buy
            </button>
            <button
              className="rounded-lg bg-red-500 w-1/2 px-[1rem] py-[0.3rem] text-white text-2xl border-2 hover:bg-red-400 hover:scale-105"
              onClick={() => sellNoToken()}
            >
              Sell
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
