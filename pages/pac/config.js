function FindProxyForURL(url, host) {
  alert(`hello ${host} - ${url}`);

  if (
    shExpMatch(host, "*vlxx.mobi" ) || 
    shExpMatch(host, "*gaito.shop" ) ||
    shExpMatch(host, "*medium.com" ) ||
    shExpMatch(host, "*google-analytics.com" ) ||
    shExpMatch(host, "*beeg*.com" ) ||

    shExpMatch(host, "*externulls*.com" ) ||
    shExpMatch(host, "*yandex*.ru" ) ||
    shExpMatch(host, "*beeglivesex*.com" ) ||

    shExpMatch(host, "*whatismyip*.com" )
  ) {
    return "PROXY 127.0.0.1:65000";
  }

  return "DIRECT";
}
