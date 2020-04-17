import React, { Component } from 'react';
import AddForm from './AddForm'
import AddButton from './AddButton'
import './style.css'

function AddIndex(){

    return (
        <div className="add_index">
            <AddForm />
            <AddButton />
        </div>
    )
}

export default AddIndex