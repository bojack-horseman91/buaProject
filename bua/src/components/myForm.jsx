import AppBar from '@mui/material'
import { Typography } from '@mui/material';
import { useState, useEffect } from 'react';

function MyForm() {

    const [bua,setBua]=useState({
        firstName:"",
        LastName:'',
        email:"",
        password:'',
    })
    const inputs=[
        {
            id:1,
            placeholder:"firstNmme",
            label:' Name',
            type:'text',
            name:'UserName'
        },
        {
            id:1,
            placeholder:"Email",
            label:'Email',
            type:'text',
            name:'Email'
        },
        {
            id:1,
            placeholder:"password",
            label:'password',
            type:'text',
            name:'password'
        },
        {
            id:1,
            placeholder:"userNmme",
            label:'User Name',
            type:'text',
            name:'UserName'
        },
    ]

    const handleSubmit=(event)=>{
        event.preventDefault();

    }
    return <form on onSubmit={handleSubmit}>
        <input placeholder='userName'/>
        <input placeholder='email'/>
        <input placeholder='password'/>
    </form>;
}

export default MyForm;