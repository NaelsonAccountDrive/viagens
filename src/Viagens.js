import React, { useEffect, useRef, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getViagens } from './redux/dbSlice';
import Pagination from './Pagination';

let PageSize = 1;

const Viagens = () => {

    const dispatch = useDispatch();
    const db = useSelector((state) => state.viagens);

    const [currentPage, setCurrentPage] = useState(1);
    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return db.rows.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, db]);

    const refLoading = useRef();
    console.log(currentTableData);

    useEffect(() => {
        const firstRender = refLoading.current;
        if (firstRender !== true) {
            dispatch(getViagens());
            refLoading.current = true;
        }
    });

    return (
        <>
            {
                currentTableData.map(item => {
                    return (
                        <div key={item} className='container'>
                            <div className='col-12'>
                                <section className=' text-center'>{item.Titulo}</section>
                            </div>
                            <p className='mt-2' style={{ border: '1px solid #D0D7DE' }}></p>
                            <div className='col-12'>
                                <section className=' text-center'>{item.Saidas}</section>
                            </div>
                            <p className='mt-2' style={{ border: '1px solid #D0D7DE' }}></p>
                            <div className='col-12'>
                                <section className=' text-center'>{item.Visitando}</section>
                            </div>
                            <p className='mt-2' style={{ border: '1px solid #D0D7DE' }}></p>
                            <div className='col-12'>
                                <section className=' text-center'>{item.Sumario}</section>
                            </div>
                            <p className='mt-2' style={{ border: '1px solid #D0D7DE' }}></p>
                            <div className='col-12'>
                                <section className=' text-center'>{item.Viagens}</section>
                            </div>
                            <p className='mt-2' style={{ border: '1px solid #D0D7DE' }}></p>
                            <div className='col-12'>
                                <section className=' text-center'>{item.Diferenciais}</section>
                            </div>
                            <p className='mt-2' style={{ border: '1px solid #D0D7DE' }}></p>
                            <div className='col-12'>
                                <section className=' text-center'>{item.Atracoes}</section>
                            </div>
                            <p className='mt-2' style={{ border: '1px solid #D0D7DE' }}></p>
                            <div className='col-12'>
                                <section className=' text-center'>{item.Ingressos}</section>
                            </div>
                            <p className='mt-2' style={{ border: '1px solid #D0D7DE' }}></p>
                            <div className='col-12'>
                                <section className=' text-center'>{item.Seguro}</section>
                            </div>
                            <p className='mt-2' style={{ border: '1px solid #D0D7DE' }}></p>
                            <div className='col-12'>
                                <section className=' text-center'>{item.Roteiro}</section>
                            </div>
                            <p className='mt-2' style={{ border: '1px solid #D0D7DE' }}></p>
                            <div className='col-12'>
                                <section className=' text-center'>{item.Informacoes}</section>
                            </div>
                            <p className='mt-2' style={{ border: '1px solid #D0D7DE' }}></p>
                            <div className='col-12'>
                                <section className=' text-center'>{item.Documentacao}</section>
                            </div>
                            <p className='mt-2' style={{ border: '1px solid #D0D7DE' }}></p>
                            <div className='col-12'>
                                <section className=' text-center'>{item.Precos}</section>
                            </div>
                        </div>

                    );
                })}
            <p className='mt-2' style={{ border: '1px solid #D0D7DE' }}></p>
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={50}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
            />
        </>
    );
};

export default Viagens;