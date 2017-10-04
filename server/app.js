var express = require('express');  
var app = express();  
  
//解决跨域  
app.all('*', function(req, res, next) {  
    res.header("Access-Control-Allow-Origin", "*");  
    res.header("Access-Control-Allow-Headers", "X-Requested-With");  
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
    res.header("X-Powered-By",' 3.2.1')  
    res.header("Content-Type", "application/json;charset=utf-8");  
    next();  
});  
  
app.get('/getList.json',function(req,res){  
    //返回的json对象  
    var obj = {  
        list: [  
            {    
                pid:1,
                title:"高夫（gf）洗净凡尘大圣限量男士套装",
                price:100.00,
                number:0,
                src:"https://img10.360buyimg.com/jdcms/s150x150_jfs/t7642/268/1288673310/187075/28ee6e8a/599be3e4Nb9609cfa.jpg!q80.webp"
            },
            {   
                pid:2,
                title:"芬奇 Vincinni 果酱夹心威化饼干160g*3袋",
                price:25.00,
                number:0,
                src:"https://img12.360buyimg.com/jdcms/s150x150_jfs/t6982/276/647285132/348661/7e5355af/597857d5N580a4881.jpg!q80.webp"
            },
            {   
                pid:3,
                title:"维达(Vinda) 抽纸 超韧3层130抽软抽*6包(小规格)",
                price:12.00,
                number:0,
                src:"https://img14.360buyimg.com/n2/jfs/t4411/116/2500691746/231279/19b58431/58f03983N65941860.jpg!q80.webp"
            },
            {   
                pid:4,
                title:"丹麦进口 丹麦蓝罐（Kjeldsens） 曲奇饼干 ",
                price:33.00,
                number:0,
                src:"https://img10.360buyimg.com/jdcms/s130x130_jfs/t6313/194/94009909/207375/2239e4e1/5939263eN1101d79f.jpg!q80.webp"
            },
            {   
                pid:5,
                title:"五粮液 股份有限公司 五粮醇",
                price:299.00,
                number:0,
                src:"https://img14.360buyimg.com/jdcms/s130x130_jfs/t2815/65/636043064/156785/635b9836/571de61dN26847896.jpg!q80.webp"
            },
            {   
                pid:6,
                title:"三只松鼠 坚果零食干果礼盒 6袋装 中秋大礼包1208g/盒",
                price:98.00,
                number:0,
                src:"http://img10.360buyimg.com/jdcms/s150x150_jfs/t9298/135/480692652/271184/829efb59/59a90b1cN6c1a5c90.jpg!q80.webp"
            }
        ]  
    };  
    res.jsonp(obj);  
});  

app.get('/goumai',function(req,res){  
    res.jsonp();
})
//启动服务，监听一个端口，不要和页面的端口  
app.listen(3030);  