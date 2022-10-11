import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class EmpDetails extends Component {
    state = {
        currentIndex: -1,
        list: this.returnList()
    }

    returnList() {
        if (localStorage.getItem('register') == null)
            localStorage.setItem('register', JSON.stringify([]))
        return JSON.parse(localStorage.getItem('register'))
    }

    handleEdit = (index) => {
        this.setState({
            currentIndex: index
        })
    }

    handleDelete = (index) => {
        var list = this.returnList()
        list.splice(index, 1);
        localStorage.setItem('register', JSON.stringify(list))
        this.setState({ list, currentIndex: -1 })
    }

    onAddOrEdit = (data) => {
        var list = this.returnList()
        if (this.state.currentIndex === -1)
            list.push(data)
        else
            list[this.state.currentIndex] = data
        localStorage.setItem('register', JSON.stringify(list))
        this.setState({ list, currentIndex: -1 })
    }

    logout = () =>{
        localStorage.clear("token");
        this.props.history.push("/");
    }


    render() {
        return (
            <div>
            <h2>DashBoard-Employee Details</h2>
                <table>
                    <tbody>
                    <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact Number</th>
                    <th>Add</th>
                    <th>Department</th>
                    <th>Position</th>
                    <th>Salary</th>
                    <th>UPDATE</th>
                    <th>DELETE</th>
                    </tr>
                        {this.state.list.map((item, index) => {
                            return <tr key={index}>
                                <td>{item.fullname}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>{item.place.place}</td>
                                <td>{item.department}</td>
                                <td>{item.position}</td>
                                <td>{item.salary}</td>
                                <span title="Edit" className="person__edit"><Link to={'/register/' + item.email}><button>Update</button></Link></span>&emsp;
                                {/* <td><button onClick={()=>this.handleEdit(index)}>Update</button></td> */}
                                <td><button onClick={()=>this.handleDelete(index)}>Delete</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
                <Link to="/" onClick={this.logout}>LogOut Here</Link>
            </div>
        )
    }
}
export default EmpDetails