type Props = {
    children: React.ReactNode 
}

export default function AuthLayout({children}:Props){
    return (
        <div className="w-full m-auto  h-screen">
            <div>{children}</div>
        </div>
    )
}