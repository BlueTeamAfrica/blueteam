// Minimal Markdown for blog posts: frontmatter plus the subset the posts use
// (## / ### headings, paragraphs, - and 1. lists, **bold**, [text](url)).
// Anything else renders as plain paragraph text.

export function parseFrontmatter(source: string): { data: Record<string, string>; body: string } {
  const match = source.match(/^---\n([\s\S]*?)\n---\n/)
  if (!match) return { data: {}, body: source }

  const data: Record<string, string> = {}
  for (const line of match[1].split('\n')) {
    const field = line.match(/^(\w+):\s*(.*)$/)
    if (!field) continue
    const value = field[2].trim()
    data[field[1]] = value.startsWith('"') && value.endsWith('"') ? JSON.parse(value) : value
  }
  return { data, body: source.slice(match[0].length) }
}

function escapeHtml(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

function inline(text: string): string {
  return escapeHtml(text)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2">$1</a>')
}

export function markdownToHtml(markdown: string): string {
  const blocks = markdown.trim().split(/\n{2,}/)

  return blocks
    .map((block) => {
      const lines = block.split('\n')
      const heading = block.match(/^(#{2,3}) (.+)$/)
      if (heading && lines.length === 1) {
        const level = heading[1].length
        return `<h${level}>${inline(heading[2])}</h${level}>`
      }
      if (lines.every((line) => /^- /.test(line))) {
        return `<ul>${lines.map((line) => `<li>${inline(line.slice(2))}</li>`).join('')}</ul>`
      }
      if (lines.every((line) => /^\d+\. /.test(line))) {
        return `<ol>${lines.map((line) => `<li>${inline(line.replace(/^\d+\. /, ''))}</li>`).join('')}</ol>`
      }
      return `<p>${inline(lines.join(' '))}</p>`
    })
    .join('\n')
}
