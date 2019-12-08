import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

export async function main(event, context) {
    const data = JSON.parse(event.body);
    const params = {
        TableName: process.env.tableName,
        KeyConditionExpression: "content = :content",
        ExpressionAttributeValues: {
            ":content": data.content
        },
    };

    try {
        const result = await dynamoDbLib.call("query", params);
        // Return the matching list of items in response body
        return success(result.Items);
    } catch (e) {
        return failure({ status: false });
    }
}
