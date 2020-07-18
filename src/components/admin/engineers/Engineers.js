import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../../Hoc/adminLayout';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';

import { firebasePlayers,firebaseEngineers } from '../../../firebase';
import { firebaseLooper, reverseArray } from '../../ui/misc';

class Engineers extends Component {

    state = {
        isloading: true,
        engineers:[]
    }

    componentDidMount(){
        firebaseEngineers.once('value').then((snapshot)=>{
            const engineers = firebaseLooper(snapshot);

            this.setState({
                isloading: false,
                engineers: reverseArray(engineers)
            })

            //console.log(players);

        })
    }

    render() {
        return (
            <div className="container pt-200">
                <div>
                    <Paper>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Engineers name</TableCell>
                                    <TableCell>Last name</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody className="bg-primary">
                                { this.state.engineers ?
                                    this.state.engineers.map((engineer,i)=>(
                                        <TableRow key={i}>
                                            <TableCell className="text-dark">
                                                <Link to={`/addEngineers/${engineer.id}`}>
                                                    {engineer.name}
                                                </Link>
                                            </TableCell>
                                            <TableCell>
                                                <Link to={`/addEngineers/${engineer.id}`}>
                                                    {engineer.lastname}
                                                </Link>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                    :null
                                }
                            </TableBody>
                        </Table>
                    </Paper>
                    <div className="admin_progress">
                        { this.state.isloading ?
                            <CircularProgress thickness={7} style={{color:'#98c5e9'}}/>
                            :''
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Engineers;