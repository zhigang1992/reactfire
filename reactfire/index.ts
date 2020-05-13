export interface ReactFireOptions<T = unknown> {
  idField?: string;
  initialData?: T | any;
  suspense?: boolean;
}

export function checkOptions(options: ReactFireOptions, field: string) {
  return options ? options[field] : undefined;
}

export function checkinitialData(options: ReactFireOptions) {
  return checkOptions(options, 'initialData');
}

export function checkIdField(options: ReactFireOptions) {
  return checkOptions(options, 'idField');
}

export * from './auth';
export * from './database';
export * from './firebaseApp';
export * from './firestore';
export * from './performance';
export * from './remote-config';
export * from './storage';
export * from './useObservable';
