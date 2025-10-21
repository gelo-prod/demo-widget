import { SelectType } from './SelectType';
import {
    cars,
    modelCars,
    carYears,
    fuelTypes,
} from '../../../mocks/car-data.mock';
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSet,
} from '@/components/ui/field';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import type { RequestUnit } from '../type/types';

interface CarFormProps {
    onChange: (prop: string, value: string | number) => void;
    data: RequestUnit;
}

export function CarForm({ onChange, data }: CarFormProps) {
    const [selected, setSelected] = useState(false);
    const [isPersonalUse, setPersonalUse] = useState(false);
    const [selectedBrand, setSelectedBrand] = useState('');

    // const formatCurrency = (value: string | number) => {
    //     if (!value || value === '0' || value === 0) return '';
    //     const number =
    //         typeof value === 'string'
    //             ? parseInt(value.replace(/,/g, ''))
    //             : value;
    //     if (isNaN(number)) return '';
    //     return number.toLocaleString('es-DO');
    // };

    const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Solo permite números
        const numValue = e.target.value.replace(/[^\d]/g, '');
        onChange('worth', numValue ? Number(numValue) : 0);
    };
    return (
        <FieldGroup>
            <FieldSet>
                <FieldLegend className='text-center text-blue-700 font-bold'>
                    Por lo que conduces
                </FieldLegend>
                <FieldDescription className='text-center text-blue-600 font-semibold'>
                    Datos del Vehículo
                </FieldDescription>
                <FieldGroup>
                    <Field>
                        <SelectType
                            items={cars}
                            fn={(e) => {
                                setSelectedBrand(e);
                                onChange('modelId', e);
                            }}
                            placeHolder='Marca'
                        />
                    </Field>
                    <Field>
                        <SelectType
                            items={modelCars}
                            fn={(e) => console.log(e)}
                            placeHolder='Modelo'
                        />
                    </Field>
                    <Field>
                        <SelectType
                            items={carYears}
                            fn={(e) => onChange('year', e)}
                            placeHolder='Año'
                        />
                    </Field>
                    <Field>
                        <p className='text-center'>¿Es un vehículo cero km?</p>
                        <div className='grid grid-cols-2 gap-3 w-full'>
                            <Button
                                type='button'
                                variant={'outline'}
                                onClick={() => setSelected(true)}
                                className={` ${
                                    selected
                                        ? 'bg-[#072b73] text-white'
                                        : 'bg-gray-300 text-gray-700'
                                } py-2.5 px-5 border-none rounded-md cursor-pointer`}>
                                Sí
                            </Button>
                            <Button
                                type='button'
                                variant={'outline'}
                                onClick={() => setSelected(false)}
                                className={`${
                                    !selected
                                        ? 'bg-[#072b73] text-white'
                                        : 'bg-gray-300 text-gray-700'
                                } py-2.5 px-5 border-none rounded-md cursor-pointer`}>
                                No
                            </Button>
                        </div>
                    </Field>
                    <Field>
                        <SelectType
                            items={fuelTypes}
                            placeHolder='Tipo de combustible'
                            fn={(e) => console.log(e)}
                        />
                        <Button
                            type='button'
                            variant={'outline'}
                            onClick={() => setPersonalUse(true)}
                            className={`${
                                isPersonalUse
                                    ? 'bg-[#072b73] text-white'
                                    : 'bg-gray-300 text-gray-700'
                            } py-2.5 px-5 border-none rounded-md cursor-pointer`}>
                            Sí
                        </Button>
                        <Button
                            type='button'
                            variant={'outline'}
                            onClick={() => setPersonalUse(false)}
                            className={`${
                                !isPersonalUse
                                    ? 'bg-[#072b73] text-white'
                                    : 'bg-gray-300 text-gray-700'
                            } py-2.5 px-5 border-none rounded-md cursor-pointer`}>
                            No
                        </Button>
                    </Field>

                    <Field>
                        <div className='flex flex-col items-center justify-center gap-4'>
                            <FieldLabel>
                                ¿Cuánto cuesta tu {selectedBrand}?
                            </FieldLabel>
                            <div className='relative w-full'>
                                {data.car.worth > 0 && (
                                    <span className='absolute left-4 top-1/2 -translate-y-1/2 text-orange-500 font-semibold'>
                                        RD$
                                    </span>
                                )}
                                <Input
                                    type='text'
                                    placeholder='Ingresa el valor'
                                    value={data.car.worth || ''}
                                    onChange={handleValueChange}
                                    className={`text-center ${
                                        data.car.worth > 0
                                            ? 'text-orange-500 font-semibold'
                                            : ''
                                    }`}
                                />
                            </div>
                            <p className='text-sm text-gray-600 text-center'>
                                Aseguramos vehículos desde <br />
                                RD$200,000 hasta RD$7,000,000
                            </p>
                        </div>
                    </Field>
                </FieldGroup>
            </FieldSet>
        </FieldGroup>
    );
}
