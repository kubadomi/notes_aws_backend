import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";
//import { Key, Attr } from boto3.dynamodb.conditions;

export async function main(event, context) {
  //const data = JSON.parse(event.body);
  //console.log(data);
  //console.log(data.tags);
  const params = {
    TableName: process.env.tableName,
    IndexName: "notes-tags",
    KeyConditionExpression: "#tags = :tagsValue",
    //FilterExpression: "#tags = :tagsValue",
    ExpressionAttributeNames: {
      //"#userId" : "userId",
      "#tags" : "tags"
    },
    ExpressionAttributeValues: {
      //":userIdValue": event.requestContext.identity.cognitoIdentityId,
      ":tagsValue": event.tags
    },
    //ScanIndexForward: false
  };
  console.log(params);

  try {
    const result = await dynamoDbLib.call("query", params);
    console.log(result);
    return success(result.Items);
  } catch (e) {
    return failure({ status: false });
  }
}

//data = dynamoDbLib.scan(
//    FilterExpression=Attr('body[3]').eq("gang, gang2, gang3"))
//"body": "{\"title:\":\"UWAGA\",\"content\":\"wazne ogloszenie\",\"attachment\":\"XD.jpg\",\"tags\":\"gang, gang2, gang3\"}",
