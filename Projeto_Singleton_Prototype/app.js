// Classe Aluno (Prototype)
class Aluno {
    constructor(nome, idade, curso, unidade, periodo) {
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.unidade = unidade;
        this.periodo = periodo;
    }

    // Cria uma cópia permitindo alterar alguns dados
    clone(dados = {}) {
        return new Aluno(
            dados.nome ?? this.nome,
            dados.idade ?? this.idade,
            dados.curso ?? this.curso,
            dados.unidade ?? this.unidade,
            dados.periodo ?? this.periodo
        );
    }

    exibir() {
        return `Nome: ${this.nome}, Idade: ${this.idade}, Curso: ${this.curso}, Unidade: ${this.unidade}, Período: ${this.periodo}`;
    }
}

// Classe GerenciadorAlunos (Singleton)
class GerenciadorAlunos {
    constructor() {
        if (GerenciadorAlunos._instance) {
            return GerenciadorAlunos._instance;
        }

        this.alunos = [];
        GerenciadorAlunos._instance = this;
    }

    adicionar(aluno) {
        this.alunos.push(aluno);
    }

    listar() {
        console.log("\nLista de alunos:");
        if (this.alunos.length === 0) {
            console.log("Nenhum aluno cadastrado.");
            return;
        }

        this.alunos.forEach((aluno, i) => {
            console.log(`${i + 1}. ${aluno.exibir()}`);
        });
    }

    buscarPorNome(nome) {
        return this.alunos.filter(aluno =>
            aluno.nome.toLowerCase().includes(nome.toLowerCase())
        );
    }

    removerPorNome(nome) {
        this.alunos = this.alunos.filter(aluno => aluno.nome !== nome);
    }
}

// Teste do sistema

// Teste do Singleton
const sistema1 = new GerenciadorAlunos();
const sistema2 = new GerenciadorAlunos();

console.log("Singleton funciona?", sistema1 === sistema2);

// Protótipo base
const alunoBase = new Aluno(
    "Aluno Padrão",
    18,
    "ADS",
    "FATEC",
    "Noturno"
);

// Criando alunos a partir do protótipo
const aluno1 = alunoBase.clone({
    nome: "João",
    idade: 21
});

const aluno2 = alunoBase.clone({
    nome: "Maria",
    idade: 22,
    periodo: "Matutino"
});

const aluno3 = alunoBase.clone({
    nome: "Carlos",
    idade: 19
});

// Adicionando no sistema
sistema1.adicionar(aluno1);
sistema1.adicionar(aluno2);
sistema1.adicionar(aluno3);

// Listando alunos
sistema1.listar();

// Buscando aluno
console.log("\nBusca por 'Maria':");
console.log(sistema1.buscarPorNome("Maria"));

// Removendo aluno
sistema1.removerPorNome("Carlos");

console.log("\nApós remover Carlos:");
sistema1.listar();

// Verificando protótipo
console.log("\nProtótipo original:");
console.log(alunoBase.exibir());