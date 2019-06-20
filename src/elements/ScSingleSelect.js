import React, { Component } from "react";
import styled from "styled-components";

export const ScDropdownContainer = styled.div`
    width: 200px;
    margin: 20px auto 0;
`;

export const ScDropdownButton = styled.div`
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    height: 100%;
    float: left;
    width: 100%;
    background: whitesmoke;
    padding: 10px 12px;

    cursor: pointer;
    border: 1px solid lightgray;
    box-sizing: border-box;
`;

export const ScDropdownLabel = styled.div`
    float: left;
`;

export const ScDropdownQuantity = styled.div`
    float: left;
    margin-left: 4px;
`;

export const ScDropdownSpan = styled.div``;

export const ScDropdownItalic = styled.i`
    float: right;
`;

export const ScDropdownList = styled.div`
    float: left;
    width: 100%;
    display: ${({ active }) => (active ? "block" : "none")};
    border: 1px solid lightgray;
    border-top: none;
    box-sizing: border-box;
    padding: 10px 12px;

    input[type="search"] {
        padding: 5px 0;
    }

    ul {
        margin: 10px 0;
        max-height: 200px;
        overflow-y: auto;

        input[type="checkbox"] {
            position: relative;
            top: 2px;
        }
    }
`;

// ******************************

//////select///////
export const ScContainer = styled.div`
    position: relative;
    width: 350px;
    &:after {
        position: absolute;
        top: 18px;
        right: 10px;
        width: 0;
        height: 0;
        padding: 0;
        content: "";
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-top: 6px solid rgba(0, 0, 0, 0.12);
        pointer-events: none;
    }
`;

///////select-label/////
export const ScLabel = styled.span`
    color: rgba(0, 0, 0, 0.26);
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 10px;
    top: 10px;
    transition: 0.2s ease all;
`;

//////select-text///////
export const ScSelect = styled.div`
    appearance: none;
    -webkit-appearance: none;
    background: white;
    position: relative;
    width: 100%;
    font-size: 16px;
    padding: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border-style: solid;
    border-width: 1px;
    border-radius: 7px;
    border-color: ${({ error, theme }) =>
        error ? theme.colors.error : "lightgray"};
    margin: 0;
    transition: 300ms ease-in all;

    &:focus {
        border-color: blue;
        outline: none;
    }
    &:focus ~ ${ScLabel}, &:valid ~ ${ScLabel} {
        color: red;
        top: -20px;
        left: 5px;
        transition: 0.2s ease all;
        font-size: 13px;
    }
`;

export class ScSingleSelect extends Component {
    state = {
        active: false,
        options: [],
        filter: "",
        filteredOptions: []
    };

    // handleChange(e) {
    //     this.setState({
    //         val: e.target.value
    //     });
    // }

    handleDropdownList = e => {
        console.log("working");
        this.setState(prev => {
            return { active: true };
        });
    };

    handleInput = e => {
        let value = e.target.value;
        this.setState(prev => {
            let checked = prev.options.includes(value);
            if (checked) {
                let options = prev.options.filter(option => {
                    return value != option;
                });
                return {
                    options
                };
            } else {
                return {
                    options: [...prev.options, value]
                };
            }
        });
    };

    render() {
        const { onChange, label } = this.props;
        return (
            <ScContainer
                onClick={e => {
                    this.handleDropdownList(e);
                }}
            >
                <ScSelect onChange={onChange} name={label} required>
                    {/* <option value="" defaultValue />
                    {this.props.children} */}
                </ScSelect>
                <ScLabel htmlFor={label}>{label}</ScLabel>

                <ScDropdownList active={this.state.active}>
                    <ul>
                        <li>
                            <input
                                onChange={this.handleInput}
                                name="ny"
                                value="New York"
                                type="checkbox"
                            />
                            <label htmlFor="ny">New York</label>
                        </li>
                        <li>
                            <input
                                onChange={this.handleInput}
                                name="nj"
                                value="New Jersey"
                                type="checkbox"
                            />
                            <label htmlFor="nj">New Jersey</label>
                        </li>
                        <li>
                            <input
                                onChange={this.handleInput}
                                name="fl"
                                value="Florida"
                                type="checkbox"
                            />
                            <label htmlFor="fl">Florida</label>
                        </li>
                        <li>
                            <input
                                onChange={this.handleInput}
                                name="co"
                                value="Colorado"
                                type="checkbox"
                            />
                            <label htmlFor="co">Colorado</label>
                        </li>
                    </ul>
                </ScDropdownList>
            </ScContainer>
        );
    }
}
