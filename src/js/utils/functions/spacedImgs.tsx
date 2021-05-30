// Packages
import React from "react";

export default function spacedImgs (imgs: string[], times: number = 2, spacing: number = 15) {
	const response: JSX.Element[] = [];
	let lastSpaceX = 0;
	let lastSpaceY = 0;
	let XdirUp = true;
	let YdirUp = true;

	for (let i = 0; i < times; i++) {
		imgs.forEach(img => {
			const xMov = spacing + Math.random() * 20;
			const yMov = spacing + Math.random() * 20;

			if (XdirUp && lastSpaceX + xMov > 100)
				XdirUp = false;
			if (!XdirUp && lastSpaceX - xMov < 0)
				XdirUp = true;
			if (YdirUp && lastSpaceY + yMov > 100)
				YdirUp = false;
			if (!YdirUp && lastSpaceY - yMov < 0)
				YdirUp = true;

			lastSpaceX += (XdirUp ? 1:-1) * (xMov);
			lastSpaceY += (YdirUp ? 1:-1) * (yMov);

			response.push(
				<img src={img} style={{
					left: `${lastSpaceX}%`,
					top: `${lastSpaceY}%`,
					transform: `rotate(${Math.random() * 360}deg) scale(${1 + Math.random() / 2})`,
					position: "absolute",
				}} />
			);
		});
	}

	return response;
}