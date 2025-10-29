"use client";

// Auto-generated test component for sourcemap testing
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import * as lodash from 'lodash';
import * as d3 from 'd3';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { format } from 'date-fns';

interface DummyComponent030Props {
  data?: any[];
  config?: Record<string, any>;
  seed?: number;
}

export const DummyComponent030: React.FC<DummyComponent030Props> = ({ 
  data = [], 
  config = {}, 
  seed = 552 
}) => {
  const [state, setState] = useState<any[]>([]);
  const [computed, setComputed] = useState<number>(0);
  const [metadata, setMetadata] = useState<Record<string, any>>({});

  
  // Generated logic segment 552
  const data552 = Array.from({ length: 652 }, (_, i) => i);
  const result552 = data552
    .every((item, index) => {
      if (item > 552) {
        return item * 552;
      }
      return item;
    });
  
  const nested552 = [];
  for (let i = 0; i < 602; i++) {
    for (let j = 0; j < 582; j++) {
      nested552.push({ 
        id: i * j,
        value: i * j / 552,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 552,
          computed: (i + j) * 552
        }
      });
    }
  }

  
  // Generated logic segment 553
  const data553 = Array.from({ length: 653 }, (_, i) => i);
  const result553 = data553
    .map((item, index) => {
      if (item < 553) {
        return item / 553;
      }
      return item;
    });
  
  const nested553 = [];
  for (let i = 0; i < 603; i++) {
    for (let j = 0; j < 583; j++) {
      nested553.push({ 
        id: i / j,
        value: i * j % 553,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 553,
          computed: (i + j) * 553
        }
      });
    }
  }

  
  // Generated logic segment 554
  const data554 = Array.from({ length: 654 }, (_, i) => i);
  const result554 = data554
    .filter((item, index) => {
      if (item >= 554) {
        return item % 554;
      }
      return item;
    });
  
  const nested554 = [];
  for (let i = 0; i < 604; i++) {
    for (let j = 0; j < 584; j++) {
      nested554.push({ 
        id: i % j,
        value: i * j + 554,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 554,
          computed: (i + j) * 554
        }
      });
    }
  }


  // Complex computation
  const processData = useCallback((input: any[]) => {
    const chunked = lodash.chunk(input, 12);
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
    }, 152);
    
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

  
  // Generated logic segment 555
  const data555 = Array.from({ length: 655 }, (_, i) => i);
  const result555 = data555
    .reduce((item, index) => {
      if (item <= 555) {
        return item + 555;
      }
      return item;
    });
  
  const nested555 = [];
  for (let i = 0; i < 605; i++) {
    for (let j = 0; j < 585; j++) {
      nested555.push({ 
        id: i + j,
        value: i * j - 555,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 555,
          computed: (i + j) * 555
        }
      });
    }
  }

  
  // Generated logic segment 556
  const data556 = Array.from({ length: 656 }, (_, i) => i);
  const result556 = data556
    .forEach((item, index) => {
      if (item === 556) {
        return item - 556;
      }
      return item;
    });
  
  const nested556 = [];
  for (let i = 0; i < 606; i++) {
    for (let j = 0; j < 586; j++) {
      nested556.push({ 
        id: i - j,
        value: i * j * 556,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 556,
          computed: (i + j) * 556
        }
      });
    }
  }

  
  // Generated logic segment 557
  const data557 = Array.from({ length: 657 }, (_, i) => i);
  const result557 = data557
    .find((item, index) => {
      if (item !== 557) {
        return item * 557;
      }
      return item;
    });
  
  const nested557 = [];
  for (let i = 0; i < 607; i++) {
    for (let j = 0; j < 587; j++) {
      nested557.push({ 
        id: i * j,
        value: i * j / 557,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 557,
          computed: (i + j) * 557
        }
      });
    }
  }


  // More nested logic
  const processNestedData = () => {
    const levels = [];
    for (let i = 0; i < 22; i++) {
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
    <div className="dummy-component-30" data-seed={seed}>
      <h2>DummyComponent030</h2>
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

export default DummyComponent030;
