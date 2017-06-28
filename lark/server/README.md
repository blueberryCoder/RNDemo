## 用户信息接口

### 获取用户信息接口

请求：

```
POST /user/get HTTP/1.1
Host: localhost:3000
patrol-sessionId: ff766571-babc-44de-abee-c3d41b361589
Content-Type: application/json
Cache-Control: no-cache
Postman-Token: 96ea6690-2a25-954b-5b45-4013b582e396

{
    "key":"HSHHSGSGGSTWSYWSYUSUWSHWBS-REACT-NATIVE",
    "partment":"框架研发"
}

```

响应:
```
{
    "status": 1,
    "data": [
        {
            "userid": "591F68A5-87E6-4A6C-810F-5A50953AE747",
            "username": "宋江",
            "partment": "框架研发",
            "tel": "19008097890",
            "email": "test0@126.com",
            "tag": "研发",
            "creater": "wlh",
            "token": "AE0218C4-21F2-4846-9767-28CE3C5D9579C34C0B51-3A68-4297-9C7E-A851B136D34F"
        },
        {
            "userid": "6998EED4-BB29-469E-B19A-DF4171B1FD12",
            "username": "卢俊义",
            "partment": "框架研发",
            "tel": "19008097891",
            "email": "test1@126.com",
            "tag": "研发",
            "creater": "wlh",
            "time": "2015-07-14T05:48:56.192Z",
            "token": "C0B668AB-A030-4A35-8A3C-422DEF4F9BE2undefined"
        },
        {
            "userid": "3240870A-538F-4A84-B00E-567E910A30ED",
            "username": "吴用",
            "partment": "框架研发",
            "tel": "19008097892",
            "email": "test2@126.com",
            "tag": "研发",
            "creater": "wlh",
            "time": "2015-07-14T09:18:59.174Z",
            "token": "13E2A651-0044-428B-81FD-6ABBB96D663AC34C0B51-3A68-4297-9C7E-A851B136D34F"
        },
        {
            "userid": "3240870A--4A84-B00E-567E910A30ED",
            "username": "公孙胜",
            "partment": "框架研发",
            "tel": "19008097893",
            "email": "test3@126.com",
            "tag": "研发",
            "creater": "wlh",
            "time": "2015-07-14T09:18:59.174Z",
            "token": "4AAF1FC7-E063-4E95-BC02-97AB-443D-B083-4236E550FAD2"
        },
        {
            "userid": "591F68A5-87E6-4A6C-810F-5A50953AE747",
            "username": "关胜",
            "partment": "框架研发",
            "tel": "19008097894",
            "email": "test4@126.com",
            "tag": "研发",
            "creater": "wlh"
        },
        {
            "userid": "6998EED4-BB29-469E-B19A-DF4171B1FD12",
            "username": "林冲",
            "partment": "框架研发",
            "tel": "19008097895",
            "email": "test5@126.com",
            "tag": "研发",
            "creater": "wlh",
            "time": "2015-07-14T05:48:56.192Z",
            "token": "C0B668AB-A030-4A35-8A3C-422DEF4F9BE2undefined"
        },
        {
            "userid": "3240870A-538F-4A84-B00E-567E910A30ED",
            "username": "秦明",
            "partment": "框架研发",
            "tel": "19008097896",
            "email": "test6@126.com",
            "tag": "研发",
            "creater": "wlh",
            "time": "2015-07-14T09:18:59.174Z",
            "token": "4AAF1FC7-E063-4E95-BC02-45D3D1C83CE15839849B-97AB-443D-B083-4236E550FAD2"
        },
        {
            "userid": "3240870A--4A84-B00E-567E910A30ED",
            "username": "呼延灼",
            "partment": "框架研发",
            "tel": "19008097897",
            "email": "test7@126.com",
            "tag": "研发",
            "creater": "wlh",
            "time": "2015-07-14T09:18:59.174Z",
            "token": "4AAF1FC7-E063-4E95-BC02-97AB-443D-B083-4236E550FAD2"
        },
        {
            "userid": "C9C77472-6672-4B11-9EE2-FA84634D5A13",
            "username": "徐宁",
            "partment": "框架研发",
            "tel": "19008097997",
            "email": "test16@126.com",
            "tag": "研发",
            "creater": "",
            "time": "2015-07-16T08:10:05.691Z"
        },
        {
            "userid": "B06CCEED-F200-40B1-BFB6-0CCFD88C3C27",
            "username": "索超",
            "partment": "框架研发",
            "tel": "19008097998",
            "email": "wukong@126.com",
            "tag": "研发",
            "creater": "",
            "time": "2015-07-16T08:13:04.556Z"
        },
        {
            "userid": "631EE7C9-9D9E-49C9-9CAE-7C30E1E6FE09",
            "username": "戴宗",
            "partment": "框架研发",
            "tel": "19008097999",
            "email": "test17@126.com",
            "tag": "研发",
            "creater": "",
            "time": "2015-07-16T08:13:23.464Z"
        },
        {
            "userid": "3636B950-8E65-45D2-A610-0B2AAF4C85CA",
            "username": "刘唐",
            "partment": "框架研发",
            "tel": "19008098997",
            "email": "test18@126.com",
            "tag": "研发",
            "creater": "",
            "time": "2015-07-16T08:13:27.380Z"
        },
        {
            "userid": "C505CD16-4261-4DDD-9CBB-DCFAF42C96D9",
            "username": "李逵",
            "partment": "框架研发",
            "tel": "19008096997",
            "email": "test19@126.com",
            "tag": "研发",
            "creater": "",
            "time": "2015-07-16T08:14:48.104Z"
        },
        {
            "userid": "9109C8F1-0691-4122-9AF3-AC79776D83C0",
            "username": "e",
            "partment": "框架研发",
            "tel": "19008197997",
            "email": "test20@126.com",
            "tag": "研发",
            "creater": "",
            "time": "2015-07-18T09:58:55.652Z",
            "token": ""
        },
        {
            "userid": "78841131310-101224-41133-A5150-7903106132113910",
            "username": "乔峰",
            "partment": "框架研发",
            "tel": "17713720871",
            "email": "123@qq.com",
            "tag": "研发",
            "creater": "blueberry",
            "time": "2017-06-23T06:01:00.551Z",
            "token": "105729815-149111-41147-B1481-8115111213105010733c27aca4870c04d4"
        },
        {
            "userid": "1117071198-1515214-4188-B131513-33101111270810106",
            "username": "乔峰",
            "partment": "框架研发",
            "tel": "17713720871",
            "email": "123@qq.com",
            "tag": "研发",
            "creater": "blueberry",
            "time": "2017-06-23T06:01:37.513Z",
            "token": ""
        }
    ]
}

```

