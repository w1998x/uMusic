import React from 'react'
import '../../assets/css/rank.css'
class Rank extends React.Component{
    constructor(){
        super()
        this.state={
            songList: [
                {
                    id: '01',
                    title: '会不会（吉他版）',
                    con: '刘大壮 - 会不会'
                },
                {
                    id: '02',
                    title: '我很好（吉他版）',
                    con: '刘大壮 - 我很好'
                },
                {
                    id: '03',
                    title: '执迷不悟',
                    con: '鱿籽酱 - 执迷不悟'
                },
                {
                    id: '04',
                    title: '海底',
                    con: '一支榴莲 - 海底'
                },
                {
                    id: '05',
                    title: '他只是经过',
                    con: 'h3R3 / Felix Bennett - 他只是经过'
                },
                {
                    id: '06',
                    title: '经济舱 (Live)',
                    con: 'Kafe.Hu - 中国新说唱2020 第十期'
                },
                {
                    id: '07',
                    title: '如果当时2020',
                    subtitle:'(不曾遗忘的符号)',
                    con: '许嵩 / 朱婷婷 - 如果当时2020'
                },
                {
                    id: '08',
                    title: '是想你的声音啊',
                    subtitle:'(你快听 滴答滴)',
                    con: '傲七爷 - 是想你的声音啊'
                },
                {
                    id: '09',
                    title: '天外来物',
                    con: '薛之谦 - 天外来物'
                },
                {
                    id: '10',
                    title: '囍（Chinese Wedding）',
                    con: '葛东琪 - 囍（Chinese Wedding）'
                },
                {
                    id: '11',
                    title: '还是分开',
                    con: '张叶蕾 - 还是分开'
                },
                {
                    id: '12',
                    title: '苦尽甘来',
                    con: '翁梓铭 - 感·知'
                },
                {
                    id: '13',
                    title: '永不失联的爱',
                    con: '周兴哲 - 如果雨之后'
                },
                {
                    id: '14',
                    title: '游京',
                    con: '海伦 - 游京'
                },
                {
                    id: '15',
                    title: 'Love Is Gone (feat. Dylan Matthew) (Acoustic)',
                    con: 'SLANDER / Dylan Matthew - Love Is Gone (Acoustic)'
                },
                {
                    id: '16',
                    title: 'NO关心（日记版）',
                    con: '汪睿 - NO关心'
                },
                {
                    id: '17',
                    title: '偏爱',
                    con: 'Lil Ghost小鬼 - 偏爱'
                },
                {
                    id: '18',
                    title: '会不会（正式版）',
                    con: '刘大壮 - 会不会'
                },
                {
                    id: '19',
                    title: '世间美好与你环环相扣',
                    con: '柏松 - 听闻余生'
                },
                {
                    id: '20',
                    title: '把回忆拼好给你',
                    con: '王贰浪 - 把回忆拼好给你'
                },
            ]
        }
    }
    render(){
        const {songList} = this.state
        return (<div className="rank">
            <div className="hotSongs">
                <div className="hotSongsCon">
                    <div className="hotIcon"></div>
                    <div className="hotTime">更新日期：11月9日</div>
                </div>
            </div>
            <div className="songList">
                    <ul>
                        {songList.map((item) => {
                            return (
                                <li key={item.id}>
                                    <div className="itemList">
                                    <div className={item.id<=3?'left active':'left'}>{item.id}</div>
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
            <div className="hotBot">
                <span>查看完整榜单 ></span>
            </div>
        </div>)
    }
}

export default Rank