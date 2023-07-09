import { useEffect, useState } from "react";

export const useTitle = () => {
	const [title, setTitle] = useState<string>("");

	useEffect(() => {
		document.title = title;
	}, [title]);

	const handleChangeTitle = (title: string) => {
		setTitle(title);
	};

	return { title, handleChangeTitle };
};
