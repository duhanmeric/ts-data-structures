import { inspect } from "util";

export const logDeep = <T>(obj: T) => {
  console.log(inspect(obj, false, null, true));
};
