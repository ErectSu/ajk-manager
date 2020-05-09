import React, { useEffect } from 'react';
import OrderStatus from './OrderStatus'
import Menu from './Menu'
import Refresh from './Refresh'
import './style.css'

function Home(){
    document.title = '主页'
    // useEffect(()=>{
        // voiceAnnouncements('最近项目中需要进入某个网页时需要语音播报，以下是在查找资料时找到的方法，在项目中需要对ajax请求返回的消息进行语音播报.')
    // })
    
//语音播报
// function voiceAnnouncements(str){
//     //百度
//     var url = "http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&text=" + encodeURI(str);        // baidu
//     var n = new Audio(url);
//     n.src = url;
//     n.play();
// }
    return (
        <div className="home">
            <OrderStatus />
            <Menu />
            <Refresh />
        </div>
    )
}

export default Home