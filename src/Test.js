import React, { useEffect, useRef, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getViagens } from './redux/dbSlice';
import Pagination from './Pagination';

let PageSize = 1;

const Test = () => {

    const dispatch = useDispatch();
    const db = useSelector((state) => state.viagens);
    console.log(db)

    const refLoading = useRef();

    useEffect(() => {
        const firstRender = refLoading.current;
        if (firstRender !== true) {
            dispatch(getViagens());
            refLoading.current = true;
        }
    });

    return (
        <>
        </>
    );
};

export default Test;