import React from 'react';
import {connect} from 'react-redux';
import services from './app/services';
import {bindActionCreators} from 'redux';
import _ from 'lodash';

// components
import {
    Table,
    Button
} from 'element-react/next';

import Dialog from './app/components/dialog';
import Search from "./app/components/search";
import AddUserForm from './app/components/form-add-user';
import UpdateUserForm from './app/components/form-update-user';

import './assets/styles/App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            title: 'Dialog',
            message: 'Hello world',
            onCancelFunc: function () {
                console.log(' state on cancel')
            },
            onConfirmFunc: function () {
                console.log(' state on confirm')
            },
            dataTable: []
        }

        this.onDeleteUser = this.onDeleteUser.bind(this);
        this.onUpdateUser = this.onUpdateUser.bind(this);
        this.onAddUser = this.onAddUser.bind(this);
        this.searchUser = this.searchUser.bind(this);
    }

    columns = [
        {
            type: 'index',
            width: 180
        },
        {
            label: "username",
            prop: "username",
            render: function (data) {
                return (<span>{data.username}</span>)
            }
        },
        {
            label: "Email",
            prop: "email",
            render: function (data) {
                return <span>{data.email}</span>
            }
        },
        {
            label: "Address",
            prop: "address",
            render: function (data) {
                return <span>{data.address}</span>
            }
        },
        {
            label: "",
            width: 180,
            render: function () {
                return (
                    <span>
                      <Button onClick={this.onUpdateUser.bind(this, arguments[0])} plain={true} type="info"
                              size="small">Edit</Button>
                      <Button onClick={this.onDeleteUser.bind(this, arguments[0])} type="danger"
                              size="small">Delete</Button>
                    </span>
                )
            }.bind(this)
        }
    ]

    componentDidMount() {
        this.props.getUsers();
    }

    searchUser(value) {
        this.props.searchUsers(value);
    }

    onAddUserConfirm(callback) {
        const {
            form: {
                addUser: {
                    values
                }
            }
        } = this.props;

        let data = {
            username: values.username,
            email: values.email,
            address: values.address
        }

        this.props.addUsers(data)
            .then(() => this.props.getUsers());
    }

    onUpdateUserConfirm() {
        const {
            form: {
                updateUser: {
                    values,
                    syncErrors,
                    initial
                }
            }
        } = this.props;

        let data = {
            username: values.username,
            email: values.email,
            address: values.address
        }

        let id = values.id;

        if(_.isEqual(values,initial)){
            return Promise.resolve();
        }

        if(syncErrors){
            return Promise.reject();
        }

        return this.props.updateUsers(data, id)
            .then(() => this.props.getUsers());
    }

    onDeleteUserConfirm(id) {
        this.props.deleteUsers(id)
            .then(() => this.props.getUsers());
    }

    onAddUser() {
        this.setState({
            visible: true,
            title: 'Add User',
            message: <AddUserForm />,
            onCancelFunc: function () {
                this.setState({visible: false, message: null});
            }.bind(this),
            onConfirmFunc: function () {
                this.onAddUserConfirm()
                    .then(() => this.setState({visible: false}));
            }.bind(this)
        })
    }

    onUpdateUser({ id, username, address, email }) {
        this.setState({
            visible: true,
            title: 'Edit User',
            message: <UpdateUserForm initialValues={{ id, username, address, email }}/>,
            onCancelFunc: function () {
                this.setState({visible: false, message: null});
            }.bind(this),
            onConfirmFunc: function () {
                this.onUpdateUserConfirm()
                    .then(() => this.setState({visible: false}));
            }.bind(this)
        })
    }

    onDeleteUser({id}) {
        this.setState({
            visible: true,
            title: 'Delete User',
            message: 'Are you sure you want to delete the user?',
            onCancelFunc: function () {
                console.log('cancel')
                this.setState({visible: false});
            }.bind(this),
            onConfirmFunc: function () {
                this.setState({visible: false});
                this.onDeleteUserConfirm(id);
            }.bind(this)
        })
    }

    render() {
        const {
            visible,
            title,
            message,
            onCancelFunc,
            onConfirmFunc
        } = this.state;

        const {
            searchResult
        } = this.props

        return (
            <div className="App">
                <div className="Wrapper">
                    <Search onChange={this.searchUser}/>
                    <Button type="primary" onClick={this.onAddUser}>Add User</Button>
                </div>
                <Table
                    style={{width: '100%'}}
                    columns={this.columns}
                    data={searchResult}
                    border={true}
                    highlightCurrentRow={true}
                    onCurrentChange={null}
                />
                <Dialog
                    title={title}
                    visible={visible}
                    message={message}
                    onCancel={onCancelFunc}
                    onConfirm={onConfirmFunc}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state.users,
    form: state.form
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getUsers: services.users.getUsers,
    addUsers: services.users.addUsers,
    deleteUsers: services.users.deleteUsers,
    updateUsers: services.users.updateUsers,
    searchUsers: services.users.searchUsers
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
