import React from 'react';

import './todo-list-item.css';

const TodoListItem = ({ label, onDeleted, 
    onToggleDone, onToggleImportant,
    important, done }) => {

    let classNames = 'todo-list-item';
    if (important) {
        classNames += ' important';
    };
    
    if (done) {
        classNames += ' done';
    };

    return (
        <span className={ classNames }>
            <span
                className="todo-list-item-label"
                onClick={ onToggleDone }>
                {label}
            </span>
            <button type="button"
                    className="btn btn-outline-danger btn-sm float-end"
                    onClick={ onDeleted }>
                <i className="far fa-trash" />
            </button>
            <button type="button"
                onClick={ onToggleImportant }
                className="btn btn-outline-success btn-sm float-end">
                <i className="far fa-exclamation" />
            </button>
        </span>
    );
};

export default TodoListItem;