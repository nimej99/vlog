import { createWebHistory, createRouter } from "vue-router";
import list from './components/List.vue';
import home from './components/Home.vue';
import detail from './components/Detail.vue';
import friend from './components/Friend.vue';
import comment from './components/Comment.vue';

const routes = [
  {
    path: "/",
    component: home,
  },
  {
    path: "/list",
    components: {
      default: list,
      comment: comment,
      // redirect도 있음 url 꾸미기가능?
      // beforeEnter: (성공시 목적지 페이지, 출발 페이지)=>{
      //   if (로그인했냐 == false) {
      //     return '/login 이게 to'
      //   }
      // }
    },
  },
  {
    path: "/detail/:id", //(\\d+) 숫자만 찾아주는 정규식 문법
    component: detail,
    // nested routes /detail/index/nested routes
    children:[
      {
        path:'friends',
        component:friend,
      },
      {
        path:'comments',
        component:comment,
      },
    ]
  },
  {
    path: '/anything(.*)',
    component: '에러 페이지',
  }
];

// routes 를 나눠서 밑에 적어주면 되고
// 각 routes 에 함수 적용하고싶으면
// routes.beforeEach(), beforeResolve(), afterEach()
const router = createRouter({
  history: createWebHistory(),
  // url hash 모드 
  // history: createWebHashHistory(),
  routes,
});

export default router; 