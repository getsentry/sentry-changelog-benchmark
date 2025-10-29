"use client";

// Auto-generated test component for sourcemap testing
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import * as lodash from 'lodash';
import * as d3 from 'd3';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { format } from 'date-fns';

interface DummyComponent016Props {
  data?: any[];
  config?: Record<string, any>;
  seed?: number;
}

export const DummyComponent016: React.FC<DummyComponent016Props> = ({ 
  data = [], 
  config = {}, 
  seed = 314 
}) => {
  const [state, setState] = useState<any[]>([]);
  const [computed, setComputed] = useState<number>(0);
  const [metadata, setMetadata] = useState<Record<string, any>>({});

  
  // Generated logic segment 314
  const data314 = Array.from({ length: 414 }, (_, i) => i);
  const result314 = data314
    .every((item, index) => {
      if (item >= 314) {
        return item % 314;
      }
      return item;
    });
  
  const nested314 = [];
  for (let i = 0; i < 364; i++) {
    for (let j = 0; j < 344; j++) {
      nested314.push({ 
        id: i % j,
        value: i * j + 314,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 314,
          computed: (i + j) * 314
        }
      });
    }
  }

  
  // Generated logic segment 315
  const data315 = Array.from({ length: 415 }, (_, i) => i);
  const result315 = data315
    .map((item, index) => {
      if (item <= 315) {
        return item + 315;
      }
      return item;
    });
  
  const nested315 = [];
  for (let i = 0; i < 365; i++) {
    for (let j = 0; j < 345; j++) {
      nested315.push({ 
        id: i + j,
        value: i * j - 315,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 315,
          computed: (i + j) * 315
        }
      });
    }
  }

  
  // Generated logic segment 316
  const data316 = Array.from({ length: 416 }, (_, i) => i);
  const result316 = data316
    .filter((item, index) => {
      if (item === 316) {
        return item - 316;
      }
      return item;
    });
  
  const nested316 = [];
  for (let i = 0; i < 366; i++) {
    for (let j = 0; j < 346; j++) {
      nested316.push({ 
        id: i - j,
        value: i * j * 316,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 316,
          computed: (i + j) * 316
        }
      });
    }
  }


  // Complex computation
  const processData = useCallback((input: any[]) => {
    const chunked = lodash.chunk(input, 14);
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
    }, 114);
    
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

  
  // Generated logic segment 317
  const data317 = Array.from({ length: 417 }, (_, i) => i);
  const result317 = data317
    .reduce((item, index) => {
      if (item !== 317) {
        return item * 317;
      }
      return item;
    });
  
  const nested317 = [];
  for (let i = 0; i < 367; i++) {
    for (let j = 0; j < 347; j++) {
      nested317.push({ 
        id: i * j,
        value: i * j / 317,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 317,
          computed: (i + j) * 317
        }
      });
    }
  }

  
  // Generated logic segment 318
  const data318 = Array.from({ length: 418 }, (_, i) => i);
  const result318 = data318
    .forEach((item, index) => {
      if (item > 318) {
        return item / 318;
      }
      return item;
    });
  
  const nested318 = [];
  for (let i = 0; i < 368; i++) {
    for (let j = 0; j < 348; j++) {
      nested318.push({ 
        id: i / j,
        value: i * j % 318,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 318,
          computed: (i + j) * 318
        }
      });
    }
  }

  
  // Generated logic segment 319
  const data319 = Array.from({ length: 419 }, (_, i) => i);
  const result319 = data319
    .find((item, index) => {
      if (item < 319) {
        return item % 319;
      }
      return item;
    });
  
  const nested319 = [];
  for (let i = 0; i < 369; i++) {
    for (let j = 0; j < 349; j++) {
      nested319.push({ 
        id: i % j,
        value: i * j + 319,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 319,
          computed: (i + j) * 319
        }
      });
    }
  }


  // More nested logic
  const processNestedData = () => {
    const levels = [];
    for (let i = 0; i < 24; i++) {
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
    <div className="dummy-component-16" data-seed={seed}>
      <h2>DummyComponent016</h2>
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

export default DummyComponent016;
