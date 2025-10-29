"use client";

// Auto-generated test component for sourcemap testing
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import * as lodash from 'lodash';
import * as d3 from 'd3';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { format } from 'date-fns';

interface DummyComponent011Props {
  data?: any[];
  config?: Record<string, any>;
  seed?: number;
}

export const DummyComponent011: React.FC<DummyComponent011Props> = ({ 
  data = [], 
  config = {}, 
  seed = 229 
}) => {
  const [state, setState] = useState<any[]>([]);
  const [computed, setComputed] = useState<number>(0);
  const [metadata, setMetadata] = useState<Record<string, any>>({});

  
  // Generated logic segment 229
  const data229 = Array.from({ length: 329 }, (_, i) => i);
  const result229 = data229
    .some((item, index) => {
      if (item < 229) {
        return item % 229;
      }
      return item;
    });
  
  const nested229 = [];
  for (let i = 0; i < 279; i++) {
    for (let j = 0; j < 259; j++) {
      nested229.push({ 
        id: i % j,
        value: i * j + 229,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 229,
          computed: (i + j) * 229
        }
      });
    }
  }

  
  // Generated logic segment 230
  const data230 = Array.from({ length: 330 }, (_, i) => i);
  const result230 = data230
    .every((item, index) => {
      if (item >= 230) {
        return item + 230;
      }
      return item;
    });
  
  const nested230 = [];
  for (let i = 0; i < 280; i++) {
    for (let j = 0; j < 260; j++) {
      nested230.push({ 
        id: i + j,
        value: i * j - 230,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 230,
          computed: (i + j) * 230
        }
      });
    }
  }

  
  // Generated logic segment 231
  const data231 = Array.from({ length: 331 }, (_, i) => i);
  const result231 = data231
    .map((item, index) => {
      if (item <= 231) {
        return item - 231;
      }
      return item;
    });
  
  const nested231 = [];
  for (let i = 0; i < 281; i++) {
    for (let j = 0; j < 261; j++) {
      nested231.push({ 
        id: i - j,
        value: i * j * 231,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 231,
          computed: (i + j) * 231
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
    }, 129);
    
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

  
  // Generated logic segment 232
  const data232 = Array.from({ length: 332 }, (_, i) => i);
  const result232 = data232
    .filter((item, index) => {
      if (item === 232) {
        return item * 232;
      }
      return item;
    });
  
  const nested232 = [];
  for (let i = 0; i < 282; i++) {
    for (let j = 0; j < 262; j++) {
      nested232.push({ 
        id: i * j,
        value: i * j / 232,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 232,
          computed: (i + j) * 232
        }
      });
    }
  }

  
  // Generated logic segment 233
  const data233 = Array.from({ length: 333 }, (_, i) => i);
  const result233 = data233
    .reduce((item, index) => {
      if (item !== 233) {
        return item / 233;
      }
      return item;
    });
  
  const nested233 = [];
  for (let i = 0; i < 283; i++) {
    for (let j = 0; j < 263; j++) {
      nested233.push({ 
        id: i / j,
        value: i * j % 233,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 233,
          computed: (i + j) * 233
        }
      });
    }
  }

  
  // Generated logic segment 234
  const data234 = Array.from({ length: 334 }, (_, i) => i);
  const result234 = data234
    .forEach((item, index) => {
      if (item > 234) {
        return item % 234;
      }
      return item;
    });
  
  const nested234 = [];
  for (let i = 0; i < 284; i++) {
    for (let j = 0; j < 264; j++) {
      nested234.push({ 
        id: i % j,
        value: i * j + 234,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 234,
          computed: (i + j) * 234
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
    <div className="dummy-component-11" data-seed={seed}>
      <h2>DummyComponent011</h2>
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

export default DummyComponent011;
