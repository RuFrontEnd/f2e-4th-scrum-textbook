import * as Types from "types";

type Props = Types.Commons.Props & {
  width?: string;
  padding: string;
  tagFontColor?: string;
  tagColor?: string;
  children: React.ReactNode;
  character?: React.ReactNode;
};

export type { Props };
