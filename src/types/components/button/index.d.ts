import * as Types from "types";

type Props = {
  width?: string;
  disabled?: boolean;
  children: React.ReactNode;
  onClick: () => void;
} & Types.Commons.Props;

export type { Props };
