import * as cdk from '@aws-cdk/core';
import { CdkpipelineLambdaExampleStack } from './cdkpipeline-lambda-example-stack';

export class CdkpipelineLambdaExampleStage extends cdk.Stage {

  constructor(scope: cdk.Construct, id: string, props?: cdk.StageProps) {
    super(scope, id, props);

    new CdkpipelineLambdaExampleStack(this, 'example', props);

  }

}
