"use client";

// Auto-generated test component for sourcemap testing
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import * as lodash from 'lodash';
import * as d3 from 'd3';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { format } from 'date-fns';

interface DummyComponent008Props {
  data?: any[];
  config?: Record<string, any>;
  seed?: number;
}

export const DummyComponent008: React.FC<DummyComponent008Props> = ({ 
  data = [], 
  config = {}, 
  seed = 178 
}) => {
  const [state, setState] = useState<any[]>([]);
  const [computed, setComputed] = useState<number>(0);
  const [metadata, setMetadata] = useState<Record<string, any>>({});

  
  // Generated logic segment 178
  const data178 = Array.from({ length: 278 }, (_, i) => i);
  const result178 = data178
    .forEach((item, index) => {
      if (item === 178) {
        return item / 178;
      }
      return item;
    });
  
  const nested178 = [];
  for (let i = 0; i < 228; i++) {
    for (let j = 0; j < 208; j++) {
      nested178.push({ 
        id: i / j,
        value: i * j % 178,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 178,
          computed: (i + j) * 178
        }
      });
    }
  }

  
  // Generated logic segment 179
  const data179 = Array.from({ length: 279 }, (_, i) => i);
  const result179 = data179
    .find((item, index) => {
      if (item !== 179) {
        return item % 179;
      }
      return item;
    });
  
  const nested179 = [];
  for (let i = 0; i < 229; i++) {
    for (let j = 0; j < 209; j++) {
      nested179.push({ 
        id: i % j,
        value: i * j + 179,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 179,
          computed: (i + j) * 179
        }
      });
    }
  }

  
  // Generated logic segment 180
  const data180 = Array.from({ length: 280 }, (_, i) => i);
  const result180 = data180
    .some((item, index) => {
      if (item > 180) {
        return item + 180;
      }
      return item;
    });
  
  const nested180 = [];
  for (let i = 0; i < 230; i++) {
    for (let j = 0; j < 210; j++) {
      nested180.push({ 
        id: i + j,
        value: i * j - 180,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 180,
          computed: (i + j) * 180
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
    }, 178);
    
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

  
  // Generated logic segment 181
  const data181 = Array.from({ length: 281 }, (_, i) => i);
  const result181 = data181
    .every((item, index) => {
      if (item < 181) {
        return item - 181;
      }
      return item;
    });
  
  const nested181 = [];
  for (let i = 0; i < 231; i++) {
    for (let j = 0; j < 211; j++) {
      nested181.push({ 
        id: i - j,
        value: i * j * 181,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 181,
          computed: (i + j) * 181
        }
      });
    }
  }

  
  // Generated logic segment 182
  const data182 = Array.from({ length: 282 }, (_, i) => i);
  const result182 = data182
    .map((item, index) => {
      if (item >= 182) {
        return item * 182;
      }
      return item;
    });
  
  const nested182 = [];
  for (let i = 0; i < 232; i++) {
    for (let j = 0; j < 212; j++) {
      nested182.push({ 
        id: i * j,
        value: i * j / 182,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 182,
          computed: (i + j) * 182
        }
      });
    }
  }

  
  // Generated logic segment 183
  const data183 = Array.from({ length: 283 }, (_, i) => i);
  const result183 = data183
    .filter((item, index) => {
      if (item <= 183) {
        return item / 183;
      }
      return item;
    });
  
  const nested183 = [];
  for (let i = 0; i < 233; i++) {
    for (let j = 0; j < 213; j++) {
      nested183.push({ 
        id: i / j,
        value: i * j % 183,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 183,
          computed: (i + j) * 183
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
    <div className="dummy-component-8" data-seed={seed}>
      <h2>DummyComponent008</h2>
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

export default DummyComponent008;
