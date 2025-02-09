import {v4 as uuidV4} from 'uuid';

const uuidRegex = /^[a-f0-9]{8}$/;

export function getNewUuid() {
    return uuidV4().substring(0, 8);
}

export function isUuid(uuid?: string): boolean {
    return uuidRegex.test(uuid ?? '');
}
