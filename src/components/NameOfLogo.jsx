export default function NameOfLogo({ styleM, styleA }) {
    return (
        <div className="font-bold text-2xl tracking-tight flex items-center">
            {/* Tambahkan transition-all dan duration agar perubahan shadow halus */}

            <a href="/" className="flex items-center">
                <span className={`transition-all duration-500 ease-in-out ${styleM}`}>
                    M
                </span>
                <span className={`text-md inline-block transition-all duration-500 ease-in-out ${styleA}`}>
                    Aldhi
                </span>
            </a>
        </div>
    )
}