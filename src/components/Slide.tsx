import { ReactNode } from "react";
import { TMLogo } from "./TMLogo";

interface SlideProps {
    background?: string
    children?: ReactNode;
    className?: string
    transition?: string,
    branded?: boolean
}

export const Slide: React.FC<SlideProps> = ({
    background,
    children,
    className,
    transition = 'fade',
    branded = true
}) => {
    return (
        <section
            className={`slide ${branded ? 'branded' : ''} ${className}`}
            data-background={background}
            data-transition={transition}
        >
            {branded ? (
                <>
                    <div className="content">
                        {children}
                    </div>
                    <div className="brand">
                        <TMLogo whiteLogo={true} width={"150px"} />
                    </div>
                </>
            ) : (
                <>
                    {children}
                </>
            )}
        </section>
    );
};
