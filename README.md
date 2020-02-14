# vuex_test

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

### Run your tests
```
npm run test
```

### 1.例子 vuex_test
### 2.数据流程
    创建module/某模型名.js

      state中
        {
          ***: []
        }
      getter中 (属性)
        ***: (state) => { state.** = state.**   }   映射到vue 的computed中
      action中 (方法)
      *** ({commit}, 请求参数) => {
          commit('commit名', axios获取的data) 
        }                                            映射到vue methods中
      commit中 (属性)
        commit名: (state, axios获取的data) => {
          state.*** = axios获取的data (改变state中的值)
        }

### 3.调用
    { mapAction, mapGetter, mapCommit } from vuex

    computed: {
      ...mapGetter(['属性名'])
    }

    methods: {
      ...mapAction(['方法名']),
      ...mapCommit(['属性名'])
    }
