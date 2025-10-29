"use client";

// Auto-generated test component for sourcemap testing
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import * as lodash from 'lodash';
import * as d3 from 'd3';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { format } from 'date-fns';

interface DummyComponent022Props {
  data?: any[];
  config?: Record<string, any>;
  seed?: number;
}

export const DummyComponent022: React.FC<DummyComponent022Props> = ({ 
  data = [], 
  config = {}, 
  seed = 416 
}) => {
  const [state, setState] = useState<any[]>([]);
  const [computed, setComputed] = useState<number>(0);
  const [metadata, setMetadata] = useState<Record<string, any>>({});

  
  // Generated logic segment 416
  const data416 = Array.from({ length: 516 }, (_, i) => i);
  const result416 = data416
    .forEach((item, index) => {
      if (item >= 416) {
        return item - 416;
      }
      return item;
    });
  
  const nested416 = [];
  for (let i = 0; i < 466; i++) {
    for (let j = 0; j < 446; j++) {
      nested416.push({ 
        id: i - j,
        value: i * j * 416,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 416,
          computed: (i + j) * 416
        }
      });
    }
  }

  
  // Generated logic segment 417
  const data417 = Array.from({ length: 517 }, (_, i) => i);
  const result417 = data417
    .find((item, index) => {
      if (item <= 417) {
        return item * 417;
      }
      return item;
    });
  
  const nested417 = [];
  for (let i = 0; i < 467; i++) {
    for (let j = 0; j < 447; j++) {
      nested417.push({ 
        id: i * j,
        value: i * j / 417,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 417,
          computed: (i + j) * 417
        }
      });
    }
  }

  
  // Generated logic segment 418
  const data418 = Array.from({ length: 518 }, (_, i) => i);
  const result418 = data418
    .some((item, index) => {
      if (item === 418) {
        return item / 418;
      }
      return item;
    });
  
  const nested418 = [];
  for (let i = 0; i < 468; i++) {
    for (let j = 0; j < 448; j++) {
      nested418.push({ 
        id: i / j,
        value: i * j % 418,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 418,
          computed: (i + j) * 418
        }
      });
    }
  }


  // Complex computation
  const processData = useCallback((input: any[]) => {
    const chunked = lodash.chunk(input, 16);
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
    }, 116);
    
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

  
  // Generated logic segment 419
  const data419 = Array.from({ length: 519 }, (_, i) => i);
  const result419 = data419
    .every((item, index) => {
      if (item !== 419) {
        return item % 419;
      }
      return item;
    });
  
  const nested419 = [];
  for (let i = 0; i < 469; i++) {
    for (let j = 0; j < 449; j++) {
      nested419.push({ 
        id: i % j,
        value: i * j + 419,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 419,
          computed: (i + j) * 419
        }
      });
    }
  }

  
  // Generated logic segment 420
  const data420 = Array.from({ length: 520 }, (_, i) => i);
  const result420 = data420
    .map((item, index) => {
      if (item > 420) {
        return item + 420;
      }
      return item;
    });
  
  const nested420 = [];
  for (let i = 0; i < 470; i++) {
    for (let j = 0; j < 450; j++) {
      nested420.push({ 
        id: i + j,
        value: i * j - 420,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 420,
          computed: (i + j) * 420
        }
      });
    }
  }

  
  // Generated logic segment 421
  const data421 = Array.from({ length: 521 }, (_, i) => i);
  const result421 = data421
    .filter((item, index) => {
      if (item < 421) {
        return item - 421;
      }
      return item;
    });
  
  const nested421 = [];
  for (let i = 0; i < 471; i++) {
    for (let j = 0; j < 451; j++) {
      nested421.push({ 
        id: i - j,
        value: i * j * 421,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 421,
          computed: (i + j) * 421
        }
      });
    }
  }


  // More nested logic
  const processNestedData = () => {
    const levels = [];
    for (let i = 0; i < 26; i++) {
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
    <div className="dummy-component-22" data-seed={seed}>
      <h2>DummyComponent022</h2>
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

export default DummyComponent022;
