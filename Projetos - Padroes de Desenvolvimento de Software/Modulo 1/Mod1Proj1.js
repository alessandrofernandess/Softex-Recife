// Modulo 1 - Projeto 1

// Interface comum para os produtos

class Computer {
    constructor(ram, hdd, cpu, type) {
        this.ram = ram;
        this.hdd = hdd;
        this.cpu = cpu;
        this.type = type;
    }

    toString() {
        return `RAM: ${this.ram}GB, HDD: ${this.hdd}GB, CPU: ${this.cpu}GHz, Type: ${this.type}`;
    }
}

// Fábrica para criar instâncias do tipo abstrato

class ComputerFactory {
    
    createComputer(ram, hdd, cpu, type) {
        if (type === 'pc') {
            return new PC(ram, hdd, cpu);
        } else if (type === 'server') {
            return new Server(ram, hdd, cpu);
        } else {
            throw new Error('Tipo de computador desconhecido');
        }
    }
}

// Implementação para computadores do tipo PC
    
class PC extends Computer {
    constructor(ram, hdd, cpu) {
        super(ram, hdd, cpu, 'PC');
    }
}

// Implementação para computadores do tipo Server

class Server extends Computer {
    constructor(ram, hdd, cpu) {
        super(ram, hdd, cpu, 'Server');
    }
}

// Exemplo de uso
   
const computerFactory = new ComputerFactory();
const pc = computerFactory.createComputer(8, 500, 2.5, 'pc');
const server = computerFactory.createComputer(16, 1000, 3.0, 'server');
console.log(pc.toString());
console.log(server.toString());