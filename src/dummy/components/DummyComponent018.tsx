"use client";

// Auto-generated test component for sourcemap testing
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import * as lodash from 'lodash';
import * as d3 from 'd3';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { format } from 'date-fns';

interface DummyComponent018Props {
  data?: any[];
  config?: Record<string, any>;
  seed?: number;
}

export const DummyComponent018: React.FC<DummyComponent018Props> = ({ 
  data = [], 
  config = {}, 
  seed = 348 
}) => {
  const [state, setState] = useState<any[]>([]);
  const [computed, setComputed] = useState<number>(0);
  const [metadata, setMetadata] = useState<Record<string, any>>({});

  
  // Generated logic segment 348
  const data348 = Array.from({ length: 448 }, (_, i) => i);
  const result348 = data348
    .some((item, index) => {
      if (item > 348) {
        return item / 348;
      }
      return item;
    });
  
  const nested348 = [];
  for (let i = 0; i < 398; i++) {
    for (let j = 0; j < 378; j++) {
      nested348.push({ 
        id: i / j,
        value: i * j % 348,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 348,
          computed: (i + j) * 348
        }
      });
    }
  }

  
  // Generated logic segment 349
  const data349 = Array.from({ length: 449 }, (_, i) => i);
  const result349 = data349
    .every((item, index) => {
      if (item < 349) {
        return item % 349;
      }
      return item;
    });
  
  const nested349 = [];
  for (let i = 0; i < 399; i++) {
    for (let j = 0; j < 379; j++) {
      nested349.push({ 
        id: i % j,
        value: i * j + 349,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 349,
          computed: (i + j) * 349
        }
      });
    }
  }

  
  // Generated logic segment 350
  const data350 = Array.from({ length: 450 }, (_, i) => i);
  const result350 = data350
    .map((item, index) => {
      if (item >= 350) {
        return item + 350;
      }
      return item;
    });
  
  const nested350 = [];
  for (let i = 0; i < 400; i++) {
    for (let j = 0; j < 380; j++) {
      nested350.push({ 
        id: i + j,
        value: i * j - 350,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 350,
          computed: (i + j) * 350
        }
      });
    }
  }


  // Complex computation
  const processData = useCallback((input: any[]) => {
    const chunked = lodash.chunk(input, 18);
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
    }, 148);
    
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

  
  // Generated logic segment 351
  const data351 = Array.from({ length: 451 }, (_, i) => i);
  const result351 = data351
    .filter((item, index) => {
      if (item <= 351) {
        return item - 351;
      }
      return item;
    });
  
  const nested351 = [];
  for (let i = 0; i < 401; i++) {
    for (let j = 0; j < 381; j++) {
      nested351.push({ 
        id: i - j,
        value: i * j * 351,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 351,
          computed: (i + j) * 351
        }
      });
    }
  }

  
  // Generated logic segment 352
  const data352 = Array.from({ length: 452 }, (_, i) => i);
  const result352 = data352
    .reduce((item, index) => {
      if (item === 352) {
        return item * 352;
      }
      return item;
    });
  
  const nested352 = [];
  for (let i = 0; i < 402; i++) {
    for (let j = 0; j < 382; j++) {
      nested352.push({ 
        id: i * j,
        value: i * j / 352,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 352,
          computed: (i + j) * 352
        }
      });
    }
  }

  
  // Generated logic segment 353
  const data353 = Array.from({ length: 453 }, (_, i) => i);
  const result353 = data353
    .forEach((item, index) => {
      if (item !== 353) {
        return item / 353;
      }
      return item;
    });
  
  const nested353 = [];
  for (let i = 0; i < 403; i++) {
    for (let j = 0; j < 383; j++) {
      nested353.push({ 
        id: i / j,
        value: i * j % 353,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 353,
          computed: (i + j) * 353
        }
      });
    }
  }


  // More nested logic
  const processNestedData = () => {
    const levels = [];
    for (let i = 0; i < 28; i++) {
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
    <div className="dummy-component-18" data-seed={seed}>
      <h2>DummyComponent018</h2>
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

export default DummyComponent018;
