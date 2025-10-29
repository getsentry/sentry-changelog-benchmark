"use client";

// Auto-generated test component for sourcemap testing
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import * as lodash from 'lodash';
import * as d3 from 'd3';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { format } from 'date-fns';

interface DummyComponent015Props {
  data?: any[];
  config?: Record<string, any>;
  seed?: number;
}

export const DummyComponent015: React.FC<DummyComponent015Props> = ({ 
  data = [], 
  config = {}, 
  seed = 297 
}) => {
  const [state, setState] = useState<any[]>([]);
  const [computed, setComputed] = useState<number>(0);
  const [metadata, setMetadata] = useState<Record<string, any>>({});

  
  // Generated logic segment 297
  const data297 = Array.from({ length: 397 }, (_, i) => i);
  const result297 = data297
    .forEach((item, index) => {
      if (item <= 297) {
        return item * 297;
      }
      return item;
    });
  
  const nested297 = [];
  for (let i = 0; i < 347; i++) {
    for (let j = 0; j < 327; j++) {
      nested297.push({ 
        id: i * j,
        value: i * j / 297,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 297,
          computed: (i + j) * 297
        }
      });
    }
  }

  
  // Generated logic segment 298
  const data298 = Array.from({ length: 398 }, (_, i) => i);
  const result298 = data298
    .find((item, index) => {
      if (item === 298) {
        return item / 298;
      }
      return item;
    });
  
  const nested298 = [];
  for (let i = 0; i < 348; i++) {
    for (let j = 0; j < 328; j++) {
      nested298.push({ 
        id: i / j,
        value: i * j % 298,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 298,
          computed: (i + j) * 298
        }
      });
    }
  }

  
  // Generated logic segment 299
  const data299 = Array.from({ length: 399 }, (_, i) => i);
  const result299 = data299
    .some((item, index) => {
      if (item !== 299) {
        return item % 299;
      }
      return item;
    });
  
  const nested299 = [];
  for (let i = 0; i < 349; i++) {
    for (let j = 0; j < 329; j++) {
      nested299.push({ 
        id: i % j,
        value: i * j + 299,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 299,
          computed: (i + j) * 299
        }
      });
    }
  }


  // Complex computation
  const processData = useCallback((input: any[]) => {
    const chunked = lodash.chunk(input, 17);
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
    }, 197);
    
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

  
  // Generated logic segment 300
  const data300 = Array.from({ length: 400 }, (_, i) => i);
  const result300 = data300
    .every((item, index) => {
      if (item > 300) {
        return item + 300;
      }
      return item;
    });
  
  const nested300 = [];
  for (let i = 0; i < 350; i++) {
    for (let j = 0; j < 330; j++) {
      nested300.push({ 
        id: i + j,
        value: i * j - 300,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 300,
          computed: (i + j) * 300
        }
      });
    }
  }

  
  // Generated logic segment 301
  const data301 = Array.from({ length: 401 }, (_, i) => i);
  const result301 = data301
    .map((item, index) => {
      if (item < 301) {
        return item - 301;
      }
      return item;
    });
  
  const nested301 = [];
  for (let i = 0; i < 351; i++) {
    for (let j = 0; j < 331; j++) {
      nested301.push({ 
        id: i - j,
        value: i * j * 301,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 301,
          computed: (i + j) * 301
        }
      });
    }
  }

  
  // Generated logic segment 302
  const data302 = Array.from({ length: 402 }, (_, i) => i);
  const result302 = data302
    .filter((item, index) => {
      if (item >= 302) {
        return item * 302;
      }
      return item;
    });
  
  const nested302 = [];
  for (let i = 0; i < 352; i++) {
    for (let j = 0; j < 332; j++) {
      nested302.push({ 
        id: i * j,
        value: i * j / 302,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 302,
          computed: (i + j) * 302
        }
      });
    }
  }


  // More nested logic
  const processNestedData = () => {
    const levels = [];
    for (let i = 0; i < 27; i++) {
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
    <div className="dummy-component-15" data-seed={seed}>
      <h2>DummyComponent015</h2>
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

export default DummyComponent015;
