declare function require(name: string): any;
import { DependencyError } from "./errors";

interface Requires {
  (name: string): any;
}

export interface CreateRequires {
  (dependencies?: object): Requires;
}

const createRequires: CreateRequires = dependencies => {
  const _dependencies = dependencies || {};
  _dependencies["require"] = require;
  return name => {
    if (!(name in _dependencies)) {
      throw new DependencyError(
        `Could not require '${name}'. '${name}' does not exist in dependencies. Make sure you used ncc before upload plugins.`
      );
    }
    return _dependencies[name];
  };
};

export default createRequires;
