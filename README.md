# Hika Portfolio

Simple dark-themed portfolio scaffold. Open `index.html` in a browser to view locally.

Quick start

```bash
# from this project folder
open index.html    # macOS
xdg-open index.html # Linux
start index.html   # Windows (cmd)
```

- Deploy

- For GitHub Pages: push this repo and enable Pages from the `main` branch or `gh-pages` branch. GitHub Pages provides automatic HTTPS for `github.io` sites and for custom domains once DNS is configured and the certificate is issued. After enabling Pages, go to Settings → Pages and enable "Enforce HTTPS" when available.

- Custom domain notes: create a `CNAME` file at the repo root containing your domain (for example `example.com`) and add the appropriate DNS records for GitHub Pages. This repo contains a `CNAME` file for `hika.dev`.

	GitHub will provision an HTTPS certificate automatically after DNS is correct; this can take a few minutes to a couple hours. After the certificate is issued, enable "Enforce HTTPS" in Settings → Pages to redirect HTTP to HTTPS automatically.

	- For an apex/root domain (`example.com`), add A records to the GitHub Pages IPs:

		- 185.199.108.153
		- 185.199.109.153
		- 185.199.110.153
		- 185.199.111.153

	- For a subdomain (`www.example.com`), add a CNAME record pointing to `<your-github-username>.github.io`.

	GitHub will provision an HTTPS certificate automatically after DNS is correct; this can take a few minutes to a couple hours.

- Or serve with any static host (Netlify, Vercel, Surge) — these also provide automatic HTTPS.
  
Verification

- Check the site after DNS propagation at `https://hika.dev`.
- To inspect the certificate from your machine:

	```bash
	curl -I https://hika.dev
	# or
	openssl s_client -connect hika.dev:443 -servername hika.dev
	```

Edit

- Update content in `index.html`.
- Tweak styles in `css/style.css` and behavior in `js/main.js`.
