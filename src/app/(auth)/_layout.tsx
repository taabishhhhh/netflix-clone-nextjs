import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Netflix clone',
    description: 'Netflix clone',
}

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <p>Auth header</p>
            {children}
            <p>auth footer</p>
        </>
    )
}
