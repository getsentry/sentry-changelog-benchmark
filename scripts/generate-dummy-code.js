#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");

// Configuration
const DUMMY_DIR = path.join(__dirname, "..", "src", "dummy");
const COMPONENTS_COUNT = 50;
const UTILS_COUNT = 30;
const SERVICES_COUNT = 20;

// Create directory structure
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Generate random code segments to avoid deduplication
function generateRandomLogic(seed) {
  const operations = [
    "map",
    "filter",
    "reduce",
    "forEach",
    "find",
    "some",
    "every",
  ];
  const conditions = [">", "<", ">=", "<=", "===", "!=="];
  const mathOps = ["+", "-", "*", "/", "%"];

  return `
  // Generated logic segment ${seed}
  const data${seed} = Array.from({ length: ${100 + seed} }, (_, i) => i);
  const result${seed} = data${seed}
    .${operations[seed % operations.length]}((item, index) => {
      if (item ${conditions[seed % conditions.length]} ${seed}) {
        return item ${mathOps[seed % mathOps.length]} ${seed};
      }
      return item;
    });
  
  const nested${seed} = [];
  for (let i = 0; i < ${50 + seed}; i++) {
    for (let j = 0; j < ${30 + seed}; j++) {
      nested${seed}.push({ 
        id: i ${mathOps[seed % mathOps.length]} j,
        value: i * j ${mathOps[(seed + 1) % mathOps.length]} ${seed},
        metadata: {
          timestamp: Date.now() + i + j,
          seed: ${seed},
          computed: (i + j) * ${seed}
        }
      });
    }
  }
`;
}

