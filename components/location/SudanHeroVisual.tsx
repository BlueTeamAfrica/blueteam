// The /locations/sudan hero mockup: a field phone saving a record offline, in front of a
// programme dashboard. Family B's FamilyVisual (components/service/HeroVisuals) shows different
// copy (records by site, ERPNext chip) and isn't parameterised for this, so this is its own
// small component in the same style: container units (cqw), so it keeps its proportions from
// 320px up. Fictional data, decorative (aria-hidden); the app UI stays in English on both
// locales, like the homepage's PhoneMock. Every text colour passes 4.5:1 on what it sits on.
// Text is in <div>s, not <p>s: globals.css sets p { font-size: 1rem } under 640px, which would
// override the inherited cqw size.

const bars = [40, 62, 50, 78, 92]

export default function SudanHeroVisual() {
  return (
    <div aria-hidden="true" lang="en" dir="ltr" className="relative mx-auto aspect-[8/7] w-full max-w-[560px] [container-type:inline-size]">
      {/* Dashboard */}
      <div className="absolute end-0 top-[3%] w-[74%] rounded-[4cqw] bg-navy p-[4.4cqw] text-white shadow-[0_5cqw_10cqw_rgba(11,27,43,0.18)]">
        <div className="flex justify-between gap-[2cqw] text-[2.3cqw] text-[#C5D2DE]">
          <span>Programme dashboard</span>
          <span>Synced 2 min ago</span>
        </div>
        <div className="mt-[2cqw] font-heading text-[7.4cqw] font-bold leading-none">1,247</div>
        <div className="mt-[1cqw] text-[2.5cqw] text-[#C5D2DE]">households registered this month</div>
        <div className="mt-[3.4cqw] flex h-[20cqw] items-end gap-[1.8cqw]">
          {bars.map((h, i) => (
            <span key={i} className={`flex-1 rounded-[1.1cqw] ${i === bars.length - 1 ? 'bg-accent' : 'bg-primary'}`} style={{ height: `${h}%` }} />
          ))}
        </div>
        <div className="mt-[3.4cqw] grid grid-cols-2 gap-[1.8cqw] text-[2.3cqw]">
          <div className="rounded-[2.2cqw] bg-white/[0.07] p-[2.2cqw]">
            <div className="text-[#C5D2DE]">Donor report</div>
            <div className="mt-[0.8cqw] text-[2.8cqw] font-bold">Q4 draft ready</div>
          </div>
          <div className="rounded-[2.2cqw] bg-white/[0.07] p-[2.2cqw]">
            <div className="text-[#C5D2DE]">Access</div>
            <div className="mt-[0.8cqw] text-[2.8cqw] font-bold">Role-based</div>
          </div>
        </div>
      </div>

      {/* Field phone */}
      <div className="absolute bottom-[1%] start-0 w-[32%] rounded-[5.6cqw] bg-[#1A2B3E] p-[1.5cqw] shadow-[0_4.4cqw_9cqw_rgba(11,27,43,0.25)]">
        <div className="overflow-hidden rounded-[4.3cqw] bg-white text-[2.05cqw] text-navy">
          <div className="bg-primary-strong px-[2.4cqw] pb-[2.2cqw] pt-[2.6cqw] text-white">
            <div className="text-[2.4cqw] font-bold">New record</div>
            <div>Offline · will sync</div>
          </div>
          <div className="flex flex-col gap-[1.5cqw] p-[2.2cqw]">
            {[['Household ID', 'HH-0417'], ['Members', '6'], ['Need', 'Food, water']].map(([k, v]) => (
              <div key={k} className="rounded-[1.5cqw] bg-[#F3F6F9] p-[1.5cqw]">
                <div className="text-[#4A5868]">{k}</div>
                <div className="font-semibold">{v}</div>
              </div>
            ))}
            <div className="rounded-[1.5cqw] bg-[#E6F5EC] p-[1.5cqw] text-center font-semibold text-[#1F6B3A]">Saved on device · encrypted</div>
          </div>
        </div>
      </div>
    </div>
  )
}
