import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { createPost } from '../actions';

class PostsNew extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : touched ? 'has-success' : '' }`;
    
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className='form-control'
          type={field.type}
          {...field.input}
        />
        <div className={field.meta.invalid ? 'text-help' : ''}>{field.meta.touched && field.meta.error}</div>
      </div>
    );
  }
  
  onSubmit(values) {
    console.log(values);
    this.props.createPost(values);
  }
  
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label='Post Title'
          name='title'
          component={this.renderField}
          type='text'
        />
        <Field
          label='Categories'
          name='categories'
          component={this.renderField}
          type='text'
        />
        <Field
          label='Post Content'
          name='content'
          component={this.renderField}
          type='text'
        />
        <button className='btn btn-primary' type='submit'>Submit</button>
        <Link to='/' className='btn btn-danger' st>Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  
  if(!values.title || values.title.length < 3) {
    errors.title = 'Enter a title that is at least 3 characters!';
  }
  
  if(!values.categories) {
    errors.categories = 'Enter some categories!';
  }
  
  if(!values.content) {
    errors.content = 'Enter some content!';
  }
  
  return errors;
}

export default reduxForm({
  validate,
  form: 'NewPost'
})(connect(null, { createPost })(PostsNew));