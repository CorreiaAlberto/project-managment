import React, { Component } from 'react'
import axios from 'axios'

export default class ProjectDetails extends Component {
    constructor(props) {
        super(props)
        console.log('props in ProjectDetails: ', props)
        this.state = {
            id: props.match.params.id, //id do projeto, enviado via props em App.js
            project: {}
        }
    }

    componentDidMount(){
        axios.get(`http://localhost:3000/api/projects/${this.state.id}`) //busca o projeto com id salvo no state. 
        .then(response => {
            this.setState({
                project: response.data
            })
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.project.title}</h2>
                <p>{this.state.project.description}</p>
            </div>
        )
    }
}
