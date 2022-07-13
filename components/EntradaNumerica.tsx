import styles from '../styles/EntradaNumerica.module.css'

interface PortaProps {
    text: string
    value: number
    onChange: (novoNumero: number) => void
}

export default function EntradaNumerica(props: PortaProps) {
    const dec = () => {
        props.onChange(props.value - 1)
    }

    const inc = () => {
        props.onChange(props.value + 1)
    }

    return (
        <div className={styles.entradaNumerica}>
            <span className={styles.text}>{props.text}</span>
            <span className={styles.value}>{props.value}</span>
            <div className={styles.botoes}>
                <button onClick={dec}>-</button>
                <button onClick={inc}>+</button>
            </div>
        </div>
    )
}