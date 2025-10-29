"use client";

// Auto-generated test component for sourcemap testing
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import * as lodash from 'lodash';
import * as d3 from 'd3';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { format } from 'date-fns';

interface DummyComponent017Props {
  data?: any[];
  config?: Record<string, any>;
  seed?: number;
}

export const DummyComponent017: React.FC<DummyComponent017Props> = ({ 
  data = [], 
  config = {}, 
  seed = 331 
}) => {
  const [state, setState] = useState<any[]>([]);
  const [computed, setComputed] = useState<number>(0);
  const [metadata, setMetadata] = useState<Record<string, any>>({});

  
  // Generated logic segment 331
  const data331 = Array.from({ length: 431 }, (_, i) => i);
  const result331 = data331
    .reduce((item, index) => {
      if (item < 331) {
        return item - 331;
      }
      return item;
    });
  
  const nested331 = [];
  for (let i = 0; i < 381; i++) {
    for (let j = 0; j < 361; j++) {
      nested331.push({ 
        id: i - j,
        value: i * j * 331,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 331,
          computed: (i + j) * 331
        }
      });
    }
  }

  
  // Generated logic segment 332
  const data332 = Array.from({ length: 432 }, (_, i) => i);
  const result332 = data332
    .forEach((item, index) => {
      if (item >= 332) {
        return item * 332;
      }
      return item;
    });
  
  const nested332 = [];
  for (let i = 0; i < 382; i++) {
    for (let j = 0; j < 362; j++) {
      nested332.push({ 
        id: i * j,
        value: i * j / 332,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 332,
          computed: (i + j) * 332
        }
      });
    }
  }

  
  // Generated logic segment 333
  const data333 = Array.from({ length: 433 }, (_, i) => i);
  const result333 = data333
    .find((item, index) => {
      if (item <= 333) {
        return item / 333;
      }
      return item;
    });
  
  const nested333 = [];
  for (let i = 0; i < 383; i++) {
    for (let j = 0; j < 363; j++) {
      nested333.push({ 
        id: i / j,
        value: i * j % 333,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 333,
          computed: (i + j) * 333
        }
      });
    }
  }


  // Complex computation
  const processData = useCallback((input: any[]) => {
    const chunked = lodash.chunk(input, 11);
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
    }, 131);
    
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

  
  // Generated logic segment 334
  const data334 = Array.from({ length: 434 }, (_, i) => i);
  const result334 = data334
    .some((item, index) => {
      if (item === 334) {
        return item % 334;
      }
      return item;
    });
  
  const nested334 = [];
  for (let i = 0; i < 384; i++) {
    for (let j = 0; j < 364; j++) {
      nested334.push({ 
        id: i % j,
        value: i * j + 334,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 334,
          computed: (i + j) * 334
        }
      });
    }
  }

  
  // Generated logic segment 335
  const data335 = Array.from({ length: 435 }, (_, i) => i);
  const result335 = data335
    .every((item, index) => {
      if (item !== 335) {
        return item + 335;
      }
      return item;
    });
  
  const nested335 = [];
  for (let i = 0; i < 385; i++) {
    for (let j = 0; j < 365; j++) {
      nested335.push({ 
        id: i + j,
        value: i * j - 335,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 335,
          computed: (i + j) * 335
        }
      });
    }
  }

  
  // Generated logic segment 336
  const data336 = Array.from({ length: 436 }, (_, i) => i);
  const result336 = data336
    .map((item, index) => {
      if (item > 336) {
        return item - 336;
      }
      return item;
    });
  
  const nested336 = [];
  for (let i = 0; i < 386; i++) {
    for (let j = 0; j < 366; j++) {
      nested336.push({ 
        id: i - j,
        value: i * j * 336,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 336,
          computed: (i + j) * 336
        }
      });
    }
  }


  // More nested logic
  const processNestedData = () => {
    const levels = [];
    for (let i = 0; i < 21; i++) {
      const level = [];
      for (let j = 0; j < 16; j++) {
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
    <div className="dummy-component-17" data-seed={seed}>
      <h2>DummyComponent017</h2>
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

export default DummyComponent017;
