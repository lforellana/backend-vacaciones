import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Empleado extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
  })
  nombre?: string;

  @property({
    type: 'string',
    required: true,
  })
  id: string;

  @property({
    type: 'date',
    required: true,
  })
  fechaIngreso: string;

  @property({
    type: 'string',
    required: true,
  })
  cargoId: string;

  @property({
    type: 'boolean',
  })
  disponible?: boolean;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Empleado>) {
    super(data);
  }
}

export interface EmpleadoRelations {
  // describe navigational properties here
}

export type EmpleadoWithRelations = Empleado & EmpleadoRelations;
