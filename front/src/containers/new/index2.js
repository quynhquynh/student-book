import React from 'react'
import './index.css'
import { addStudent } from '../../actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Form from '../../components/form'
import SingleStudent from '../../components/single-student'

class New extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            skills: '',
            firstName: '',
            lastName: '',
            title: '',
            nationality: '',
            src: '',
            alt: '',
            whySofterDeveloper: '',
            longTermVision: '',
            motivatesMe: '',
            favoriteQuote: '',
            joinedOn: '',
            afterSubmit: false
        }
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const form = new FormData(e.target)
        this.props.postData(form)
        this.setState({afterSubmit: true})
    }

    render(){
        const renderForm = () => (
            <div id='form'>
                <h3>add new student</h3>
                <Form onSubmit={this.handleSubmit} onInput={this.handleInput} {...this.state} />
                <Link to='/students'><button>Cancel</button></Link>
            </div>
        )

        const renderSubmit = () => (
            <div id='show-submit'>
                <Link to='/students'>Back to Home</Link>
                <SingleStudent {...this.state} src={this.props.addStudent.src} skills={this.state.skills.split(', ')} />
            </div>
        )
        
        return this.state.afterSubmit ? renderSubmit() : renderForm()
    }

}

const mapStateToProps = ({addStudent}) => {
    return {
        addStudent
    }
}

export default connect(mapStateToProps, {postData: data => addStudent(data)})(New)