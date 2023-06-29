/*
 * bg.js
 * Copyright (C) 2023 Element Davv<elementdavv@hotmail.com>
 *
 * Distributed under terms of the GPL3 license.
 */

(function(){
    'use strict';

    chrome.cookies.onChanged.addListener(changeInfo => {
        var cookie = changeInfo.cookie;
        if (cookie.name == 'bbs_abtest'
            && cookie.domain == '.xcar.com.cn'
            && changeInfo.cause == 'explicit') {
            console.log(changeInfo);
            // be removed or be changed
            if (changeInfo.removed == true || cookie.value == 'b') {
                traditional();
            }
        }
    });

    function traditional() {
        console.log('make traditional');
        var cookie = {};
        cookie.domain = '.xcar.com.cn';
        cookie.expirationDate = Date.now() / 1000 + 31536000;
        cookie.httpOnly = false;
        cookie.name = 'bbs_abtest';
        cookie.path = '/';
        cookie.secure = false;
        cookie.storeId = '0';
        cookie.url = 'https://www.xcar.com.cn/';
        cookie.value = 'a';
        chrome.cookies.set(cookie);
    }

    traditional();

})();
