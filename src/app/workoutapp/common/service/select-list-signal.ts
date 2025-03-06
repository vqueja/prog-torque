import { computed, linkedSignal, Signal, untracked, WritableSignal } from "@angular/core";

export interface SelecListItem<T> {
    selected: boolean;
    value: T;
}

export type SelectListSignal<T> = Signal<SelecListItem<T>[]> & {

    $selections: WritableSignal<T[]>;
    set: (item: T, selected: boolean) => void;
    setAll: (selected: boolean) => void;
    toggle: (item: T) => void;
    
}

export function selectListSignal<T>(dataSource: () => T[]): SelectListSignal<T> {

    const $selections = linkedSignal<T[], T[]>({
        source: dataSource,
        computation: (source, previous) => {
            const selectedItems = previous?.value ?? [];
            return source.filter((item) => selectedItems.includes(item));
        }
    });

    const $output = computed(() => {
        const selectedItems = $selections();
        return dataSource().map((value) => ({ selected: selectedItems.includes(value), value })); 
    }) as SelectListSignal<T>;

    $output.$selections = $selections;
    $output.set = (item, selected) => {
        if (selected) {
            $selections.update((prior) => untracked(dataSource).filter((x) => prior.includes(x) || item === x));
        } else {
            $selections.update((prior) => prior.filter((x) => item === x));
        }
    }

    $output.setAll = (selected) => $selections.set(selected ? untracked(dataSource) : []);
    $output.toggle = (item) => $selections.update((prior) => prior.includes(item) ? prior.filter((x) => item !== x) : [...prior, item]);

    return $output;
}