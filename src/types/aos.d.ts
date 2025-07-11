declare module "aos" {
  interface AosOptions {
    offset?: number
    delay?: number
    duration?: number
    easing?: string
    once?: boolean
    mirror?: boolean
    anchorPlacement?: string
  }

  interface AOS {
    init(options?: AosOptions): void
    refresh(): void
    refreshHard(): void
  }

  const aos: AOS
  export = aos
}

declare module "aos/dist/aos.css"