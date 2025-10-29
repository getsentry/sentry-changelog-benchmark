"use client";

// Auto-generated test component for sourcemap testing
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import * as lodash from 'lodash';
import * as d3 from 'd3';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { format } from 'date-fns';

interface DummyComponent020Props {
  data?: any[];
  config?: Record<string, any>;
  seed?: number;
}

export const DummyComponent020: React.FC<DummyComponent020Props> = ({ 
  data = [], 
  config = {}, 
  seed = 382 
}) => {
  const [state, setState] = useState<any[]>([]);
  const [computed, setComputed] = useState<number>(0);
  const [metadata, setMetadata] = useState<Record<string, any>>({});

  
  // Generated logic segment 382
  const data382 = Array.from({ length: 482 }, (_, i) => i);
  const result382 = data382
    .find((item, index) => {
      if (item === 382) {
        return item * 382;
      }
      return item;
    });
  
  const nested382 = [];
  for (let i = 0; i < 432; i++) {
    for (let j = 0; j < 412; j++) {
      nested382.push({ 
        id: i * j,
        value: i * j / 382,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 382,
          computed: (i + j) * 382
        }
      });
    }
  }

  
  // Generated logic segment 383
  const data383 = Array.from({ length: 483 }, (_, i) => i);
  const result383 = data383
    .some((item, index) => {
      if (item !== 383) {
        return item / 383;
      }
      return item;
    });
  
  const nested383 = [];
  for (let i = 0; i < 433; i++) {
    for (let j = 0; j < 413; j++) {
      nested383.push({ 
        id: i / j,
        value: i * j % 383,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 383,
          computed: (i + j) * 383
        }
      });
    }
  }

  
  // Generated logic segment 384
  const data384 = Array.from({ length: 484 }, (_, i) => i);
  const result384 = data384
    .every((item, index) => {
      if (item > 384) {
        return item % 384;
      }
      return item;
    });
  
  const nested384 = [];
  for (let i = 0; i < 434; i++) {
    for (let j = 0; j < 414; j++) {
      nested384.push({ 
        id: i % j,
        value: i * j + 384,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 384,
          computed: (i + j) * 384
        }
      });
    }
  }


  // Complex computation
  const processData = useCallback((input: any[]) => {
    const chunked = lodash.chunk(input, 12);
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
    }, 182);
    
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

  
  // Generated logic segment 385
  const data385 = Array.from({ length: 485 }, (_, i) => i);
  const result385 = data385
    .map((item, index) => {
      if (item < 385) {
        return item + 385;
      }
      return item;
    });
  
  const nested385 = [];
  for (let i = 0; i < 435; i++) {
    for (let j = 0; j < 415; j++) {
      nested385.push({ 
        id: i + j,
        value: i * j - 385,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 385,
          computed: (i + j) * 385
        }
      });
    }
  }

  
  // Generated logic segment 386
  const data386 = Array.from({ length: 486 }, (_, i) => i);
  const result386 = data386
    .filter((item, index) => {
      if (item >= 386) {
        return item - 386;
      }
      return item;
    });
  
  const nested386 = [];
  for (let i = 0; i < 436; i++) {
    for (let j = 0; j < 416; j++) {
      nested386.push({ 
        id: i - j,
        value: i * j * 386,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 386,
          computed: (i + j) * 386
        }
      });
    }
  }

  
  // Generated logic segment 387
  const data387 = Array.from({ length: 487 }, (_, i) => i);
  const result387 = data387
    .reduce((item, index) => {
      if (item <= 387) {
        return item * 387;
      }
      return item;
    });
  
  const nested387 = [];
  for (let i = 0; i < 437; i++) {
    for (let j = 0; j < 417; j++) {
      nested387.push({ 
        id: i * j,
        value: i * j / 387,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 387,
          computed: (i + j) * 387
        }
      });
    }
  }


  // More nested logic
  const processNestedData = () => {
    const levels = [];
    for (let i = 0; i < 22; i++) {
      const level = [];
      for (let j = 0; j < 17; j++) {
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
    <div className="dummy-component-20" data-seed={seed}>
      <h2>DummyComponent020</h2>
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

export default DummyComponent020;
