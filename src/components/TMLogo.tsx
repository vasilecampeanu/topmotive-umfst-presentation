interface TMLogoProps {
    width?: string,
    height?: string,
    whiteLogo?: boolean,
}

export const TMLogo: React.FC<TMLogoProps> = ({whiteLogo, width = '100%', height = '100%'}) => {
    return (
        <svg className={`${whiteLogo ? 'tm-logo-white' : ''}`} xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 591 48">
            <g>
                <path d="M64.5,47.75L12.8,47.75C9.3,47.75 6.3,46.45 3.8,43.95C1.3,41.45 0,38.45 0,34.95L0,0.25L13.7,0.25L13.7,10.55L34.1,10.55L44.2,23.95L13.8,23.95L13.8,34.35L54.5,34.35L64.5,47.75Z"></path>
                <path d="M132.6,34.95C132.6,38.45 131.3,41.45 128.8,43.95C126.3,46.45 123.3,47.65 119.8,47.65L77.5,47.65C73.9,47.65 70.9,46.45 68.4,43.95C65.9,41.45 64.7,38.45 64.7,34.95L64.7,13.05C64.7,9.55 65.9,6.55 68.4,4.05C70.9,1.55 73.9,0.25 77.5,0.25L119.8,0.25C123.3,0.25 126.3,1.55 128.8,4.05C131.3,6.55 132.6,9.55 132.6,13.05L132.6,34.95ZM118.9,34.15L118.9,13.75L78,13.75L78,34.15L118.9,34.15Z"></path>
                <path d="M207.6,18.05C207.6,21.55 206.3,24.55 203.8,27.05C201.3,29.55 198.3,30.75 194.8,30.75L153.7,30.75L153.7,47.75L139.4,47.65L139.4,0.25L194.9,0.35C198.4,0.35 201.4,1.65 203.9,4.15C206.4,6.65 207.7,9.65 207.7,13.15L207.7,18.05L207.6,18.05ZM193.5,17.25L193.5,13.65L153.5,13.65L153.5,17.25L193.5,17.25Z"></path>
                <path d="M282.7,47.75L268.5,47.75L268.5,13.65L254.8,13.65L254.8,47.75L241.4,47.75L241.4,13.65L228.4,13.65L228.4,47.75L214.3,47.75L214.3,13.25C214.3,9.75 215.5,6.65 218,4.15C220.5,1.65 223.5,0.35 227.1,0.35L243.1,0.35C245.1,0.35 247,0.85 248.8,1.75C250.6,0.85 252.6,0.35 254.6,0.35L269.9,0.35C273.4,0.35 276.4,1.65 278.9,4.15C281.4,6.65 282.7,9.75 282.7,13.25L282.7,47.75Z"></path>
                <path d="M356.8,34.95C356.8,38.45 355.5,41.45 353,43.95C350.5,46.45 347.5,47.65 344,47.65L301.6,47.65C298,47.65 295,46.45 292.5,43.95C290,41.45 288.8,38.45 288.8,34.95L288.8,13.15C288.8,9.65 290,6.65 292.5,4.15C295,1.65 298,0.45 301.6,0.45L344,0.45C347.5,0.45 350.5,1.75 353,4.15C355.5,6.65 356.8,9.65 356.8,13.15L356.8,34.95ZM343.3,34.15L343.3,13.65L302.3,13.65L302.3,34.15L343.3,34.15Z"></path>
                <path d="M428.1,47.75L376.4,47.75C372.9,47.75 369.9,46.45 367.4,43.95C364.9,41.45 363.6,38.45 363.6,34.95L363.6,0.45L377.2,0.45L377.2,10.55L397.6,10.55L407.7,24.05L377.2,24.05L377.2,34.35L418.1,34.35L428.1,47.75Z"></path>
                <rect x="431.4" y="0.25" width="13.6" height="47.5"></rect>
                <path d="M490.2,47.65C483.8,47.65 480.1,43.65 479,41.75C477.9,39.95 448.4,0.25 448.4,0.25L465.6,0.25L491.5,34.05L499,34.05L499,0.25L513.1,0.25L513.1,34.95C513.1,38.45 511.8,41.45 509.3,43.95C506.8,46.45 503.8,47.65 500.3,47.65L490.2,47.65Z"></path>
                <path d="M580.8,34.25L533.3,34.25L533.3,30.75L564.5,30.85L564.9,30.85C568.6,30.75 571.3,27.75 571.3,24.05C571.3,22.65 571.1,21.75 570,20.05C570,19.95 567.1,15.95 567.1,15.85L561.4,8.25C557.4,2.45 553.2,0.45 549.5,0.45L533.3,0.45C529.6,0.45 526.5,1.75 523.8,4.35C521.2,6.95 519.9,10.15 519.9,13.85L519.9,34.35C519.9,38.05 521.2,41.15 523.8,43.85C526.4,46.45 529.6,47.75 533.3,47.75L591,47.75L580.8,34.25ZM533.3,13.75L551.3,13.75L553.8,17.25L533.3,17.25L533.3,13.75Z"></path>
            </g>
        </svg>
    );
}
