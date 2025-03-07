import { StorageSignalStore, storageSignal } from '../../common/signals/storage.signal';
import { Subject } from 'rxjs';

export class StorageSpy implements StorageSignalStore<string> {
  readonly events$ = new Subject<string>();
  readonly storage: Storage | undefined = globalThis.sessionStorage;

  get(key: string): string | undefined {
    this.events$.next(`Retrieved ${key}`);
    return this.storage?.getItem(key) ?? undefined;
  }

  set(key: string, value: string): void {
    this.events$.next(`Stored ${key} with the value ${value}`);
    let createValue = { 'area' : value };
    this.storage?.setItem(key, JSON.stringify(createValue));
  }

}
