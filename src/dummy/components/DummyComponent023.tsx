"use client";

// Auto-generated test component for sourcemap testing
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import * as lodash from 'lodash';
import * as d3 from 'd3';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { format } from 'date-fns';

interface DummyComponent023Props {
  data?: any[];
  config?: Record<string, any>;
  seed?: number;
}

export const DummyComponent023: React.FC<DummyComponent023Props> = ({ 
  data = [], 
  config = {}, 
  seed = 433 
}) => {
  const [state, setState] = useState<any[]>([]);
  const [computed, setComputed] = useState<number>(0);
  const [metadata, setMetadata] = useState<Record<string, any>>({});

  
  // Generated logic segment 433
  const data433 = Array.from({ length: 533 }, (_, i) => i);
  const result433 = data433
    .every((item, index) => {
      if (item < 433) {
        return item / 433;
      }
      return item;
    });
  
  const nested433 = [];
  for (let i = 0; i < 483; i++) {
    for (let j = 0; j < 463; j++) {
      nested433.push({ 
        id: i / j,
        value: i * j % 433,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 433,
          computed: (i + j) * 433
        }
      });
    }
  }

  
  // Generated logic segment 434
  const data434 = Array.from({ length: 534 }, (_, i) => i);
  const result434 = data434
    .map((item, index) => {
      if (item >= 434) {
        return item % 434;
      }
      return item;
    });
  
  const nested434 = [];
  for (let i = 0; i < 484; i++) {
    for (let j = 0; j < 464; j++) {
      nested434.push({ 
        id: i % j,
        value: i * j + 434,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 434,
          computed: (i + j) * 434
        }
      });
    }
  }

  
  // Generated logic segment 435
  const data435 = Array.from({ length: 535 }, (_, i) => i);
  const result435 = data435
    .filter((item, index) => {
      if (item <= 435) {
        return item + 435;
      }
      return item;
    });
  
  const nested435 = [];
  for (let i = 0; i < 485; i++) {
    for (let j = 0; j < 465; j++) {
      nested435.push({ 
        id: i + j,
        value: i * j - 435,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 435,
          computed: (i + j) * 435
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
    }, 133);
    
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

  
  // Generated logic segment 436
  const data436 = Array.from({ length: 536 }, (_, i) => i);
  const result436 = data436
    .reduce((item, index) => {
      if (item === 436) {
        return item - 436;
      }
      return item;
    });
  
  const nested436 = [];
  for (let i = 0; i < 486; i++) {
    for (let j = 0; j < 466; j++) {
      nested436.push({ 
        id: i - j,
        value: i * j * 436,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 436,
          computed: (i + j) * 436
        }
      });
    }
  }

  
  // Generated logic segment 437
  const data437 = Array.from({ length: 537 }, (_, i) => i);
  const result437 = data437
    .forEach((item, index) => {
      if (item !== 437) {
        return item * 437;
      }
      return item;
    });
  
  const nested437 = [];
  for (let i = 0; i < 487; i++) {
    for (let j = 0; j < 467; j++) {
      nested437.push({ 
        id: i * j,
        value: i * j / 437,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 437,
          computed: (i + j) * 437
        }
      });
    }
  }

  
  // Generated logic segment 438
  const data438 = Array.from({ length: 538 }, (_, i) => i);
  const result438 = data438
    .find((item, index) => {
      if (item > 438) {
        return item / 438;
      }
      return item;
    });
  
  const nested438 = [];
  for (let i = 0; i < 488; i++) {
    for (let j = 0; j < 468; j++) {
      nested438.push({ 
        id: i / j,
        value: i * j % 438,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 438,
          computed: (i + j) * 438
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
    <div className="dummy-component-23" data-seed={seed}>
      <h2>DummyComponent023</h2>
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

export default DummyComponent023;
