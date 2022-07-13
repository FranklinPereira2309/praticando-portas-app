import PortaModel from '../model/porta'
import styles from '../styles/Portas.module.css'
import Presente from '../components/Presente'

interface PortaProps {
    value: PortaModel
    onChange: (novaPorta: PortaModel) => void
}

export default function Portas(props: PortaProps) {

    const porta = props.value

    const selecionada = porta.selecionada ? styles.selecionada : ''

    const alterarSelecao = e => {
        return props.onChange(porta.alternarSelecao())
    }

    const abrir = e => {
        e.stopPropagation()
        return props.onChange(porta.abrir())
    }

    function renderizar() {
        return (

            <div className={styles.porta} onClick={alterarSelecao}>
                <div className={styles.numero}>{porta.numero}</div>
                <div className={styles.macaneta} onClick={abrir}></div>
            </div>
        )
    }

    return (
        <div className={styles.area}>
            <div className={`${styles.estrutura} ${selecionada}`}>
                {porta.fechada? renderizar(): porta.temPresente? <Presente/> : false }
            </div>
            <div className={styles.chao}></div>
        </div>
    )
}