import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { AuthProvider } from '../utils/auth';
import theme from '../styles/theme';
import SEO from '../next-seo.config';
// import Router from 'next/router';
// import * as Fathom from 'fathom-client';
// import { useEffect } from 'react';

// Router.events.on('routeChangeComplete', () => {
//     Fathom.trackPageview();
// });

const App = ({ Component, pageProps }) => {
    // useEffect(() => {
    //     if (process.env.NODE_ENV === 'production') {
    //         Fathom.load('YOUR_FATHOM_SITE_ID', {
    //             includedDomains: ['yourdomain.com'],
    //         });
    //     }
    // }, []);
    return (
        <ThemeProvider theme={theme}>
            <AuthProvider>
                <CSSReset />
                <Component {...pageProps} />
            </AuthProvider>
        </ThemeProvider>
    );
};
export default App;
