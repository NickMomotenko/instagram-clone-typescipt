export const fancyTimeFormat = (dur: string | number) => {
	// Hours, minutes and seconds
	const hrs = ~~(dur / 3600);
	const mins = ~~((dur % 3600) / 60);
	const secs = ~~dur % 60;

	// Output like "1:01" or "4:03:59" or "123:03:59"
	let ret = "";

	if (hrs > 0) {
		ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
	}

	ret += "" + mins + ":" + (secs < 10 ? "0" : "");
	ret += "" + secs;

	return ret;
};