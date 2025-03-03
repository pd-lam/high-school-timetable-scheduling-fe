/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ICustomAction {
  label: string;
  icon: string;
  color: string;
  onClick?: (event?: any, data?: any) => void;
}
