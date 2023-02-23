import React from 'react';
import style from './Watch.module.scss'

export default function Watch() {
    return (
        <React.Fragment>
            <span className={style.numberWatch}>0</span>
            <span className={style.numberWatch}>0</span>
            <span className={style.divisionWatch}>:</span>
            <span className={style.numberWatch}>0</span>
            <span className={style.numberWatch}>0</span>
            <span className={style.divisionWatch}>:</span>
            <span className={style.numberWatch}>0</span>
            <span className={style.numberWatch}>0</span>
        </React.Fragment>
    )
}