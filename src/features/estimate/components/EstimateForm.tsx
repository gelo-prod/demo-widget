import { useState } from 'react';
import {
    CarInsurances,
    ReplacementsCar,
    type RequestUnit,
} from '../type/types';
import { CustomerDataForm } from './CustomerDataForm';
import { CarForm } from './CarForm';
import { Button } from '@/components/ui/button';
import { LawInsuranceForm } from './LawInsuranceForm';
import { FieldSeparator } from '@/components/ui/field';

export const EstimateForm = ({ storeToken } : {storeToken: string}) => {
    
    const [formData, setFormData] = useState<RequestUnit>({
        customer: {
            email: '',
            phone: '',
            documentType: undefined,
            documentNumber: '',
            gender: undefined,
            birthDate: '',
        },
        car: {
            modelId: 0,
            year: new Date().getFullYear(),
            isNew: false,
            fuelType: undefined,
            gasType: undefined,
            isPersonalUse: true,
            worth: 0,
            terms: {
                insuranceType: CarInsurances.BASE,
                vehicleAssitance: false,
                replacementCar: ReplacementsCar.NONE,
            },
        },
    });
    const handleCarChange = (prop: string, value: string | number | boolean) => {
        setFormData((prev) => ({
            ...prev,
            car: {
                ...prev.car,
                [prop]:
                    value === 'true' ? true : value === 'false' ? false : value,
            },
        }));
    };
    const handleSubmit = () => {
        console.log(formData)
    }

    // useEffect(() => {
    //     if (!storeToken) return <span>No token</span>
    //     console.log(storeToken)
    // }, [])

    if(!storeToken) return <span>No token</span>
    console.log(storeToken, 'storeToken component')

    return (
        <form>
            <div className='flex flex-col gap-8 max-w-3xl'>
                <CustomerDataForm data={formData} setFormData={setFormData} />
                <FieldSeparator/>
                <CarForm data={formData} onChange={handleCarChange} />
                <FieldSeparator/>
                <LawInsuranceForm
                    selected={formData.car.terms.insuranceType}
                    onSelect={(plan) =>
                        setFormData((s) => ({
                            ...s,
                            car: {
                                ...s.car,
                                terms: { ...s.car.terms, insuranceType: plan },
                            },
                        }))
                    }
                />
                <div className='flex items-center justify-center'>
                    <Button
                        onClick={handleSubmit}
                        type='button'
                        className='bg-orange-500 hover:bg-orange-600 h-10 px-10 text-lg rounded-md shadow-md hover:shadow-xl
               cursor-pointer'>
                        Cotizar
                    </Button>
                </div>
            </div>
        </form>
    );
};
