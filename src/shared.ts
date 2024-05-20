export function moveSite(
	coverDiv: HTMLElement,
	homeDiv: HTMLElement,
	bodyRight: HTMLElement,
	bodyLeft: HTMLElement,
	clickHome: boolean,
	altDomain: string,
	sideMove = false
): void {
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

	setTimeout(
		() => {
			const baseUrl = import.meta.env.MODE === 'development' ? import.meta.env.BASE_URL : 'https://sen-trie.github.io/portfolio';
			window.location.href = clickHome ?  baseUrl : `${baseUrl}/${altDomain}`;
		},
		clickHome ? 460 : 800
	);
}

export const githubRepo = 'https://github.com/sen-trie';