/*
发送ajax请求的模块
*/
import axios from 'axios'

export default function ajax(url, data = {}, method = 'GET') {
  return new Promise((resolve, reject) => {
    let promise
    //执行异步代码
    if (method === 'GET') {
      promise = axios.get(url, {params: data}) //指定所有的query参数
    } else {
      promise = axios.post(url, data)
    }

    promise.then(response => {
      resolve(response.data)
      //请求成功调用resolve方法
    }).catch(erro => {
      //请求失败调用reject方法
      // reject(erro)
      //统一处理请求错误  不在调用catch方法
      alert('请求失败', erro.message)
    })


  })


}

//请求登录
async function login() {
  // await ajax('/login', {name: 'tom', pwd: '1234'}, 'POST').then(function (response) {
  //   //查看返回的数据里的data
  //   const result=response.data
  // })
  // try {
  //   const result = await ajax('/login',{name:'tom',psw:'1234'},'POST')
  // }
  const result = await ajax('/login', {name: 'tom', psw: '1234'}, 'POST')
}

