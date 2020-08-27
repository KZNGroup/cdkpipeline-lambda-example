import { join } from 'path';
import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda-nodejs';

export class CdkpipelineLambdaExampleStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new lambda.NodejsFunction(this, 'bcrypt', {
      nodeModules: ['bcrypt'],
      projectRoot: join(__dirname, '..')
    });

  }
}
