import Nav from './Nav';
import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postInsert } from './redux/dbSlice';

export default function Create() {

    const dispatch = useDispatch();
    const rows = useSelector((state) => state.viagens.status_insert);

    useEffect(() => {
       if(rows.affectedRows === 1){
        alert("Criado!")
       }
    }, [rows]);

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

    return (
        <>
            <Nav />
            <div className="input-group mb-3">
                <span className="input-group-text">Titulo</span>
                <input type="text" className="form-control" ref={refTitle} />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Saidas</span>
                <input type="text" className="form-control" ref={refSaidas} />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Visitando</span>
                <input type="text" className="form-control" ref={refVisitando} />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Sumario</span>
                <input type="text" className="form-control" ref={refSumario} />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Viagens</span>
                <input type="text" className="form-control" ref={refViagens} />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Diferenciais</span>
                <input type="text" className="form-control" ref={refDiferenciais} />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Atracoes</span>
                <input type="text" className="form-control" ref={refAtracoes} />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Ingressos</span>
                <input type="text" className="form-control" ref={refIngressos} />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Seguro</span>
                <input type="text" className="form-control" ref={refSeguro} />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Roteiro</span>
                <input type="text" className="form-control" ref={refRoteiro} />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Informacoes</span>
                <input type="text" className="form-control" ref={refInformacoes} />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Documentacao</span>
                <input type="text" className="form-control" ref={refDocumentacao} />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Precos</span>
                <input type="text" className="form-control" ref={refPrecos} />
            </div>
            <button type="button" className="btn btn-secondary" onClick={function () {
                alert(refTitle.current.value)
                dispatch(postInsert({
                    Titulo: refTitle.current.value,
                    Saidas: refSaidas.current.value,
                    Visitando: refVisitando.current.value,
                    Sumario: refSumario.current.value,
                    Viagens: refViagens.current.value,
                    Diferenciais: refDiferenciais.current.value,
                    Atracoes: refAtracoes.current.value,
                    Ingressos: refIngressos.current.value,
                    Seguro: refSeguro.current.value,
                    Roteiro: refRoteiro.current.value,
                    Informacoes: refInformacoes.current.value,
                    Documentacao: refDocumentacao.current.value,
                    Precos: refPrecos.current.value

                }));
            }}>Insert</button>
        </>
    );
}