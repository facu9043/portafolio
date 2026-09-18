interface GlyphProps {
  size?: number
  className?: string
}

export function GithubGlyph({ size = 16, className = '' }: GlyphProps) {
  return (
    <span
      className={`font-mono font-bold ${className}`}
      style={{ fontSize: size * 0.7, lineHeight: 1 }}
      aria-hidden="true"
    >
      {'</>'}
    </span>
  )
}

export function LinkedinGlyph({ size = 16, className = '' }: GlyphProps) {
  return (
    <span
      className={`font-mono font-extrabold ${className}`}
      style={{ fontSize: size * 0.75, lineHeight: 1 }}
      aria-hidden="true"
    >
      in
    </span>
  )
}
