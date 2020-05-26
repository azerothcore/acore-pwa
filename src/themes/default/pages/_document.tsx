import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';

const globalStyles = `
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
`;

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="ACore PWA"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={`${process.env.BACKEND_URL}/apple-touch-icon.png`}
          />
          <link
            rel="icon"
            type="image/png"
            href={`${process.env.BACKEND_URL}/favicon-32x32.png`}
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href={`${process.env.BACKEND_URL}/favicon-16x16.png`}
            sizes="16x16"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          />
          <style type="text/css">{globalStyles}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
