import React, { Component } from 'react'
import axios from 'axios'

export default class AddProject extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: ''
        }
    }

    handleSubmit = (event) => {
        // event.preventDefault() ?????
        const body = {
            title: this.state.title,
            description: this.state.description
        }
        axios.post('http://localhost:3000/api/projects', body) //body ==> conteúdo do projeto criado. Se envia como segundo argumento via post
            .then(response => {
                //Uma vez o projeto é criado via post, limpar form:
                this.setState({
                    title: '',
                    description: '',
                })
            })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    render() {
        return (
            <div className="m-5 form-div">
                <form onSubmit={this.handleSubmit} >
                    <div className="form-group px-5">
                        <label className="h2">Title</label>
                        <input
                            className="form-control "
                            type="text"
                            name="title"
                            value={this.state.title}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                    <label className="h2">Description</label>
                        <input
                            className="form-control"
                            type="text"
                            name="description"
                            value={this.state.description}
                            onChange={this.handleChange} />
                    </div>
                    <button type="submit" className="btn btn-info px-3">Add</button>
                </form>
            </div>
        )
    }
}
