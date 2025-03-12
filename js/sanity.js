export function SaneCheck(arg, ...args){
    switch(arg){
        case 'number':
            return args.every(item => typeof item === 'number');

        case 'string':
            return args.every(item => typeof item === 'string');

        case 'HTML-Element':
            return args.every(item => item instanceof HTMLElement);

        default:
            console.error('SaneCheck failed');
            return false;
    }
}