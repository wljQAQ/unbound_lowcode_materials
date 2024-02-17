function loadMaterial() {
  const groupModules = import.meta.glob('../src/*/index.ts', { eager: true });

  const componentModules = import.meta.glob(['../src/*/*/index.ts', '../src/*/*/index.tsx'], {
    eager: true
  });

  const componentsMap = {};
  const componentsGroupMap = {};
  const componentsMetaMap = {};

  for (const key in groupModules) {
    let [, groupFileName] = key.split('/');
    componentsGroupMap[groupFileName] = groupModules[key].default;
  }

  for (const key in componentModules) {
    const item = componentModules[key].default;
    let [, groupFileName, comFileName] = key.split('/');

    let componentName = item.meta.componentName || comFileName;

    //处理meta
    item.meta.componentName = componentName;
    item.meta.packageName = material;

    //处理schema
    item.schema.componentName = componentName;
    item.schema.packageName = material;

    //处理setter
    if (item.setter) {
      item.setter.componentName = componentName;
      item.setter.packageName = material;
    }

    //TODO 如果组件是字符串 应该做额外处理让他转成组件
    if (typeof item.component !== 'string') {
      componentsMap[componentName] = item.component;
    }

    //schemaMap
    componentsMetaMap[componentName] = item;
    //Meta要做成分类的
    componentsGroupMap[groupFileName].children.push(item);
  }

  return {
    version,
    name: material,
    componentsMap,
    componentsGroupMap,
    componentsMetaMap
  };
}
