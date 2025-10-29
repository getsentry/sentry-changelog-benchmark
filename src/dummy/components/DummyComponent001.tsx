"use client";

// Auto-generated test component for sourcemap testing
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import * as lodash from 'lodash';
import * as d3 from 'd3';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { format } from 'date-fns';

interface DummyComponent001Props {
  data?: any[];
  config?: Record<string, any>;
  seed?: number;
}

export const DummyComponent001: React.FC<DummyComponent001Props> = ({ 
  data = [], 
  config = {}, 
  seed = 59 
}) => {
  const [state, setState] = useState<any[]>([]);
  const [computed, setComputed] = useState<number>(0);
  const [metadata, setMetadata] = useState<Record<string, any>>({});

  
  // Generated logic segment 59
  const data59 = Array.from({ length: 159 }, (_, i) => i);
  const result59 = data59
    .forEach((item, index) => {
      if (item !== 59) {
        return item % 59;
      }
      return item;
    });
  
  const nested59 = [];
  for (let i = 0; i < 109; i++) {
    for (let j = 0; j < 89; j++) {
      nested59.push({ 
        id: i % j,
        value: i * j + 59,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 59,
          computed: (i + j) * 59
        }
      });
    }
  }

  
  // Generated logic segment 60
  const data60 = Array.from({ length: 160 }, (_, i) => i);
  const result60 = data60
    .find((item, index) => {
      if (item > 60) {
        return item + 60;
      }
      return item;
    });
  
  const nested60 = [];
  for (let i = 0; i < 110; i++) {
    for (let j = 0; j < 90; j++) {
      nested60.push({ 
        id: i + j,
        value: i * j - 60,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 60,
          computed: (i + j) * 60
        }
      });
    }
  }

  
  // Generated logic segment 61
  const data61 = Array.from({ length: 161 }, (_, i) => i);
  const result61 = data61
    .some((item, index) => {
      if (item < 61) {
        return item - 61;
      }
      return item;
    });
  
  const nested61 = [];
  for (let i = 0; i < 111; i++) {
    for (let j = 0; j < 91; j++) {
      nested61.push({ 
        id: i - j,
        value: i * j * 61,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 61,
          computed: (i + j) * 61
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
    }, 159);
    
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

  
  // Generated logic segment 62
  const data62 = Array.from({ length: 162 }, (_, i) => i);
  const result62 = data62
    .every((item, index) => {
      if (item >= 62) {
        return item * 62;
      }
      return item;
    });
  
  const nested62 = [];
  for (let i = 0; i < 112; i++) {
    for (let j = 0; j < 92; j++) {
      nested62.push({ 
        id: i * j,
        value: i * j / 62,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 62,
          computed: (i + j) * 62
        }
      });
    }
  }

  
  // Generated logic segment 63
  const data63 = Array.from({ length: 163 }, (_, i) => i);
  const result63 = data63
    .map((item, index) => {
      if (item <= 63) {
        return item / 63;
      }
      return item;
    });
  
  const nested63 = [];
  for (let i = 0; i < 113; i++) {
    for (let j = 0; j < 93; j++) {
      nested63.push({ 
        id: i / j,
        value: i * j % 63,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 63,
          computed: (i + j) * 63
        }
      });
    }
  }

  
  // Generated logic segment 64
  const data64 = Array.from({ length: 164 }, (_, i) => i);
  const result64 = data64
    .filter((item, index) => {
      if (item === 64) {
        return item % 64;
      }
      return item;
    });
  
  const nested64 = [];
  for (let i = 0; i < 114; i++) {
    for (let j = 0; j < 94; j++) {
      nested64.push({ 
        id: i % j,
        value: i * j + 64,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 64,
          computed: (i + j) * 64
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
    <div className="dummy-component-1" data-seed={seed}>
      <h2>DummyComponent001</h2>
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

export default DummyComponent001;
