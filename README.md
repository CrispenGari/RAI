### React Activity Indicators (RAI)

This is a simple minor react component library for rendering activity indicators on the `dom`.

<p align="center"><img src="cover.png" width="70%" alt="cover"/></p>

> This component library contains the following activity indicators.

1. Circular
2. Linear
3. Box

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
