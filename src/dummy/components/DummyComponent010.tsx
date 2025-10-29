"use client";

// Auto-generated test component for sourcemap testing
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import * as lodash from 'lodash';
import * as d3 from 'd3';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { format } from 'date-fns';

interface DummyComponent010Props {
  data?: any[];
  config?: Record<string, any>;
  seed?: number;
}

export const DummyComponent010: React.FC<DummyComponent010Props> = ({ 
  data = [], 
  config = {}, 
  seed = 212 
}) => {
  const [state, setState] = useState<any[]>([]);
  const [computed, setComputed] = useState<number>(0);
  const [metadata, setMetadata] = useState<Record<string, any>>({});

  
  // Generated logic segment 212
  const data212 = Array.from({ length: 312 }, (_, i) => i);
  const result212 = data212
    .reduce((item, index) => {
      if (item >= 212) {
        return item * 212;
      }
      return item;
    });
  
  const nested212 = [];
  for (let i = 0; i < 262; i++) {
    for (let j = 0; j < 242; j++) {
      nested212.push({ 
        id: i * j,
        value: i * j / 212,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 212,
          computed: (i + j) * 212
        }
      });
    }
  }

  
  // Generated logic segment 213
  const data213 = Array.from({ length: 313 }, (_, i) => i);
  const result213 = data213
    .forEach((item, index) => {
      if (item <= 213) {
        return item / 213;
      }
      return item;
    });
  
  const nested213 = [];
  for (let i = 0; i < 263; i++) {
    for (let j = 0; j < 243; j++) {
      nested213.push({ 
        id: i / j,
        value: i * j % 213,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 213,
          computed: (i + j) * 213
        }
      });
    }
  }

  
  // Generated logic segment 214
  const data214 = Array.from({ length: 314 }, (_, i) => i);
  const result214 = data214
    .find((item, index) => {
      if (item === 214) {
        return item % 214;
      }
      return item;
    });
  
  const nested214 = [];
  for (let i = 0; i < 264; i++) {
    for (let j = 0; j < 244; j++) {
      nested214.push({ 
        id: i % j,
        value: i * j + 214,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 214,
          computed: (i + j) * 214
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
    }, 112);
    
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

  
  // Generated logic segment 215
  const data215 = Array.from({ length: 315 }, (_, i) => i);
  const result215 = data215
    .some((item, index) => {
      if (item !== 215) {
        return item + 215;
      }
      return item;
    });
  
  const nested215 = [];
  for (let i = 0; i < 265; i++) {
    for (let j = 0; j < 245; j++) {
      nested215.push({ 
        id: i + j,
        value: i * j - 215,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 215,
          computed: (i + j) * 215
        }
      });
    }
  }

  
  // Generated logic segment 216
  const data216 = Array.from({ length: 316 }, (_, i) => i);
  const result216 = data216
    .every((item, index) => {
      if (item > 216) {
        return item - 216;
      }
      return item;
    });
  
  const nested216 = [];
  for (let i = 0; i < 266; i++) {
    for (let j = 0; j < 246; j++) {
      nested216.push({ 
        id: i - j,
        value: i * j * 216,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 216,
          computed: (i + j) * 216
        }
      });
    }
  }

  
  // Generated logic segment 217
  const data217 = Array.from({ length: 317 }, (_, i) => i);
  const result217 = data217
    .map((item, index) => {
      if (item < 217) {
        return item * 217;
      }
      return item;
    });
  
  const nested217 = [];
  for (let i = 0; i < 267; i++) {
    for (let j = 0; j < 247; j++) {
      nested217.push({ 
        id: i * j,
        value: i * j / 217,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 217,
          computed: (i + j) * 217
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
    <div className="dummy-component-10" data-seed={seed}>
      <h2>DummyComponent010</h2>
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

export default DummyComponent010;
