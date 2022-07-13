import { useEffect, useState } from "react";
import Portas from '../../../../components/Portas'
import { criarPortas, atualizarPortas } from '../../../../functions/portas'
import {useRouter} from 'next/router'
import styles from '../../../../styles/jogo.module.css'
import Link from 'next/link'


export default function jogo() {
  const [portas, setPortas] = useState([])
  const [validandoPortas, setValidandoPorta] = useState(false)

  const router = useRouter()
 
  useEffect(()=> {
    const numPorta = +router.query.portas
    const numPresente = +router.query.temPresente
    const gerarPortas = criarPortas(numPorta, numPresente)
    setPortas(gerarPortas)

  }, [router?.query])

  useEffect(()=> {
    const numPorta = +router.query.portas
    const numPresente = +router.query.temPresente

    const portaValida = numPorta >=3 && numPorta <= 100
    const presenteValido = numPresente >=1 && numPresente <= numPorta

    setValidandoPorta(portaValida && presenteValido)

  }, [portas])

  function renderizarPortas() {
    return portas.map(porta => {
      return <Portas
        key={porta.numero}
        value={porta}
        onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))}
      />
    })
  }


  return (
    <div className={styles.jogo}>
        <div className={styles.portas}>
            {validandoPortas? renderizarPortas() : <h1>Valores Inválidos. Tente novamente!!</h1>}  
        </div>
        <div className={styles.botao}>
            <Link href="/">
                <button>Reiniciar Jogo</button>
            </Link>
        </div>
    </div>
  )
}