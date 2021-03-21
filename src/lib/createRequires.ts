declare function require(name: string): any;
import vm, { newVM } from "..";
import { DependencyError } from "./errors";

interface Requires {
  (name: string): any;
}

export interface CreateRequires {
  (dependencies?: object): Requires;
}

const createRequires: CreateRequires = dependencies => {
  const _dependencies = dependencies || {};
  _dependencies["@microflows/nodevm"] = {
    __esModule: true,
    newVM: newVM,
    default: vm
  };
  return name => {
    if (name in _dependencies) return _dependencies[name];
    // in node env
    try {
      if (require !== undefined) return require(name);
    } catch (error) {
      throw new DependencyError(
        `Could not require '${name}'. '${name}' does not exist in dependencies.`
      );
    }
    // in broswer env
    throw new DependencyError(
      `Could not require '${name}'. '${name}' does not exist in dependencies.`
    );
  };
};

export default createRequires;
