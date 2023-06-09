function queryStringToObject(queryString) {
    var params = {};
    var pairs = queryString.split('&');
    
    pairs.forEach(function(pair) {
      var keyValue = pair.split('=');
      var key = decodeURIComponent(keyValue[0]);
      var value = decodeURIComponent(keyValue[1] || '');
      if (params[key]) {
        if (Array.isArray(params[key])) {
          params[key].push(value);
        } else {
          params[key] = [params[key], value];
        }
      } else {
        params[key] = value;
      }
    });
    
    return params;
  }
  