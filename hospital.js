// Classe Fila 
class Fila {
  constructor() {
    this.itens = [];
  }

  // Adiciona um paciente ao final da fila
  enfileirar(paciente) {
    this.itens.push(paciente);
  }

  // Remove e retorna o primeiro paciente da fila
  desenfileirar() {
    if (this.estaVazia()) {
      return null;
    }
    return this.itens.shift();
  }

  // Retorna o próximo paciente a ser atendido sem removê-lo
  frente() {
    if (this.estaVazia()) {
      return null;
    }
    return this.itens[0];
  }

  // Verifica se a fila está vazia
  estaVazia() {
    return this.itens.length === 0;
  }

  // Retorna o tamanho da fila
  tamanho() {
    return this.itens.length;
  }

  // Imprime a fila atual
  imprimir() {
    console.log('🚶‍♂️ Fila atual:', this.itens.join(' -> ') || 'vazia');
  }
}

// Classe Pilha (LIFO - Last In, First Out) - Unchanged
class Pilha {
  constructor() {
    this.itens = [];
  }

  push(prontuario) {
    this.itens.push(prontuario);
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.itens.pop();
  }

  isEmpty() {
    return this.itens.length === 0;
  }

  getItens() {
    return [...this.itens];
  }

  buscar(nome) {
    return this.itens.includes(nome)
      ? `${nome} encontrado na pilha de prontuários.`
      : `${nome} não encontrado na pilha de prontuários.`;
  }
}

// Classe para gerenciar o hospital
class Hospital {
  constructor() {
    this.filaAtendimento = new Fila();
    this.pilhaProntuarios = new Pilha();
  }

  adicionarPaciente(nome) {
    this.filaAtendimento.enfileirar(nome);
    console.log(`${nome} adicionado à fila de atendimento.`);
  }

  proximoPaciente() {
    const proximo = this.filaAtendimento.frente();
    if (proximo) {
      console.log(`Próximo a ser atendido: ${proximo}`);
    } else {
      console.log("Nenhum paciente na fila.");
    }
  }

  atenderPaciente() {
    const paciente = this.filaAtendimento.desenfileirar();
    if (paciente) {
      this.pilhaProntuarios.push(paciente);
      console.log(`${paciente} atendido e prontuário empilhado.`);
    } else {
      console.log("Nenhum paciente para atender.");
    }
  }

  imprimirEstado() {
    this.filaAtendimento.imprimir();
    console.log("Pilha de prontuários:", this.pilhaProntuarios.getItens());
  }

  buscarProntuario(nome) {
    console.log(this.pilhaProntuarios.buscar(nome));
  }

  reiniciar() {
    this.filaAtendimento = new Fila();
    this.pilhaProntuarios = new Pilha();
    console.log("Simulação reiniciada.");
  }
}

// Simulação do sistema hospitalar
function simularHospital() {
  const hospital = new Hospital();

  console.log("\nAdicionando pacientes à fila...");
  hospital.adicionarPaciente("Ana Silva");
  hospital.adicionarPaciente("Bruno Costa");
  hospital.adicionarPaciente("Clara Mendes");
  hospital.adicionarPaciente("Daniel Souza");
  hospital.adicionarPaciente("Elisa Pereira");

  console.log("\nVerificando próximo paciente...");
  hospital.proximoPaciente();

  console.log("\nAtendendo pacientes...");
  hospital.atenderPaciente();
  hospital.atenderPaciente();

  console.log("\nEstado final:");
  hospital.imprimirEstado();

  console.log("\nBuscando prontuário...");
  hospital.buscarProntuario("Ana Silva");
  hospital.buscarProntuario("Fernanda Lima");

  console.log("\nReiniciando simulação...");
  hospital.reiniciar();
  hospital.imprimirEstado();
}

simularHospital();