import { ChangeDetectionStrategy, Component, Signal, signal, OnInit, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { StorageSignalStore, storageSignal } from '../common/signals/storage.signal';
import { Subject,scan } from 'rxjs';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule, MatButton } from '@angular/material/button';
import { muscleArea } from '../common/interfaces/muscle-area.interface';
import { day } from '../common/interfaces/days.interface';
import * as _ from 'lodash';

@Component({
  selector: 'app-start',
  imports: [FormsModule, MatSelectModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class StartComponent implements OnInit {
  public readonly storageProvider = new StorageSpy();
  readonly $eLog = toSignal(this.storageProvider.events$.pipe(scan((acc, cur) => [...acc, cur], [] as string[])));
  readonly $stored1 = storageSignal('','what', this.storageProvider);
  readonly $stored2 = storageSignal('','when', this.storageProvider);
  disabled: boolean = true;

  selectObj = {
    a: '',
    b: ''
  } 
  selectedA: any = this.$stored1;
  selectedB: any = this.$stored2;
  keySignal: Signal<string | null> = signal('');

  mArea: muscleArea[] = [
    { id: '1', name:'muscle', area: 'chest'},
    { id: '2', name:'muscle', area: 'back' },
    { id: '3', name:'muscle', area: 'legs' },
    { id: '4', name:'muscle', area: 'arms' }
  ];

  days: day[] = [
    { id: '1', type:'day', name: 'Sunday' },
    { id: '2', type:'day', name: 'Monday' },
    { id: '3', type:'day', name: 'Tuesday' },
    { id: '4', type:'day', name: 'Wednesday' },
    { id: '5', type:'day', name: 'Thursday' },
    { id: '6', type:'day', name: 'Friday' },
    { id: '7', type:'day', name: 'Saturday' },
  ];

  constructor() {}

  ngOnInit(): void {
  }

  public optionChange(name: string, e: any): void {
    this.selectObj.a = name === 'a' ? e.value : this.selectObj.a;
    this.selectObj.b = name === 'b' ? e.value : this.selectObj.b;
    if(this.selectObj.a !== '' && this.selectObj.b !== ''){ 
      this.disabled = false;
    }
  }

  public showExercises(): void {
    let storage: Storage | undefined = globalThis.sessionStorage;
    storage.setItem('showExercises', 'true');
  }

  ngAfterViewInit(): void {
      let storage: Storage | undefined = globalThis.sessionStorage;
      if(storage?.getItem('what') && storage?.getItem('when')){ 
        this.disabled = false;
      }
  }

}

class StorageSpy implements StorageSignalStore<string> {
  readonly events$ = new Subject<string>();
  readonly storage: Storage | undefined = globalThis.sessionStorage;
  get(key: string): string | undefined {
    this.events$.next(`Retrieved ${key}`);
    return this.storage?.getItem(key) ?? undefined;
  }

  set(key: string, value: string): void {
    this.events$.next(`Stored ${key} with the value ${value}`)
    this.storage?.setItem(key, value);
  }

}
