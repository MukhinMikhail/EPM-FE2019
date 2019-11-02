export interface IBeginShipValues {
    name: string;
    size: number;
    shipValue: number;
}

export interface IShipCharacteristics {
    name: string;
    x: number;
    y: number;
    direction: string;
    hits: number;
    state: 'alive' | 'attacked' | 'fishFood';
}

export interface ICoords {
    x?: number;
    y?: number;
}
