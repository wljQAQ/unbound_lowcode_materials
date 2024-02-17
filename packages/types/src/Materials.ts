import { Component } from 'vue-demi';
import { Optional } from './utils';

export interface IPublicNodeSchema {
  packageName: string;
  componentName: string;
  props: Record<string, any>;
  id: string;
  children?: IPublicNodeSchema[];
}

export type MaterialComponentModules = Record<string, { default: MaterialItem }>;
export type MaterialGroupModules = Record<string, { default: MaterialGroup }>;

//物料组件
export type MaterialComponent = () => Promise<Component>;
export type MaterialItemSchema = Optional<IPublicNodeSchema, 'componentName' | 'id' | 'packageName'>;
export type MaterialItemMetaOptional = Optional<MaterialItemMeta, 'componentName' | 'packageName'>;

//三者的componentName应该是一致的
export interface MaterialItem {
  schema: MaterialItemSchema;
  meta: MaterialItemMeta;
  setter: MaterialItemSetter;
  component: MaterialComponent | string;
}

export interface MaterialItemSetter {
  componentName?: string;
  packageName?: string;
  title: string;
  props: SetterProp[];
}

export interface SetterProp {
  title: string;
  name: string;
  setter: {
    componentName: string;
    props?: Object;
  };
  description: string;
}

export interface MaterialItemMeta {
  title: string;
  packageName?: string;
  description?: string;
  isContainer?: boolean;
  document?: string;
  screenShot?: string;
  componentName?: string;
  icon?: string | SVGAElement | Component;
}

export interface MaterialGroup {
  title: string;
  children: MaterialItem[];
}

export interface Materials {
  version: string;
  name: string;
  //ESModules组件
  componentsMap: Record<string, () => Promise<Component>>;
  //用来描述组件的  分类 -》 组件描述
  componentsGroupMap: Record<string, MaterialGroup>;
  //schemaMap
  componentsMetaMap: Record<string, MaterialItem>;
}
