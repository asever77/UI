import { createRouter, createWebHistory } from 'vue-router';

import LayoutBase from '@/components/layout/LayoutBase.vue';

import MainView from '@/views/MainView.vue';
import AccordionView from '@/views/CC/AccordionView.vue';
import TabView from '@/views/CC/TabView.vue';

import ScrollView from '@/views/EC/ScrollView.vue';
import ToggleView from '@/views/EC/ToggleView.vue';

import DatepickerView from '@/views/FC/DatepickerView.vue';
import FileView from '@/views/FC/FileView.vue';
import InputView from '@/views/FC/InputView.vue';
import SelectionView from '@/views/FC/SelectionView.vue';
import SelectView from '@/views/FC/SelectView.vue';

import ModalView from '@/views/LC/ModalView.vue';
import SystemView from '@/views/LC/SystemView.vue';
import ToastView from '@/views/LC/ToastView.vue';
import TooltipView from '@/views/LC/TooltipView.vue';


const routes = [
  {
    path: '/',
    component: LayoutBase,
    children: [
      {
        path: '',
        alias: ['/home', '/main'],
        name: 'main-view',
        component: MainView,
        meta: {
          depth: 1,
        }
      }
    ]
  },
  {
    path: '/CC',
    component: LayoutBase,
    children: [
      {
        path: 'accordion',
        name: 'accordion-view',
        component: AccordionView,
        meta: {
          depth: 2,
        }
      },
      {
        path: 'tab',
        name: 'tab-view',
        component: TabView,
        meta: {
          depth: 2,
        }
      }
    ]
  },
  {
    path: '/EC',
    component: LayoutBase,
    children: [
      {
        path: 'scroll',
        name: 'scroll-view',
        component: ScrollView,
        meta: {
          depth: 2,
        }
      },
      {
        path: 'toggle',
        name: 'toggle-view',
        component: ToggleView,
        meta: {
          depth: 2,
        }
      }
    ]
  },
  {
    path: '/FC',
    component: LayoutBase,
    children: [
      {
        path: 'datepicker',
        name: 'datepicker-view',
        component: DatepickerView,
        meta: {
          depth: 2,
        }
      },
      {
        path: 'file',
        name: 'file-view',
        component: FileView,
        meta: {
          depth: 2,
        }
      },
      {
        path: 'input',
        name: 'input-view',
        component: InputView,
        meta: {
          depth: 2,
        }
      },
      {
        path: 'selection',
        name: 'selection-view',
        component: SelectionView,
        meta: {
          depth: 2,
        }
      },
      {
        path: 'select',
        name: 'select-view',
        component: SelectView,
        meta: {
          depth: 2,
        }
      },
    ]
  },
  {
    path: '/FC',
    component: LayoutBase,
    children: [
      {
        path: 'modal',
        name: 'modal-view',
        component: ModalView,
        meta: {
          depth: 2,
        }
      },
      {
        path: 'system',
        name: 'system-view',
        component: SystemView,
        meta: {
          depth: 2,
        }
      },
      {
        path: 'toast',
        name: 'toast-view',
        component: ToastView,
        meta: {
          depth: 2,
        }
      },
      {
        path: 'tooltip',
        name: 'tooltip-view',
        component: TooltipView,
        meta: {
          depth: 2,
        }
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
