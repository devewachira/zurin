import { useEffect } from 'react'

interface VideoModalProps {
  open: boolean
  onClose: () => void
  title?: string
  src?: string
}

export default function VideoModal({ open, onClose, title = 'Video', src }: VideoModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (open) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70" onClick={onClose}>
      <div className="w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
        <div className="relative rounded-2xl overflow-hidden bg-black">
          {src ? (
            <video src={src} controls autoPlay className="w-full h-full" />
          ) : (
            <div className="aspect-video flex items-center justify-center text-white/80 p-8">
              <div className="text-center">
                <div className="text-sm uppercase tracking-widest">{title}</div>
                <div className="mt-2">Video coming soon</div>
              </div>
            </div>
          )}
        </div>
        <button className="mt-3 w-full btn btn-secondary py-2" onClick={onClose}>Close</button>
      </div>
    </div>
  )
}
