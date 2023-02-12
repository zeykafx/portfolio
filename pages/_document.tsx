import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en' className='scroll-smooth' data-theme="dark">
      <Head/>
      <body className='scrollbar-thin scrollbar-thumb-gray-700 dark:scrollbar-thumb-gray-800 scrollbar-track-transparent overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full dark:bg-gradient-to-tr dark:from-base-100 dark:via-base-200 dark:to-gray-800'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}