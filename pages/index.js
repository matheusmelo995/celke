import React from 'react';
import Head from 'next/head';
import Menu from '../components/Menu';
import Rodape from '../components/Rodape';
import { FaSyringe, FaCalendarAlt, FaMapMarkedAlt } from 'react-icons/fa';
import { Jumbotron, Button, Container } from 'reactstrap';

function Home() {
    return (
        <div>
            <Head>
                <title>Home - Vacina</title>
            </Head>
            <Menu />
            <Jumbotron fluid className="descr-top">
                <style>
                    {`.descr-top{
                        background-color: #0310ffa8;
                        color: #fff;
                        margin-bottom: 0rem !important;
                    }`}
                </style>
                <Container className="text-center">
                <h1 className="display-4">Temos a solução que você precisa!</h1>
                <br></br>
                <h3>Gerenciamento inteligente de Vacinas.</h3>
                <p className="lead">
                    <a href='/orcamento' className="btn btn-outline-light btn-lg mt-4">Orçamento</a>
                </p>
                </Container>
            </Jumbotron>

            <Jumbotron fluid className="servicos">
                <style>
                    {`.servicos{
                        background-color: #fff;
                        margin-bottom: 0rem !important;
                    }.circulo{
                        width: 140px;
                        height: 140px;
                        background-color: #0310ffa8;
                        font-size: 52px;
                        color: #fff;
                        padding-top: 20px;
                    }.centralizar{
                        margin: 0 auto !important;
                        float: none !important;
                    }`}
                </style>
                <Container className="text-center">
                    <div>
                        <h2 className="display-4">Serviços</h2>
                        <p className="lead pb-4">Solicite o serviço ideal para sua necessidade:</p>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="rounded-circle circulo centralizar">
                                <FaSyringe/>
                            </div>
                            <h2 className="mt-4 mb-4">Vacinas</h2>
                            <p>
                                Acompanhe seu histórico de vacinação, e saiba quais vacinas você precisa tomar.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <div className="rounded-circle circulo centralizar">
                                <FaCalendarAlt/>
                            </div>
                            <h2 className="mt-4 mb-4">Agendamentos</h2>
                            <p>
                                Realize agendamentos e fique por dentro das datas e locais de atendimento.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <div className="rounded-circle circulo centralizar">
                                <FaMapMarkedAlt/>
                            </div>
                            <h2 className="mt-4 mb-4">Unidade de Saúde</h2>
                            <p>
                                Aqui você tem acesso aos serviços disponibilizados no Posto de Saúde do seu bairro.
                            </p>
                        </div>
                    </div>
                </Container>
            </Jumbotron>
            <Rodape/>
        </div>
    )
}
  
  export default Home;