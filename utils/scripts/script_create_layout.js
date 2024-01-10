import * as fs from 'fs';

const layoutName = process.argv[2];

if (!layoutName) {
  console.log('Please provide a layout name');
  process.exit(1);
}

const dir = `./src/layouts/${layoutName}`;

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
} else {
  console.log(`Layout "${layoutName}" already exists`);
  process.exit(1);
}
const componentName = layoutName
  .charAt(0)
  .toUpperCase()
  .concat(layoutName.slice(1));
const content = `import * as React from 'react';

const Layout${componentName}: React.FC = () => {
  return <div>${componentName} page</div>;
};

export default Layout${componentName};`;

fs.writeFileSync(`${dir}/layout_${layoutName}.tsx`, content);

console.log(`Layout "${layoutName}" created successfully`);
