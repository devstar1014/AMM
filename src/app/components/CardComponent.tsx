const CardComponent = ({
  price,
  buyCount,
  liquidityPool,
  name,
}: {
  price: number;
  buyCount: number;
  liquidityPool: number;
  name: string;
}): JSX.Element => {
  return (
    <div className="bg-[#f9f9f9] my-[1.5rem] py-[1rem] border-[#ccc] border-[1.5px] border-solid w-full rounded-[5px]">
      <div className="px-[1rem]">
        <h2 className="font-bold text-[1.5rem] py-[0.5rem]">Yes Token</h2>
        <p className="text-lg leading-8">Price: ${price}</p>
        <p className="text-lg leading-8">Buy Count: ${buyCount}</p>
        <p className="text-lg leading-8">Liquidity Pool: ${liquidityPool}</p>
        <div className="flex flex-row ">
          <input
            type="number"
            min={1}
            max={1000}
            name={name}
            className="bg-white p-[0.5rem] border-gray-500 border-[1.5px] rounded-lg"
          />
            <button className="bg-[]">

            </button>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
