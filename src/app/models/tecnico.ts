export interface Tecnico {
    id?: number | string;
    nome: string;
    cpf: string;
    email: string;
    senha?: string;
    perfis: string[] | number[];
    dataCriacao?: string;
}
