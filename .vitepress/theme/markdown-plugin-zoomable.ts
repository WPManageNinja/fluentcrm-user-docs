import type { MarkdownRenderer } from 'vitepress'

/** Escape for HTML attribute value to avoid broken markup and XSS. */
function escapeAttr(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

/**
 * Click-to-zoom for doc images.
 *
 * Replaces markdown-it's `image` renderer with a <ZoomableImage> component that
 * owns its own <img>. Three details are load-bearing for production builds:
 *
 * 1. No slot — the component renders the <img> from the `src` prop, so SSR and
 *    hydration emit identical markup (a mismatch makes Vue drop the subtree and
 *    the image vanishes in the static build while dev looks fine).
 * 2. escapeAttr() on src/alt — unescaped `"`, `&`, `<`, `>` in alt text would
 *    terminate the attribute early and break the tag.
 * 3. <ClientOnly> wrapper with an explicit closing tag — nothing for the server
 *    to mismatch against, and Vue parses an explicit close more reliably than
 *    a self-closing component tag.
 */
export function zoomablePlugin(md: MarkdownRenderer) {
  const defaultRender =
    md.renderer.rules.image ||
    ((tokens, idx, options, env, self) => {
      return self.renderToken(tokens, idx, options)
    })

  md.renderer.rules.image = (tokens, idx, options, env, self) => {
    const token = tokens[idx]
    if (!token.attrs) return defaultRender(tokens, idx, options, env, self)

    const srcIndex = token.attrIndex('src')
    if (srcIndex < 0) return defaultRender(tokens, idx, options, env, self)

    const src = token.attrs[srcIndex][1]
    const alt = token.content || ''

    // The component builds the <img> from a raw string, so `src` never passes
    // through Vite's asset pipeline. Relative paths (./foo.webp) would be emitted
    // verbatim and 404 in production, so leave those to the default renderer.
    // Every image in docs/ is currently an absolute /public path; this guard keeps
    // a future relative path from silently breaking.
    if (!/^(\/|https?:)/.test(src)) {
      return defaultRender(tokens, idx, options, env, self)
    }

    return `<ClientOnly><ZoomableImage src="${escapeAttr(src)}" alt="${escapeAttr(alt)}"></ZoomableImage></ClientOnly>`
  }
}
