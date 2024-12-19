# rollup-plugin-import-content
## rollup导入文件内容插件

### 安装

```shell
## npm安装
npm install rollup-plugin-import-content --save

## yarn安装
yarn add rollup-plugin-import-content

```

### 使用案例

```javascript
// rollup.config.js
import importContent from 'rollup-plugin-import-content';

export default [
    {
        input: 'src/main.js',
        output: {
            file: 'build/localBuild.js',
            format: 'cjs'
        },
        plugins: [
            //使用插件
            importContent({
                fileName: [".txt", ".css"]
            }),
        ]
    }
];
```

##  

```javascript
// src/main.js
import txt from './test.txt';
//假设目前下有test.txt文件

console.log(txt)
```
