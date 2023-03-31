import {useMemo} from "react";

//на случай если понадобится фильтровать полученный массив с данными
export const useFilteredData = (data, colorFilters, formFilters, darkFilters) => {

    return useMemo(() => {

        //подготавливаем фильтры для запроса
        const darkFilter = darkFilters
        const colorFilter = Object.keys(colorFilters).reduce((prev, curr) =>
            colorFilters[curr] ? [...prev, curr] : prev, [])
        const formFilter = Object.keys(formFilters).reduce((prev, curr) =>
            formFilters[curr] ? [...prev, curr] : prev, [])

        if (data.length) {
            return [...data]
                .filter((item) => {
                        return formFilter.includes(item.form) &&
                            colorFilter.includes(item.color) &&
                            (darkFilter === 'all' || (darkFilter === 'dark') === item.dark)
                    }
                )
        }
        return data
    }, [data, colorFilters, formFilters, darkFilters])
}

