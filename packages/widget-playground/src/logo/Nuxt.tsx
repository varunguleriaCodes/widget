import type { FC, SVGProps } from 'react'

export const NuxtLogo: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} {...props}>
    <title>Nuxt</title>
    <path
      d="M17.95 25.871h11.792c.38 0 .738-.133 1.063-.32.328-.184.664-.418.851-.742.188-.325.317-.692.317-1.063 0-.375-.13-.738-.317-1.062L23.688 8.98a1.946 1.946 0 0 0-.743-.746 2.562 2.562 0 0 0-1.168-.316c-.379 0-.738.129-1.062.316a1.93 1.93 0 0 0-.746.746l-2.02 3.504-4.035-6.8c-.187-.32-.418-.66-.742-.848-.328-.188-.688-.215-1.063-.215-.379 0-.738.027-1.062.215a2.525 2.525 0 0 0-.852.848l-9.879 17c-.191.324-.214.687-.214 1.062 0 .371.027.738.214 1.063.188.324.524.558.848.742.328.187.688.32 1.063.32h7.437c2.945 0 5.09-1.324 6.586-3.824l3.613-6.27 1.914-3.293 5.84 9.989h-7.754Zm-8.391-3.398H4.352l7.757-13.387 3.93 6.691-2.605 4.54c-.993 1.624-2.125 2.156-3.875 2.156Zm0 0"
      style={{
        stroke: 'none',
        fillRule: 'nonzero',
        fill: '#00dc82',
        fillOpacity: 1,
      }}
    />
  </svg>
)
