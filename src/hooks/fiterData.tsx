import { useMemo } from "react";
import { FilterDataProps } from "../types";

const filterData = ({notes, category_name}: FilterDataProps) => {
   const filteredData =  useMemo(() => {
        if (category_name === 'All') {
            return notes;
        }
        return notes.filter((item: any) => item.category === category_name);
    }, [category_name, notes]);

    return {filteredData}
}

export default filterData
