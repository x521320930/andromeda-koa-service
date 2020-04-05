/**
 * @description 配置环境
 */

import * as dotenv from 'dotenv';
import * as path from 'path';

const NODE_ENV = process.env.NODE_ENV as string
dotenv.config({ path: path.resolve(process.cwd(), `.env.${NODE_ENV}`) })