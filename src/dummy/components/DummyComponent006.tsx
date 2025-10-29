"use client";

// Auto-generated test component for sourcemap testing
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import * as lodash from 'lodash';
import * as d3 from 'd3';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { format } from 'date-fns';

interface DummyComponent006Props {
  data?: any[];
  config?: Record<string, any>;
  seed?: number;
}

export const DummyComponent006: React.FC<DummyComponent006Props> = ({ 
  data = [], 
  config = {}, 
  seed = 144 
}) => {
  const [state, setState] = useState<any[]>([]);
  const [computed, setComputed] = useState<number>(0);
  const [metadata, setMetadata] = useState<Record<string, any>>({});

  
  // Generated logic segment 144
  const data144 = Array.from({ length: 244 }, (_, i) => i);
  const result144 = data144
    .find((item, index) => {
      if (item > 144) {
        return item % 144;
      }
      return item;
    });
  
  const nested144 = [];
  for (let i = 0; i < 194; i++) {
    for (let j = 0; j < 174; j++) {
      nested144.push({ 
        id: i % j,
        value: i * j + 144,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 144,
          computed: (i + j) * 144
        }
      });
    }
  }

  
  // Generated logic segment 145
  const data145 = Array.from({ length: 245 }, (_, i) => i);
  const result145 = data145
    .some((item, index) => {
      if (item < 145) {
        return item + 145;
      }
      return item;
    });
  
  const nested145 = [];
  for (let i = 0; i < 195; i++) {
    for (let j = 0; j < 175; j++) {
      nested145.push({ 
        id: i + j,
        value: i * j - 145,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 145,
          computed: (i + j) * 145
        }
      });
    }
  }

  
  // Generated logic segment 146
  const data146 = Array.from({ length: 246 }, (_, i) => i);
  const result146 = data146
    .every((item, index) => {
      if (item >= 146) {
        return item - 146;
      }
      return item;
    });
  
  const nested146 = [];
  for (let i = 0; i < 196; i++) {
    for (let j = 0; j < 176; j++) {
      nested146.push({ 
        id: i - j,
        value: i * j * 146,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 146,
          computed: (i + j) * 146
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
    }, 144);
    
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

  
  // Generated logic segment 147
  const data147 = Array.from({ length: 247 }, (_, i) => i);
  const result147 = data147
    .map((item, index) => {
      if (item <= 147) {
        return item * 147;
      }
      return item;
    });
  
  const nested147 = [];
  for (let i = 0; i < 197; i++) {
    for (let j = 0; j < 177; j++) {
      nested147.push({ 
        id: i * j,
        value: i * j / 147,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 147,
          computed: (i + j) * 147
        }
      });
    }
  }

  
  // Generated logic segment 148
  const data148 = Array.from({ length: 248 }, (_, i) => i);
  const result148 = data148
    .filter((item, index) => {
      if (item === 148) {
        return item / 148;
      }
      return item;
    });
  
  const nested148 = [];
  for (let i = 0; i < 198; i++) {
    for (let j = 0; j < 178; j++) {
      nested148.push({ 
        id: i / j,
        value: i * j % 148,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 148,
          computed: (i + j) * 148
        }
      });
    }
  }

  
  // Generated logic segment 149
  const data149 = Array.from({ length: 249 }, (_, i) => i);
  const result149 = data149
    .reduce((item, index) => {
      if (item !== 149) {
        return item % 149;
      }
      return item;
    });
  
  const nested149 = [];
  for (let i = 0; i < 199; i++) {
    for (let j = 0; j < 179; j++) {
      nested149.push({ 
        id: i % j,
        value: i * j + 149,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 149,
          computed: (i + j) * 149
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
    <div className="dummy-component-6" data-seed={seed}>
      <h2>DummyComponent006</h2>
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

export default DummyComponent006;
