"use client";

// Auto-generated test component for sourcemap testing
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import * as lodash from 'lodash';
import * as d3 from 'd3';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { format } from 'date-fns';

interface DummyComponent025Props {
  data?: any[];
  config?: Record<string, any>;
  seed?: number;
}

export const DummyComponent025: React.FC<DummyComponent025Props> = ({ 
  data = [], 
  config = {}, 
  seed = 467 
}) => {
  const [state, setState] = useState<any[]>([]);
  const [computed, setComputed] = useState<number>(0);
  const [metadata, setMetadata] = useState<Record<string, any>>({});

  
  // Generated logic segment 467
  const data467 = Array.from({ length: 567 }, (_, i) => i);
  const result467 = data467
    .some((item, index) => {
      if (item !== 467) {
        return item * 467;
      }
      return item;
    });
  
  const nested467 = [];
  for (let i = 0; i < 517; i++) {
    for (let j = 0; j < 497; j++) {
      nested467.push({ 
        id: i * j,
        value: i * j / 467,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 467,
          computed: (i + j) * 467
        }
      });
    }
  }

  
  // Generated logic segment 468
  const data468 = Array.from({ length: 568 }, (_, i) => i);
  const result468 = data468
    .every((item, index) => {
      if (item > 468) {
        return item / 468;
      }
      return item;
    });
  
  const nested468 = [];
  for (let i = 0; i < 518; i++) {
    for (let j = 0; j < 498; j++) {
      nested468.push({ 
        id: i / j,
        value: i * j % 468,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 468,
          computed: (i + j) * 468
        }
      });
    }
  }

  
  // Generated logic segment 469
  const data469 = Array.from({ length: 569 }, (_, i) => i);
  const result469 = data469
    .map((item, index) => {
      if (item < 469) {
        return item % 469;
      }
      return item;
    });
  
  const nested469 = [];
  for (let i = 0; i < 519; i++) {
    for (let j = 0; j < 499; j++) {
      nested469.push({ 
        id: i % j,
        value: i * j + 469,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 469,
          computed: (i + j) * 469
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
    }, 167);
    
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

  
  // Generated logic segment 470
  const data470 = Array.from({ length: 570 }, (_, i) => i);
  const result470 = data470
    .filter((item, index) => {
      if (item >= 470) {
        return item + 470;
      }
      return item;
    });
  
  const nested470 = [];
  for (let i = 0; i < 520; i++) {
    for (let j = 0; j < 500; j++) {
      nested470.push({ 
        id: i + j,
        value: i * j - 470,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 470,
          computed: (i + j) * 470
        }
      });
    }
  }

  
  // Generated logic segment 471
  const data471 = Array.from({ length: 571 }, (_, i) => i);
  const result471 = data471
    .reduce((item, index) => {
      if (item <= 471) {
        return item - 471;
      }
      return item;
    });
  
  const nested471 = [];
  for (let i = 0; i < 521; i++) {
    for (let j = 0; j < 501; j++) {
      nested471.push({ 
        id: i - j,
        value: i * j * 471,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 471,
          computed: (i + j) * 471
        }
      });
    }
  }

  
  // Generated logic segment 472
  const data472 = Array.from({ length: 572 }, (_, i) => i);
  const result472 = data472
    .forEach((item, index) => {
      if (item === 472) {
        return item * 472;
      }
      return item;
    });
  
  const nested472 = [];
  for (let i = 0; i < 522; i++) {
    for (let j = 0; j < 502; j++) {
      nested472.push({ 
        id: i * j,
        value: i * j / 472,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 472,
          computed: (i + j) * 472
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
    <div className="dummy-component-25" data-seed={seed}>
      <h2>DummyComponent025</h2>
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

export default DummyComponent025;
