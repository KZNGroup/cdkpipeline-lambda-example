#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkpipelineLambdaExampleStack } from '../lib/cdkpipeline-lambda-example-stack';
import { CdkpipelineLambdaExamplePipeline } from '../lib/cdkpipeline-lambda-example-pipeline';

const app = new cdk.App();

new CdkpipelineLambdaExampleStack(app, 'CdkpipelineLambdaExampleStack');

new CdkpipelineLambdaExamplePipeline(app, 'cdkpipeline-lambda-example-pipeline');

app.synth();