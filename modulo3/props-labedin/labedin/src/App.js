import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import ImagemPri from './components/Imagens/pri.png'
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={ImagemPri}
          nome="Priscilla Lucena"
          descricao="Oi, eu sou a Priscilla. Sou estudante Labenu e mãe em tempo integral em busca de uma colocaçao como Dev."
        />
        
        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>

      <div ClassName="container-card-pequeno">
        <CardPequeno
        imagem='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ70y9JSe58O-
        x0cdesPs0Qbww4Ci45r0mtxlmvrsFledI2YrpusqzktCklgh7vzxVnbAs&usqp=CAU'
        info= "E-mail:"
        descricao= "prilucenaoliveira@gmail.com"
        />

        <CardPequeno
        imagem='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX///8AAAD7+/v4+Pg1NTXs7
        OyHh4fy8vKsrKxXV1e2trb19fXOzs7Y2NgQEBDT09Pm5uaVlZV9fX0/Pz+cnJzf398sLCy/v7+jo6NwcHBkZGSPj48mJiZSUlLHx8d6enpHR0dqamoeHh5hYWE8PDxEREQVFRW6uroyPLxSAAAGW0lEQVR4nO2d61bqMBCFKchFEK8gKKgUPPL+b3iQChSaNjuXyUxY+f7blS1dyWTPpa1WIpFIJBKJRCKRSCQSiUQikYiIUfdz8PT8flNwmy8m22m/zb0qXzzOerf3mYLvt/m4w706Z+56LypxR5abYZd7jQ6Me43qDnwM43xfR4NvSN+e3pR7ucZ0Fz+4vl9uP7mXbEQHez3PWd1xLxvnyULfLx+RvKufS0uBO3oRnB79N3t9O5YzbgE6Pp30/fLFLaGZZ2eBu59xzK2inu7Kg8AdA24hdYz96NvR45aiZutNYJa9c4tRMfAocHf8ywtVJ14FZtnNiFvRBb4FipPo9xUtEPWizggE7q4b3LJOTEkEZtkzt7ADfaUL44M5t7Q/PqgEZtkDt7Y9CzqB2Y+EDfWBUKCI4KZNKlBCFO7jvtQIt516Ry0we2NW+I9cYcZrwVFEa5e8siokO+vLDBkF+r9RqFjzCaQ+KQ7wnRjzQApvuAS2bwIpzLhsYgv3d5Xn+cbc9ee6KW6MVvnzNTsmJR7mzZnhCo8sArsmS3y5zPOOv0z+fMGi0GSfUR1pU5N3ILi6X17h5W366icYREQcoRv+kk5qnzGFNx0Onx/+AZqCrhEqkSM4vQXX1uwmwS5W+AR4e42tTPd6oQmr8OE3uLIX7YPAtz38RRhcGGAHYmnVl+AeP1aQgPznQcc8uF+D2cDQsnLoUaHN4T5U1LWBnoW5WaEdfuy8x2492C0sdGiKOd010dolkOcaejMdIovCXlLwNf0m1VMF8qDQYPIRedgPqZ4qUMIJjUM6UHRKqqcKVEAKl29BN35KOQr8KoTCGko5CvwqhMIHSjkKIJfl+t9S2OaEjnxKOQoghU/gw7rQNZhUTxVIYQ4+DLtrkuqpAp2HS7AuHavtpxVkuShwq8FuYrSCKmBXfCxsg4K24AkoMCsDWQ9Yg03o7AzoByO7aR97VGhPGHW8gRsimKJBjx5fjMCshf7eilaNBTdM0cSRbmEdNMETPIUIV3tpPDI0OYA6Iv6AbAz9Px/Ok67CyCph0CDT8Cvm8EPCu/ojgy7YunqYR4NsPkNNjUnN3kbpfRsVxTE0tJm1wi4qGmdGZY1rhuZS02qavNysPZ3gVQB7PsILbLUMFe747s2H2+1gAp8QJ1j6EgIUz55g6SsNU3r5B4dAsl4gFUztz4abhQtMxYk2oyEsYWqdoe2WKcPVOQMXNDnDVstO3i/zx33wm9MB+oaZAsb2LrDyyxXGaSC2g2jMuOcTCHq5rrDOkCBskD3BOnkId2vsYesn2dMxnOhlA3MXKX3kxncYFtBfMNjHDljc181gn3DmPvqqGQHDMYjjGgHDBmlbgRn7R4/QNpLyDxxoEQen3OL2GHXpGRI68VsD4UWY+bQ/QHfDEDOZzm3cZQPcUz+OUP2I7AHbiXcahWJ+Qp8zIctwz205g+RH5GlRr4HiRxT1E5Jsp6J+QoqbsKCNtCD3rVDQRlrg+0wU9xN696QEji73e8UQcqk4x+f8RBHzEiv4HPIpZaznBf7KT14lDdgt400h54S2RnzlaXin7DVi8GWZJgR/rMSPAS7A5q7HSxZD8Ncf/NyihH/Cw8MtSlzIfY577MYzms0AZ4+fW4CWtmOxm9jD/oTbsf+Pe/kITp/TEXzYn3ApO0W7v5nJ7RUKPykO2J8Y4k+KA9a3fanXwgq2J8aWe+E4difGinvZJlidGDI+SAJiY/ILy8ToMJqDXCDSQKwHHJRQQqiBWI/pRHrB7lMdhq6UgAo9U8xcKXQAoSiMcvvCEr4YJuGpmOInM/A8BmdXjAttuMk0ooD0HPSziCzN9n4ALXD2cnx7sPKFSLeZAqh8QWBRAk4HyHyLKFa3R/+h5xX3El3Rbjaic2kIunyb8FwagqaSX0g1vhONAiPfZgqajDfeDlhvNIzqiSIRo6c+VROZvVZP7WYTSSJGz6hGYP2nrqJDbbwtuZflE6XxFpWLr0O12USS70VRVBJFaa/VUzXermibKbjcbCJ08XVcGG8Ruvg6zodKia4htSUvK7yaaKZM2XiLpqzEjFPZIvpZiOg4DgmJoADRjkNKMWIXX8ffaLCIXXwdRRGKwNZCf+xd/
        sjKSswYra/EXqtnAHw/N3Jer8Req+caPO5EIpFIJBKJRCKRSCQSiURCwX8QmFQlLb/QnQAAAABJRU5ErkJggg=='
        info= "Endereço:"
        descricao= "Avenida Iguaçu, 2211"
        />

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="http://tecnobird.com.br/wp-content/uploads/2016/01/asseio-rentokil.jpg"
          nome="Asseio"
          descricao="Coordenadora do Setor técnico - 
          Realizava o controle de atendimento ao cliente via telefone e e-mail visando o padrão da empresa;
          Fazia a gestão das equipes técnicas internas e externas verificando a qualidade dos serviços prestados;
          Elaborava relatórios específicos para auditorias da Vigilância Sanitária;"
        />

        <CardGrande
          imagem="https://www.logolynx.com/images/logolynx/f9/f93d41240543f3576e2c9a2eedfcda7c.jpeg"
          nome="Rentokil"
          descricao="Gestora de logística e implantações - Controlar atendimento ao cliente de acordo com a periodicidade; 
          controlar visitas dos técnicos de acordo com o planejado e remanejar atendimentos que não ocorreram; avisar clientes sobre
          datas para novas implantações; "
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
