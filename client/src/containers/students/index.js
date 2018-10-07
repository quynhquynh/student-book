import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchStudents } from '../../actions';
import './index.css';
import List from '../../components/list';
import Loading from '../../components/loading';

class Students extends React.Component {
  componentDidMount() {
    const url = '/api/students';
    this.props.fetchStudents(url);
  }

  render() {
    const { hasError, isLoading, students } = this.props;
    if (hasError) {
      return <p>Sorry! Loading items errored</p>;
    }
    if (isLoading) {
      return <Loading />;
    }
    if (!students) {
      return <p>Students not received</p>;
    }

    return (
      <div id="main">
        <div id="title">
          <h2>Student book</h2>
          <Link to="/students/new">
            <button>Add new student</button>
          </Link>
        </div>
        <ul>
          {students.map(student => (
            <List key={student._id} {...student} />
          ))}
        </ul>
      </div>
    );
  }
}

Students.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
  students: PropTypes.array.isRequired,
  fetchStudents: PropTypes.func.isRequired
};

const mapStateToProps = ({ isLoading, hasError, students }) => {
  return {
    isLoading,
    hasError,
    students
  };
};

export default connect(
  mapStateToProps,
  { fetchStudents }
)(Students);
