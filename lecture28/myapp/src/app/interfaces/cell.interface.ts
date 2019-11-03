export interface Cell {
    status: 'ship' | 'sea' | 'shooted' | 'blocked' | 'interface';
    x: number;
    y: number;
    name?: string;
}
