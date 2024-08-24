import CariTokpedAccordion from './CariTokopedia/CariTokpedAccordion';
import CariTokpedTabs from './CariTokopedia/CariTokpedTabs';

function CariTokopedia() {
  return (
    <div className="w-full flex flex-col my-10 gap-3">
      <div className="flex gap-3 items-end">
        <h2 className="xs:text-2xl text-xl font-bold">
          Cari Semua di Tokopedia!
        </h2>
      </div>
      <div className="xs:block hidden">
        <CariTokpedTabs />
      </div>
      <div className="block xs:hidden">
        <CariTokpedAccordion />
      </div>
    </div>
  );
}

export default CariTokopedia;
