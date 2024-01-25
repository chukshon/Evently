import React, { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { ICategory } from '@/lib/database/models/category.model'

type DropdownProps = {
    value?: string
    onChangeHandler?: () => void
}
const Dropdown = ({ value, onChangeHandler }: DropdownProps) => {
    const [categories, setCategories] = useState<ICategory[]>([])
    return (
        <Select value={value} onValueChange={onChangeHandler}>
            <SelectTrigger className="select-field">
                <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
                {categories.length > 0 && categories.map((category) => {
                    return <SelectItem key={category.id} className="select-item p-regular-14" value="light">{category.name}</SelectItem>
                })}
            </SelectContent>
        </Select>
    )
}

export default Dropdown
