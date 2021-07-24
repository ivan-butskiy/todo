import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {

    state = {
        taskName: ''
    };

    itemNameHandler = (text) => {
        this.setState({
            taskName: text
        });
    };

    addNewItem = (e) => {
        e.preventDefault();
        const {taskName} = this.state;
        this.props.addItem(taskName);
        this.setState({taskName: ''});
    };

    render() {

        const { taskName } = this.state;

        return (
            <div className="mt-2">
                <small>Добавьте новую задачу</small>
                <form className="form-floating mt-2"
                    onSubmit={ (e)=> this.addNewItem(e) }>
                    <input 
                        className="form-control" 
                        placeholder="Leave a comment here" id="floatingTextarea"
                        value={ taskName }
                        onChange={ (e) => this.itemNameHandler(e.target.value) }>

                        </input>
                    <label htmlFor="floatingTextarea">
                        Название нового таска
                    </label>
                    <div className="item-add-form d-grid gap-2 mt-3">
                        <button 
                            type="submit" 
                            className="btn btn-primary"
                        >
                        Add Item
                        </button>
                    </div>
                </form>
            </div>
        );
    };
};