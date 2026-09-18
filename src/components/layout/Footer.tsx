import { profile } from '../../data/profile'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t-[3px] border-ink bg-ink py-6 text-cream">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-4 text-center font-mono text-xs sm:flex-row sm:justify-between sm:text-left">
        <p>
          © {year} {profile.name}
        </p>
        <p className="text-cream/60">Hecho con React, Tailwind y demasiado café.</p>
      </div>
    </footer>
  )
}
