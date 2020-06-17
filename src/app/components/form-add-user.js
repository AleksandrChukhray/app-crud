import React from 'react';
import {Field, reduxForm} from 'redux-form';
import { validate } from '../../utils/formValidate';

const styleObj = {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    color: 'red',
    margin: '0 auto'
}

const renderField = ({ input, label, type, meta: {touched, error} }) => (
    <div className="el-form-item">
        <label className="el-form-item__label">{label}</label>
        <div className="el-form-item__content">
            <div className="el-input">
                <input {...input} placeholder={label} type={type} className="el-input__inner" />
                {touched && (error && <span style={styleObj}>{error}</span>)}
            </div>
        </div>
    </div>
)


let AddUserForm = props => {
    const {handleSubmit} = props

    return (
        <form onSubmit={handleSubmit || null} className="el-form el-form--label-right en-US">
            <Field
                label="Name"
                name="username"
                component={renderField}
                type="text"
                className="el-input__inner"
            />
            <Field
                label="Email"
                name="email"
                component={renderField}
                type="email"
                className="el-input__inner"
            />
            <Field
                label="Address"
                name="address"
                component={renderField}
                type="text"
                className="el-input__inner"
            />
        </form>
    )
}

AddUserForm = reduxForm({
    // a unique name for the form
    form: 'addUser',
    validate
})(AddUserForm)

export default AddUserForm