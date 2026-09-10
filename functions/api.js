// Netlify's _redirects could proxy an external absolute URL; Cloudflare Pages'
// _redirects cannot, so this Function replaces that proxy rule.
export async function onRequestGet() {
	const response = await fetch('https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1');
	const body = await response.text();

	return new Response(body, {
		headers: {
			'content-type': 'application/json',
			'access-control-allow-origin': '*',
		},
	});
}
