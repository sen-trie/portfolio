export async function triggerNavigation(url: Promise<string>): Promise<void> {
    const a = document.createElement('a');
    a.href = await url;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}