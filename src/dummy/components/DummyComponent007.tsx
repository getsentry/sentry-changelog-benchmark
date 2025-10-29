"use client";

// Auto-generated test component for sourcemap testing
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import * as lodash from 'lodash';
import * as d3 from 'd3';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { format } from 'date-fns';

interface DummyComponent007Props {
  data?: any[];
  config?: Record<string, any>;
  seed?: number;
}

export const DummyComponent007: React.FC<DummyComponent007Props> = ({ 
  data = [], 
  config = {}, 
  seed = 161 
}) => {
  const [state, setState] = useState<any[]>([]);
  const [computed, setComputed] = useState<number>(0);
  const [metadata, setMetadata] = useState<Record<string, any>>({});

  
  // Generated logic segment 161
  const data161 = Array.from({ length: 261 }, (_, i) => i);
  const result161 = data161
    .map((item, index) => {
      if (item !== 161) {
        return item - 161;
      }
      return item;
    });
  
  const nested161 = [];
  for (let i = 0; i < 211; i++) {
    for (let j = 0; j < 191; j++) {
      nested161.push({ 
        id: i - j,
        value: i * j * 161,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 161,
          computed: (i + j) * 161
        }
      });
    }
  }

  
  // Generated logic segment 162
  const data162 = Array.from({ length: 262 }, (_, i) => i);
  const result162 = data162
    .filter((item, index) => {
      if (item > 162) {
        return item * 162;
      }
      return item;
    });
  
  const nested162 = [];
  for (let i = 0; i < 212; i++) {
    for (let j = 0; j < 192; j++) {
      nested162.push({ 
        id: i * j,
        value: i * j / 162,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 162,
          computed: (i + j) * 162
        }
      });
    }
  }

  
  // Generated logic segment 163
  const data163 = Array.from({ length: 263 }, (_, i) => i);
  const result163 = data163
    .reduce((item, index) => {
      if (item < 163) {
        return item / 163;
      }
      return item;
    });
  
  const nested163 = [];
  for (let i = 0; i < 213; i++) {
    for (let j = 0; j < 193; j++) {
      nested163.push({ 
        id: i / j,
        value: i * j % 163,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 163,
          computed: (i + j) * 163
        }
      });
    }
  }


  // Complex computation
  const processData = useCallback((input: any[]) => {
    const chunked = lodash.chunk(input, 11);
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
    }, 161);
    
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

  
  // Generated logic segment 164
  const data164 = Array.from({ length: 264 }, (_, i) => i);
  const result164 = data164
    .forEach((item, index) => {
      if (item >= 164) {
        return item % 164;
      }
      return item;
    });
  
  const nested164 = [];
  for (let i = 0; i < 214; i++) {
    for (let j = 0; j < 194; j++) {
      nested164.push({ 
        id: i % j,
        value: i * j + 164,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 164,
          computed: (i + j) * 164
        }
      });
    }
  }

  
  // Generated logic segment 165
  const data165 = Array.from({ length: 265 }, (_, i) => i);
  const result165 = data165
    .find((item, index) => {
      if (item <= 165) {
        return item + 165;
      }
      return item;
    });
  
  const nested165 = [];
  for (let i = 0; i < 215; i++) {
    for (let j = 0; j < 195; j++) {
      nested165.push({ 
        id: i + j,
        value: i * j - 165,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 165,
          computed: (i + j) * 165
        }
      });
    }
  }

  
  // Generated logic segment 166
  const data166 = Array.from({ length: 266 }, (_, i) => i);
  const result166 = data166
    .some((item, index) => {
      if (item === 166) {
        return item - 166;
      }
      return item;
    });
  
  const nested166 = [];
  for (let i = 0; i < 216; i++) {
    for (let j = 0; j < 196; j++) {
      nested166.push({ 
        id: i - j,
        value: i * j * 166,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 166,
          computed: (i + j) * 166
        }
      });
    }
  }


  // More nested logic
  const processNestedData = () => {
    const levels = [];
    for (let i = 0; i < 21; i++) {
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
    <div className="dummy-component-7" data-seed={seed}>
      <h2>DummyComponent007</h2>
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

export default DummyComponent007;
