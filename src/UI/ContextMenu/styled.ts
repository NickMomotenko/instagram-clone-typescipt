import styled from "styled-components";

export const ContextMenuWrapp = styled.div`
	display: inline-block;
	min-width: 180px;
	background: #fff;
	border-radius: 11px;
	overflow: hidden;
	box-shadow: 0 0 5px #0000004d;
	z-index: 10;
	position: absolute;
`;

export const ContextMenuList = styled.ul``;

export const ContextMenuItem = styled.li``;

export const ContextMenuButton = styled.button`
	color: #7087c7;
	display: block;
	width: 100%;
	font-size: 14px;
	font-weight: 700;
	padding: 9px 10px;

	transition: 0.4s;

	&:hover {
		background: #a1b4e0b3;
		color: #fff;
	}
`;
