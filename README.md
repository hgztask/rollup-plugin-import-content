# rollup-plugin-import-content

## rollup导入文件内容插件

### 安装

```shell
## npm安装
npm install rollup-plugin-import-content --save

## yarn安装
yarn add rollup-plugin-import-content

```

1. 插件支持的参数 fileName，用于匹配需要导入的文件后缀名，默认为['.txt']
2. 如导入的文件后缀为json，会被解释为json对象，如在fileName配置了json，则会解析为json字符串

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
// test.txt
我是一个文本文件的内容

//json文件内容
{
    "name"
:
    "json文件内容"
}


// src/main.js
import txt from './test.txt';
import json from './test.json';
//假设目前下有test.txt文件

console.log(txt)
console.log(json);

// build/localBuild.js
var txt = `我是一个文本文件的内容`;
console.log(txt);

//json会被解析成json对象
var json = {name: 'json文件内容'};
console.log(json)
```
