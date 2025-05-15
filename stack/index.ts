import { App } from "aws-cdk-lib";
// import { NuxtStack, type NuxtProps } from "@thunderso/cdk-nuxt";
import { NuxtStack, type NuxtProps } from "../../../../LIBRARIES/cdk-nuxt";

const stack: NuxtProps = {
  debug: false,

  env: {
    account: '665186350589',
    region: 'ap-southeast-1'
  },
  application: 'examples',
  service: 'brochure',
  environment: 'test',

  rootDir: '',

  serverProps: {
    dockerFile: 'Dockerfile',
  },

  // ... other props
};

new NuxtStack(new App(), `${stack.application}-${stack.service}-${stack.environment}-stack`, stack);