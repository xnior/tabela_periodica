 interface ED {
    name?: string;
    position?: number;
    weight?: number;
    symbol?: string;
}
 interface EDPT {
    nome?: string;
    posicao?: number;
    peso?: number;
    simbolo?: string;
}
export interface EDG extends ED, EDPT {
   
}