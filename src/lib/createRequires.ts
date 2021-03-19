declare function require(name:string);

export interface Requires {
  (name: string): any;
}

interface CreateRequires {
  (dependencies?: object): Requires;
}

export const createRequires: CreateRequires = dependencies => name => {
  const _dependencies = dependencies || {};
  _dependencies["require"] = require

  if (!(name in _dependencies)) {
    throw new Error(
      `Could not require '${name}'. '${name}' does not exist in dependencies. Make sure you used ncc before upload plugins.`
    );
  }

  return _dependencies[name];
};