// Generate a dummy component
function generateDummyComponent(index) {
  const componentName = `DummyComponent${String(index).padStart(3, "0")}`;
  const seed = index * 17 + 42; // Unique seed per component

  return `"use client";

// Auto-generated test component for sourcemap testing
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import * as lodash from 'lodash';
import * as d3 from 'd3';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { format } from 'date-fns';

interface ${componentName}Props {
  data?: any[];
  config?: Record<string, any>;
  seed?: number;
}

export const ${componentName}: React.FC<${componentName}Props> = ({ 
  data = [], 
  config = {}, 
  seed = ${seed} 
}) => {
  const [state, setState] = useState<any[]>([]);
  const [computed, setComputed] = useState<number>(0);
  const [metadata, setMetadata] = useState<Record<string, any>>({});

  ${generateRandomLogic(seed)}
  ${generateRandomLogic(seed + 1)}
  ${generateRandomLogic(seed + 2)}

  // Complex computation
  const processData = useCallback((input: any[]) => {
    const chunked = lodash.chunk(input, ${10 + (seed % 10)});
    const mapped = chunked.map((chunk, chunkIndex) => {
      return chunk.map((item, itemIndex) => {
        const uuid = uuidv4();
        const timestamp = moment().add(chunkIndex, 'days').add(itemIndex, 'hours');
        const formatted = format(timestamp.toDate(), 'yyyy-MM-dd HH:mm:ss');
        
        return {
          uuid,
          timestamp: formatted,
          value: item,
          computed: lodash.sum([chunkIndex, itemIndex, seed]),
          metadata: {
            chunk: chunkIndex,
            index: itemIndex,
            seed: seed,
            random: Math.random() * seed
          }
        };
      });
    });
    
    return lodash.flatten(mapped);
  }, [seed]);

  // Complex effect
  useEffect(() => {
    const timer = setTimeout(() => {
      const processed = processData(data);
      setState(processed);
      
      const computedValue = processed.reduce((acc, item) => {
        return acc + item.computed + item.metadata.random;
      }, 0);
      setComputed(computedValue);
      
      setMetadata({
        processedAt: new Date().toISOString(),
        itemCount: processed.length,
        avgValue: computedValue / (processed.length || 1),
        seed: seed
      });
    }, ${100 + (seed % 100)});
    
    return () => clearTimeout(timer);
  }, [data, seed, processData]);

  // More complex logic
  const transformedData = useMemo(() => {
    if (state.length === 0) return [];
    
    const grouped = lodash.groupBy(state, item => item.metadata.chunk);
    const transformed = Object.entries(grouped).map(([key, values]) => {
      const sum = lodash.sumBy(values, 'computed');
      const avg = lodash.meanBy(values, v => v.metadata.random);
      const max = lodash.maxBy(values, 'value');
      const min = lodash.minBy(values, 'value');
      
      return {
        group: key,
        sum,
        avg,
        max: max?.value || 0,
        min: min?.value || 0,
        count: values.length,
        items: values
      };
    });
    
    return lodash.sortBy(transformed, 'sum').reverse();
  }, [state]);

  // Additional processing functions
  const calculateMetrics = () => {
    const metrics = {
      total: transformedData.length,
      totalSum: lodash.sumBy(transformedData, 'sum'),
      avgSum: lodash.meanBy(transformedData, 'sum'),
      maxCount: lodash.maxBy(transformedData, 'count')?.count || 0,
      minCount: lodash.minBy(transformedData, 'count')?.count || 0
    };
    
    return metrics;
  };

  const filterData = (threshold: number) => {
    return transformedData.filter(item => item.sum > threshold);
  };

  const aggregateData = () => {
    const aggregated = {
      bySum: lodash.groupBy(transformedData, item => 
        item.sum > 100 ? 'high' : item.sum > 50 ? 'medium' : 'low'
      ),
      byCount: lodash.groupBy(transformedData, item =>
        item.count > 10 ? 'large' : item.count > 5 ? 'medium' : 'small'
      )
    };
    
    return aggregated;
  };

  // Generate visualization data
  const generateChartData = () => {
    const scale = d3.scaleLinear()
      .domain([0, transformedData.length])
      .range([0, 100]);
    
    return transformedData.map((item, index) => ({
      x: scale(index),
      y: item.sum,
      label: item.group,
      color: d3.interpolateRgb('#0000ff', '#ff0000')(scale(index) / 100)
    }));
  };

  ${generateRandomLogic(seed + 3)}
  ${generateRandomLogic(seed + 4)}
  ${generateRandomLogic(seed + 5)}

  // More nested logic
  const processNestedData = () => {
    const levels = [];
    for (let i = 0; i < ${20 + (seed % 10)}; i++) {
      const level = [];
      for (let j = 0; j < ${15 + (seed % 5)}; j++) {
        const item = {
          i,
          j,
          value: i * j + seed,
          uuid: uuidv4(),
          timestamp: moment().add(i, 'days').add(j, 'hours').format('YYYY-MM-DD HH:mm:ss'),
          computed: lodash.sum([i, j, seed])
        };
        level.push(item);
      }
      levels.push(level);
    }
    return levels;
  };

  const nestedResult = useMemo(() => processNestedData(), []);

  return (
    <div className="dummy-component-${index}" data-seed={seed}>
      <h2>${componentName}</h2>
      <div>Computed: {computed.toFixed(2)}</div>
      <div>State Items: {state.length}</div>
      <div>Transformed Groups: {transformedData.length}</div>
      <div>Nested Levels: {nestedResult.length}</div>
      <div>Metadata: {JSON.stringify(metadata)}</div>
      <div>Metrics: {JSON.stringify(calculateMetrics())}</div>
      <div>Chart Points: {generateChartData().length}</div>
    </div>
  );
};

export default ${componentName};
`;
}

