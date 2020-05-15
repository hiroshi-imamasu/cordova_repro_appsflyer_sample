var options = {
  devKey: 'K2***************99', // your AppsFlyer devKey
  isDebug: ture,
  appId: '41*****44',
}

var onSuccess = function(result) {
  // handle result  
  var conversionData = JSON.parse(result);
  var media_source = conversionData.data.media_source;
  Repro.setStringUserProfile("media_source", media_source);
};

function onError(err) {
  console.error(error);
}


window.plugins.appsFlyer.initSdk(options, onSuccess, onError);
