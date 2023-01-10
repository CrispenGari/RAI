### React Activity Indicators (RAI)

This is a simple minor react component library for rendering activity indicators on the `dom`.

<p align="center"><img src="cover.png" width="70%" alt="cover"/></p>

### Getting started

To get started first you need to install the package `@crispengari/react-activity-indicators` as follows:

```shell
# -- using yarn
yarn add @crispengari/react-activity-indicators

# -- using npm
npm install @crispengari/react-activity-indicators

# using pnpm
pnpm install @crispengari/react-activity-indicators
```

> You will need to import the `react-activity-indicators.cjs.development.css` as a global `css` file depending on the project you are currently working on.

### Next.js project

If you are using this component library in your `next` app we recommend that you import `react-activity-indicators.cjs.development.css` in the `_app.tsx` or `_app.ts` as follows:

```tsx
import "../styles/globals.css";
import "@crispengari/react-activity-indicators/dist/react-activity-indicators.cjs.development.css";
import type { AppProps } from "next/app";
...
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  );
}
```

### React.js project

If you are using this component library in your `react` app we recommend that you import `react-activity-indicators.cjs.development.css` in the `index.tsx` or `index.ts` as follows:

```tsx
import '@crispengari/react-activity-indicators/dist/react-activity-indicators.cjs.development.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### Usage

To use activity indicators in your react component you do it as follows:

```tsx
import React from 'react'
import {DoubleCircularIndicator} from '@crispengari/react-activity-indicators';

....

export default App:React.FC<{}> = ()=>{
    return (
        <div className="app">
            <DoubleCircularIndicator size="small" />
        </div>
    )
}
```

### Documentation

The documentation can be found [here](https://rai-docs.vercel.app/) or you can scan the following `QR` code:

<p align="center"><img src="qrcode.png" alt="qr" width="300"/></p>

### License

In this project i'm using the `MIT` license which read as follows:

```
MIT License

<<<<<<< HEAD
Copyright (c) 2022 CrispenGari
=======
Copyright (c) 2022 crispengari
>>>>>>> a3a7422c6379d8e8b4b1d09bdb67a8583cfddf23

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
<<<<<<< HEAD
SOFTWARE.
=======
SOFTWARE.
>>>>>>> a3a7422c6379d8e8b4b1d09bdb67a8583cfddf23

```