// Generate a dummy utility
function generateDummyUtil(index) {
  const utilName = `DummyUtil${String(index).padStart(3, "0")}`;
  const seed = index * 23 + 137;

  return `// Auto-generated utility for sourcemap testing
import * as lodash from 'lodash';
import axios from 'axios';
import { Observable, of, map, filter, reduce } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import * as d3 from 'd3';

export class ${utilName} {
  private seed: number;
  private cache: Map<string, any>;
  
  constructor(seed: number = ${seed}) {
    this.seed = seed;
    this.cache = new Map();
    this.initializeLogic();
  }

  private initializeLogic(): void {
    ${generateRandomLogic(seed)}
    ${generateRandomLogic(seed + 1)}
  }

  // Complex data processing
  public processArray<T>(data: T[]): T[] {
    const chunks = lodash.chunk(data, ${10 + (seed % 10)});
    const processed = chunks.map((chunk, chunkIndex) => {
      return chunk.map((item, itemIndex) => {
        const key = \`\${chunkIndex}-\${itemIndex}-\${this.seed}\`;
        if (this.cache.has(key)) {
          return this.cache.get(key);
        }
        
        const result = this.transformItem(item, chunkIndex, itemIndex);
        this.cache.set(key, result);
        return result;
      });
    });
    
    return lodash.flatten(processed);
  }

  private transformItem<T>(item: T, chunk: number, index: number): any {
    return {
      original: item,
      chunk,
      index,
      uuid: uuidv4(),
      timestamp: moment().add(chunk, 'days').add(index, 'hours').unix(),
      computed: lodash.sum([chunk, index, this.seed]),
      metadata: {
        seed: this.seed,
        random: Math.random() * this.seed,
        hash: this.generateHash(chunk, index)
      }
    };
  }

  private generateHash(a: number, b: number): string {
    let hash = this.seed;
    for (let i = 0; i < ${10 + (seed % 5)}; i++) {
      hash = ((hash << 5) - hash) + a + b + i;
      hash = hash & hash;
    }
    return hash.toString(36);
  }

  private performAnalysisPrep(): void {
    ${generateRandomLogic(seed + 2)}
    ${generateRandomLogic(seed + 3)}
  }

  // Statistical analysis
  public analyze(numbers: number[]): Record<string, number> {
    const sorted = lodash.sortBy(numbers);
    const mean = lodash.mean(numbers);
    const sum = lodash.sum(numbers);
    const max = lodash.max(numbers) || 0;
    const min = lodash.min(numbers) || 0;
    
    const variance = numbers.reduce((acc, n) => {
      return acc + Math.pow(n - mean, 2);
    }, 0) / numbers.length;
    
    const stdDev = Math.sqrt(variance);
    
    return {
      mean,
      sum,
      max,
      min,
      variance,
      stdDev,
      median: sorted[Math.floor(sorted.length / 2)],
      count: numbers.length,
      seed: this.seed
    };
  }

  // Observable-based processing
  public createObservable<T>(data: T[]): Observable<T> {
    return of(...data).pipe(
      map((item: T, index: number) => {
        return {
          ...item as any,
          index,
          processed: true,
          timestamp: Date.now(),
          seed: this.seed
        } as T;
      }),
      filter((item: any) => item.index % 2 === 0)
    );
  }

  private prepareMatrixOps(): void {
    ${generateRandomLogic(seed + 4)}
    ${generateRandomLogic(seed + 5)}
  }

  // Complex matrix operations
  public multiplyMatrices(a: number[][], b: number[][]): number[][] {
    const result: number[][] = [];
    
    for (let i = 0; i < a.length; i++) {
      result[i] = [];
      for (let j = 0; j < b[0].length; j++) {
        let sum = 0;
        for (let k = 0; k < a[0].length; k++) {
          sum += a[i][k] * b[k][j];
        }
        result[i][j] = sum;
      }
    }
    
    return result;
  }

  // Data scaling
  public scaleData(data: number[], min: number, max: number): number[] {
    const scale = d3.scaleLinear()
      .domain([lodash.min(data) || 0, lodash.max(data) || 1])
      .range([min, max]);
    
    return data.map(v => scale(v));
  }

  // Generate test data
  public generateTestData(count: number): any[] {
    const result = [];
    for (let i = 0; i < count; i++) {
      result.push({
        id: i,
        uuid: uuidv4(),
        value: Math.random() * this.seed + i,
        timestamp: moment().add(i, 'minutes').toISOString(),
        computed: this.seed * i,
        nested: this.generateNestedData(${5 + (seed % 3)})
      });
    }
    return result;
  }

  private generateNestedData(depth: number): any {
    if (depth === 0) return { value: Math.random() * this.seed };
    
    return {
      value: Math.random() * this.seed,
      children: Array.from({ length: ${3 + (seed % 2)} }, () => 
        this.generateNestedData(depth - 1)
      )
    };
  }
}

export default ${utilName};
`;
}

