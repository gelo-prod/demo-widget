import {
    FieldDescription,
    FieldGroup,
    FieldLegend,
    FieldSet,
} from '@/components/ui/field';
import { CarInsurances } from '../type/types';
import { useState } from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
type Plan = {
    id: CarInsurances;
    title: string;
    price: string;
    summary: string;
};

const PLANS: Plan[] = [
    {
        id: CarInsurances.BASE,
        title: 'Base',
        price: 'RD$4,962/mes',
        summary: 'Seguro de Ley con cobertura de $500/$500/$1MM.',
    },
    {
        id: CarInsurances.PLUS,
        title: 'Plus',
        price: 'RD$5,495/mes',
        summary: 'Cobertura extendida, asistencia, grúa, cristales.',
    },
    {
        id: CarInsurances.AUTO_EXCESO,
        title: 'Auto Exceso',
        price: 'RD$7,022/mes',
        summary: 'Tope superior de responsabilidad y extras.',
    },
];

interface PlansAccordionProps {
    selected?: CarInsurances;
    onSelect: (plan: CarInsurances) => void;
}
export const LawInsuranceForm = ({
    selected,
    onSelect,
}: PlansAccordionProps) => {
    const [expanded, setExpanded] = useState<string | undefined>(selected);
    const handleExpand = (v: string | undefined) => {
        setExpanded(v);
        if (v) onSelect(v as CarInsurances);
    };
    return (
        <FieldGroup>
            <FieldSet>
                <FieldLegend className='text-center text-blue-700 font-bold'>
                    Elije tú seguro Ley
                </FieldLegend>
                <FieldDescription className='text-center text-blue-600 font-semibold'>
                    Haz clic aqui para ver el detalle de los planes
                </FieldDescription>
            </FieldSet>
            <div className='mt-6 space-y-4'>
                <Accordion
                    type='single'
                    collapsible
                    value={expanded}
                    onValueChange={handleExpand}
                    className='space-y-4'>
                    {PLANS.map((plan) => {
                        const active = selected === plan.id;
                        return (
                            <AccordionItem
                                key={plan.id}
                                value={plan.id}
                                className='border-0 rounded-[28px] overflow-hidden'>
                                <AccordionTrigger
                                    className={[
                                        'px-6 py-5 text-left ring-1 ring-slate-200 shadow-sm',
                                        'data-[state=open]:rounded-b-none',
                                        active
                                            ? 'bg-[#072b73] text-white ring-[#072b73]'
                                            : 'bg-white text-blue-900 hover:bg-blue-50',
                                        'rounded-[28px]',
                                    ].join(' ')}>
                                    <div className='flex w-full items-center justify-between'>
                                        <span className='font-semibold'>
                                            {plan.title}
                                        </span>
                                        <span className='text-orange-500 font-semibold'>
                                            {plan.price}
                                        </span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className='bg-blue-50/50 px-6 py-6 text-center text-blue-900 rounded-b-[28px]'>
                                    <p className='mb-2'>{plan.summary}</p>
                                    <p className='text-orange-500 cursor-pointer'>
                                        Ver detalle
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                        );
                    })}
                </Accordion>
            </div>
        </FieldGroup>
    );
};
