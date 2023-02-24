import React from 'react';
import style from './Button.module.scss';

class Botao extends React.Component <{
        children? : React.ReactNode, 
        type?: "button" | "submit" | "reset" | undefined }
> {
    render() {
        const { type = "button" } = this.props;

        return (
            <button type={type} className={style.button}>
                {this.props.children}
            </button>
        )
    }
}

export default Botao;