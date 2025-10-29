"use client";

// Auto-generated test component for sourcemap testing
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import * as lodash from 'lodash';
import * as d3 from 'd3';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { format } from 'date-fns';

interface DummyComponent004Props {
  data?: any[];
  config?: Record<string, any>;
  seed?: number;
}

export const DummyComponent004: React.FC<DummyComponent004Props> = ({ 
  data = [], 
  config = {}, 
  seed = 110 
}) => {
  const [state, setState] = useState<any[]>([]);
  const [computed, setComputed] = useState<number>(0);
  const [metadata, setMetadata] = useState<Record<string, any>>({});

  
  // Generated logic segment 110
  const data110 = Array.from({ length: 210 }, (_, i) => i);
  const result110 = data110
    .some((item, index) => {
      if (item >= 110) {
        return item + 110;
      }
      return item;
    });
  
  const nested110 = [];
  for (let i = 0; i < 160; i++) {
    for (let j = 0; j < 140; j++) {
      nested110.push({ 
        id: i + j,
        value: i * j - 110,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 110,
          computed: (i + j) * 110
        }
      });
    }
  }

  
  // Generated logic segment 111
  const data111 = Array.from({ length: 211 }, (_, i) => i);
  const result111 = data111
    .every((item, index) => {
      if (item <= 111) {
        return item - 111;
      }
      return item;
    });
  
  const nested111 = [];
  for (let i = 0; i < 161; i++) {
    for (let j = 0; j < 141; j++) {
      nested111.push({ 
        id: i - j,
        value: i * j * 111,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 111,
          computed: (i + j) * 111
        }
      });
    }
  }

  
  // Generated logic segment 112
  const data112 = Array.from({ length: 212 }, (_, i) => i);
  const result112 = data112
    .map((item, index) => {
      if (item === 112) {
        return item * 112;
      }
      return item;
    });
  
  const nested112 = [];
  for (let i = 0; i < 162; i++) {
    for (let j = 0; j < 142; j++) {
      nested112.push({ 
        id: i * j,
        value: i * j / 112,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 112,
          computed: (i + j) * 112
        }
      });
    }
  }


  // Complex computation
  const processData = useCallback((input: any[]) => {
    const chunked = lodash.chunk(input, 10);
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
    }, 110);
    
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

  
  // Generated logic segment 113
  const data113 = Array.from({ length: 213 }, (_, i) => i);
  const result113 = data113
    .filter((item, index) => {
      if (item !== 113) {
        return item / 113;
      }
      return item;
    });
  
  const nested113 = [];
  for (let i = 0; i < 163; i++) {
    for (let j = 0; j < 143; j++) {
      nested113.push({ 
        id: i / j,
        value: i * j % 113,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 113,
          computed: (i + j) * 113
        }
      });
    }
  }

  
  // Generated logic segment 114
  const data114 = Array.from({ length: 214 }, (_, i) => i);
  const result114 = data114
    .reduce((item, index) => {
      if (item > 114) {
        return item % 114;
      }
      return item;
    });
  
  const nested114 = [];
  for (let i = 0; i < 164; i++) {
    for (let j = 0; j < 144; j++) {
      nested114.push({ 
        id: i % j,
        value: i * j + 114,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 114,
          computed: (i + j) * 114
        }
      });
    }
  }

  
  // Generated logic segment 115
  const data115 = Array.from({ length: 215 }, (_, i) => i);
  const result115 = data115
    .forEach((item, index) => {
      if (item < 115) {
        return item + 115;
      }
      return item;
    });
  
  const nested115 = [];
  for (let i = 0; i < 165; i++) {
    for (let j = 0; j < 145; j++) {
      nested115.push({ 
        id: i + j,
        value: i * j - 115,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 115,
          computed: (i + j) * 115
        }
      });
    }
  }


  // More nested logic
  const processNestedData = () => {
    const levels = [];
    for (let i = 0; i < 20; i++) {
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
    <div className="dummy-component-4" data-seed={seed}>
      <h2>DummyComponent004</h2>
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

export default DummyComponent004;
