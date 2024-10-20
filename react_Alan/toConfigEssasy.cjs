const fs = require('fs');
const path = require('path');
// const fs =   import('fs');
// const path = import('path');
// import.meta.url 替代 __dirname

// 路由配置
const routes = [
  { path: 'chapter', name: 'chapter', componentName: 'Chapter' },
  { path: 'chapter2', name: 'chapter2', componentName: 'Chapter2' },
  { path: 'chapter3', name: 'chapter3', componentName: 'Chapter3' },
  { path: 'chapter4', name: 'chapter4', componentName: 'Chapter4' },
  // 你可以继续动态添加其他路由, 但需要有对应的 component
];

// 生成组件文件的路径
const componentsDir = path.resolve(__dirname, 'src/pages/Writing/Essay');

// 确保文件夹存在
if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir, { recursive: true });
}

// 生成子路由对应的组件文件
routes.forEach((route) => {
  const componentPath = path.resolve(componentsDir, `${route.componentName}.tsx`);

  // 如果文件已存在，跳过
  if (fs.existsSync(componentPath)) {
    console.log(`${route.componentName}.tsx 已存在，跳过生成`);
    return;
  }

  // 生成文件内容
  const componentContent = `
    import React from 'react';

    const ${route.componentName} = () => {
      return (
        <div>
          <h1>${route.name}</h1>
          <p>This is the ${route.name} page.</p>
        </div>
      );
    };

    export default ${route.componentName};
  `;

  // 写入文件
  fs.writeFileSync(componentPath, componentContent);
  console.log(`${route.componentName}.tsx 文件生成成功`);
});

// 更新 routes.tsx 文件
const routesFilePath = path.resolve(__dirname, 'src/routes.tsx');
// 读取现有的 routes.tsx 文件内容
let routesFileContent = fs.readFileSync(routesFilePath, 'utf8');
// 查找注释标记 "// addRoute"
const importInsertMarker = '// addRoute';
// 插入导入语句
routes.forEach((route) => {
  const importStatement = `import ${route.componentName} from './pages/Writing/Essay/${route.componentName}';\n`;

  // console.log('%c [ routesFileContent.includes(importStatement) ]-64', 'font-size:13px; background:pink; color:#bf2c9f;', routesFileContent.includes(importStatement))
  // console.log('%c [ importStatement ]-64', 'font-size:13px; background:pink; color:#bf2c9f;', importStatement)
  // if (!routesFileContent.includes(importStatement)) {
  //   routesFileContent = importStatement + routesFileContent;
  //   console.log('%c [ routesFileContent ]-68', 'font-size:13px; background:pink; color:#bf2c9f;', routesFileContent)
  // }
  // 如果注释标记存在，且未包含该 import 语句
  // if (routesFileContent.includes(importInsertMarker) && !routesFileContent.includes(importStatement)) {
  //   const index = routesFileContent.indexOf(importInsertMarker) + importInsertMarker.length;
  //   routesFileContent = routesFileContent.slice(0, index) + '\n' + importStatement + routesFileContent.slice(index);
  //   console.log('%c [ routesFileContent ]-75', 'font-size:13px; background:pink; color:#bf2c9f;', routesFileContent)
  // }
  if (!routesFileContent.includes(importStatement)) {
    // const index = routesFileContent.indexOf(importInsertMarker) + importInsertMarker.length;
    // routesFileContent = routesFileContent.slice(0, index) + '\n' + importStatement + routesFileContent.slice(index);
    routesFileContent = routesFileContent.replace(importInsertMarker, `${importInsertMarker}\n${importStatement}`);
    console.log('%c [ routesFileContent ]-75', 'font-size:13px; background:pink; color:#bf2c9f;', routesFileContent)
  }
});

// 更新路由配置文件
const routeConfigPath = path.resolve(__dirname, 'src/routes.tsx');
let routeConfig = fs.readFileSync(routeConfigPath, 'utf8');

// 查找需要插入的位置
const childrenRoutesRegex = /children:\s*\[/;
const childrenMatch = childrenRoutesRegex.exec(routeConfig);
// 关于每次添加时把之前添加过的路由清楚

if (childrenMatch) {
  const childrenStart = childrenMatch.index + childrenMatch[0].length;

  const newRoutes = routes.map(route => {
    return `{
      path: '${route.path}',
      element: <${route.componentName} />
    }`;
  }).join(',\n');

  // 插入新的子路由
  routeConfig = routeConfig.slice(0, childrenStart) + '\n' + newRoutes + ',' + routeConfig.slice(childrenStart);
  fs.writeFileSync(routeConfigPath, routeConfig);
  console.log(`路由配置文件更新成功`);
} else {
  console.log('未找到 children 路由配置');
}