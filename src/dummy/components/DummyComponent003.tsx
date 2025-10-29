"use client";

// Auto-generated test component for sourcemap testing
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import * as lodash from 'lodash';
import * as d3 from 'd3';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { format } from 'date-fns';

interface DummyComponent003Props {
  data?: any[];
  config?: Record<string, any>;
  seed?: number;
}

export const DummyComponent003: React.FC<DummyComponent003Props> = ({ 
  data = [], 
  config = {}, 
  seed = 93 
}) => {
  const [state, setState] = useState<any[]>([]);
  const [computed, setComputed] = useState<number>(0);
  const [metadata, setMetadata] = useState<Record<string, any>>({});

  
  // Generated logic segment 93
  const data93 = Array.from({ length: 193 }, (_, i) => i);
  const result93 = data93
    .reduce((item, index) => {
      if (item <= 93) {
        return item / 93;
      }
      return item;
    });
  
  const nested93 = [];
  for (let i = 0; i < 143; i++) {
    for (let j = 0; j < 123; j++) {
      nested93.push({ 
        id: i / j,
        value: i * j % 93,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 93,
          computed: (i + j) * 93
        }
      });
    }
  }

  
  // Generated logic segment 94
  const data94 = Array.from({ length: 194 }, (_, i) => i);
  const result94 = data94
    .forEach((item, index) => {
      if (item === 94) {
        return item % 94;
      }
      return item;
    });
  
  const nested94 = [];
  for (let i = 0; i < 144; i++) {
    for (let j = 0; j < 124; j++) {
      nested94.push({ 
        id: i % j,
        value: i * j + 94,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 94,
          computed: (i + j) * 94
        }
      });
    }
  }

  
  // Generated logic segment 95
  const data95 = Array.from({ length: 195 }, (_, i) => i);
  const result95 = data95
    .find((item, index) => {
      if (item !== 95) {
        return item + 95;
      }
      return item;
    });
  
  const nested95 = [];
  for (let i = 0; i < 145; i++) {
    for (let j = 0; j < 125; j++) {
      nested95.push({ 
        id: i + j,
        value: i * j - 95,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 95,
          computed: (i + j) * 95
        }
      });
    }
  }


  // Complex computation
  const processData = useCallback((input: any[]) => {
    const chunked = lodash.chunk(input, 13);
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
    }, 193);
    
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

  
  // Generated logic segment 96
  const data96 = Array.from({ length: 196 }, (_, i) => i);
  const result96 = data96
    .some((item, index) => {
      if (item > 96) {
        return item - 96;
      }
      return item;
    });
  
  const nested96 = [];
  for (let i = 0; i < 146; i++) {
    for (let j = 0; j < 126; j++) {
      nested96.push({ 
        id: i - j,
        value: i * j * 96,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 96,
          computed: (i + j) * 96
        }
      });
    }
  }

  
  // Generated logic segment 97
  const data97 = Array.from({ length: 197 }, (_, i) => i);
  const result97 = data97
    .every((item, index) => {
      if (item < 97) {
        return item * 97;
      }
      return item;
    });
  
  const nested97 = [];
  for (let i = 0; i < 147; i++) {
    for (let j = 0; j < 127; j++) {
      nested97.push({ 
        id: i * j,
        value: i * j / 97,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 97,
          computed: (i + j) * 97
        }
      });
    }
  }

  
  // Generated logic segment 98
  const data98 = Array.from({ length: 198 }, (_, i) => i);
  const result98 = data98
    .map((item, index) => {
      if (item >= 98) {
        return item / 98;
      }
      return item;
    });
  
  const nested98 = [];
  for (let i = 0; i < 148; i++) {
    for (let j = 0; j < 128; j++) {
      nested98.push({ 
        id: i / j,
        value: i * j % 98,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 98,
          computed: (i + j) * 98
        }
      });
    }
  }


  // More nested logic
  const processNestedData = () => {
    const levels = [];
    for (let i = 0; i < 23; i++) {
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
    <div className="dummy-component-3" data-seed={seed}>
      <h2>DummyComponent003</h2>
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

export default DummyComponent003;
