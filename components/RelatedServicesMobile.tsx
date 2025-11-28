import Link from "next/link"

export default function RelatedServicesMobile({
  services,
}: {
  services: { name: string; href: string }[]
}) {
  return (
    <div className="block md:hidden mt-10 px-6">
      <div className="bg-white rounded-xl shadow p-5 border border-gray-100">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">
          Our Services
        </h3>
        <ul className="space-y-2">
          {services.map((s, i) => (
            <li key={i}>
              <Link
                href={s.href}
                className="block py-2 px-3 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-700 text-sm"
              >
                {s.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
