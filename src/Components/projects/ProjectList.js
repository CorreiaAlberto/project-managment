import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
// import AddProject from './AddProject';


export class ProjectList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projects: []
        }
    }
    componentDidMount() {
        axios.get("http://localhost:3000/api/projects/")
            .then(response => {
                this.setState({
                    projects: response.data
                })
            })
    }
    render() {
        const projects = this.state.projects.map((ele, i) => {
            return (
                <div className="projectsList" key={i}>
                    <Link to={`/projects/${ele._id}`}>
                        <h3>{ele.title}</h3>
                    </Link>
                </div>
            )
        })

        return (
            <div>
                {/* <AddProject/> */}
                {projects}
            </div>
        )
    }
}
export default ProjectList