// Generate a dummy service
function generateDummyService(index) {
  const serviceName = `DummyService${String(index).padStart(3, "0")}`;
  const seed = index * 31 + 211;

  return `// Auto-generated service for sourcemap testing
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import * as lodash from 'lodash';
import { Observable, Subject, BehaviorSubject, interval } from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import hljs from 'highlight.js';

export interface ${serviceName}Config {
  baseUrl?: string;
  timeout?: number;
  retries?: number;
  seed?: number;
}

export class ${serviceName} {
  private client: AxiosInstance;
  private config: ${serviceName}Config;
  private cache: Map<string, any>;
  private subject: Subject<any>;
  private state: BehaviorSubject<any>;
  
  constructor(config: ${serviceName}Config = {}) {
    this.config = {
      baseUrl: config.baseUrl || 'https://api.example.com',
      timeout: config.timeout || 5000,
      retries: config.retries || 3,
      seed: config.seed || ${seed}
    };
    
    this.client = axios.create({
      baseURL: this.config.baseUrl,
      timeout: this.config.timeout
    });
    
    this.cache = new Map();
    this.subject = new Subject();
    this.state = new BehaviorSubject({ initialized: true });
    
    this.setupInterceptors();
    
    // Initialize with some dummy logic
    this.initializeLogic();
  }

  private initializeLogic(): void {
    ${generateRandomLogic(seed)}
    ${generateRandomLogic(seed + 1)}
  }

  private setupInterceptors(): void {
    this.client.interceptors.request.use(
      (config) => {
        const requestId = uuidv4();
        const timestamp = moment().toISOString();
        
        config.headers = config.headers || {};
        config.headers['X-Request-ID'] = requestId;
        config.headers['X-Timestamp'] = timestamp;
        config.headers['X-Seed'] = String(this.config.seed);
        
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    
    this.client.interceptors.response.use(
      (response) => {
        const processed = this.processResponse(response.data);
        return { ...response, data: processed };
      },
      (error) => {
        return this.handleError(error);
      }
    );
  }

  private processResponse(data: any): any {
    if (Array.isArray(data)) {
      return data.map((item, index) => ({
        ...item,
        processedAt: moment().toISOString(),
        index,
        seed: this.config.seed,
        uuid: uuidv4()
      }));
    }
    
    return {
      ...data,
      processedAt: moment().toISOString(),
      seed: this.config.seed,
      uuid: uuidv4()
    };
  }

  private async handleError(error: any): Promise<never> {
    const retries = this.config.retries || 0;
    
    for (let i = 0; i < retries; i++) {
      await this.delay(${100 + (seed % 100)} * (i + 1));
      
      try {
        // Retry logic would go here
        break;
      } catch (retryError) {
        if (i === retries - 1) {
          throw retryError;
        }
      }
    }
    
    throw error;
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private performAdditionalLogic(): void {
    ${generateRandomLogic(seed + 2)}
    ${generateRandomLogic(seed + 3)}
  }

  // Data fetching methods
  public async fetchData<T>(endpoint: string, params?: any): Promise<T> {
    const cacheKey = this.generateCacheKey(endpoint, params);
    
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }
    
    const response = await this.client.get<T>(endpoint, { params });
    this.cache.set(cacheKey, response.data);
    
    this.subject.next({
      type: 'FETCH',
      endpoint,
      timestamp: moment().toISOString(),
      seed: this.config.seed
    });
    
    return response.data;
  }

  public async postData<T>(endpoint: string, data: any): Promise<T> {
    const enriched = {
      ...data,
      uuid: uuidv4(),
      timestamp: moment().toISOString(),
      seed: this.config.seed
    };
    
    const response = await this.client.post<T>(endpoint, enriched);
    
    this.subject.next({
      type: 'POST',
      endpoint,
      timestamp: moment().toISOString(),
      seed: this.config.seed
    });
    
    return response.data;
  }

  private generateCacheKey(endpoint: string, params?: any): string {
    const paramsStr = params ? JSON.stringify(lodash.sortBy(Object.entries(params))) : '';
    return \`\${endpoint}:\${paramsStr}:\${this.config.seed}\`;
  }

  private processComplexLogic(): void {
    ${generateRandomLogic(seed + 4)}
    ${generateRandomLogic(seed + 5)}
  }

  // Observable streams
  public getStream(): Observable<any> {
    return this.subject.asObservable().pipe(
      debounceTime(${100 + (seed % 50)}),
      distinctUntilChanged(),
      map(event => ({
        ...event,
        processed: true,
        processingTime: Date.now()
      }))
    );
  }

  public getState(): Observable<any> {
    return this.state.asObservable();
  }

  public updateState(update: any): void {
    const current = this.state.value;
    const merged = lodash.merge({}, current, update);
    this.state.next(merged);
  }

  // Complex data transformations
  public transformData<T>(data: T[]): any[] {
    const grouped = lodash.groupBy(data, (item: any) => {
      return item.category || 'default';
    });
    
    const transformed = Object.entries(grouped).map(([category, items]) => {
      const aggregated = {
        category,
        count: items.length,
        items: items.map((item, index) => ({
          ...item as any,
          index,
          uuid: uuidv4(),
          timestamp: moment().add(index, 'seconds').toISOString(),
          highlighted: this.highlightCode(JSON.stringify(item, null, 2))
        }))
      };
      
      return aggregated;
    });
    
    return lodash.sortBy(transformed, 'count').reverse();
  }

  private highlightCode(code: string): string {
    try {
      return hljs.highlightAuto(code).value;
    } catch {
      return code;
    }
  }

  // Batch operations
  public async batchProcess<T>(
    items: T[],
    processor: (item: T) => Promise<any>,
    batchSize: number = ${10 + (seed % 5)}
  ): Promise<any[]> {
    const batches = lodash.chunk(items, batchSize);
    const results: any[] = [];
    
    for (const batch of batches) {
      const batchResults = await Promise.all(
        batch.map((item, index) => processor(item))
      );
      results.push(...batchResults);
      
      await this.delay(${50 + (seed % 25)});
    }
    
    return results;
  }

  // Cleanup
  public dispose(): void {
    this.cache.clear();
    this.subject.complete();
    this.state.complete();
  }
}

export default ${serviceName};
`;
}

