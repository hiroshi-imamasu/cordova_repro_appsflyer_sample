/**  
 * (注意)
 * 以下のサンプルは下記の環境下を想定しています。
 * Cordova AppsFlyer plugin version 4.4.0
 * iOS AppsFlyerSDK v5.2.0
 * Android AppsFlyerSDK v5.2.0
 */


var options = {
  devKey: 'K2***************99', // your AppsFlyer devKey
  isDebug: ture,
  appId: '41*****44',
  onInstallConversionDataListener: true
}

/** Appsflyerからデータの取得成功時に結果を処理するハンドラー*/
/**
 * 
 * @param {JSON} result appsflyerから取得した結果
 * 
 */
var onSuccess = function(result) { 
  var conversionData = JSON.parse(result);
  
  // 結果からメディアソースを取得
  // データには下記のようなものが含まれます
  /* 
    "data": {
      "af_deeplink": "true",
      "campaign": "boo",
      "key": "val",
      "media_source": "someMedia",
      "install_time": "2018-07-12 13:20:19",
      "af_status": "Non-organic",
      "path": "",
      "scheme": "https",
      "host": "ionic.fess.onelink.me"
    },
  */
  // 参考　https://github.com/AppsFlyerSDK/appsflyer-cordova-plugin/blob/HEAD/docs/API.md#initSdk
  var media_source = conversionData.data.media_source;
  
  // Repro上のuser-profileに、key: "media-source", value: media_sourceを設定する。
  // User-profileに関しては下記をご参照ください。
  // https://docs.repro.io/ja/dev/sdk/user-profile.html#id1
  Repro.setStringUserProfile("media_source", media_source);
};

/** Appsflyerからデータの取得失敗時に結果を処理するハンドラー*/
/**
 * 
 * @param {error} err 
 * 
 */
function onError(err) {
  console.error(error);
}


// appsFlyerのSDKを呼び出し、上記で定義したoptionsとハンドラを設定する。
// 参考: https://github.com/AppsFlyerSDK/appsflyer-cordova-plugin/blob/master/docs/API.md#initSdk
window.plugins.appsFlyer.initSdk(options, onSuccess, onError);
