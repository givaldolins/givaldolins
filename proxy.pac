function FindProxyForURL(url, host) {
  var bypass = [
      "*.aws.amazon.com",
      "*.amazonaws.com",
      "*.elasticbeanstalk.com",
      "*.cloudfront.net",
      "*.awsstatic.com"
  ];
  for (var i = 0; i < bypass.length; i++) {
    if (shExpMatch(host, bypass[i])) {
      return "PROXY squid.corp.redhat.com:3128";
    }
  }

  // If no match, go directly
  return "DIRECT";
}
