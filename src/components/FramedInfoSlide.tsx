import { ReactNode } from "react";

interface FramedInfoSlideProps {
    background?: string
    children?: ReactNode;
    className?: string
    transition?: string,
    branded?: boolean
}

export const FramedInfoSlide: React.FC<FramedInfoSlideProps> = ({
    background,
    children,
    className,
    transition = 'fade'
}) => {
    return (
        <section
            className={`framed-info-slide ${className}`}
            data-background={background}
            data-transition={transition}
        >
            <div className="framer">
                {children}
            </div>
        </section>
    );
};
