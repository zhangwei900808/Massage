$(function(){
    $('.count-component .less').on('click',function(){
        var this$ = $(this);
        this$.next().next().removeClass('active');
        this$.addClass('active');
        var count_txt = this$.next().text();
        var count_int = parseInt(count_txt);
        if(count_int!=0){
            count_int--;
        }
        this$.next().text(count_int+'份');
    })
     $('.count-component .plus').on('click',function(){
         var this$ = $(this);
        this$.prev().prev().removeClass('active');
        this$.addClass('active');
        var count_txt = this$.prev().text();
        var count_int = parseInt(count_txt);
        count_int++;
        this$.prev().text(count_int+'份');
    })
    var now = new Date(),
        max = new Date(now.getFullYear() + 100, now.getMonth(), now.getDate());

    $('#smsj').mobiscroll().date({
        dateFormat:'yy-mm-dd',
        theme: 'ios',
        display: 'bottom',
        max: max,
        lang:'zh'
    });
});