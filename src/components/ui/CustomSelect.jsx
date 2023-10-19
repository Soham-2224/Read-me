import * as React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select"

/**
 * A custom select component.
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {string} [props.placeholder] - The placeholder text for the select input.
 * @param {Array<Object>} [props.options=[]] - An array of options to populate the select dropdown.
 * @param {string} [props.className] - Additional CSS classes to apply to the select element.
 * @param {string} [props.selectLabel] - A label for the select input.
 *
 * @returns {JSX.Element} The rendered CustomSelect component.
 */

export function CustomSelect({placeholder, options = [], className, selectLabel, onChange}) {
    return (
        <Select onValueChange={(e) => onChange(e)}>
            <SelectTrigger className={className}>
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup className=" max-h-80">
                    <SelectLabel>{selectLabel}</SelectLabel>
                    {options.map(option => (
                        <SelectItem value={option}>{option}</SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
