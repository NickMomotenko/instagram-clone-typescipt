import React from "react";
import { ColumnWrapp, RowWrapp, BlockWrapp, PaperWrapp } from "./styled";

import { ColumnProps, RowProps, PaperProps, BlockProps } from "./types";

export const Column: React.FC<ColumnProps> = ({ children, ...props }) => {
  return <ColumnWrapp {...props}>{children}</ColumnWrapp>;
};

export const Row: React.FC<RowProps> = React.forwardRef((props, ref) => {
  return (
    <RowWrapp ref={ref} {...props}>
      {props.children}
    </RowWrapp>
  );
});

export const Block: React.FC<BlockProps> = ({ children, ...props }) => {
  return <BlockWrapp {...props}>{children}</BlockWrapp>;
};

export const Paper: React.FC<PaperProps> = React.forwardRef(
  ({ children, ...props }, ref) => {
    return (
      <PaperWrapp ref={ref} {...props}>
        {children}
      </PaperWrapp>
    );
  }
);
