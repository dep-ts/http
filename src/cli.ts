#!/usr/bin/env node

import { Command } from '@dep/command';
import { logger } from '@dep/logger';
import { description, name, version } from './utils/pkg.ts';
import { HttpOptions } from './core/types.ts';
import { http } from '@/main.ts';

// Generic HTTP command (any method) default GET
const cli = new Command()
  .name(name.split('/')[1] ?? 'http')
  .version(version)
  .description(description)
  .argument('url', 'URL to request')
  .option('--method', {
    description: 'HTTP method (GET, POST, PUT, DELETE, PATCH)',
    default: 'GET',
    choices: ['GET', 'POST', 'DELETE', 'PATCH'],
    optional: true,
  })
  .option('--headers', {
    optional: true,
    description: 'Request headers as JSON string',
  })
  .option('--body', {
    description: 'Request body data',
    optional: true,
  })
  .option('--timeout', {
    description: 'Request timeout in milliseconds',
    optional: true,
  })
  .handler(async ({ args, options }) => {
    try {
      const config: HttpOptions = {
        method: (
          options.method ?? 'GET'
        ).toUpperCase() as HttpOptions['method'],
      };

      if (options.headers) {
        try {
          config.headers = JSON.parse(options.headers);
        } catch {
          logger.error('Invalid headers JSON format');
          return;
        }
      }

      if (options.body) {
        Object.assign(config, {
          headers: { 'Content-Type': 'application/json' },
          body: options.body,
        });
      }

      if (options.timeout) {
        Object.assign(config, {
          timeout: parseInt(options.timeout),
        });
      }

      const response = await http(args.url, config);
      const data = await response.text();
      logger.log(data);
    } catch (err) {
      if (err instanceof Error) {
        logger.error(`Request failed: ${err.message}`);
        return;
      }
      throw err;
    }
  });

(async () => {
  try {
    await cli.run();
  } catch (err) {
    if (err instanceof Error) {
      console.error(`\nError: ${err.message}\n`);
      cli.help();
      return;
    }
    throw err;
  }
})();
