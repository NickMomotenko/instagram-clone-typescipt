import React from "react";
import { ColumnWrapp, RowWrapp, BlockWrapp, PaperWrapp } from "./styled";

import { ColumnProps, RowProps, PaperProps, BlockProps } from "./types";

export const Column: React.FC<ColumnProps> = ({ children, ...props }) => {
  return <ColumnWrapp {...props}>{children}</ColumnWrapp>;
};

export const Row: React.FC<RowProps> = React.forwardRef(
  ({ children, ...rest }, ref) => {
    return (
      <RowWrapp ref={ref} {...rest}>
        {children}
      </RowWrapp>
    );
  }
);

export const Block: React.FC<BlockProps> = ({ children, ...rest }) => {
  return <BlockWrapp {...rest}>{children}</BlockWrapp>;
};

export const Paper: React.FC<PaperProps> = React.forwardRef(
  ({ children, ...props }, ref :any) => {
    return (
      <PaperWrapp ref={ref} {...props}>
        {children}
      </PaperWrapp>
    );
  }
);
