"use client";

// Auto-generated test component for sourcemap testing
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import * as lodash from 'lodash';
import * as d3 from 'd3';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { format } from 'date-fns';

interface DummyComponent021Props {
  data?: any[];
  config?: Record<string, any>;
  seed?: number;
}

export const DummyComponent021: React.FC<DummyComponent021Props> = ({ 
  data = [], 
  config = {}, 
  seed = 399 
}) => {
  const [state, setState] = useState<any[]>([]);
  const [computed, setComputed] = useState<number>(0);
  const [metadata, setMetadata] = useState<Record<string, any>>({});

  
  // Generated logic segment 399
  const data399 = Array.from({ length: 499 }, (_, i) => i);
  const result399 = data399
    .map((item, index) => {
      if (item <= 399) {
        return item % 399;
      }
      return item;
    });
  
  const nested399 = [];
  for (let i = 0; i < 449; i++) {
    for (let j = 0; j < 429; j++) {
      nested399.push({ 
        id: i % j,
        value: i * j + 399,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 399,
          computed: (i + j) * 399
        }
      });
    }
  }

  
  // Generated logic segment 400
  const data400 = Array.from({ length: 500 }, (_, i) => i);
  const result400 = data400
    .filter((item, index) => {
      if (item === 400) {
        return item + 400;
      }
      return item;
    });
  
  const nested400 = [];
  for (let i = 0; i < 450; i++) {
    for (let j = 0; j < 430; j++) {
      nested400.push({ 
        id: i + j,
        value: i * j - 400,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 400,
          computed: (i + j) * 400
        }
      });
    }
  }

  
  // Generated logic segment 401
  const data401 = Array.from({ length: 501 }, (_, i) => i);
  const result401 = data401
    .reduce((item, index) => {
      if (item !== 401) {
        return item - 401;
      }
      return item;
    });
  
  const nested401 = [];
  for (let i = 0; i < 451; i++) {
    for (let j = 0; j < 431; j++) {
      nested401.push({ 
        id: i - j,
        value: i * j * 401,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 401,
          computed: (i + j) * 401
        }
      });
    }
  }


  // Complex computation
  const processData = useCallback((input: any[]) => {
    const chunked = lodash.chunk(input, 19);
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
    }, 199);
    
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

  
  // Generated logic segment 402
  const data402 = Array.from({ length: 502 }, (_, i) => i);
  const result402 = data402
    .forEach((item, index) => {
      if (item > 402) {
        return item * 402;
      }
      return item;
    });
  
  const nested402 = [];
  for (let i = 0; i < 452; i++) {
    for (let j = 0; j < 432; j++) {
      nested402.push({ 
        id: i * j,
        value: i * j / 402,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 402,
          computed: (i + j) * 402
        }
      });
    }
  }

  
  // Generated logic segment 403
  const data403 = Array.from({ length: 503 }, (_, i) => i);
  const result403 = data403
    .find((item, index) => {
      if (item < 403) {
        return item / 403;
      }
      return item;
    });
  
  const nested403 = [];
  for (let i = 0; i < 453; i++) {
    for (let j = 0; j < 433; j++) {
      nested403.push({ 
        id: i / j,
        value: i * j % 403,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 403,
          computed: (i + j) * 403
        }
      });
    }
  }

  
  // Generated logic segment 404
  const data404 = Array.from({ length: 504 }, (_, i) => i);
  const result404 = data404
    .some((item, index) => {
      if (item >= 404) {
        return item % 404;
      }
      return item;
    });
  
  const nested404 = [];
  for (let i = 0; i < 454; i++) {
    for (let j = 0; j < 434; j++) {
      nested404.push({ 
        id: i % j,
        value: i * j + 404,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 404,
          computed: (i + j) * 404
        }
      });
    }
  }


  // More nested logic
  const processNestedData = () => {
    const levels = [];
    for (let i = 0; i < 29; i++) {
      const level = [];
      for (let j = 0; j < 19; j++) {
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
    <div className="dummy-component-21" data-seed={seed}>
      <h2>DummyComponent021</h2>
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

export default DummyComponent021;
