import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { confirmUser } from '../actions/authentication';
import classnames from 'classnames';

class Confirm extends Component {
    
    constructor() {
        super();
        this.state = {
            email: '',
            token: '',
            errors: {}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            email: this.state.email,
            token: this.state.token,
        }
        this.props.confirmUser(user, this.props.history);
    }

    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/');
        }
    }
 
    componentWillReceiveProps(nextProps) {
        if(nextProps.auth.isAuthenticated) {
            this.props.history.push('/')
        }
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    render() {
        const {errors} = this.state;
        return (
            <div className = "auth-wrapper">
<div className = "auth-inner">
                <h3>Confirm Token</h3>
                <form onSubmit={ this.handleSubmit }>
                <div className="form-group">
                <h5>Please Enter the TOKEN that was sent to your Email</h5>

                    </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" placeholder="Enter email" 
                          className={classnames('form-control form-control-lg', {
                            'is-invalid': errors.email
                        })}
                        name="email"
                        onChange={ this.handleInputChange }
                        value={ this.state.email }
                        />
                        {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                </div>

                <div className="form-group">
                    <label> Token</label>
                    <input type="text"  placeholder="Enter token"
                                     className={classnames('form-control form-control-lg', {
                                            'is-invalid': errors.token
                                        })} 
                                        name="token"
                                        onChange={ this.handleInputChange }
                                        value={ this.state.token }
                                        />
                                        {errors.token && (<div className="invalid-feedback">{errors.token}</div>)}
                </div>

               

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
               
            </form>
            </div>
            </div>
        );
    }
}

Confirm.propTypes = {
    confirmUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export  default connect(mapStateToProps, { confirmUser })(Confirm)