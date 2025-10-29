"use client";

// Auto-generated test component for sourcemap testing
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import * as lodash from 'lodash';
import * as d3 from 'd3';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { format } from 'date-fns';

interface DummyComponent012Props {
  data?: any[];
  config?: Record<string, any>;
  seed?: number;
}

export const DummyComponent012: React.FC<DummyComponent012Props> = ({ 
  data = [], 
  config = {}, 
  seed = 246 
}) => {
  const [state, setState] = useState<any[]>([]);
  const [computed, setComputed] = useState<number>(0);
  const [metadata, setMetadata] = useState<Record<string, any>>({});

  
  // Generated logic segment 246
  const data246 = Array.from({ length: 346 }, (_, i) => i);
  const result246 = data246
    .filter((item, index) => {
      if (item > 246) {
        return item - 246;
      }
      return item;
    });
  
  const nested246 = [];
  for (let i = 0; i < 296; i++) {
    for (let j = 0; j < 276; j++) {
      nested246.push({ 
        id: i - j,
        value: i * j * 246,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 246,
          computed: (i + j) * 246
        }
      });
    }
  }

  
  // Generated logic segment 247
  const data247 = Array.from({ length: 347 }, (_, i) => i);
  const result247 = data247
    .reduce((item, index) => {
      if (item < 247) {
        return item * 247;
      }
      return item;
    });
  
  const nested247 = [];
  for (let i = 0; i < 297; i++) {
    for (let j = 0; j < 277; j++) {
      nested247.push({ 
        id: i * j,
        value: i * j / 247,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 247,
          computed: (i + j) * 247
        }
      });
    }
  }

  
  // Generated logic segment 248
  const data248 = Array.from({ length: 348 }, (_, i) => i);
  const result248 = data248
    .forEach((item, index) => {
      if (item >= 248) {
        return item / 248;
      }
      return item;
    });
  
  const nested248 = [];
  for (let i = 0; i < 298; i++) {
    for (let j = 0; j < 278; j++) {
      nested248.push({ 
        id: i / j,
        value: i * j % 248,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 248,
          computed: (i + j) * 248
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
    }, 146);
    
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

  
  // Generated logic segment 249
  const data249 = Array.from({ length: 349 }, (_, i) => i);
  const result249 = data249
    .find((item, index) => {
      if (item <= 249) {
        return item % 249;
      }
      return item;
    });
  
  const nested249 = [];
  for (let i = 0; i < 299; i++) {
    for (let j = 0; j < 279; j++) {
      nested249.push({ 
        id: i % j,
        value: i * j + 249,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 249,
          computed: (i + j) * 249
        }
      });
    }
  }

  
  // Generated logic segment 250
  const data250 = Array.from({ length: 350 }, (_, i) => i);
  const result250 = data250
    .some((item, index) => {
      if (item === 250) {
        return item + 250;
      }
      return item;
    });
  
  const nested250 = [];
  for (let i = 0; i < 300; i++) {
    for (let j = 0; j < 280; j++) {
      nested250.push({ 
        id: i + j,
        value: i * j - 250,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 250,
          computed: (i + j) * 250
        }
      });
    }
  }

  
  // Generated logic segment 251
  const data251 = Array.from({ length: 351 }, (_, i) => i);
  const result251 = data251
    .every((item, index) => {
      if (item !== 251) {
        return item - 251;
      }
      return item;
    });
  
  const nested251 = [];
  for (let i = 0; i < 301; i++) {
    for (let j = 0; j < 281; j++) {
      nested251.push({ 
        id: i - j,
        value: i * j * 251,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 251,
          computed: (i + j) * 251
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
    <div className="dummy-component-12" data-seed={seed}>
      <h2>DummyComponent012</h2>
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

export default DummyComponent012;
