import Image from 'next/image'

// Self-hosted SVG flags (public/flags, see its README). Windows has no flag emoji and showed
// "SD", "UG"… in their place. alt="" because the country name is always next to the flag.

type Code = 'sd' | 'ug' | 'ke' | 'rw'

// Sized like Apple's flag emoji: 'large' matches the old text-4xl emoji (36px, in a 40px line),
// 'inline' scales with the surrounding text (about 1.2em × 0.9em)
export function Flag({ code, size = 'inline' }: { code: Code; size?: 'inline' | 'large' }) {
  if (size === 'large') {
    return (
      <Image
        src={`/flags/${code}.svg`}
        alt=""
        width={40}
        height={30}
        unoptimized
        className="mt-[5px] h-[30px] w-[40px] shrink-0 rounded-[3px] shadow-[0_0_0_1px_rgba(0,0,0,0.08)]"
      />
    )
  }
  return (
    <Image
      src={`/flags/${code}.svg`}
      alt=""
      width={24}
      height={18}
      unoptimized
      className="inline-block h-[0.9em] w-[1.2em] rounded-[2px] align-[-0.1em] shadow-[0_0_0_1px_rgba(0,0,0,0.08)]"
    />
  )
}

// Tags for messages that name countries: "Uganda <flagUg></flagUg>"
export const flagTags = {
  flagSd: () => <Flag code="sd" />,
  flagUg: () => <Flag code="ug" />,
  flagKe: () => <Flag code="ke" />,
  flagRw: () => <Flag code="rw" />,
}
