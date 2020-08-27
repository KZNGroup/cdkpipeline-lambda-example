#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkpipelineLambdaExampleStack } from '../lib/cdkpipeline-lambda-example-stack';

const app = new cdk.App();
new CdkpipelineLambdaExampleStack(app, 'CdkpipelineLambdaExampleStack');
