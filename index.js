/**
 * base on weflow cons
 * @authors ZP (zhanpeng.zhu@360che.com)
 * @date    2016-06-18 14:36:31
 * @version 1.0
 */

var folders = ['html','css','images','js'],
    path    = process.argv[2],
    fs      =  require('fs');
    function createDevFolders(_path){
        _path = _path + '/src';
        fs.mkdir(_path,0777,function(){
            folders.forEach(function(folder){
                var name = _path + '/' + folder;
                fs.mkdir(name,0777,function(err){
                    if(err){
                        console.log(err);
                    }
                })
            })  
        })
    };
    if(!path) return;
    var projectNames = path.match(/([^\/$]+)/g);
    path = projectNames.length > 1 ? path : __dirname + '/' + projectNames[0];
    fs.mkdir(path,0777,function(err){
        if(!err){
            createDevFolders(path); 
        }else{
            console.log(err);
        }       
    }); 
