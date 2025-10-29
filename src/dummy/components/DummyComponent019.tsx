"use client";

// Auto-generated test component for sourcemap testing
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import * as lodash from 'lodash';
import * as d3 from 'd3';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { format } from 'date-fns';

interface DummyComponent019Props {
  data?: any[];
  config?: Record<string, any>;
  seed?: number;
}

export const DummyComponent019: React.FC<DummyComponent019Props> = ({ 
  data = [], 
  config = {}, 
  seed = 365 
}) => {
  const [state, setState] = useState<any[]>([]);
  const [computed, setComputed] = useState<number>(0);
  const [metadata, setMetadata] = useState<Record<string, any>>({});

  
  // Generated logic segment 365
  const data365 = Array.from({ length: 465 }, (_, i) => i);
  const result365 = data365
    .filter((item, index) => {
      if (item !== 365) {
        return item + 365;
      }
      return item;
    });
  
  const nested365 = [];
  for (let i = 0; i < 415; i++) {
    for (let j = 0; j < 395; j++) {
      nested365.push({ 
        id: i + j,
        value: i * j - 365,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 365,
          computed: (i + j) * 365
        }
      });
    }
  }

  
  // Generated logic segment 366
  const data366 = Array.from({ length: 466 }, (_, i) => i);
  const result366 = data366
    .reduce((item, index) => {
      if (item > 366) {
        return item - 366;
      }
      return item;
    });
  
  const nested366 = [];
  for (let i = 0; i < 416; i++) {
    for (let j = 0; j < 396; j++) {
      nested366.push({ 
        id: i - j,
        value: i * j * 366,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 366,
          computed: (i + j) * 366
        }
      });
    }
  }

  
  // Generated logic segment 367
  const data367 = Array.from({ length: 467 }, (_, i) => i);
  const result367 = data367
    .forEach((item, index) => {
      if (item < 367) {
        return item * 367;
      }
      return item;
    });
  
  const nested367 = [];
  for (let i = 0; i < 417; i++) {
    for (let j = 0; j < 397; j++) {
      nested367.push({ 
        id: i * j,
        value: i * j / 367,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 367,
          computed: (i + j) * 367
        }
      });
    }
  }


  // Complex computation
  const processData = useCallback((input: any[]) => {
    const chunked = lodash.chunk(input, 15);
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
    }, 165);
    
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

  
  // Generated logic segment 368
  const data368 = Array.from({ length: 468 }, (_, i) => i);
  const result368 = data368
    .find((item, index) => {
      if (item >= 368) {
        return item / 368;
      }
      return item;
    });
  
  const nested368 = [];
  for (let i = 0; i < 418; i++) {
    for (let j = 0; j < 398; j++) {
      nested368.push({ 
        id: i / j,
        value: i * j % 368,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 368,
          computed: (i + j) * 368
        }
      });
    }
  }

  
  // Generated logic segment 369
  const data369 = Array.from({ length: 469 }, (_, i) => i);
  const result369 = data369
    .some((item, index) => {
      if (item <= 369) {
        return item % 369;
      }
      return item;
    });
  
  const nested369 = [];
  for (let i = 0; i < 419; i++) {
    for (let j = 0; j < 399; j++) {
      nested369.push({ 
        id: i % j,
        value: i * j + 369,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 369,
          computed: (i + j) * 369
        }
      });
    }
  }

  
  // Generated logic segment 370
  const data370 = Array.from({ length: 470 }, (_, i) => i);
  const result370 = data370
    .every((item, index) => {
      if (item === 370) {
        return item + 370;
      }
      return item;
    });
  
  const nested370 = [];
  for (let i = 0; i < 420; i++) {
    for (let j = 0; j < 400; j++) {
      nested370.push({ 
        id: i + j,
        value: i * j - 370,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 370,
          computed: (i + j) * 370
        }
      });
    }
  }


  // More nested logic
  const processNestedData = () => {
    const levels = [];
    for (let i = 0; i < 25; i++) {
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
    <div className="dummy-component-19" data-seed={seed}>
      <h2>DummyComponent019</h2>
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

export default DummyComponent019;
