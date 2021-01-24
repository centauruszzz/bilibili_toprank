function httpRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            callback(xhr.responseText);
        }
    }
    xhr.send();
}

function showPopList(result) {
    result.replace(/\n/g, '//n');
    result = JSON.parse(result);
    var list = result.data.list;
    var data = '<div>'
    var bilibiliprefix='https://www.bilibili.com/video/'
    for (var i in list) {
        data += '<a class="data" href="'+bilibiliprefix+list[i].bvid+'"target="_blank">';
        data += '<img src=' + list[i].pic + '>';
        data += '<div class="info">'
        data += '<div class="title" ">' + list[i].title + '</div>';
        data += '<span class="rcmd_reason">' + list[i].rcmd_reason.content + '</span>'
        data += '<span class="owner">' + list[i].owner.name + '</span>';
        data += '</div>'
        data += '</a>';
    }
    data += '</div>'
    document.getElementById('popList').innerHTML = data;
}

function imgformat(result) {
    result.replace(/\n/g, '//n');
    result = JSON.parse(result);
    var list = result.data.list;
    var table = '<table><tr><th>imgurl</th>></tr>'
    for (var i in list) {
        table += '<tr>';
        table += '<td>' + list[i].pic + '</td>'
        table += '</tr>';
    }
    table += '</table>';
    document.getElementById('popList').innerHTML = table;
}

//var city = localStorage.city;
var maxnumber = 15;
var url = 'https://api.bilibili.com/x/web-interface/popular?ps=' + maxnumber + '&pn=1';
httpRequest(url, showPopList);
