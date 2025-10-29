"use client";

// Auto-generated test component for sourcemap testing
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import * as lodash from 'lodash';
import * as d3 from 'd3';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { format } from 'date-fns';

interface DummyComponent027Props {
  data?: any[];
  config?: Record<string, any>;
  seed?: number;
}

export const DummyComponent027: React.FC<DummyComponent027Props> = ({ 
  data = [], 
  config = {}, 
  seed = 501 
}) => {
  const [state, setState] = useState<any[]>([]);
  const [computed, setComputed] = useState<number>(0);
  const [metadata, setMetadata] = useState<Record<string, any>>({});

  
  // Generated logic segment 501
  const data501 = Array.from({ length: 601 }, (_, i) => i);
  const result501 = data501
    .find((item, index) => {
      if (item <= 501) {
        return item - 501;
      }
      return item;
    });
  
  const nested501 = [];
  for (let i = 0; i < 551; i++) {
    for (let j = 0; j < 531; j++) {
      nested501.push({ 
        id: i - j,
        value: i * j * 501,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 501,
          computed: (i + j) * 501
        }
      });
    }
  }

  
  // Generated logic segment 502
  const data502 = Array.from({ length: 602 }, (_, i) => i);
  const result502 = data502
    .some((item, index) => {
      if (item === 502) {
        return item * 502;
      }
      return item;
    });
  
  const nested502 = [];
  for (let i = 0; i < 552; i++) {
    for (let j = 0; j < 532; j++) {
      nested502.push({ 
        id: i * j,
        value: i * j / 502,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 502,
          computed: (i + j) * 502
        }
      });
    }
  }

  
  // Generated logic segment 503
  const data503 = Array.from({ length: 603 }, (_, i) => i);
  const result503 = data503
    .every((item, index) => {
      if (item !== 503) {
        return item / 503;
      }
      return item;
    });
  
  const nested503 = [];
  for (let i = 0; i < 553; i++) {
    for (let j = 0; j < 533; j++) {
      nested503.push({ 
        id: i / j,
        value: i * j % 503,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 503,
          computed: (i + j) * 503
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
    }, 101);
    
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

  
  // Generated logic segment 504
  const data504 = Array.from({ length: 604 }, (_, i) => i);
  const result504 = data504
    .map((item, index) => {
      if (item > 504) {
        return item % 504;
      }
      return item;
    });
  
  const nested504 = [];
  for (let i = 0; i < 554; i++) {
    for (let j = 0; j < 534; j++) {
      nested504.push({ 
        id: i % j,
        value: i * j + 504,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 504,
          computed: (i + j) * 504
        }
      });
    }
  }

  
  // Generated logic segment 505
  const data505 = Array.from({ length: 605 }, (_, i) => i);
  const result505 = data505
    .filter((item, index) => {
      if (item < 505) {
        return item + 505;
      }
      return item;
    });
  
  const nested505 = [];
  for (let i = 0; i < 555; i++) {
    for (let j = 0; j < 535; j++) {
      nested505.push({ 
        id: i + j,
        value: i * j - 505,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 505,
          computed: (i + j) * 505
        }
      });
    }
  }

  
  // Generated logic segment 506
  const data506 = Array.from({ length: 606 }, (_, i) => i);
  const result506 = data506
    .reduce((item, index) => {
      if (item >= 506) {
        return item - 506;
      }
      return item;
    });
  
  const nested506 = [];
  for (let i = 0; i < 556; i++) {
    for (let j = 0; j < 536; j++) {
      nested506.push({ 
        id: i - j,
        value: i * j * 506,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 506,
          computed: (i + j) * 506
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
    <div className="dummy-component-27" data-seed={seed}>
      <h2>DummyComponent027</h2>
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

export default DummyComponent027;
