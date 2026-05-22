import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shipper Demo — ShareConLoad | VeyQon Group',
  description:
    'Interactive demo of the ShareConLoad shipper experience — find container space, book a slot, and track your shipment.',
}

export default function ShipperDemoPage() {
  return (
    <div className="flex flex-col">
      <div className="border-b border-base-300 bg-base-200 px-6 py-3 flex items-center gap-3">
        <a
          href="/shareconload"
          className="text-sm text-neutral hover:text-primary transition-colors"
        >
          ← Back to ShareConLoad
        </a>
        <span className="text-base-300">|</span>
        <span className="text-sm font-semibold text-base-content">Shipper Demo</span>
        <span className="ml-auto text-xs text-neutral bg-base-300 px-2 py-0.5 rounded-full uppercase tracking-wider font-semibold">
          Demo Mode
        </span>
      </div>
      <iframe
        src="/demos/shipper-demo.html"
        className="w-full border-0"
        style={{ height: 'calc(100vh - 128px)' }}
        title="ShareConLoad Shipper Demo"
      />
    </div>
  )
}