// Main generation function
function generateAllFiles() {
  console.log("🚀 Generating dummy code for large sourcemap testing...\n");

  // Create directories
  ensureDir(path.join(DUMMY_DIR, "components"));
  ensureDir(path.join(DUMMY_DIR, "utils"));
  ensureDir(path.join(DUMMY_DIR, "services"));

  // Generate components
  console.log(`📦 Generating ${COMPONENTS_COUNT} components...`);
  for (let i = 1; i <= COMPONENTS_COUNT; i++) {
    const content = generateDummyComponent(i);
    const filename = `DummyComponent${String(i).padStart(3, "0")}.tsx`;
    fs.writeFileSync(path.join(DUMMY_DIR, "components", filename), content);
    if (i % 10 === 0)
      console.log(`   Generated ${i}/${COMPONENTS_COUNT} components`);
  }

  // Generate utils
  console.log(`\n🔧 Generating ${UTILS_COUNT} utilities...`);
  for (let i = 1; i <= UTILS_COUNT; i++) {
    const content = generateDummyUtil(i);
    const filename = `DummyUtil${String(i).padStart(3, "0")}.ts`;
    fs.writeFileSync(path.join(DUMMY_DIR, "utils", filename), content);
    if (i % 10 === 0) console.log(`   Generated ${i}/${UTILS_COUNT} utilities`);
  }

  // Generate services
  console.log(`\n⚙️  Generating ${SERVICES_COUNT} services...`);
  for (let i = 1; i <= SERVICES_COUNT; i++) {
    const content = generateDummyService(i);
    const filename = `DummyService${String(i).padStart(3, "0")}.ts`;
    fs.writeFileSync(path.join(DUMMY_DIR, "services", filename), content);
    if (i % 10 === 0)
      console.log(`   Generated ${i}/${SERVICES_COUNT} services`);
  }

  // Generate index files for easier imports
  console.log("\n📝 Generating index files...");

  // Components index
  const componentsIndex = Array.from({ length: COMPONENTS_COUNT }, (_, i) => {
    const num = String(i + 1).padStart(3, "0");
    return `export { default as DummyComponent${num} } from './DummyComponent${num}';`;
  }).join("\n");
  fs.writeFileSync(
    path.join(DUMMY_DIR, "components", "index.ts"),
    componentsIndex,
  );

  // Utils index
  const utilsIndex = Array.from({ length: UTILS_COUNT }, (_, i) => {
    const num = String(i + 1).padStart(3, "0");
    return `export { default as DummyUtil${num} } from './DummyUtil${num}';`;
  }).join("\n");
  fs.writeFileSync(path.join(DUMMY_DIR, "utils", "index.ts"), utilsIndex);

  // Services index
  const servicesIndex = Array.from({ length: SERVICES_COUNT }, (_, i) => {
    const num = String(i + 1).padStart(3, "0");
    return `export { default as DummyService${num} } from './DummyService${num}';`;
  }).join("\n");
  fs.writeFileSync(path.join(DUMMY_DIR, "services", "index.ts"), servicesIndex);

  // Main index
  const mainIndex = `// Auto-generated index for all dummy code
export * from './components';
export * from './utils';
export * from './services';
`;
  fs.writeFileSync(path.join(DUMMY_DIR, "index.ts"), mainIndex);

  console.log("\n✅ Code generation complete!");
  console.log("\nGenerated files:");
  console.log(`  - ${COMPONENTS_COUNT} components in src/dummy/components/`);
  console.log(`  - ${UTILS_COUNT} utilities in src/dummy/utils/`);
  console.log(`  - ${SERVICES_COUNT} services in src/dummy/services/`);
  console.log(
    `  - Total: ${COMPONENTS_COUNT + UTILS_COUNT + SERVICES_COUNT} files`,
  );
}

// Run if called directly
if (require.main === module) {
  generateAllFiles();
}

module.exports = { generateAllFiles };
