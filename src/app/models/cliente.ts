export interface Cliente {
    id?: number;
    nome: string;
    cpf: string;
    email: string;
    senha?: string;
    perfis: string[] | number[];
    dataCriacao?: string;
}
