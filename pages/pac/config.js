function FindProxyForURL(url, host) {
  alert(`hello ${host} - ${url}`);

  if (
    shExpMatch(host, "*vlxx*" ) || 
    shExpMatch(host, "*gaito*" ) ||
    shExpMatch(host, "*gaigu*" ) ||
    shExpMatch(host, "*rphang*" ) ||
    shExpMatch(host, "*medium*" ) ||
    shExpMatch(host, "*beeg*" ) ||

    shExpMatch(host, "*netflix*" ) ||
    shExpMatch(host, "*fast*" ) ||
    shExpMatch(host, "*udemy*" ) ||

    shExpMatch(host, "*externulls*" ) ||
    shExpMatch(host, "*yandex*" ) ||
    shExpMatch(host, "*javhd*" ) ||
    shExpMatch(host, "*whatismyip*" )
  ) {
    return "PROXY 127.0.0.1:65000";
  }

  return "DIRECT";
}
