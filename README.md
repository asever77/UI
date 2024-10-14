# ui

## 프로젝트 기본 만들기 순서
1. assets 생성 scss, js 생성
2. main.js 추가하기 
```
import '@/assets/scss/app.scss';
import UI from '@/assets/js/ui.global.js';
createApp(App).use(store).use(router).use(UI).mount('#app');
```
3. App.vue에서 template 구조 작성
4. views에 첫페이지(MainView.vue) 생성
5. router/index.js 수정 




## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# views

## CC
Content Components
- Accordion
- Tab

## EC
Event Components
- Toggle
- Scroll

## FC
Form Components
- Input
- Selections
- Select
- File
- Datepicker

## LC
Layer Components
- Modal
- Alert
- Toast
- Tooltip