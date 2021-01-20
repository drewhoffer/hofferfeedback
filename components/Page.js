import React from 'react';
import { NextSeo } from 'next-seo';

const Page = ({ name, path, children }) => {
    const title = `Hoffer Feedback – ${name}`;
    const url = `https://https://hofferfeedback.vercel.app${path}`;

    return (
        <>
            <NextSeo
                title={title}
                canonical={url}
                openGraph={{
                    url,
                    title,
                }}
            />
            {children}
        </>
    );
};

export default Page;
