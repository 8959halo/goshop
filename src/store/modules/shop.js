import {RECEIVE_GOODS, RECEIVE_INFO, RECEIVE_RATINGS} from "../mutation-types";
import {reqGoods, reqInfo, reqRatings} from "../../api";

const state={
  goods: [], // 商品列表
  ratings: [], // 商家评价列表
  info: {}, // 商家信息

}
const mutations={
  [RECEIVE_INFO](state, {info}) {
    state.info = info
  },

  [RECEIVE_RATINGS](state, {ratings}) {
    state.ratings = ratings
  },

  [RECEIVE_GOODS](state, {goods}) {
    state.goods = goods
  },


}
const actions={
  //异步获取商家信息
  async getShopInfo({commit}){
    const result = await reqInfo()
    console.log(result)
    if (result.code===0) {
      const info = result.data
      commit(RECEIVE_INFO,{info})

    }

  },
  //异步获取评论信息
  async getRatings({commit}){
    const result = await reqRatings()
    if (result.code===0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS,{ratings})

    }

  },
  //异步获取食物信息
  async getGoods({commit}){
    const result = await reqGoods()
    if (result.code===0) {
      const goods = result.data
      commit(RECEIVE_GOODS,{goods})

    }

  },

}
const getters={

}


export default {
  state,
  mutations,
  actions,
  getters
}
