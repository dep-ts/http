import pkg from '../../jsr.json' with { type: 'json' };
export const { version, description, name } = pkg ?? {};
