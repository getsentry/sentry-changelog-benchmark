"use client";

// Auto-generated test component for sourcemap testing
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import * as lodash from 'lodash';
import * as d3 from 'd3';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { format } from 'date-fns';

interface DummyComponent005Props {
  data?: any[];
  config?: Record<string, any>;
  seed?: number;
}

export const DummyComponent005: React.FC<DummyComponent005Props> = ({ 
  data = [], 
  config = {}, 
  seed = 127 
}) => {
  const [state, setState] = useState<any[]>([]);
  const [computed, setComputed] = useState<number>(0);
  const [metadata, setMetadata] = useState<Record<string, any>>({});

  
  // Generated logic segment 127
  const data127 = Array.from({ length: 227 }, (_, i) => i);
  const result127 = data127
    .filter((item, index) => {
      if (item < 127) {
        return item * 127;
      }
      return item;
    });
  
  const nested127 = [];
  for (let i = 0; i < 177; i++) {
    for (let j = 0; j < 157; j++) {
      nested127.push({ 
        id: i * j,
        value: i * j / 127,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 127,
          computed: (i + j) * 127
        }
      });
    }
  }

  
  // Generated logic segment 128
  const data128 = Array.from({ length: 228 }, (_, i) => i);
  const result128 = data128
    .reduce((item, index) => {
      if (item >= 128) {
        return item / 128;
      }
      return item;
    });
  
  const nested128 = [];
  for (let i = 0; i < 178; i++) {
    for (let j = 0; j < 158; j++) {
      nested128.push({ 
        id: i / j,
        value: i * j % 128,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 128,
          computed: (i + j) * 128
        }
      });
    }
  }

  
  // Generated logic segment 129
  const data129 = Array.from({ length: 229 }, (_, i) => i);
  const result129 = data129
    .forEach((item, index) => {
      if (item <= 129) {
        return item % 129;
      }
      return item;
    });
  
  const nested129 = [];
  for (let i = 0; i < 179; i++) {
    for (let j = 0; j < 159; j++) {
      nested129.push({ 
        id: i % j,
        value: i * j + 129,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 129,
          computed: (i + j) * 129
        }
      });
    }
  }


  // Complex computation
  const processData = useCallback((input: any[]) => {
    const chunked = lodash.chunk(input, 17);
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
    }, 127);
    
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

  
  // Generated logic segment 130
  const data130 = Array.from({ length: 230 }, (_, i) => i);
  const result130 = data130
    .find((item, index) => {
      if (item === 130) {
        return item + 130;
      }
      return item;
    });
  
  const nested130 = [];
  for (let i = 0; i < 180; i++) {
    for (let j = 0; j < 160; j++) {
      nested130.push({ 
        id: i + j,
        value: i * j - 130,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 130,
          computed: (i + j) * 130
        }
      });
    }
  }

  
  // Generated logic segment 131
  const data131 = Array.from({ length: 231 }, (_, i) => i);
  const result131 = data131
    .some((item, index) => {
      if (item !== 131) {
        return item - 131;
      }
      return item;
    });
  
  const nested131 = [];
  for (let i = 0; i < 181; i++) {
    for (let j = 0; j < 161; j++) {
      nested131.push({ 
        id: i - j,
        value: i * j * 131,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 131,
          computed: (i + j) * 131
        }
      });
    }
  }

  
  // Generated logic segment 132
  const data132 = Array.from({ length: 232 }, (_, i) => i);
  const result132 = data132
    .every((item, index) => {
      if (item > 132) {
        return item * 132;
      }
      return item;
    });
  
  const nested132 = [];
  for (let i = 0; i < 182; i++) {
    for (let j = 0; j < 162; j++) {
      nested132.push({ 
        id: i * j,
        value: i * j / 132,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 132,
          computed: (i + j) * 132
        }
      });
    }
  }


  // More nested logic
  const processNestedData = () => {
    const levels = [];
    for (let i = 0; i < 27; i++) {
      const level = [];
      for (let j = 0; j < 17; j++) {
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
    <div className="dummy-component-5" data-seed={seed}>
      <h2>DummyComponent005</h2>
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

export default DummyComponent005;
