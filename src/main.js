// Array de objetos com nome e nota dos alunos
const alunos = [
    { nome: 'João', nota: 5.5 },
    { nome: 'Maria', nota: 7.0 },
    { nome: 'Pedro', nota: 8.5 },
    { nome: 'Ana', nota: 6.0 },
    { nome: 'Lucas', nota: 4.0 }
];

// Função que retorna alunos com nota maior ou igual a 6
const alunosAprovados = (alunos) => {
    return alunos.filter(aluno => aluno.nota >= 6);
};

// Chamando a função e armazenando o resultado
const aprovados = alunosAprovados(alunos);

// Exibindo os alunos aprovados
console.log(aprovados);