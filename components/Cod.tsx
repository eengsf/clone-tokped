import MainCarousel from './Cod/MainCarousel';

function Cod() {
  return (
    <div className="flex flex-col xs:py-5 py-2 gap-3 ">
      <div className="flex gap-3 items-end">
        <h2 className="text-xl font-bold">Bayar di tempat {`<`} 49jt</h2>
      </div>
      <MainCarousel />
    </div>
  );
}

export default Cod;
