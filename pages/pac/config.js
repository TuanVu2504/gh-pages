function FindProxyForURL(url, host) {
  alert(`hello ${host} - ${url}`);
  return "PROXY 127.0.0.1:65000";

  return "DIRECT";
}
