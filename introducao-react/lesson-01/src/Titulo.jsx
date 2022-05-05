import React, { Component } from "react";

class Titulo extends Component {

    constructor(props){
        super(props);

        const { setClock } = props;

        this.state = {
            name: 'Carregando...',
            clock: setClock
        }
    }

    componentDidMount() {
        const { clock } = this.state;

        window.setTimeout(() => {
            this.setState({
                name: 'Clique no Título para alterá-lo'
            })
        }, clock)
    }

    mudarNome(){
        const { setName } = this.props;

        this.setState({
            name: setName
        })
    }

    render(){
        const { name } = this.state;

        return (
            <button className="tituloBtn" onClick={() => this.mudarNome()}>
                <h1>{name}</h1>
            </button>
            
        )
    }
}

export default Titulo;