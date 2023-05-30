import * as Types from "types";

type Props = Types.Commons.Props & {
  distance?: string;
  topText: string;
  bottomText: string;
  horizontal?: boolean;
  left?: { text: boolean; arrow: boolean };
  right?: { text: boolean; arrow: boolean };
};

export type { Props };
