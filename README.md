# Projeto: Prototype + Singleton

## Descrição
Este projeto simula um sistema acadêmico simples utilizando dois padrões de projeto: **Prototype** e **Singleton**.

O sistema permite criar alunos a partir de um modelo base (protótipo), evitando repetição de dados, e gerencia todos os alunos em uma única instância central.

---

## Conceitos utilizados

### Prototype
O padrão Prototype permite criar novos objetos a partir de um modelo existente.

No projeto:
- Existe um aluno base
- Novos alunos são criados clonando esse modelo
- Apenas os dados necessários são alterados

Isso facilita a criação de objetos de forma rápida e padronizada.

---

### Singleton
O padrão Singleton garante que exista apenas uma instância de uma classe.

No projeto:
- A classe `GerenciadorAlunos` só pode ter uma instância
- Todos os alunos são armazenados nesse único gerenciador

Isso evita duplicação de dados e mantém o controle centralizado.

---

## Como o sistema funciona

1. Um aluno base é criado com dados padrão  
2. Novos alunos são gerados usando o método `clone()`  
3. Os alunos são adicionados ao gerenciador (Singleton)  
4. O sistema permite:
   - Listar alunos
   - Buscar por nome
   - Remover alunos

---

## Autor

 - Nome: Guilherme Gomes da Silva
 - RA: 2171392511043

---

## Como executar

1. Salve o código em um arquivo chamado `app.js`  
2. Execute no terminal:

```bash
Projeto_Singleton_Prototype/node app.js
