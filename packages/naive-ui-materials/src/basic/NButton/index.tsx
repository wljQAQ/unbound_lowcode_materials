import { MaterialItem } from '@unbound_lowcode_materials/types';
import screenShot from './screenShot.png';
import { markRaw } from 'vue-demi';
export default {
  meta: {
    title: '按钮',
    description: '测试按钮',
    screenShot,
    icon: markRaw(
      <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4207" width="200" height="200">
        <path
          d="M368 518.4c-3.2-6.4-6.4-9.6-12.8-16-3.2-3.2-9.6-6.4-12.8-9.6 3.2-3.2 6.4-3.2 6.4-6.4 3.2-3.2 3.2-6.4 6.4-9.6 0-3.2 3.2-6.4 3.2-12.8v-12.8c0-9.6-3.2-19.2-6.4-28.8-3.2-9.6-9.6-16-12.8-22.4-6.4-6.4-12.8-9.6-19.2-12.8-6.4-3.2-16-3.2-22.4-3.2H224v252.8h80c9.6 0 19.2-3.2 28.8-6.4 9.6-3.2 16-9.6 22.4-16 6.4-6.4 12.8-16 16-25.6 3.2-9.6 6.4-19.2 6.4-32 0-6.4 0-16-3.2-22.4s-3.2-12.8-6.4-16z m-96-89.6h16c6.4 0 12.8 3.2 16 6.4 6.4 3.2 6.4 9.6 6.4 19.2s-3.2 16-6.4 19.2c-3.2 6.4-9.6 6.4-16 6.4h-16v-51.2z m54.4 144c-3.2 3.2-3.2 6.4-6.4 9.6-3.2 3.2-6.4 3.2-9.6 6.4-3.2 0-6.4 3.2-12.8 3.2H272v-64h25.6c9.6 0 16 3.2 22.4 9.6 6.4 6.4 9.6 12.8 9.6 25.6 0 0-3.2 6.4-3.2 9.6zM748.8 480v48c-6.4-6.4-9.6-16-16-25.6-6.4-9.6-12.8-16-19.2-22.4L640 384h-41.6v252.8h51.2v-160l19.2 28.8c6.4 9.6 12.8 19.2 22.4 28.8l83.2 108.8H800v-256h-51.2V480z"
          fill="#333333"
          p-id="4208"
        ></path>
        <path
          d="M896 224H128c-35.2 0-64 28.8-64 64v448c0 35.2 28.8 64 64 64h768c35.2 0 64-28.8 64-64V288c0-35.2-28.8-64-64-64z m0 480c0 19.2-12.8 32-32 32H160c-19.2 0-32-12.8-32-32V320c0-19.2 12.8-32 32-32h704c19.2 0 32 12.8 32 32v384z"
          fill="#333333"
          p-id="4209"
        ></path>
        <path d="M393.6 432h64v204.8H512V432h64v-48H393.6z" fill="#333333" p-id="4210"></path>
      </svg>
    )
  },
  schema: {
    props: {
      content: '按钮'
    }
  },
  setter: {
    title: '按钮',
    props: [
      {
        name: 'content',
        title: '内容',
        description: '字段:children',
        setter: {
          componentName: 'StringSetter'
        }
      },
      {
        name: 'size',
        title: '按钮尺寸',
        description: '字段:size',
        setter: {
          componentName: 'RadioSetter',
          props: {
            size: 'small',
            options: [
              { label: 'small', value: 'small' },
              { label: 'medium', value: 'medium' },
              { label: 'large', value: 'large' }
            ]
          }
        }
      },
      {
        name: 'type',
        title: '按钮类型',
        description: '字段:size',
        setter: {
          componentName: 'SelectSetter',
          props: {
            options: [
              { label: 'primary', value: 'primary' },
              { label: 'tertiary', value: 'tertiary' },
              { label: 'default', value: 'default' },
              { label: 'success', value: 'success' },
              { label: 'info', value: 'info' },
              { label: 'warning', value: 'warning' },
              { label: 'error', value: 'error' }
            ]
          }
        }
      },
      {
        name: 'disabled',
        title: '禁用',
        description: '字段:disabled',
        setter: {
          componentName: 'BooleanSetter'
        }
      },
      {
        name: 'text',
        title: '文本按钮',
        description: '字段:text',
        setter: {
          componentName: 'BooleanSetter'
        }
      }
    ]
  },
  component: () => import('./index.vue')
} as MaterialItem;
