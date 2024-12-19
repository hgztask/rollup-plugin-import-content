import fsp from "fs/promises"

/**
 *导入文件内容插件
 * @param options{{}}
 * @param options.fileName {[string]} 匹配的拓展名
 * @returns {import('rollup').Plugin}
 */
export default function importContent(options = {
    fileName: [".txt"]
}) {
    return {
        name: 'import-content',
        async load(id) {
            if (options.fileName) {
                if (options.fileName.some(ext => id.endsWith(ext))) {
                    const readFile = await fsp.readFile(id, {encoding: 'utf-8'});
                    return "export default " + "`" + readFile + "`";
                }
            }
            return null;
        }
    }
}
