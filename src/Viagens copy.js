import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getViagens, postData } from './redux/dbSlice';
import ReactPaginate from 'react-paginate';
import './pagination.css';
import Nav from './Nav';

function Items({ currentItems }) {

    const dispatch = useDispatch();
    const refTitle = useRef();
    const refSaidas = useRef();
    const refVisitando = useRef();
    const refSumario = useRef();
    const refViagens = useRef();
    const refDiferenciais = useRef();
    const refAtracoes = useRef();
    const refIngressos = useRef();
    const refSeguro = useRef();
    const refRoteiro = useRef();
    const refInformacoes = useRef();
    const refDocumentacao = useRef();
    const refPrecos = useRef();

    const [messageTitle, setMessageTitle] = useState('');
    const [messageSaidas, setMessageSaidas] = useState('');
    const [messageVisitando, setMessageVisitando] = useState('');
    const [messageSumario, setMessageSumario] = useState('');
    const [messageViagens, setMessageViagens] = useState('');
    const [messageDiferenciais, setMessageDiferenciais] = useState('');
    const [messageAtracoes, setMessageAtracoes] = useState('');
    const [messageIngressos, setMessageIngressos] = useState('');
    const [messageSeguro, setMessageSeguro] = useState('');
    const [messageRoteiro, setMessageRoteiro] = useState('');
    const [messageInformacoes, setMessageInformacoes] = useState('');
    const [messageDocumentacao, setMessageDocumentacao] = useState('');
    const [messagePrecos, setMessagePrecos] = useState('');

    const [activeChange, setActiveChange] = useState('');

    const handleChange = (event) => {
        // 👇 Get input value from "event
        console.log(activeChange)
        setMessageTitle(event.target.value);
        setMessageSaidas(event.target.value);
        setMessageVisitando(event.target.value);
        setMessageSumario(event.target.value);
        setMessageViagens(event.target.value);
        setMessageDiferenciais(event.target.value);
        setMessageAtracoes(event.target.value);
        setMessageIngressos(event.target.value);
        setMessageSeguro(event.target.value);
        setMessageRoteiro(event.target.value);
        setMessageInformacoes(event.target.value);
        setMessageDocumentacao(event.target.value);
        setMessagePrecos(event.target.value);

        setActiveChange(true);
    };


    useEffect(() => {
        setActiveChange(false);
    }, [currentItems]);
    return (
        <>
            {currentItems.map((rows, i) => {
                return (
                    <>
                        <Nav />
                        <div className='row' style={{ marginTop: '10px' }} >
                            <div className='col-12'>
                                <input type="text" style={{ height: '100px' }} className='text-center w-100' ref={refTitle} value={(activeChange === true) ? messageTitle : rows.Titulo} onChange={(e) => handleChange(e)} />
                                <button type="button" className="btn btn-danger mt-1 float-end"  onClick={function (e) {
                                    dispatch(postData({ text: refTitle.current.value, table_name: 'Titulo', row_id: rows.id }));
                                }}>Update</button>
                            </div>
                        </div>
                        <div className='row' style={{ marginTop: '10px' }} >
                            <div className='col-12'  >
                                <input type="text" style={{ height: '100px' }} className='text-center w-100' ref={refSaidas} value={(activeChange === true) ? messageSaidas : rows.Saidas} onChange={(e) => handleChange(e)} />
                                <button type="button" className="btn btn-danger mt-1 float-end"  onClick={function (e) {
                                    dispatch(postData({ text: refSaidas.current.value, table_name: 'Saidas', row_id: rows.id }));
                                }}>Update</button>
                            </div>
                        </div>
                        <div className='row' style={{ marginTop: '10px' }} >
                            <div className='col-12'  >
                                <input type="text" style={{ height: '100px' }} className='text-center w-100' ref={refVisitando} value={(activeChange === true) ? messageVisitando : rows.Visitando} onChange={(e) => handleChange(e)} />
                                <button type="button" className="btn btn-danger mt-1 float-end"  onClick={function (e) {
                                    dispatch(postData({ text: refVisitando.current.value, table_name: 'Visitando', row_id: rows.id }));
                                }}>Update</button>
                            </div>
                        </div>
                        <div className='row' style={{ marginTop: '10px' }} >
                            <div className='col-12'  >
                                <input type="text" style={{ height: '100px' }} className='text-center w-100' ref={refSumario} value={(activeChange === true) ? messageSumario : rows.Sumario} onChange={(e) => handleChange(e)} />
                                <button type="button" className="btn btn-danger mt-1 float-end"  onClick={function (e) {
                                    dispatch(postData({ text: refSumario.current.value, table_name: 'Sumario', row_id: rows.id }));
                                }}>Update</button>
                            </div>
                        </div>
                        <div className='row' style={{ marginTop: '10px' }} >
                            <div className='col-12'  >
                                <input type="text" style={{ height: '100px' }} className='text-center w-100' ref={refViagens} value={(activeChange === true) ? messageViagens : rows.Viagens} onChange={(e) => handleChange(e)} />
                                <button type="button" className="btn btn-danger mt-1 float-end"  onClick={function (e) {
                                    dispatch(postData({ text: refViagens.current.value, table_name: 'Viagens', row_id: rows.id }));
                                }}>Update</button>
                            </div>
                        </div>
                        <div className='row' style={{ marginTop: '10px' }} >
                            <div className='col-12'  >
                                <input type="text" style={{ height: '100px' }} className='text-center w-100' ref={refDiferenciais} value={(activeChange === true) ? messageDiferenciais : rows.Diferenciais} onChange={(e) => handleChange(e)} />
                                <button type="button" className="btn btn-danger mt-1 float-end"  onClick={function (e) {
                                    dispatch(postData({ text: refDiferenciais.current.value, table_name: 'Diferenciais', row_id: rows.id }));
                                }}>Update</button>
                            </div>
                        </div>
                        <div className='row' style={{ marginTop: '10px' }} >
                            <div className='col-12'  >
                                <input type="text" style={{ height: '100px' }} className='text-center w-100' ref={refAtracoes} value={(activeChange === true) ? messageAtracoes : rows.Atracoes} onChange={(e) => handleChange(e)} />
                                <button type="button" className="btn btn-danger mt-1 float-end"  onClick={function (e) {
                                    dispatch(postData({ text: refAtracoes.current.value, table_name: 'Atracoes', row_id: rows.id }));
                                }}>Update</button>
                            </div>
                        </div>
                        <div className='row' style={{ marginTop: '10px' }} >
                            <div className='col-12'  >
                                <input type="text" style={{ height: '100px' }} className='text-center w-100' ref={refIngressos} value={(activeChange === true) ? messageIngressos : rows.Ingressos} onChange={(e) => handleChange(e)} />
                                <button type="button" className="btn btn-danger mt-1 float-end"  onClick={function (e) {
                                    dispatch(postData({ text: refIngressos.current.value, table_name: 'Ingressos', row_id: rows.id }));
                                }}>Update</button>
                            </div>
                        </div>
                        <div className='row' style={{ marginTop: '10px' }} >
                            <div className='col-12'  >
                                <input type="text" style={{ height: '100px' }} className='text-center w-100' ref={refSeguro} value={(activeChange === true) ? messageSeguro : rows.Seguro} onChange={(e) => handleChange(e)} />
                                <button type="button" className="btn btn-danger mt-1 float-end"  onClick={function (e) {
                                    dispatch(postData({ text: refSeguro.current.value, table_name: 'Seguro', row_id: rows.id }));
                                }}>Update</button>
                            </div>
                        </div>
                        <div className='row' style={{ marginTop: '10px' }} >
                            <div className='col-12'  >
                                <input type="text" style={{ height: '100px' }} className='text-center w-100' ref={refRoteiro} value={(activeChange === true) ? messageRoteiro : rows.Roteiro} onChange={(e) => handleChange(e)} />
                                <button type="button" className="btn btn-danger mt-1 float-end"  onClick={function (e) {
                                    dispatch(postData({ text: refRoteiro.current.value, table_name: 'Roteiro', row_id: rows.id }));
                                }}>Update</button>
                            </div>
                        </div>
                        <div className='row' style={{ marginTop: '10px' }} >
                            <div className='col-12'  >
                                <input type="text" style={{ height: '100px' }} className='text-center w-100' ref={refInformacoes} value={(activeChange === true) ? messageInformacoes : rows.Informacoes} onChange={(e) => handleChange(e)} />
                                <button type="button" className="btn btn-danger mt-1 float-end"  onClick={function (e) {
                                    dispatch(postData({ text: refInformacoes.current.value, table_name: 'Informacoes', row_id: rows.id }));
                                }}>Update</button>
                            </div>
                        </div>
                        <div className='row' style={{ marginTop: '10px' }} >
                            <div className='col-12'  >
                                <input type="text" style={{ height: '100px' }} className='text-center w-100' ref={refDocumentacao} value={(activeChange === true) ? messageDocumentacao : rows.Documentacao} onChange={(e) => handleChange(e)} />
                                <button type="button" className="btn btn-danger mt-1 float-end"  onClick={function (e) {
                                    dispatch(postData({ text: refDocumentacao.current.value, table_name: 'Documentacao', row_id: rows.id }));
                                }}>Update</button>
                            </div>
                        </div>
                        <div className='row' style={{ marginTop: '10px' }} >
                            <div className='col-12'  >
                                <input type="text" style={{ height: '100px' }} className='text-center w-100' ref={refPrecos} value={(activeChange === true) ? messagePrecos : rows.Precos} onChange={(e) => handleChange(e)} />
                                <button type="button" className="btn btn-danger mt-1 float-end"  onClick={function (e) {
                                    dispatch(postData({ text: refPrecos.current.value, table_name: 'Precos', row_id: rows.id }));
                                }}>Update</button>
                            </div>
                        </div>
                    </>
                );
            })}
        </>
    );
}

function PaginatedItems({ itemsPerPage }) {

    const dispatch = useDispatch();
    const rows = useSelector((state) => state.viagens.rows);
    const refLoading = useRef();

    const firstRender = refLoading.current;
    if (firstRender !== true) {
        dispatch(getViagens());
        refLoading.current = true;
    }
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = rows.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(rows.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % rows.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <>
            {(currentItems.length > 0) ? <Items currentItems={currentItems} /> : console.log("nul")}
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                containerClassName={'pagination'} /* as this work same as bootstrap class */
                subContainerClassName={'pages pagination'} /* as this work same as bootstrap class */
                activeClassName={'active'} /* as this work same as bootstrap class */
            />
        </>
    );
}

export default function Viagens() {
    return (
        <>
            <PaginatedItems itemsPerPage={1} />,
        </>
    );
}