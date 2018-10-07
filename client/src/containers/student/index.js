import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStudents, updateStudent, deleteStudent } from '../../actions';
import SingleStudent from '../../components/single-student';
import Loading from '../../components/loading';
import Edit from '../../components/edit';
import './index.css';

class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      skills: '',
      firstName: '',
      lastName: '',
      title: '',
      nationality: '',
      alt: '',
      src: '',
      whySofterDeveloper: '',
      longTermVision: '',
      motivatesMe: '',
      favoriteQuote: '',
      joinedOn: ''
    };
  }

  handleEdit = () => {
    this.setState(prevState => ({
      isEditing: !prevState.isEditing
    }));
  };

  componentDidMount() {
    const { id, fetchData } = this.props;
    fetchData(`/api/students/${id}`);
  }

  componentDidUpdate() {
    const { student } = this.props;
    const { firstName } = this.state;
    if (student && student.firstName !== firstName) {
      this.setState({
        ...student
      });
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { id, updateData } = this.props;
    const form = new FormData(e.target);
    updateData(form, id);
    this.setState(prevState => ({
      isEditing: !prevState.isEditing
    }));
  };

  handleDelete = () => {
    const { id, deleteData, isLoading, hasError } = this.props;
    deleteData(`/api/students/${id}`);
    !isLoading && !hasError && this.props.history.push('/students');
  };

  render() {
    const { hasError, isLoading, student, updatedInfo } = this.props;
    const keys = Object.keys(updatedInfo).length;
    if (hasError) {
      return <p>Sorry! Loading items errored</p>;
    }
    if (isLoading) {
      return <Loading />;
    }
    if (!student) {
      return <p>Students not received</p>;
    }

    const renderEdit = () => (
      <div id="main">
        <div>
          <Link to="/students">Back to Home</Link>
          <div id="btn">
            <button onClick={this.handleDelete}>Delete</button>
          </div>
        </div>
        <Edit
          handleSubmit={this.handleSubmit}
          {...this.state}
          joinedOn={this.state.joinedOn.substr(0, 10)}
          handleEdit={this.handleEdit}
          handleChange={this.handleChange}
        />
      </div>
    );

    const renderShow = () => (
      <div id="main">
        <div>
          <Link to="/students">Back to Home</Link>
          <div id="btn">
            <button onClick={this.handleEdit}>Edit</button>
            <button onClick={this.handleDelete}>Delete</button>
          </div>
        </div>
        {keys ? (
          <SingleStudent
            {...updatedInfo}
            skills={updatedInfo && updatedInfo.skills.join(', ')}
            src={updatedInfo.src}
          />
        ) : (
          <SingleStudent
            {...student}
            skills={student && student.skills.join(', ')}
          />
        )}
      </div>
    );

    return this.state.isEditing ? renderEdit() : renderShow();
  }
}

const mapStateToProps = (state, props) => {
  const { isLoading, hasError, student, updateStudent } = state;
  const { id } = props.match.params;
  return {
    student: student[0],
    id,
    isLoading,
    hasError,
    updatedInfo: updateStudent
  };
};

export default connect(
  mapStateToProps,
  {
    fetchData: url => fetchStudents(url),
    updateData: (data, id) => updateStudent(data, id),
    deleteData: url => deleteStudent(url)
  }
)(Student);
