/*
[rewrite_local]
^https://zy6kcqa01a.execute-api.us-east-2.amazonaws.com/prod/verifyReceipt url script-response-body Hyperweb.js
[MITM]
hostname =zy6kcqa01a.execute-api.us-east-2.amazonaws.com 
*/

var url = $request.url;
let obj = JSON.parse($response.body);

    obj= {
  "autoRenewStatus" : "0",
  "isActive" : true,
  "expireDateMs" : 4072897555000,
  "expirationIntent" : "USER_CANCELLED",
  "productId" : "ai.laso.ios.HyperWeb.yearly.subscription"
}
;

$done({body:JSON.stringify(obj)});
