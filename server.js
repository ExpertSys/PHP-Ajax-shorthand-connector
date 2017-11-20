$(document).ready(function(){

    function createServer(type,obj,obj_id,url,show_parent,refreshType,refreshObj,show,hide,data_url){
        noRefresh(refreshType,refreshObj,show,hide);
        $(document).on(type, obj, function(e){
            e.preventDefault();
            $(show_parent).show();
            var id = $(this).attr(obj_id);
            $.post(url, {id: id}, function(data){
                $(data_url).html(data)
            });
        });
    }
    function checkObjAttr(type,obj,attr)
    {
        $(document).on(type,obj, function(){
            alert($(this).attr(attr));
        });
    }
    function noRefresh(type,obj,show,hide)
    {
        $(document).on(type,obj, function(e){
            e.preventDefault();
            $(show).show();
            $(hide).hide();
        });
    }

    createServer("click","#join-room","id","./connections/joinroom.php");
    createServer(null,null,null,null,null,"click","#cancel",null,".userpage");
    createServer("click",".div","id","./divInfo.php","divInfo.php",null,null,null,null,".divInfo");

    noRefresh("click",".x-btn",null,".divInfo");
});