### 创建用户接口

请求：

```
POST /user/create HTTP/1.1
Host: localhost:3000
patrol-sessionId: ff766571-babc-44de-abee-c3d41b361589
Content-Type: application/json
Cache-Control: no-cache
Postman-Token: 2479ce8f-909f-ef76-3cbe-fe3736cc0aa7

{
    "key":"HSHHSGSGGSTWSYWSYUSUWSHWBS-REACT-NATIV",
    "partment":"框架开发",
    "password":"123",
    "tel":"17727271931",
    "email":"2243234@qq.com",
    "tag":"开发",
    "creater":"blueberry",
    "username":"甄子丹"
}
```

响应：
```
{
    "status": 1,
    "data": {
        "userid": "11135112554-61546-415114-9708-11122108115113465",
        "username": "甄子丹",
        "partment": "框架开发",
        "tel": "17727271931",
        "email": "2243234@qq.com",
        "tag": "开发",
        "creater": "blueberry",
        "time": "2017-06-27T06:11:53.826Z",
        "token": ""
    }
}

```

### 登录接口
请求：
```
POST /user/login HTTP/1.1
Host: localhost:3000
Content-Type: application/json
Accept: application/json
Cache-Control: no-cache
Postman-Token: c967c408-97ab-6b85-fc98-6431cd2065d0

{
    "email":"123@qq.com",
    "password":"123",
    "deviceId":"123XSD"
}
```
响应：
```
{
    "status": 1,
    "data": {
        "userid": "11135112554-61546-415114-9708-11122108115113465",
        "username": "甄子丹",
        "partment": "框架开发",
        "tel": "17727271931",
        "email": "2243234@qq.com",
        "tag": "开发",
        "creater": "blueberry",
        "time": "2017-06-27T06:11:53.826Z",
        "token": "11771511121515-12684-413120-90134-365141513550964123XSD"
    }
}
```

### 根据token登录

```
POST /user/login/token HTTP/1.1
Host: localhost:3000
Content-Type: application/json
Cache-Control: no-cache
Postman-Token: aeb242fd-06f2-31a8-d8c9-b042b02bb64a

{"token":"=015151530148-14918-4430-A12814-1556426661138512-213"}
```
响应：
```
{
    "status": 1,
    "data": {
        "userid": "11135112554-61546-415114-9708-11122108115113465",
        "username": "甄子丹",
        "partment": "框架开发",
        "tel": "17727271931",
        "email": "2243234@qq.com",
        "tag": "开发",
        "creater": "blueberry",
        "time": "2017-06-27T06:11:53.826Z",
        "token": "11771511121515-12684-413120-90134-365141513550964123XSD"
    }
}
```

### 更新密码
请求
```
POST /user/password/update HTTP/1.1
Host: localhost:3000
patrol-sessionId: ff766571-babc-44de-abee-c3d41b361589
Content-Type: application/json
Cache-Control: no-cache
Postman-Token: 8b703fe0-4eb0-9052-c9c3-979b808ad6ff

{
    "oldPassword":"123",
    "password":"456",
    "email":"2243234@qq.com",
    "token":"1104807714-65147-43142-A15415-11292141131312087XSXS_SS"
}

```
响应：
```
{
    "status": 1,
    "data": "更新成功"
}
```

