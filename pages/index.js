import Menu from '../components/Menu'
import { Jumbotron, Button, Container } from 'reactstrap';

function Home() {
    return (
        <div>
            <Menu />
            <Jumbotron fluid className="descr-top">
                <style>
                    {`.descr-top{
                        background-color: #17c3c7;
                        color: #343a40;
                    }`}
                </style>
                <Container className="text-center">
                <h1 className="display-3">Temos a solução que você precisa!</h1>
                <p className="lead">Gerenciamento inteligente de Vacinas.</p>
                <p className="lead">
                    <a href='/orcamento' className="btn btn-outline-danger btn-lg mt-4">Orçamento</a>
                </p>
                </Container>
            </Jumbotron>
        </div>
    )
}
  
  export default Home;