import { ReactNode } from 'react'

export interface RootLayoutConfig {
  children: ReactNode
}

const RootLayout = (
   {
     children,
   }: RootLayoutConfig
) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
