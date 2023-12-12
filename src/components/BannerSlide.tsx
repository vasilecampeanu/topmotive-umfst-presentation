import React, { ReactNode } from "react";

interface SlideProps {
    background?: string
    children?: ReactNode;
    className?: string
    transition?: string,
    branded?: boolean
}

export const BannerSlide: React.FC<SlideProps> = ({
    background,
    children,
    className,
    transition = 'fade',
}) => {
    return (
        <section
            className={`banner-slide ${className}`}
            data-background={background}
            data-transition={transition}
        >
            <div className="banner">
                <img src="banner.png" alt="" />
            </div>
            <div className="content">
                {children}
            </div>
        </section>
    )
}
