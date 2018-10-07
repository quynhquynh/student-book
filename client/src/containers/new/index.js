import React from 'react';
import './index.css';
import { addStudent } from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SingleStudent from '../../components/single-student';
import { Field, reduxForm, getFormValues } from 'redux-form';
import moment from 'moment';

class New extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      afterSubmit: false
    };
  }

  onSubmit = values => {
    const form = new FormData(this.form);
    if (!form.get('joinedOn')) {
      form.set('joinedOn', moment(new Date()).format('YYYY-MM-DD'));
    }
    this.props.postData(form);
    this.setState({ afterSubmit: true });
  };

  renderInput = props => {
    const {
      meta: { touched, error },
      label,
      input,
      type
    } = props;
    return (
      <div>
        <label>{label}</label>
        <input type={type} {...input} />
        <p className="err">{touched ? error : ''}</p>
      </div>
    );
  };

  render() {
    const {
      handleSubmit,
      hasError,
      isLoading,
      values,
      addStudent
    } = this.props;

    const renderForm = () => (
      <div id="form">
        <h3>add new student</h3>
        <form onSubmit={handleSubmit(this.onSubmit)} ref={e => (this.form = e)}>
          <Field
            label="First name: "
            name="firstName"
            component={this.renderInput}
            type="text"
          />
          <Field
            label="Last name: "
            name="lastName"
            component={this.renderInput}
            type="text"
          />
          <Field
            label="Title: "
            name="title"
            component={this.renderInput}
            type="text"
          />
          <Field
            label="Nationality: "
            name="nationality"
            component={this.renderInput}
            type="text"
          />
          <Field
            label="Skills: "
            name="skills"
            component={this.renderInput}
            type="text"
          />
          <Field
            label="Why SoftWare Developer: "
            name="whySofterDeveloper"
            component={this.renderInput}
            type="text"
          />
          <Field
            label="Long-term vision: "
            name="longTermVision"
            component={this.renderInput}
            type="text"
          />
          <Field
            label="Motivates me: "
            name="motivatesMe"
            component={this.renderInput}
            type="text"
          />
          <Field
            label="Favorite Quote: "
            name="favoriteQuote"
            component={this.renderInput}
            type="text"
          />
          <Field
            label="Joined on: "
            name="joinedOn"
            component={this.renderInput}
            type="date"
          />

          <div>
            <label>Upload profile picture: </label>
            <input type="file" name="src" />
          </div>
          <input type="submit" value="Submit" />
          <Link to="/students">
            <button>Cancel</button>
          </Link>
        </form>
      </div>
    );

    const renderSubmit = () => (
      <div id="show-submit">
        <Link to="/students">Back to Home</Link>
        <SingleStudent
          {...values}
          joinedOn={addStudent.joinedOn}
          src={addStudent.src}
          skills={values.skills}
        />
      </div>
    );

    return this.state.afterSubmit && !hasError && !isLoading
      ? renderSubmit()
      : renderForm();
  }
}

const mapStateToProps = state => {
  const { addStudent, hasError, isLoading } = state;
  return {
    addStudent,
    hasError,
    isLoading,
    values: getFormValues('NewStudent')(state)
  };
};

const validate = values => {
  const { firstName, lastName, nationality, skills } = values;
  const errors = {
    firstName: !firstName ? 'Enter first name' : '',
    lastName: !lastName ? 'Enter last name' : '',
    nationality: !nationality ? 'Enter nationality' : '',
    skills: !skills ? 'Enter skills' : ''
  };
  return errors;
};

export default reduxForm({
  validate,
  form: 'NewStudent'
})(
  connect(
    mapStateToProps,
    { postData: data => addStudent(data) }
  )(New)
);
