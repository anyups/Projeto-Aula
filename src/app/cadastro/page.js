'use client'
import { useState } from 'react'
import styles from '../page.module.css'
import { useRouter } from 'next/navigation'

export default function Cadastro() {
    const route = useRouter();
    const [nome, setNome] = useState();
    const [curso, setCurso] = useState();
    const [num_inscricao, setNum_inscricao] = useState();

    const cadastrar = (e) => {
        e.preventDefault()
        const aluno = {
            nome: nome,
            curso: curso,
            num_inscricao: num_inscricao
        }

        const alunoJson = JSON.stringify(aluno);

        fetch("http://localhost:3003/alunos", {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: alunoJson
        }).then(function(){ route.push("/")}).catch(()=> console.log("Não foi possível cadastrar!"))
    }

    return (
        <div className={styles.main}>
            <form action='' onSubmit={cadastrar}>
                <input
                    type="text"
                    placeholder='Nome:'
                    nome="nome"
                    onChange={e => setNome(e.target.value)}
                    className={styles.input}
                /><br/>
                <input
                    type="text"
                    placeholder='Curso:'
                    nome="curso"
                    onChange={e => setCurso(e.target.value)}
                    className={styles.input}
                /><br/>
                <input
                    type="number"
                    placeholder='RA:'
                    nome="num_inscricao"
                    onChange={e => setNum_inscricao(e.target.value)}
                    className={styles.input}
                /><br/>
                <button type='submit' className={styles.button}>Cadastrar</button>
                <div className={styles.divlink}>
                    <a href='/' className={styles.link}>Voltar</a>
                </div>
            </form>
        </div>
    );
}