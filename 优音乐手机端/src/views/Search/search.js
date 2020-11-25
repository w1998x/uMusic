import React from 'react'
import '../../assets/css/search.css'
class Search extends React.Component {
    constructor() {
        super()
        this.state = {
            searchList: [
                {
                    id: 1,
                    title: '耗子尾汁'
                },
                {
                    id: 2,
                    title: '执迷不悟'
                },
                {
                    id: 3,
                    title: '陈奕迅新歌'
                },
                {
                    id: 4,
                    title: '杀死那个石家庄人'
                },
                {
                    id: 5,
                    title: '薛之谦'
                },
                {
                    id: 6,
                    title: '说散就散'
                },
                {
                    id: 7,
                    title: '会不会'
                },
                {
                    id: 8,
                    title: '经济舱'
                },
            ]
        }
    }
    render() {
        const { searchList } = this.state
        return (<div className="search">
            <form method="get">
                <div className="inputBox">
                    <i className="icon"></i>
                    <input type="text" placeholder="搜索歌曲、歌手、专辑" />
                    <span></span>
                </div>
            </form>
            <div className="searchCon">
                <h3 className="title">热门搜索</h3>
                <ul>
                    {searchList.map(item => {
                        return (
                            <li key={item.id}>
                                <a href="" src="">{item.title}</a>
                            </li>
                        )
                    })

                    }
                </ul>
            </div>
        </div>)
    }
}

export default Search