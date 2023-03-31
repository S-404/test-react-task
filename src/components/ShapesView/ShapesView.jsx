import React, {useEffect, useState} from 'react';
import Shape from "../Shape/Shape";
import {useSelector} from "react-redux";
import {useActions} from "../../hooks/useActions";


const ShapesView = () => {

    const {data, loading} = useSelector(state => state.data)
    const {colorFilters, formFilters, darkFilters, viewColumns} = useSelector(state => state.view)
    const [myStyle, setMyStyle] = useState({})
    const {fetchData} = useActions()


    /*
    при изменении фильтров запрашиваем новые данные
    также вместо запросов на каждое изменение фильтра (если получаем данные целиком) -
    вариант использовать хук для фильтрации данных ('src/hooks/useFilteredData.js')
    const filteredData = useFilteredData(data, colorFilters, formFilters, darkFilters)
    */
    useEffect(() => {
        //подготавливаем фильтры для запроса
        const darkFilter = darkFilters
        const colorFilter = Object.keys(colorFilters).reduce((prev, curr,) =>
            colorFilters[curr] ? [...prev, curr] : prev, [])
        const formFilter = Object.keys(formFilters).reduce((prev, curr,) =>
            formFilters[curr] ? [...prev, curr] : prev, [])

        fetchData({colorFilter, darkFilter, formFilter})
    }, [colorFilters, formFilters, darkFilters])


    /*
    тут лаконичный вариант добавить инлайн стиль для грида
    вместо обработки массива перед отрисовкой на флекс
    */
    useEffect(() => {
        setMyStyle({...myStyle, gridTemplateColumns: `repeat(${viewColumns},1fr)`})
    }, [viewColumns])


    // вместо лоадера
    if (loading) return <div>loading...</div>

    return (
        <div className='app__shapes' style={myStyle}>
            {data.map(item => (
                <Shape
                    key={`itemKey_${item.form}_${Math.random()}`}
                    form={item.form}
                    dark={item.dark}
                    color={item.color}
                />
            ))}
        </div>
    );
};

export default ShapesView;