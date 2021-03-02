const setCookie = (name,value,days) => {
    let expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
const getCookie = (name) => {
    const nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(let i=0;i < ca.length;i++) {
        let c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
const eraseCookie = (name) => {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

$(document).ready((e) =>{
    const cookieConsent = getCookie("rosance_cookie_consent");
    if(cookieConsent == null)
    {
        displayCookieBanner();
    }else{
        console.log("cookies agreed!");
    }
})

const displayCookieBanner = () =>{
    const btn = ``;
    const banner = `<div id="cookie_banner" class="text-center bg-dark position-fixed w-100 py-4" role="alert" style="left:0; bottom:0; margin:0;">
    <div class="row">
        <div class="col-md-12 col-sm-10 text-white">
            <b>We require your attention</b> &#x1F36A; <br/> We use cookies to ensure you get the best experience on our website. Click <b><a class="text-info" href="https://cookiesandyou.com/" target="_blank">here</a></b> to learn more about cookies<br/>
            <b><a class="text-info" href="javascript:void(0)" id="IAgreeWithCookies">I agree with cookies</a></b>
        </div>
    </div>
</div>`;
    $(document).find("body").append(banner);
    $("#IAgreeWithCookies").on("click",(e)=>{
        acceptCookies();
    })
}

const acceptCookies = () =>{
    setCookie("rosance_cookie_consent","afirmative",365);
    $("#cookie_banner").remove();
}