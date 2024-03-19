import { proxy } from "valtio";
import { teal } from "@mui/material/colors";

// const form = proxy({
//   dropdown: { amount: 5 },
//   checkbox: { amount: 12 },
//   radio: { amount: 9 }
// });

const theme: { primary: string } = proxy({
  primary: teal[400]
});

export { theme };
