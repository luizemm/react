import React from "react";

// Atributos
// Renderização condicional
const buttonA = <button>Histórico dos clientes</button>;
const buttonB = <button>Cadastrar cliente</button>;
const hasCustumer = true;

// Listas e chaves
const listCustomer = [
    {
        id: 1,
        name: 'Luiz',
        skills: ['React', 'Node', 'CSS']
    },
    {
        id: 2,
        name: 'Aline',
        skills: ['React native', 'Node', 'JS']
    },
    {
        id: 3,
        name: 'Bruno',
        skills: ['HTML', 'CSS']
    },
    {
        id: 4,
        name: 'Rafael',
        skills: ['Java']
    }
];

// Manipulando eventos
const showEvent = () => {
    console.log('evento');
};

const eventButton = <button onClick={showEvent}>Mostrar Evento</button>;



const App = () => {

    // Renderização condicional
    const renderShowHistory = (
        <div>
            Clique no botão abaixo para visualizar o histórico dos clientes
            <br />
            {buttonA}
        </div>
    );

    const renderAddCustumer = (
        <div>
            Clique abaixo para cadastrar o cliente
            <br />
            {buttonB}
        </div>
    );

    const customer = 'Luiz Eduardo';

    const showCustomer = () => {
        if(hasCustumer){
            return (
                <div>
                    <h3>Nome do cliente: {customer}</h3>
                </div>
            );
        }
    };

    // Listas e chaves e Manipulando eventos
    const handleClick = (e, id) => {
        alert(`Id do cliente a ser deletado: ${id}`);
    }

    const renderListCustomers = (customer) => {
        return (
            <div key={`customer-${customer.id}`}>
                <li>{customer.name} <button onClick={(e) => handleClick(e, customer.id)}> Deletar cliente</button></li>
                <ul>
                    {customer.skills.map(renderSkills)}
                </ul>
            </div>
        );
    };

    const renderSkills = (skill, index) => {
        return (
            <div key={`skill-${index}`}>
                <li>{skill}</li>
            </div>
        );
    };

    return (
        <div>
            <h1>Renderização condicional</h1>
            {hasCustumer ? renderShowHistory : renderAddCustumer}
            <div>
                {showCustomer()}
            </div>
            <p>==============================================================</p>
            <h1>Listas e chaves</h1>
            <div>
                <ul>
                    {listCustomer.map(renderListCustomers)}
                </ul>
            </div>
            <p>==============================================================</p>
            <h1>Manipulando eventos</h1>
            <div>
                {eventButton}
            </div>
        </div>
    );
};

export default App;