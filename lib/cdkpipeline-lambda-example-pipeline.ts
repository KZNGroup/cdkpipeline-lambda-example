import * as codepipeline from '@aws-cdk/aws-codepipeline';
import * as codepipeline_actions from '@aws-cdk/aws-codepipeline-actions';
import * as cdk from '@aws-cdk/core';
import * as pipelines from "@aws-cdk/pipelines";
import { CdkpipelineLambdaExampleStage } from './cdkpipeline-lambda-example-stage';

export class CdkpipelineLambdaExamplePipeline extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const sourceArtifact = new codepipeline.Artifact();
    const cloudAssemblyArtifact = new codepipeline.Artifact();

    const pipeline = new pipelines.CdkPipeline(this, 'Pipeline', {
      pipelineName: 'cdkpipeline-lambda-example',
      cloudAssemblyArtifact,

      sourceAction: new codepipeline_actions.GitHubSourceAction({
        actionName: 'GitHub',
        output: sourceArtifact,
        oauthToken: cdk.SecretValue.secretsManager('secret-name'),
        owner: 'KZNGroup',
        repo: 'cdkpipeline-lambda-example',
        branch: 'master'
      }),

      synthAction: pipelines.SimpleSynthAction.standardNpmSynth({
        sourceArtifact,
        cloudAssemblyArtifact,
        buildCommand: 'npm run build',
        environment: {
          privileged: true
        }
      }),
    });

    pipeline.addApplicationStage(new CdkpipelineLambdaExampleStage(this, 'prod'))

  }
}
