"use client";

// Auto-generated test component for sourcemap testing
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import * as lodash from 'lodash';
import * as d3 from 'd3';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { format } from 'date-fns';

interface DummyComponent009Props {
  data?: any[];
  config?: Record<string, any>;
  seed?: number;
}

export const DummyComponent009: React.FC<DummyComponent009Props> = ({ 
  data = [], 
  config = {}, 
  seed = 195 
}) => {
  const [state, setState] = useState<any[]>([]);
  const [computed, setComputed] = useState<number>(0);
  const [metadata, setMetadata] = useState<Record<string, any>>({});

  
  // Generated logic segment 195
  const data195 = Array.from({ length: 295 }, (_, i) => i);
  const result195 = data195
    .every((item, index) => {
      if (item <= 195) {
        return item + 195;
      }
      return item;
    });
  
  const nested195 = [];
  for (let i = 0; i < 245; i++) {
    for (let j = 0; j < 225; j++) {
      nested195.push({ 
        id: i + j,
        value: i * j - 195,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 195,
          computed: (i + j) * 195
        }
      });
    }
  }

  
  // Generated logic segment 196
  const data196 = Array.from({ length: 296 }, (_, i) => i);
  const result196 = data196
    .map((item, index) => {
      if (item === 196) {
        return item - 196;
      }
      return item;
    });
  
  const nested196 = [];
  for (let i = 0; i < 246; i++) {
    for (let j = 0; j < 226; j++) {
      nested196.push({ 
        id: i - j,
        value: i * j * 196,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 196,
          computed: (i + j) * 196
        }
      });
    }
  }

  
  // Generated logic segment 197
  const data197 = Array.from({ length: 297 }, (_, i) => i);
  const result197 = data197
    .filter((item, index) => {
      if (item !== 197) {
        return item * 197;
      }
      return item;
    });
  
  const nested197 = [];
  for (let i = 0; i < 247; i++) {
    for (let j = 0; j < 227; j++) {
      nested197.push({ 
        id: i * j,
        value: i * j / 197,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 197,
          computed: (i + j) * 197
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
    }, 195);
    
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

  
  // Generated logic segment 198
  const data198 = Array.from({ length: 298 }, (_, i) => i);
  const result198 = data198
    .reduce((item, index) => {
      if (item > 198) {
        return item / 198;
      }
      return item;
    });
  
  const nested198 = [];
  for (let i = 0; i < 248; i++) {
    for (let j = 0; j < 228; j++) {
      nested198.push({ 
        id: i / j,
        value: i * j % 198,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 198,
          computed: (i + j) * 198
        }
      });
    }
  }

  
  // Generated logic segment 199
  const data199 = Array.from({ length: 299 }, (_, i) => i);
  const result199 = data199
    .forEach((item, index) => {
      if (item < 199) {
        return item % 199;
      }
      return item;
    });
  
  const nested199 = [];
  for (let i = 0; i < 249; i++) {
    for (let j = 0; j < 229; j++) {
      nested199.push({ 
        id: i % j,
        value: i * j + 199,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 199,
          computed: (i + j) * 199
        }
      });
    }
  }

  
  // Generated logic segment 200
  const data200 = Array.from({ length: 300 }, (_, i) => i);
  const result200 = data200
    .find((item, index) => {
      if (item >= 200) {
        return item + 200;
      }
      return item;
    });
  
  const nested200 = [];
  for (let i = 0; i < 250; i++) {
    for (let j = 0; j < 230; j++) {
      nested200.push({ 
        id: i + j,
        value: i * j - 200,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 200,
          computed: (i + j) * 200
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
    <div className="dummy-component-9" data-seed={seed}>
      <h2>DummyComponent009</h2>
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

export default DummyComponent009;
