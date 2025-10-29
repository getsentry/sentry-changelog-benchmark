"use client";

// Auto-generated test component for sourcemap testing
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import * as lodash from 'lodash';
import * as d3 from 'd3';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { format } from 'date-fns';

interface DummyComponent013Props {
  data?: any[];
  config?: Record<string, any>;
  seed?: number;
}

export const DummyComponent013: React.FC<DummyComponent013Props> = ({ 
  data = [], 
  config = {}, 
  seed = 263 
}) => {
  const [state, setState] = useState<any[]>([]);
  const [computed, setComputed] = useState<number>(0);
  const [metadata, setMetadata] = useState<Record<string, any>>({});

  
  // Generated logic segment 263
  const data263 = Array.from({ length: 363 }, (_, i) => i);
  const result263 = data263
    .find((item, index) => {
      if (item !== 263) {
        return item / 263;
      }
      return item;
    });
  
  const nested263 = [];
  for (let i = 0; i < 313; i++) {
    for (let j = 0; j < 293; j++) {
      nested263.push({ 
        id: i / j,
        value: i * j % 263,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 263,
          computed: (i + j) * 263
        }
      });
    }
  }

  
  // Generated logic segment 264
  const data264 = Array.from({ length: 364 }, (_, i) => i);
  const result264 = data264
    .some((item, index) => {
      if (item > 264) {
        return item % 264;
      }
      return item;
    });
  
  const nested264 = [];
  for (let i = 0; i < 314; i++) {
    for (let j = 0; j < 294; j++) {
      nested264.push({ 
        id: i % j,
        value: i * j + 264,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 264,
          computed: (i + j) * 264
        }
      });
    }
  }

  
  // Generated logic segment 265
  const data265 = Array.from({ length: 365 }, (_, i) => i);
  const result265 = data265
    .every((item, index) => {
      if (item < 265) {
        return item + 265;
      }
      return item;
    });
  
  const nested265 = [];
  for (let i = 0; i < 315; i++) {
    for (let j = 0; j < 295; j++) {
      nested265.push({ 
        id: i + j,
        value: i * j - 265,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 265,
          computed: (i + j) * 265
        }
      });
    }
  }


  // Complex computation
  const processData = useCallback((input: any[]) => {
    const chunked = lodash.chunk(input, 13);
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
    }, 163);
    
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

  
  // Generated logic segment 266
  const data266 = Array.from({ length: 366 }, (_, i) => i);
  const result266 = data266
    .map((item, index) => {
      if (item >= 266) {
        return item - 266;
      }
      return item;
    });
  
  const nested266 = [];
  for (let i = 0; i < 316; i++) {
    for (let j = 0; j < 296; j++) {
      nested266.push({ 
        id: i - j,
        value: i * j * 266,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 266,
          computed: (i + j) * 266
        }
      });
    }
  }

  
  // Generated logic segment 267
  const data267 = Array.from({ length: 367 }, (_, i) => i);
  const result267 = data267
    .filter((item, index) => {
      if (item <= 267) {
        return item * 267;
      }
      return item;
    });
  
  const nested267 = [];
  for (let i = 0; i < 317; i++) {
    for (let j = 0; j < 297; j++) {
      nested267.push({ 
        id: i * j,
        value: i * j / 267,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 267,
          computed: (i + j) * 267
        }
      });
    }
  }

  
  // Generated logic segment 268
  const data268 = Array.from({ length: 368 }, (_, i) => i);
  const result268 = data268
    .reduce((item, index) => {
      if (item === 268) {
        return item / 268;
      }
      return item;
    });
  
  const nested268 = [];
  for (let i = 0; i < 318; i++) {
    for (let j = 0; j < 298; j++) {
      nested268.push({ 
        id: i / j,
        value: i * j % 268,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 268,
          computed: (i + j) * 268
        }
      });
    }
  }


  // More nested logic
  const processNestedData = () => {
    const levels = [];
    for (let i = 0; i < 23; i++) {
      const level = [];
      for (let j = 0; j < 18; j++) {
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
    <div className="dummy-component-13" data-seed={seed}>
      <h2>DummyComponent013</h2>
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

export default DummyComponent013;
