
  
function changecolor()
{
    if($('#home-tab').hasClass('active'))
    {
        $('#img-user').attr('src','img/icon/user.svg');
    }else
    {
        $('#img-user').attr('src','img/icon/user-1.svg');
    }
}
    
    $( document ).ready(function() {
        changecolor();
        $('#home-tab').on('click',function()
        {
            $('#img-user').attr('src','img/icon/user.svg');
            $('#img-profile').attr('src','img/icon/group-1.svg');
        });

        $('#profile-tab').on('click',function()
        {
            $('#img-user').attr('src','img/icon/user-1.svg');
            $('#img-profile').attr('src','img/icon/group.svg');    
        });
    });