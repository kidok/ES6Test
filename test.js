<script type="text/javascript">
    var guid_cookie = Web.StateManager.Cookies.get("NV_OTHERINFO", "ID");
    guid_cookie = guid_cookie.replace(/: /g, '');
    var guid_query = "18297204891529020160502105059";
    var nr = false;
    if (String.isNullOrEmpty(guid_cookie) || String.isNullOrEmpty(guid_query) || guid_cookie.length <= 5 || guid_query.length <= 5) {
        nr = true;
    } else if (guid_cookie.substring(5).toLowerCase() != guid_query.substring(5).toLowerCase()) {
        nr = true;
    };
    if (nr) {
        Web.StateManager.Cookies.clear("NV_OTHERINFO");
        window.location.href = "https://secure.newegg.com/NewMyAccount/AccountLogin.aspx?tojump=0&nextpage=https%3a%2f%2fsecure.newegg.com%2fNewMyAccount%2fOrderHistory.aspx";
    };
</script>https://docs.google.com/spreadsheets/d/1GeqLJ1BzxxazA4BAHsinmKQpnCppW7ts2VSZH7Fvmeg/edit?usp=sharing
