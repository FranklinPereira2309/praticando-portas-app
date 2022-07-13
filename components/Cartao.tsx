import styles from '../styles/Cartao.module.css'

interface PortaProps {
   
    children: any
    bgColor?: string
}

export default function Cartao(props: PortaProps) {
    return (
        <div className={styles.cartao} style={{backgroundColor: props.bgColor?? '#fff' }}>
            {props.children}
        </div>
    )
}