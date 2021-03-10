import React from 'react';
import Menu from '../components/Menu';
import Head from 'next/head';
import Rodape from '../components/Rodape';

import {Container, Jumbotron, Button, Form, FormGroup, Label, Input} from 'reactstrap';

function Orcamento() {
    return (
        <div>
            <Head>
                <title>Orçamento - Vacina</title>
                <meta name="description" content="Site para orçamentos na área das vacinas." />
            </Head>
            <Menu />

            <Jumbotron fluid className="descr-top">
            <style>
                    {`.descr-top{
                        background-color: #0310ffa8;
                        color: #fff;
                        padding-top: 40px;
                        padding-bottom: 40px;
                        margin-bottom: 0rem !important;
                    }`}
                </style>
                <Container className="text-center">
                    <h1 className="display-04">Orçamento</h1>
                </Container>
            </Jumbotron>
                <Jumbotron fluid className="form-orcamento">
                    <style>
                        {`.form-orcamento{
                            padding-top: 80px;
                            padding-bottom: 80px;
                            background-color: #fff;
                            margin-bottom: 0rem !important;
                        }`}
                    </style>
                    <Container>
                        <Form>
                            <FormGroup>
                                <Label for="name">Nome</Label>
                                <Input type="text" name="name" id="name" placeholder="Digite seu nome completo" />
                                <Label for="email">Email</Label>
                                <Input type="email" name="email" id="email" placeholder="Digite seu email" />
                                <Label for="telefone">Telefone</Label>
                                <Input type="text" name="telefone" id="telefone" placeholder="(XX) XXXXX-XXXX" />
                                <Label for="whatsapp">Whatsapp</Label>
                                <Input type="text" name="whatsapp" id="whatsapp" placeholder="(XX) XXXXX-XXXX" />
                                <Label for="projeto">Projeto</Label>
                                <Input type="textarea" name="projeto" id="projeto" placeholder="Fale sobre seu projeto" />
                            </FormGroup>
                            <Button type="submit" outline color="primary">Enviar</Button>
                        </Form>
                    </Container>
                </Jumbotron>
                <Rodape />
        </div>
    );
}
  
  export default Orcamento;