import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSet,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { SelectdocumentType } from './SelectDocumentType';
import type { RequestUnit } from '../type/types';
import type { Dispatch } from 'react';

interface CustomDataFormProps {
    data: RequestUnit;
    setFormData: Dispatch<React.SetStateAction<RequestUnit>>;
}

export const CustomerDataForm = ({
    data,
    setFormData,
}: CustomDataFormProps) => {
    return (
        <FieldGroup>
            <FieldSet>
                <FieldLegend className='text-center text-blue-700 font-bold'>
                    ¡Empecemos!
                </FieldLegend>
                <FieldDescription className='text-center text-blue-600 font-semibold'>
                    Ingresa los siguientes datos
                </FieldDescription>
                <FieldGroup>
                    <Field>
                        <FieldLabel htmlFor='email' className='text-blue-500'>
                            Correo electronico
                        </FieldLabel>
                        <Input
                            type='text'
                            placeholder='hola@unit.com.do'
                            className='placeholder:text-gray-500 pl-6'
                        />
                    </Field>
                    <Field>
                        <FieldLabel className='text-blue-500'>
                            Telefono/WhatsApp
                        </FieldLabel>
                        <Input placeholder='(809)-999-9999' className='pl-6' />
                    </Field>
                    <Field>
                        <FieldLabel className='text-blue-500'>
                            Documento
                        </FieldLabel>
                        <SelectdocumentType
                            value={data.customer.documentType}
                            onChange={(val) => {
                                setFormData((s) => ({
                                    ...s,
                                    customer: {
                                        ...s.customer,
                                        documentType: val,
                                    },
                                }));
                                console.log('select', val);
                            }}
                        />
                    </Field>
                    <Field>
                        <Input placeholder='___-______-_' className='pl-6' />
                    </Field>
                </FieldGroup>
            </FieldSet>
        </FieldGroup>
    );
};
