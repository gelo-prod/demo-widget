import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

interface SelectData {
    items: string[];
    label?: string;
    placeHolder: string;
    fn: (value: string) => void;
}

export function SelectType({ items, label, placeHolder, fn }: SelectData) {
    return (
        <Select onValueChange={(e) => fn(e)}>
            <SelectTrigger className='w-[180px]'>
                <SelectValue placeholder={ placeHolder } />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {label ? <SelectLabel>{label}</SelectLabel> : ''}

                    {items.map((item, i) => (
                        <SelectItem key={i} value={item}>{item}</SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
