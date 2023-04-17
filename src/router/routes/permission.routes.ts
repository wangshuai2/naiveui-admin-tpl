import type { RouteRecordRaw } from 'vue-router'
import { AlertTwotone, AlipayOutlined, AliyunOutlined, AndroidOutlined } from '@vicons/antd'

export const PERMISSION_ROUTES: RouteRecordRaw[] = [
  {
    path: '/permission',
    name: 'Permission',
    component: () => import('@/views/Permission/index.vue'),
    meta: {
      title: '权限管理',
      icon: AlertTwotone
    },
    children: [
      {
        path: 'role',
        name: 'Role',
        component: () => import('@/views/Permission/Role/index.vue'),
        meta: {
          title: '角色管理',
          icon: AlipayOutlined
        }
      },
      {
        path: 'menu',
        name: 'PermissionMenu',
        component: () => import('@/views/Permission/index.vue'),
        meta: {
          title: '菜单管理'
        }
      },
      {
        path: 'child',
        name: 'PermissionChild',
        component: () => import('@/views/Permission/index.vue'),
        meta: {
          title: '测试子菜单',
          icon: AliyunOutlined
        },
        children: [
          {
            path: 'child1',
            name: 'PermissionChild1',
            component: () => import('@/views/Permission/index.vue'),
            meta: {
              title: '测试子菜单1'
            }
          },
          {
            path: 'child2',
            name: 'PermissionChild2',
            component: () => import('@/views/Permission/index.vue'),
            meta: {
              title: '测试子菜单2',
              hidden: true
            }
          },
          {
            path: 'child3',
            name: 'PermissionChild3',
            component: () => import('@/views/Permission/index.vue'),
            meta: {
              title: '测试子菜单3'
            }
          }
        ]
      }
    ]
  },
  {
    path: '/test1',
    name: 'Test1',
    component: () => import('@/views/Test/index.vue'),
    meta: {
      title: '测试页面1',
      icon: AndroidOutlined
    }
  },
  {
    path: '/test2',
    name: 'Test2',
    component: () => import('@/views/Test/index.vue'),
    meta: {
      title: '测试页面2',
      permission: ['v']
    },
    children: []
  },
  {
    path: '/test3',
    name: 'Test3',
    component: () => import('@/views/Test/index.vue'),
    meta: {
      title: '测试页面3',
      hidden: true
    },
    children: []
  }
]
