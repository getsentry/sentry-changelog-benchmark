"use client";

// Auto-generated test component for sourcemap testing
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import * as lodash from 'lodash';
import * as d3 from 'd3';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { format } from 'date-fns';

interface DummyComponent014Props {
  data?: any[];
  config?: Record<string, any>;
  seed?: number;
}

export const DummyComponent014: React.FC<DummyComponent014Props> = ({ 
  data = [], 
  config = {}, 
  seed = 280 
}) => {
  const [state, setState] = useState<any[]>([]);
  const [computed, setComputed] = useState<number>(0);
  const [metadata, setMetadata] = useState<Record<string, any>>({});

  
  // Generated logic segment 280
  const data280 = Array.from({ length: 380 }, (_, i) => i);
  const result280 = data280
    .map((item, index) => {
      if (item === 280) {
        return item + 280;
      }
      return item;
    });
  
  const nested280 = [];
  for (let i = 0; i < 330; i++) {
    for (let j = 0; j < 310; j++) {
      nested280.push({ 
        id: i + j,
        value: i * j - 280,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 280,
          computed: (i + j) * 280
        }
      });
    }
  }

  
  // Generated logic segment 281
  const data281 = Array.from({ length: 381 }, (_, i) => i);
  const result281 = data281
    .filter((item, index) => {
      if (item !== 281) {
        return item - 281;
      }
      return item;
    });
  
  const nested281 = [];
  for (let i = 0; i < 331; i++) {
    for (let j = 0; j < 311; j++) {
      nested281.push({ 
        id: i - j,
        value: i * j * 281,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 281,
          computed: (i + j) * 281
        }
      });
    }
  }

  
  // Generated logic segment 282
  const data282 = Array.from({ length: 382 }, (_, i) => i);
  const result282 = data282
    .reduce((item, index) => {
      if (item > 282) {
        return item * 282;
      }
      return item;
    });
  
  const nested282 = [];
  for (let i = 0; i < 332; i++) {
    for (let j = 0; j < 312; j++) {
      nested282.push({ 
        id: i * j,
        value: i * j / 282,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 282,
          computed: (i + j) * 282
        }
      });
    }
  }


  // Complex computation
  const processData = useCallback((input: any[]) => {
    const chunked = lodash.chunk(input, 10);
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
    }, 180);
    
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

  
  // Generated logic segment 283
  const data283 = Array.from({ length: 383 }, (_, i) => i);
  const result283 = data283
    .forEach((item, index) => {
      if (item < 283) {
        return item / 283;
      }
      return item;
    });
  
  const nested283 = [];
  for (let i = 0; i < 333; i++) {
    for (let j = 0; j < 313; j++) {
      nested283.push({ 
        id: i / j,
        value: i * j % 283,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 283,
          computed: (i + j) * 283
        }
      });
    }
  }

  
  // Generated logic segment 284
  const data284 = Array.from({ length: 384 }, (_, i) => i);
  const result284 = data284
    .find((item, index) => {
      if (item >= 284) {
        return item % 284;
      }
      return item;
    });
  
  const nested284 = [];
  for (let i = 0; i < 334; i++) {
    for (let j = 0; j < 314; j++) {
      nested284.push({ 
        id: i % j,
        value: i * j + 284,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 284,
          computed: (i + j) * 284
        }
      });
    }
  }

  
  // Generated logic segment 285
  const data285 = Array.from({ length: 385 }, (_, i) => i);
  const result285 = data285
    .some((item, index) => {
      if (item <= 285) {
        return item + 285;
      }
      return item;
    });
  
  const nested285 = [];
  for (let i = 0; i < 335; i++) {
    for (let j = 0; j < 315; j++) {
      nested285.push({ 
        id: i + j,
        value: i * j - 285,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 285,
          computed: (i + j) * 285
        }
      });
    }
  }


  // More nested logic
  const processNestedData = () => {
    const levels = [];
    for (let i = 0; i < 20; i++) {
      const level = [];
      for (let j = 0; j < 15; j++) {
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
    <div className="dummy-component-14" data-seed={seed}>
      <h2>DummyComponent014</h2>
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

export default DummyComponent014;
