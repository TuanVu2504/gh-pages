function FindProxyForURL(url, host) {
  alert(`hello ${host} - ${url}`);
  [
    "*vlxx.mobi",
    "gaito.shop",
    "medium.com",
    ".*medium.com",
    ".*whatismyip.com"
  ].some(p => shExpMatch(host, p)) {
    return "PROXY 127.0.0.1:65000";
  }

  return "DIRECT";
}
