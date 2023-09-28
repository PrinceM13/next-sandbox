import { proxy } from "valtio";

const formState = proxy({
  dropdown: { amount: 5 },
  checkbox: { amount: 12 },
  radio: { amount: 9 }
});

export { formState };
