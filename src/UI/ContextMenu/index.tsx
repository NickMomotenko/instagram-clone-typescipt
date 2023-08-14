import React, { forwardRef, Ref } from "react";
import {
	ContextMenuButton,
	ContextMenuItem,
	ContextMenuList,
	ContextMenuWrapp,
} from "./styled";

type ContextMenuProps = {
	list: any[];
};

export const ContextMenu = forwardRef<HTMLDivElement, ContextMenuProps>(
	({ list }, ref: Ref<HTMLDivElement>) => {
		return (
			<ContextMenuWrapp ref={ref}>
				<ContextMenuList>
					{list?.map(({ title, func }, index) => (
						<ContextMenuItem key={index}>
							<ContextMenuButton onClick={func}>{title}</ContextMenuButton>
						</ContextMenuItem>
					))}
				</ContextMenuList>
			</ContextMenuWrapp>
		);
	}
);
