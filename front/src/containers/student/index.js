import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchStudents } from '../../actions'
import SingleStudent from '../../components/single-student'
import './index.css'

class Student extends React.Component{
    componentDidMount(){
        const {id, fetchData} = this.props
        fetchData(`/students/${id}`)
    }

    render(){
        const { hasError, isLoading, student } = this.props
        
        if(hasError){
            return <p>Sorry! Loading items errored</p>
        }
        if(isLoading){
            return <p>Loading...</p>
        }
        if(!student){
            return <p>Students not received</p>
        }
        
        return (
            <div id='main'>
                <div>
                    <Link to='/students'>Back to Home</Link>
                    <div id='btn'>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                </div>
                <SingleStudent {...student} />
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    const { isLoading, hasError, student } = state
    const { id } = props.match.params
    return {
        student: student[0],
        id,
        isLoading, 
        hasError
    }
}

export default connect(mapStateToProps, { fetchData: url => fetchStudents(url) })(Student)