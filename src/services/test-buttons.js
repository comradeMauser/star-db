import React from 'react';
import "./test-buttons.css";


const TestButtons = ({upd, load, err}) => {
    return (
        <div className="btn-group">
            <button className="btn-block btn-outline-info" onClick={() => {
                upd()
            }}>test Random component: f()update
            </button>
            <button className="btn-block btn-outline-warning" onClick={() => {
                load()
            }}>test Random component: f()loading true/false
            </button>
            <button className="btn-block btn-outline-danger" onClick={() => {
                err()
            }}>test Random component: f()error true/false
            </button>
        </div>
    );
};

export default TestButtons;