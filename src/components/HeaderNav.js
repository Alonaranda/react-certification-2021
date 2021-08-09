import React, { useState, useContext } from 'react'
import { GlobalContext } from './Context'
import { Link } from "react-router-dom";
import '../style/HeaderNav.css';

export const HeaderNav = () => {
    
    const { myStateReducer, dispatch } = useContext(GlobalContext);

    const [inputValue, setValue] = useState('');

    
    const handleInputText = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'actionAddSearch',
            payload: {
                ...myStateReducer,
                search: inputValue
            } 
        });
        setValue('');
    }

    const lightMode = () => {
        dispatch({
            type: 'actionLightMode',
            payload: {
                ...myStateReducer,
                mode: 'ligth',
            }
        });
    }

    const darkMode = () => {
        dispatch({
            type: 'actionDarkMode',
            payload: {
                ...myStateReducer,
                mode: 'dark',
            }
        });
    }

    return (
        <div className="header">
            <div className="contenedor-header">

                <div className="left-header">
                    <Link to='/' ><i className="fab fa-youtube"></i></Link>
                </div>

                <div className="center-header-left">
                    <div className="box_input">
                        <div className="align_box_input">

                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={handleInputText}
                                    placeholder="Search..."
                                ></input>
                            </form>

                            <span
                                className="square_input"
                            ><i className="fas fa-search"></i></span>
                        </div>
                    </div>
                </div>


                <div className="center-header-right">
                    <div className="box_input_toggle">
                        <div className="align_box_input_toggle">
                            <button
                                onClick={lightMode}
                                className="toggle_left"
                            ><span role="img" aria-label="sun">🌞</span></button>
                            <button
                                onClick={darkMode}
                                className="toggle_right"
                            ><span role="img" aria-label="moon">🌜</span></button>
                        </div>
                    </div>
                </div>



                <div className="right-header">
                    <button
                        onClick={() => { alert('Coming soon...') }}
                    ><i className="fas fa-user-graduate"></i></button>
                </div>

            </div>
        </div>
    )
}