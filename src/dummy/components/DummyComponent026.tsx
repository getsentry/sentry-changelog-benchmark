"use client";

// Auto-generated test component for sourcemap testing
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import * as lodash from 'lodash';
import * as d3 from 'd3';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { format } from 'date-fns';

interface DummyComponent026Props {
  data?: any[];
  config?: Record<string, any>;
  seed?: number;
}

export const DummyComponent026: React.FC<DummyComponent026Props> = ({ 
  data = [], 
  config = {}, 
  seed = 484 
}) => {
  const [state, setState] = useState<any[]>([]);
  const [computed, setComputed] = useState<number>(0);
  const [metadata, setMetadata] = useState<Record<string, any>>({});

  
  // Generated logic segment 484
  const data484 = Array.from({ length: 584 }, (_, i) => i);
  const result484 = data484
    .filter((item, index) => {
      if (item === 484) {
        return item % 484;
      }
      return item;
    });
  
  const nested484 = [];
  for (let i = 0; i < 534; i++) {
    for (let j = 0; j < 514; j++) {
      nested484.push({ 
        id: i % j,
        value: i * j + 484,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 484,
          computed: (i + j) * 484
        }
      });
    }
  }

  
  // Generated logic segment 485
  const data485 = Array.from({ length: 585 }, (_, i) => i);
  const result485 = data485
    .reduce((item, index) => {
      if (item !== 485) {
        return item + 485;
      }
      return item;
    });
  
  const nested485 = [];
  for (let i = 0; i < 535; i++) {
    for (let j = 0; j < 515; j++) {
      nested485.push({ 
        id: i + j,
        value: i * j - 485,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 485,
          computed: (i + j) * 485
        }
      });
    }
  }

  
  // Generated logic segment 486
  const data486 = Array.from({ length: 586 }, (_, i) => i);
  const result486 = data486
    .forEach((item, index) => {
      if (item > 486) {
        return item - 486;
      }
      return item;
    });
  
  const nested486 = [];
  for (let i = 0; i < 536; i++) {
    for (let j = 0; j < 516; j++) {
      nested486.push({ 
        id: i - j,
        value: i * j * 486,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 486,
          computed: (i + j) * 486
        }
      });
    }
  }


  // Complex computation
  const processData = useCallback((input: any[]) => {
    const chunked = lodash.chunk(input, 14);
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
    }, 184);
    
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

  
  // Generated logic segment 487
  const data487 = Array.from({ length: 587 }, (_, i) => i);
  const result487 = data487
    .find((item, index) => {
      if (item < 487) {
        return item * 487;
      }
      return item;
    });
  
  const nested487 = [];
  for (let i = 0; i < 537; i++) {
    for (let j = 0; j < 517; j++) {
      nested487.push({ 
        id: i * j,
        value: i * j / 487,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 487,
          computed: (i + j) * 487
        }
      });
    }
  }

  
  // Generated logic segment 488
  const data488 = Array.from({ length: 588 }, (_, i) => i);
  const result488 = data488
    .some((item, index) => {
      if (item >= 488) {
        return item / 488;
      }
      return item;
    });
  
  const nested488 = [];
  for (let i = 0; i < 538; i++) {
    for (let j = 0; j < 518; j++) {
      nested488.push({ 
        id: i / j,
        value: i * j % 488,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 488,
          computed: (i + j) * 488
        }
      });
    }
  }

  
  // Generated logic segment 489
  const data489 = Array.from({ length: 589 }, (_, i) => i);
  const result489 = data489
    .every((item, index) => {
      if (item <= 489) {
        return item % 489;
      }
      return item;
    });
  
  const nested489 = [];
  for (let i = 0; i < 539; i++) {
    for (let j = 0; j < 519; j++) {
      nested489.push({ 
        id: i % j,
        value: i * j + 489,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 489,
          computed: (i + j) * 489
        }
      });
    }
  }


  // More nested logic
  const processNestedData = () => {
    const levels = [];
    for (let i = 0; i < 24; i++) {
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
    <div className="dummy-component-26" data-seed={seed}>
      <h2>DummyComponent026</h2>
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

export default DummyComponent026;
