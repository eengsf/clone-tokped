import { cariTokopedia } from '@/data/data';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

function CariTokpedAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {cariTokopedia.map((item, index) => (
        <AccordionItem key={index} value={`${item.name}`}>
          <AccordionTrigger>{item.name}</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-1">
              {cariTokopedia
                .find((value) => value.name === item.name)
                ?.sub.map((subItem, subIndex) => (
                  <p
                    key={subIndex}
                    className="text-xs text-customTokped-medium xs:border-b border-none  cursor-pointer"
                  >
                    {subItem}
                  </p>
                ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default CariTokpedAccordion;
