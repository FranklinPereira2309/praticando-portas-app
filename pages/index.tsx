import { prependOnceListener } from "process";
import Cartao from "../components/Cartao";
import styles from '../styles/Formulario.module.css';
import Link from "next/link";
import EntradaNumerica from "../components/EntradaNumerica";
import { useEffect, useState } from "react";


export default function Formulario() {
  const [portas, setPortas] = useState(0)
  const [comPresente, setComPresente] = useState(0)

  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgColor="#c0392c">
          <h1 style={{color:'#fff', fontSize:'4rem', padding:'25px'}}>Monty Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica
            text="Qtde Portas?"
            value={portas}
            onChange={novoPorta => setPortas(novoPorta)}
          />
        </Cartao>
      </div>
      <div>
        <Cartao>
          <EntradaNumerica
            text="Porta Premiada?"
            value={comPresente}
            onChange={novoValor => setComPresente(novoValor)}
          />
        </Cartao>
        <Cartao bgColor="#28a085">
          <Link href={`/jogo/${portas}/${comPresente}`} >
            <h1 className={styles.link}>Iniciar</h1>
          </Link>
        </Cartao>
      </div>
    </div>
  )
}
