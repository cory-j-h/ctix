import * as env from '@testenv/env';
import { posixJoin } from '@tools/misc';
import { replaceSepToPosix } from 'my-node-fp';

export default [
  {
    resolvedFilePath: posixJoin(env.exampleType03Path, 'BubbleCls.tsx'),
    resolvedDirPath: replaceSepToPosix(env.exampleType03Path),
    relativeFilePath: posixJoin('BubbleCls.tsx'),
    depth: 0,
    isEmpty: false,
    starExported: true,
    defaultExport: undefined,
    namedExports: [{ identifier: 'BubbleCls', isIsolatedModules: false }],
  },
  {
    resolvedFilePath: posixJoin(env.exampleType03Path, 'ComparisonCls.tsx'),
    resolvedDirPath: replaceSepToPosix(env.exampleType03Path),
    relativeFilePath: posixJoin('ComparisonCls.tsx'),
    depth: 0,
    isEmpty: false,
    starExported: true,
    defaultExport: undefined,
    namedExports: [{ identifier: 'ComparisonCls', isIsolatedModules: false }],
  },
  {
    resolvedFilePath: posixJoin(env.exampleType03Path, 'createTypeScriptIndex.d.ts'),
    resolvedDirPath: replaceSepToPosix(env.exampleType03Path),
    relativeFilePath: posixJoin('createTypeScriptIndex.d.ts'),
    depth: 0,
    isEmpty: false,
    starExported: true,
    defaultExport: undefined,
    namedExports: [
      { identifier: 'indexWriter', isIsolatedModules: false },
      { identifier: 'createTypeScriptIndex', isIsolatedModules: false },
      { identifier: 'ICreateTsIndexOption', isIsolatedModules: true },
    ],
  },
  {
    resolvedFilePath: posixJoin(env.exampleType03Path, 'HandsomelyCls.tsx'),
    resolvedDirPath: replaceSepToPosix(env.exampleType03Path),
    relativeFilePath: posixJoin('HandsomelyCls.tsx'),
    depth: 0,
    isEmpty: false,
    starExported: true,
    defaultExport: undefined,
    namedExports: [{ identifier: 'HandsomelyCls', isIsolatedModules: false }],
  },
  {
    resolvedFilePath: posixJoin(env.exampleType03Path, 'index.d.ts'),
    resolvedDirPath: replaceSepToPosix(env.exampleType03Path),
    relativeFilePath: posixJoin('index.d.ts'),
    depth: 0,
    isEmpty: false,
    starExported: true,
    defaultExport: undefined,
    namedExports: [
      { identifier: 'indexWriter', isIsolatedModules: false },
      { identifier: 'createTypeScriptIndex', isIsolatedModules: false },
      { identifier: 'ICreateTsIndexOption', isIsolatedModules: true },
    ],
  },
  {
    resolvedFilePath: posixJoin(env.exampleType03Path, 'SampleCls.tsx'),
    resolvedDirPath: replaceSepToPosix(env.exampleType03Path),
    relativeFilePath: posixJoin('SampleCls.tsx'),
    depth: 0,
    isEmpty: false,
    starExported: true,
    defaultExport: undefined,
    namedExports: [{ identifier: 'SampleCls', isIsolatedModules: false }],
  },
  {
    resolvedFilePath: posixJoin(env.exampleType03Path, 'juvenile/TriteCls.ts'),
    resolvedDirPath: posixJoin(env.exampleType03Path, 'juvenile'),
    relativeFilePath: posixJoin('juvenile/TriteCls.ts'),
    depth: 1,
    isEmpty: false,
    starExported: true,
    defaultExport: undefined,
    namedExports: [{ identifier: 'TriteCls', isIsolatedModules: false }],
  },
  {
    resolvedFilePath: posixJoin(env.exampleType03Path, 'popcorn/case01.ts'),
    resolvedDirPath: posixJoin(env.exampleType03Path, 'popcorn'),
    relativeFilePath: posixJoin('popcorn/case01.ts'),
    depth: 1,
    isEmpty: false,
    starExported: true,
    defaultExport: { identifier: 'case01', isIsolatedModules: false },
    namedExports: [],
  },
  {
    resolvedFilePath: posixJoin(env.exampleType03Path, 'wellmade/ChildlikeCls.ts'),
    resolvedDirPath: posixJoin(env.exampleType03Path, 'wellmade'),
    relativeFilePath: posixJoin('wellmade/ChildlikeCls.ts'),
    depth: 1,
    isEmpty: false,
    starExported: true,
    defaultExport: undefined,
    namedExports: [{ identifier: 'ChildlikeCls', isIsolatedModules: false }],
  },
  {
    resolvedFilePath: posixJoin(env.exampleType03Path, 'wellmade/FlakyCls.ts'),
    resolvedDirPath: posixJoin(env.exampleType03Path, 'wellmade'),
    relativeFilePath: posixJoin('wellmade/FlakyCls.ts'),
    depth: 1,
    isEmpty: false,
    starExported: true,
    defaultExport: undefined,
    namedExports: [{ identifier: 'FlakyCls', isIsolatedModules: false }],
  },
  {
    resolvedFilePath: posixJoin(env.exampleType03Path, 'wellmade/WhisperingCls.ts'),
    resolvedDirPath: posixJoin(env.exampleType03Path, 'wellmade'),
    relativeFilePath: posixJoin('wellmade/WhisperingCls.ts'),
    depth: 1,
    isEmpty: false,
    starExported: true,
    defaultExport: undefined,
    namedExports: [{ identifier: 'WhisperingCls', isIsolatedModules: false }],
  },
  {
    resolvedFilePath: posixJoin(env.exampleType03Path, 'juvenile/spill/ExperienceCls.ts'),
    resolvedDirPath: posixJoin(env.exampleType03Path, 'juvenile/spill'),
    relativeFilePath: posixJoin('juvenile/spill/ExperienceCls.ts'),
    depth: 2,
    isEmpty: false,
    starExported: true,
    defaultExport: undefined,
    namedExports: [{ identifier: 'ExperienceCls', isIsolatedModules: false }],
  },
  {
    resolvedFilePath: posixJoin(env.exampleType03Path, 'wellmade/carpenter/DiscussionCls.ts'),
    resolvedDirPath: posixJoin(env.exampleType03Path, 'wellmade/carpenter'),
    relativeFilePath: posixJoin('wellmade/carpenter/DiscussionCls.ts'),
    depth: 2,
    isEmpty: false,
    starExported: true,
    defaultExport: undefined,
    namedExports: [{ identifier: 'DiscussionCls', isIsolatedModules: false }],
  },
  {
    resolvedFilePath: posixJoin(env.exampleType03Path, 'wellmade/carpenter/MakeshiftCls.ts'),
    resolvedDirPath: posixJoin(env.exampleType03Path, 'wellmade/carpenter'),
    relativeFilePath: posixJoin('wellmade/carpenter/MakeshiftCls.ts'),
    depth: 2,
    isEmpty: false,
    starExported: true,
    defaultExport: undefined,
    namedExports: [{ identifier: 'MakeshiftCls', isIsolatedModules: false }],
  },
  {
    resolvedFilePath: posixJoin(env.exampleType03Path, 'popcorn/finance/discipline/case02.ts'),
    resolvedDirPath: posixJoin(env.exampleType03Path, 'popcorn/finance/discipline'),
    relativeFilePath: posixJoin('popcorn/finance/discipline/case02.ts'),
    depth: 3,
    isEmpty: false,
    starExported: true,
    defaultExport: { identifier: 'case02', isIsolatedModules: false },
    namedExports: [],
  },
  {
    resolvedFilePath: posixJoin(env.exampleType03Path, 'popcorn/finance/discipline/case03.ts'),
    resolvedDirPath: posixJoin(env.exampleType03Path, 'popcorn/finance/discipline'),
    relativeFilePath: posixJoin('popcorn/finance/discipline/case03.ts'),
    depth: 3,
    isEmpty: false,
    starExported: true,
    defaultExport: { identifier: 'Case03', isIsolatedModules: false },
    namedExports: [],
  },
  {
    resolvedFilePath: posixJoin(env.exampleType03Path, 'popcorn/lawyer/appliance/bomb.ts'),
    resolvedDirPath: posixJoin(env.exampleType03Path, 'popcorn/lawyer/appliance'),
    relativeFilePath: posixJoin('popcorn/lawyer/appliance/bomb.ts'),
    depth: 3,
    isEmpty: false,
    starExported: true,
    defaultExport: { identifier: 'bomb', isIsolatedModules: false },
    namedExports: [{ identifier: 'bomb', isIsolatedModules: false }],
  },
  {
    resolvedFilePath: posixJoin(env.exampleType03Path, 'popcorn/lawyer/appliance/IKittens.ts'),
    resolvedDirPath: posixJoin(env.exampleType03Path, 'popcorn/lawyer/appliance'),
    relativeFilePath: posixJoin('popcorn/lawyer/appliance/IKittens.ts'),
    depth: 3,
    isEmpty: false,
    starExported: true,
    defaultExport: { identifier: 'IKittens', isIsolatedModules: true },
    namedExports: [],
  },
  {
    resolvedFilePath: posixJoin(env.exampleType03Path, 'popcorn/lawyer/appliance/TomatoesCls.ts'),
    resolvedDirPath: posixJoin(env.exampleType03Path, 'popcorn/lawyer/appliance'),
    relativeFilePath: posixJoin('popcorn/lawyer/appliance/TomatoesCls.ts'),
    depth: 3,
    isEmpty: false,
    starExported: true,
    defaultExport: undefined,
    namedExports: [{ identifier: 'TomatoesCls', isIsolatedModules: false }],
  },
];