### 删除用户

```
POST /user/delete HTTP/1.1
Host: localhost:3000
patrol-sessionId: ff766571-babc-44de-abee-c3d41b361589
Content-Type: application/x-www-form-urlencoded
Cache-Control: no-cache
Postman-Token: 535563bb-5cc2-dcb8-86eb-209768352298

token=015151530148-14918-4430-A12814-1556426661138512-213&email=123%40qq.com
```


## 公告信息

### 获取信息

请求:

```
POST /message/get HTTP/1.1
Host: 192.168.10.86:3000
Content-Type: application/json
Cache-Control: no-cache
Postman-Token: fbd83bb3-0b59-69df-7d29-62c5a8c01b09

{
    "key":"HSHHSGSGGSTWSYWSYUSUWSHWBS-REACT-NATIVE"
}

```

结果:
```
{
    "status": 1,
    "data": [
        {
            "messageid": "DD61CCF3-17B7-464E-8066-FAC7C2B58F27",
            "userid": "591F68A5-87E6-4A6C-810F-5A50953AE747",
            "username": "宋江",
            "time": "2015-9-23",
            "message": "欢迎新同学小康"
        },
        {
            "messageid": "F05D4D47-1A67-4F44-930F-A5B240CAAC90",
            "userid": "591F68A5-87E6-4A6C-810F-5A50953AE747",
            "username": "李逵",
            "time": "2015-9-22",
            "message": "欢迎新同学催明"
        },
        {
            "messageid": "DD61CCF3-17B7-464E-8066-FAC7C2B58F28",
            "userid": "591F68A5-87E6-4A6C-810F-5A50953AE747",
            "username": "敏儿",
            "time": "2015-9-21",
            "message": "欢迎新同学刘明"
        },
        {
            "messageid": "F05D4D47-1A67-4F44-930F-A5B240CAAC91",
            "userid": "591F68A5-87E6-4A6C-810F-5A50953AE747",
            "username": "宋江",
            "time": "2015-9-20",
            "message": "欢迎新同学刘备"
        },
        {
            "messageid": "DD61CCF3-17B7-464E-8066-FAC7C2B58F29",
            "userid": "591F68A5-87E6-4A6C-810F-5A50953AE747",
            "username": "宋江",
            "time": "2015-9-19",
            "message": "欢迎新同学渡边"
        },
        {
            "messageid": "F05D4D47-1A67-4F44-930F-A5B240CAAC92",
            "userid": "591F68A5-87E6-4A6C-810F-5A50953AE747",
            "username": "宋江",
            "time": "2015-9-18",
            "message": "欢迎新同学彩霞"
        },
        {
            "messageid": "F05D4D47-1A67-4F44-930F-A5B240CAAC93",
            "userid": "591F68A5-87E6-4A6C-810F-5A50953AE747",
            "username": "辛弃疾",
            "time": "2015-9-1",
            "message": "西江月·夜行黄沙道中  明月别枝惊鹊，清风半夜鸣蝉。稻花香里说丰年，听取蛙声一片。七八个星天外，两三点雨山前。旧时⑹茅店社林边，路转溪桥忽见"
        },
        {
            "messageid": "74C88D5A-22CC-4588-9B3F-D614A8706D8D",
            "userid": "591F68A5-87E6-4A6C-810F-5A50953AE747",
            "username": "宋江",
            "time": "2015-9-23",
            "message": "ss"
        },
        {
            "messageid": "E50BCF04-88C0-49FE-B779-9E25A2247A95",
            "userid": "3240870A-538F-4A84-B00E-567E910A30ED",
            "username": "吴用",
            "time": "2015-11-7",
            "message": "g"
        },
        {
            "messageid": "57CAA9FF-5AA7-4F31-A2B4-E2EC4428D194",
            "userid": "3240870A-538F-4A84-B00E-567E910A30ED",
            "username": "吴用",
            "time": "2015-11-7",
            "message": "sssff"
        },
        {
            "messageid": "677142262-99102-415141-9893-110140691536563",
            "userid": "3240870A-538F-4A84-B00E-567E910A30ED",
            "username": "秦明",
            "time": "2017-6-22",
            "message": "测试信息，"
        }
    ]
}
```

### 添加信息

```
POST /message/add HTTP/1.1
Host: localhost:3000
patrol-sessionId: ff766571-babc-44de-abee-c3d41b361589
Content-Type: application/x-www-form-urlencoded
Cache-Control: no-cache
Postman-Token: 8b9c30c7-72aa-eb4c-0a64-09e983d45e3b

token=4AAF1FC7-E063-4E95-BC02-45D3D1C83CE15839849B-97AB-443D-B083-4236E550FAD2&message=%E6%B5%8B%E8%AF%95%E4%BF%A1%E6%81%AF%EF%BC%8C
```