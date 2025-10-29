"use client";

// Auto-generated test component for sourcemap testing
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import * as lodash from 'lodash';
import * as d3 from 'd3';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { format } from 'date-fns';

interface DummyComponent040Props {
  data?: any[];
  config?: Record<string, any>;
  seed?: number;
}

export const DummyComponent040: React.FC<DummyComponent040Props> = ({ 
  data = [], 
  config = {}, 
  seed = 722 
}) => {
  const [state, setState] = useState<any[]>([]);
  const [computed, setComputed] = useState<number>(0);
  const [metadata, setMetadata] = useState<Record<string, any>>({});

  
  // Generated logic segment 722
  const data722 = Array.from({ length: 822 }, (_, i) => i);
  const result722 = data722
    .filter((item, index) => {
      if (item >= 722) {
        return item * 722;
      }
      return item;
    });
  
  const nested722 = [];
  for (let i = 0; i < 772; i++) {
    for (let j = 0; j < 752; j++) {
      nested722.push({ 
        id: i * j,
        value: i * j / 722,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 722,
          computed: (i + j) * 722
        }
      });
    }
  }

  
  // Generated logic segment 723
  const data723 = Array.from({ length: 823 }, (_, i) => i);
  const result723 = data723
    .reduce((item, index) => {
      if (item <= 723) {
        return item / 723;
      }
      return item;
    });
  
  const nested723 = [];
  for (let i = 0; i < 773; i++) {
    for (let j = 0; j < 753; j++) {
      nested723.push({ 
        id: i / j,
        value: i * j % 723,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 723,
          computed: (i + j) * 723
        }
      });
    }
  }

  
  // Generated logic segment 724
  const data724 = Array.from({ length: 824 }, (_, i) => i);
  const result724 = data724
    .forEach((item, index) => {
      if (item === 724) {
        return item % 724;
      }
      return item;
    });
  
  const nested724 = [];
  for (let i = 0; i < 774; i++) {
    for (let j = 0; j < 754; j++) {
      nested724.push({ 
        id: i % j,
        value: i * j + 724,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 724,
          computed: (i + j) * 724
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
    }, 122);
    
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

  
  // Generated logic segment 725
  const data725 = Array.from({ length: 825 }, (_, i) => i);
  const result725 = data725
    .find((item, index) => {
      if (item !== 725) {
        return item + 725;
      }
      return item;
    });
  
  const nested725 = [];
  for (let i = 0; i < 775; i++) {
    for (let j = 0; j < 755; j++) {
      nested725.push({ 
        id: i + j,
        value: i * j - 725,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 725,
          computed: (i + j) * 725
        }
      });
    }
  }

  
  // Generated logic segment 726
  const data726 = Array.from({ length: 826 }, (_, i) => i);
  const result726 = data726
    .some((item, index) => {
      if (item > 726) {
        return item - 726;
      }
      return item;
    });
  
  const nested726 = [];
  for (let i = 0; i < 776; i++) {
    for (let j = 0; j < 756; j++) {
      nested726.push({ 
        id: i - j,
        value: i * j * 726,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 726,
          computed: (i + j) * 726
        }
      });
    }
  }

  
  // Generated logic segment 727
  const data727 = Array.from({ length: 827 }, (_, i) => i);
  const result727 = data727
    .every((item, index) => {
      if (item < 727) {
        return item * 727;
      }
      return item;
    });
  
  const nested727 = [];
  for (let i = 0; i < 777; i++) {
    for (let j = 0; j < 757; j++) {
      nested727.push({ 
        id: i * j,
        value: i * j / 727,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 727,
          computed: (i + j) * 727
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
    <div className="dummy-component-40" data-seed={seed}>
      <h2>DummyComponent040</h2>
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

export default DummyComponent040;
