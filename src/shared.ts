export async function moveSite(
	coverDiv: HTMLElement,
	homeDiv: HTMLElement,
	bodyRight: HTMLElement,
	bodyLeft: HTMLElement,
	clickHome: boolean,
	altDomain: string,
	sideMove = false
): Promise<string> {
	const endGrid: string = altDomain === 'dev' ? '10fr 0fr' : '0fr 10fr';
	if (altDomain === 'dev') {
		bodyLeft.innerText = 'Loading...';
		//bodyRight.style.overflowY = 'hidden';
		sideMove ? (homeDiv.style.gridTemplateColumns = clickHome ? '5fr 5fr' : endGrid) : null;
	} else if (altDomain === 'art') {
		bodyRight.innerText = 'Loading...';
		bodyLeft.style.overflowY = 'hidden';
		sideMove ? (homeDiv.style.gridTemplateColumns = clickHome ? '5fr 5fr' : endGrid) : null;
	}

	coverDiv.style.opacity = '1';

	const baseUrl = import.meta.env.MODE === 'development' ? import.meta.env.BASE_URL : 'https://sen-trie.github.io/portfolio';
	return new Promise((resolve) => {
		setTimeout(
			() => {
				const url = clickHome ? baseUrl : `${baseUrl}/${altDomain}`;
				resolve(url);
			},
			clickHome ? 460 : 800
		);
	});
}

export function parallaxTouch(e: TouchEvent, multiplier: number) {
	let _w = window.innerWidth / 2;
	let _h = window.innerHeight / 2;
	let _mouseX = e.touches[0].clientX;
	let _mouseY = e.touches[0].clientY;
	let _depth1 = `${(_mouseX - _w) * 0.01 * multiplier}px, ${(_mouseY - _h) * 0.04 * multiplier}px`;
	return `translate(${_depth1}) scale(1.1)`;
}

export function parallax(e: MouseEvent, multiplier: number) {
	let _w = window.innerWidth / 2;
	let _h = window.innerHeight / 2;
	let _mouseX = e.clientX;
	let _mouseY = e.clientY;
	let _depth1 = `${(_mouseX - _w) * 0.01 * multiplier}px, ${(_mouseY - _h) * 0.04 * multiplier}px`;
	return `translate(${_depth1}) scale(1.1)`;
}

export const githubRepo = 'https://github.com/sen-trie';