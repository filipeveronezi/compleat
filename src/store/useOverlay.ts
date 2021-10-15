import create from 'zustand'

interface Overlay {
  overlayState: boolean
  setOverlayState: (overlayState: boolean) => void
}

export const useOverlay = create<Overlay>((set) => ({
  overlayState: false,
  setOverlayState: (overlayState) => set({ overlayState })
}))
