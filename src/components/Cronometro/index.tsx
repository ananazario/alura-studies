import style from './Cronometro.module.scss';
import Button from '../Button';
import Watch from './Watch';

export default function Cronometro() {
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o Cronometro</p>
            <div className={style.relogioWrapper}>
                <Watch />
            </div>
            <Button>
                Começar!
            </Button>
        </div>
    )
}