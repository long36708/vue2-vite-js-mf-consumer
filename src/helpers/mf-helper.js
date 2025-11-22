/**
 * @Author: longmo
 * @Date: 2025-11-22 20:05:01
 * @LastEditTime: 2025-11-22 21:42:46
 * @FilePath: src/helpers/mf-helper.js
 * @Description:
 */
import { createInstance } from '@module-federation/enhanced/runtime';

const MF_VERSION = '1.0.0'
export function getMfInstance(){
    const mf = createInstance({
        name: 'mf_host',
        remotes: [
            {
                name: 'vue2_vite_provider',
                alias: 'remote',
                entry: `./module-federation/vue2-vite-ts-mf-provider@${MF_VERSION}/mf-manifest.json`,
            }
        ]
    });
    return mf;
}
