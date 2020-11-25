import React from 'react'
import '../../assets/css/home.css'

import img1 from '../../assets/images/1.jpg'
import img2 from '../../assets/images/2.jpg'
import img3 from '../../assets/images/3.jpg'
import img4 from '../../assets/images/4.jpg'
import img5 from '../../assets/images/5.jpg'
import img6 from '../../assets/images/6.jpg'
class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            recList: [
                {
                    id: 1,
                    title: '「Dream Time」驶入淡紫色梦境',
                    img: img1,
                    num: '9.6亿'
                },
                {
                    id: 2,
                    title: '我想把这些甜甜的歌都唱给你听',
                    img: img2,
                    num: '105.5万'
                },
                {
                    id: 3,
                    title: '『精选翻唱』万人血书求完整～',
                    img: img3,
                    num: '19.4万'
                },
                {
                    id: 4,
                    title: '我对你又何止是执迷不悟',
                    img: img4,
                    num: '86.7万'
                },
                {
                    id: 5,
                    title: '“所以你长篇大论换来了什么.”',
                    img: img5,
                    num: '2189.6万'
                },
                {
                    id: 6,
                    title: '​做全世界的大人，只做你一个人的小朋友',
                    img: img6,
                    num: '142.3万'
                },
            ],
            newList: [
                {
                    id: 1,
                    title: '失眠飞行',
                    subtitle: ' (原唱：接个吻，开一枪 / 沈以诚 / 薛明媛)',
                    con: '一条小团团OvO - 失眠飞行'
                },
                {
                    id: 2,
                    title: 'Never(狼殿下战爱版预告宣传曲)',
                    con: '卢苑仪 - Never(狼殿下战爱版预告宣传曲)'
                },
                {
                    id: 3,
                    title: '天性使燃',
                    con: 'Higher Brothers - 天性使燃'
                },
                {
                    id: 4,
                    title: '地球上最无聊的下午',
                    con: '黄鸿升 - 地球上最无聊的下午'
                },
                {
                    id: 5,
                    title: 'Hey Boy',
                    con: 'Sia - Hey Boy'
                },
                {
                    id: 6,
                    title: 'NO关心（日记版）',
                    con: '汪睿 - NO关心'
                },
                {
                    id: 7,
                    title: '森林巴士',
                    con: '傲七爷 - 森林巴士'
                },
                {
                    id: 8,
                    title: '我愿意',
                    subtitle: '(影视剧《最初的相遇，最后的别离》中文主题曲)',
                    con: '摩登兄弟刘宇宁 - 我愿意'
                },
                {
                    id: 9,
                    title: '如果当时2020 不曾遗忘的符号',
                    subtitle: '(不曾遗忘的符号)',
                    con: '许嵩 / 朱婷婷 - 如果当时2020'
                },
                {
                    id: 10,
                    title: '面朝大海',
                    con: '姚晨 / 福禄寿FloruitShow - 面朝大海'
                },
            ]
        }
    }
    render() {
        const { recList, newList } = this.state
        return (<div className="home">
            <div className="rec">
                <div className="recTitle">
                    <h1>推荐歌单</h1>
                </div>
                <div className="recList">
                    <ul className="clearfix">
                        {recList.map((item) => {
                            return (
                                <li key={item.id}>
                                    <span className="mask">
                                        {/* <img src="../../assets/images/icon2.png" /> */}
                                        {item.num}
                                    </span>
                                    <img className="img" src={item.img} />
                                    <p>{item.title}</p>

                                </li>
                            )
                        })
                        }
                    </ul>
                </div>
            </div>
            <div className="new">
                <div className="newTitle">
                    <h1>最新音乐</h1>
                </div>
                <div className="newList">
                    <ul>
                        {newList.map((item) => {
                            return (
                                <li key={item.id}>
                                    <div className="itemList">
                                        <div className="txt">
                                            <h4>{item.title}
                                                <span>{item.subtitle}</span>
                                            </h4>
                                            <p>
                                                <i className="sq"></i>
                                                {item.con}
                                            </p>
                                        </div>
                                        <div className="right">
                                            <span className="play"></span>
                                        </div>
                                    </div>
                                </li>
                            )
                        })

                        }
                    </ul>
                </div>
            </div>
            <div className="bot">
                <div className="logo">
                    <h1>网易云音乐</h1>
                </div>
                <div className="more">
                    打开App，发现更多好音乐 >
                </div>
                <p>
                    网易公司版权所有©1997-2020     杭州乐读科技有限公司运营
                </p>
            </div>
        </div>)
    }
}

export default Home